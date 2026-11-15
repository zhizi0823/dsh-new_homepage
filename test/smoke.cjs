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
  startSession: () => calls.push(['startSession']),
  pickDirectory: async () => 'C:/picked/dir',
};
const fakeSessions = { open: (id) => calls.push(['open', id]) };

const React = {
  createElement: (type, props, ...children) => ({ type, props: { ...(props || {}), children } }),
  useState: (initial) => [typeof initial === 'function' ? initial() : initial, () => {}],
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
  useWorkspaces: (selector) => selector({}),
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

const tree = main.component(props);
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
  if (node.type === 'button' && node.props && node.props.className === 'obs-session') sessionButtons.push(node);
  walk(node.props && node.props.children);
})(tree);
console.log('session rows:', sessionButtons.length);
if (sessionButtons.length !== 2) throw new Error('expected 2 session rows, got ' + sessionButtons.length);
const oldest = sessionButtons.find((button) => button.props.title === '旧会话：整理报销单');
if (!oldest) throw new Error('older session row missing');
if (sessionButtons[0].props.title !== '新会话：观测台首页') throw new Error('rows are not sorted by recency');
oldest.props.onClick();
if (!calls.some((call) => call[0] === 'open' && call[1] === 's-old')) throw new Error('session click did not open the session');
if (!calls.some((call) => call[0] === 'selectPanel' && call[1] === 'conversation')) throw new Error('session click did not switch panels');

// Empty list renders the empty state instead of rows.
const emptyTree = main.component({
  useSessions: (selector) => selector({ ids: [], byId: {}, current: undefined, phase: 'ready', subagentsByParent: {}, jobsBySession: {}, currentAddress: undefined }),
});
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

console.log('calls:', JSON.stringify(calls.slice(0, 8)));
console.log('ALL OK');
