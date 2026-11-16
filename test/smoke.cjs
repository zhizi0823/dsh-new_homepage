// Throwaway smoke test for @local/observatory (home edition): loads the Client
// module with a tiny React stand-in, renders the page once, checks the wiring.
const fs = require('node:fs');
const path = require('node:path');

let loaded = null;
const listeners = {};
const timers = [];
const calls = [];
const setThemes = [];

const fakeTheme = {
  getTheme: () => ({
    preference: 'system',
    fontSizes: { body: 14 },
    fontFamilies: {},
    active: { id: 'light', colorScheme: 'light', tokens: {} },
    themes: [],
    revision: 1,
  }),
  setTheme: (id) => setThemes.push(id),
  overrideTokens: (source, tokens) => {
    calls.push(['overrideTokens', source, tokens]);
    return () => calls.push(['overrideDisposed', source]);
  },
};

const fakeLocale = {
  bind: () => (key) => key,
  subscribe: () => () => {},
  getSnapshot: () => ({ active: 'zh-CN', locales: [{ id: 'zh-CN', label: '中文' }, { id: 'en', label: 'English' }], revision: 1 }),
  register: () => () => {},
  setLocale: (id) => calls.push(['setLocale', id]),
};

const fakeLayout = {
  selectPanel: (id) => calls.push(['selectPanel', id]),
  toggleSidebar: () => calls.push(['toggleSidebar']),
  openRightbar: (a, b) => calls.push(['openRightbar', a, b]),
};
const fakeWorkspace = {
  startSession: (workspaceId) => calls.push(['startSession', workspaceId]),
  pickDirectory: async () => 'C:/picked/dir',
  openSession: (id) => calls.push(['openSession', id]),
};
// The sessions service has no open(): picking a Session must go through uiWorkspace.
// create() is the one sessions-service call we do use, to build the new blank explicitly.
const fakeSessions = {
  open: () => { throw new Error('sessions.open must not be used'); },
  create: async (opts) => {
    calls.push(['create', opts]);
    return 's-new-id';
  },
};

// Minimal stateful React stand-in: one hook array for the page component, and
// a render loop that repeats passes until a click's setState settles.
const hookState = [];
let hookCursor = 0;
let pendingState = false;

const React = {
  createElement: (type, props, ...children) => ({ type, props: { ...(props || {}), children } }),
  useState(initial) {
    const index = hookCursor++;
    if (hookState.length <= index) hookState[index] = typeof initial === 'function' ? initial() : initial;
    return [
      hookState[index],
      (next) => {
        hookState[index] = typeof next === 'function' ? next(hookState[index]) : next;
        pendingState = true;
      },
    ];
  },
  useEffect: () => undefined,
  useRef: () => ({ current: null }),
  useSyncExternalStore: (_subscribe, getSnapshot) => getSnapshot(),
};

global.window = {
  __ModuleLoader__: { load: (module) => { loaded = module; } },
  addEventListener: (name, fn) => { (listeners[name] = listeners[name] || []).push(fn); },
  removeEventListener: () => {},
  innerWidth: 1440,
  innerHeight: 900,
  devicePixelRatio: 2,
  matchMedia: () => ({ matches: false }),
  getComputedStyle: () => ({ color: 'rgb(1, 2, 3)' }),
  requestAnimationFrame: () => 1,
  cancelAnimationFrame: () => {},
  setInterval: () => 1,
  clearInterval: () => {},
  setTimeout: (fn, ms) => { timers.push({ fn, ms }); return timers.length; },
  clearTimeout: () => {},
};
global.document = { addEventListener: () => {}, removeEventListener: () => {}, visibilityState: 'visible' };
global.navigator = { onLine: true };

const clientPath = path.join(__dirname, '..', 'client.js');
new Function('window', 'document', 'navigator', 'require', fs.readFileSync(clientPath, 'utf8'))(
  global.window,
  global.document,
  global.navigator,
  (name) => {
    if (name === 'react') return React;
    throw new Error('unexpected require: ' + name);
  },
);

if (!loaded || loaded.id !== '@local/observatory') throw new Error('module not registered by loader');

const registrations = [];
const services = { locale: fakeLocale, theme: fakeTheme, layout: fakeLayout, uiWorkspace: fakeWorkspace, sessions: fakeSessions };
const ctx = {
  get: (key) => services[key],
  effect: (fn) => {
    const disposer = fn();
    return typeof disposer === 'function' ? disposer : () => {};
  },
  slots: {
    inject: (_key, callback) => callback(),
    register: (options, component) => {
      registrations.push({ options, component });
      return () => {};
    },
  },
};

loaded.factory((name) => {
  if (name === 'react') return React;
  throw new Error('unexpected require: ' + name);
}).apply(ctx);

const main = registrations.find((item) => item.options.name === 'main');
if (!main || main.options.key !== 'observatory') throw new Error('main panel registration missing');
const nav = registrations.find((item) => item.options.name === 'sidebar.panellist');
if (!nav || nav.options.id !== 'observatory') throw new Error('panellist registration missing');

const listState = {
  ids: ['s-old', 's-new'],
  byId: {
    's-old': { id: 's-old', displayTitle: '旧会话：整理报销单', cwd: 'C:\\work\\billing', running: false, blank: false, updatedAt: Date.now() - 7200e3 },
    's-new': { id: 's-new', displayTitle: '新会话：观测台首页', cwd: 'C:\\work\\harness', running: true, blank: false, updatedAt: Date.now() - 30e3 },
  },
  current: 's-new',
  phase: 'ready',
  subagentsByParent: {},
  jobsBySession: {},
  currentAddress: undefined,
};

const props = {
  useSessions: (selector) => selector(listState),
  useWorkspaces: (selector) =>
    selector({
      workspaces: [
        { workspaceId: 'w-a', title: '工作区 A', path: 'C:/work/a' },
        { workspaceId: 'w-b', title: '工作区 B', path: 'C:/work/b' },
      ],
    }),
};

function render(node) {
  if (node === null || node === undefined || node === false || node === true) return '';
  if (typeof node === 'string' || typeof node === 'number') return String(node);
  if (Array.isArray(node)) return node.map(render).join('');
  const { type, props: nodeProps } = node;
  if (typeof type === 'function') return render(type(nodeProps || {}));
  if (typeof type === 'string') return render(nodeProps && nodeProps.children);
  return '';
}

function paint(pageProps, reset) {
  if (reset) hookState.length = 0;
  for (let pass = 0; pass < 8; pass += 1) {
    hookCursor = 0;
    pendingState = false;
    const candidate = main.component(pageProps);
    if (!pendingState) return candidate;
  }
  throw new Error('render did not settle');
}

let tree = paint(props, true);
const text = render(tree).replace(/\s+/g, ' ');

for (const needle of ['观测台', '最近会话', '驾驶台', '调色台', '新会话：观测台首页', '旧会话：整理报销单', '回到当前会话', '2 个会话']) {
  if (!text.includes(needle)) throw new Error('missing text: ' + needle);
}
if (!text.includes('1440×900')) throw new Error('viewport cell not rendered');
if (!text.includes('心情插件未连接')) throw new Error('mood card offline branch missing');
if (text.includes('还没有会话')) throw new Error('empty state rendered despite sessions');

// Session rows are clickable and open the conversation.
const sessionButtons = [];
(function walk(node) {
  if (!node || typeof node !== 'object') return;
  if (Array.isArray(node)) { node.forEach(walk); return; }
  if (node.props && node.props.className === 'obs-session') sessionButtons.push(node);
  walk(node.props && node.props.children);
})(tree);
console.log('session rows:', sessionButtons.length);
if (sessionButtons.length !== 2) throw new Error('expected 2 session rows, got ' + sessionButtons.length);
const oldest = sessionButtons.find((button) => button.props.title === '旧会话：整理报销单');
if (!oldest) throw new Error('older session row missing');
if (sessionButtons[0].props.title !== '新会话：观测台首页') throw new Error('rows are not sorted by recency');
const conversationPanels = () => calls.filter((call) => call[0] === 'selectPanel' && call[1] === 'conversation').length;
const beforeOpen = conversationPanels();
oldest.props.onClick();
if (!calls.some((call) => call[0] === 'openSession' && call[1] === 's-old')) {
  throw new Error('session click did not call uiWorkspace.openSession');
}
// uiWorkspace already shows the Conversation; selectPanel() would abort its navigation.
if (conversationPanels() !== beforeOpen) throw new Error('session click forced selectPanel(conversation)');

// Empty list renders the empty state instead of rows.
const emptyTree = paint({
  useSessions: (selector) => selector({ ids: [], byId: {}, current: undefined, phase: 'ready', subagentsByParent: {}, jobsBySession: {}, currentAddress: undefined }),
  useWorkspaces: props.useWorkspaces,
}, true);
const emptyText = render(emptyTree);
if (!emptyText.includes('还没有会话')) throw new Error('empty state missing for an empty list');

// Nav icon still honours its owner props.
const navSvg = (nav.component({ size: 20, active: true }).props.children || [])[0];
if (!navSvg || navSvg.type !== 'svg') throw new Error('nav icon did not render an svg');

// Shortcut dispatch.
const keyHandlers = listeners.keydown || [];
if (keyHandlers.length !== 1) throw new Error('expected one keydown listener');
let prevented = false;
keyHandlers[0]({ ctrlKey: true, shiftKey: true, key: 'O', preventDefault: () => { prevented = true; } });
if (!prevented || !calls.some((call) => call[0] === 'selectPanel' && call[1] === 'observatory')) {
  throw new Error('shortcut did not select the panel');
}

// Boot lands on the observatory.
const boot = timers.find((timer) => timer.ms === 400);
if (!boot) throw new Error('boot navigation timer missing');
boot.fn();
if (!calls.some((call) => call[0] === 'selectPanel' && call[1] === 'observatory')) {
  throw new Error('boot did not select the observatory panel');
}

// Theme cycling still writes a real preference.
const themeButton = (function find(node) {
  if (!node || typeof node !== 'object') return null;
  if (Array.isArray(node)) {
    for (const item of node) {
      const found = find(item);
      if (found) return found;
    }
    return null;
  }
  if (node.type === 'button' && node.props && String(render(node.props.children)).includes('切换主题')) return node;
  return find(node.props && node.props.children);
})(tree);
if (!themeButton) throw new Error('theme action missing');
themeButton.props.onClick();
if (!setThemes.includes('light')) throw new Error('theme cycling did not call setTheme');

// The right-panel action is gone on purpose: opening it without rightbar
// content leaves an empty column. The left column toggle must work instead.
const findButton = (label) => (function find(node) {
  if (!node || typeof node !== 'object') return null;
  if (Array.isArray(node)) {
    for (const item of node) {
      const found = find(item);
      if (found) return found;
    }
    return null;
  }
  if (node.type === 'button' && node.props && String(render(node.props.children)).includes(label)) return node;
  return find(node.props && node.props.children);
})(tree);

if (findButton('打开右栏')) throw new Error('right panel action should be removed');
const sidebarButton = findButton('收起 / 展开左栏');
if (!sidebarButton) throw new Error('left column toggle missing');
sidebarButton.props.onClick();
if (!calls.some((call) => call[0] === 'toggleSidebar')) {
  throw new Error('left column toggle did not call toggleSidebar');
}

const findClass = (className) => (function find(node) {
  if (!node || typeof node !== 'object') return null;
  if (Array.isArray(node)) {
    for (const item of node) {
      const found = find(item);
      if (found) return found;
    }
    return null;
  }
  if (node.type && node.props && node.props.className === className) return node;
  return find(node.props && node.props.children);
})(tree);

// Pinning moves a session above the unpinned ones.
tree = paint(props, true);
const pinButton = findClass('obs-pin');
if (!pinButton) throw new Error('pin button missing on session rows');
pinButton.props.onClick({ stopPropagation() {} });
tree = paint(props, false);
const firstRow = (function find(node) {
  if (!node || typeof node !== 'object') return null;
  if (Array.isArray(node)) {
    for (const item of node) {
      const found = find(item);
      if (found) return found;
    }
    return null;
  }
  if (node.props && node.props.className === 'obs-session') return node;
  return find(node.props && node.props.children);
})(tree);
if (!firstRow || firstRow.props['data-pinned'] !== 'true') throw new Error('pinned session did not move to the top');

// The jump palette opens from the deck, filters, and runs the chosen entry.
const findInside = (root, predicate) => (function find(node) {
  if (!node || typeof node !== 'object') return null;
  if (Array.isArray(node)) {
    for (const item of node) {
      const found = find(item);
      if (found) return found;
    }
    return null;
  }
  if (node.props && predicate(node)) return node;
  return find(node.props && node.props.children);
})(root);
const findPaletteInput = () => {
  const card = findInside(tree, (node) => node.props.className === 'obs-picker obs-palette');
  if (!card) return null;
  return findInside(card, (node) => node.type === 'input');
};

tree = paint(props, true);
const paletteButton = findButton('跳转');
if (!paletteButton) throw new Error('palette action missing');
paletteButton.props.onClick();
tree = paint(props, false);
if (!render(tree).includes('输入以筛选')) throw new Error('palette did not open');
const paletteInput = findPaletteInput();
if (!paletteInput) throw new Error('palette input missing');
paletteInput.props.onChange({ target: { value: '旧会话' } });
tree = paint(props, false);
const filteredInput = findPaletteInput();
if (!filteredInput) throw new Error('palette input lost after filtering');
const beforePaletteRun = calls.filter((call) => call[0] === 'openSession').length;
filteredInput.props.onKeyDown({ key: 'Enter', preventDefault() {} });
tree = paint(props, false);
if (calls.filter((call) => call[0] === 'openSession').length <= beforePaletteRun) {
  throw new Error('palette Enter did not open the filtered session');
}

// The two preference toggles flip their labels.
tree = paint(props, true);
const tintButton = findButton('跟随心情');
if (!tintButton) throw new Error('mood tint toggle missing');
tintButton.props.onClick();
tree = paint(props, false);
if (!render(tree).includes('跟随心情：开')) throw new Error('mood tint toggle did not flip');

const autoLandButton = findButton('开机落在这里');
if (!autoLandButton) throw new Error('auto-land toggle missing');
autoLandButton.props.onClick();
tree = paint(props, false);
if (!render(tree).includes('开机落在这里：关')) throw new Error('auto-land toggle did not flip');

// New session must ask for a workspace first, then start in it.
tree = paint(props, true);
const newButton = findButton('新建会话');
if (!newButton) throw new Error('new session action missing');
newButton.props.onClick();
tree = paint(props, false);
if (!render(tree).includes('先选一个工作区')) throw new Error('workspace picker did not open');
if (!render(tree).includes('工作区 A')) throw new Error('picker did not list workspaces');

const workspaceItem = (function find(node) {
  if (!node || typeof node !== 'object') return null;
  if (Array.isArray(node)) {
    for (const item of node) {
      const found = find(item);
      if (found) return found;
    }
    return null;
  }
  if (
    node.type === 'button' &&
    node.props &&
    node.props.className === 'obs-picker-item' &&
    String(render(node.props.children)).includes('工作区 A')
  ) {
    return node;
  }
  return find(node.props && node.props.children);
})(tree);
if (!workspaceItem) throw new Error('workspace item missing');
const beforeChoose = conversationPanels();

// chooseWorkspace awaits sessions.create() and then reveals via openSession().
(async () => {
  await workspaceItem.props.onClick();
  tree = paint(props, false);

  const created = calls.find((call) => call[0] === 'create');
  if (!created || created[1].workspaceId !== 'w-a') throw new Error('workspace choice did not create a session in it');
  if (!calls.some((call) => call[0] === 'openSession' && call[1] === 's-new-id')) {
    throw new Error('created session was not revealed through openSession');
  }
  if (calls.some((call) => call[0] === 'startSession')) throw new Error('startSession must not be used when create() is available');
  // openSession reveals the Conversation itself; a selectPanel() would abort it.
  if (conversationPanels() !== beforeChoose) throw new Error('choosing a workspace forced selectPanel(conversation)');
  if (render(tree).includes('先选一个工作区')) throw new Error('picker stayed open after choosing');

  console.log('calls:', JSON.stringify(calls.slice(0, 8)));
  console.log('ALL OK');
})();
