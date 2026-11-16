window.__ModuleLoader__.load({
  id: '@local/observatory',
  factory(require) {
    const React = require('react');
    const h = React.createElement;

    const NS = 'plugin.observatory';
    const VERSION = '1.2.0';

    const ZH = {
      title: '观测台',
      subtitle: '会话与运行状态',
      live: '实时',
      nav: '观测台',
      k_theme: '主题',
      k_lang: '语言',
      k_viewport: '视口',
      k_motion: '动效',
      k_network: '网络',
      k_vis: '可见性',
      pref_system: '跟随系统',
      pref_light: '浅色',
      pref_dark: '深色',
      motion_full: '完整',
      motion_reduced: '已减弱',
      net_online: '在线',
      net_offline: '离线',
      vis_visible: '前台',
      vis_hidden: '后台',
      greet_night: '夜深了',
      greet_morning: '早上好',
      greet_afternoon: '下午好',
      greet_evening: '晚上好',
      recent: '最近会话',
      filter: '筛选会话…',
      empty_title: '还没有会话',
      empty_hint: '点下面的「新建会话」，或从左侧选一个已有的开始。',
      count: '个会话',
      resume: '回到当前会话',
      running: '进行中',
      done: '有新回复',
      just_now: '刚刚',
      minutes_ago: '分钟前',
      hours_ago: '小时前',
      yesterday: '昨天',
      deck: '驾驶台',
      act_new: '新建会话',
      act_new_d: '选工作区后开始',
      act_folder: '打开文件夹',
      act_folder_d: '浏览并选中一个目录',
      act_back: '回到对话',
      act_back_d: '切回会话主界面',
      act_sidebar: '收起 / 展开左栏',
      act_sidebar_d: '会话列表那一列',
      sidebar_toggled: '左栏已切换',
      act_theme: '切换主题',
      act_theme_d: '跟随系统 / 浅色 / 深色 轮换',
      act_lang: '切换语言',
      act_lang_d: '在已注册语言之间轮换',
      studio: '调色台',
      studio_hint: '选一个强调色，可先预览；「试用到界面」是临时令牌层，离开本页即还原。',
      studio_follow: '跟随主题',
      studio_try: '试用到界面',
      studio_trying: '试用中 · 点击还原',
      preview: '强调色预览',
      mood_title: '心情',
      mood_offline: '心情插件未连接',
      no_match: '没有匹配的会话',
      data_offline: '会话数据未就绪',
      mode_workspace: '工作区',
      mode_session: '会话',
      picker_title: '新建会话',
      picker_hint: '先选一个工作区',
      picker_cancel: '取消',
      picker_empty: '还没有工作区',
      picker_empty_hint: '先在左侧打开或创建一个工作区。',
      pin: '置顶',
      unpin: '取消置顶',
      palette_open: '跳转',
      palette_open_d: '搜索会话与动作（Ctrl+K）',
      palette_title: '跳转',
      palette_hint: '输入以筛选，↑↓ 选择，回车打开',
      palette_empty: '没有匹配项',
      tint_on: '跟随心情：开',
      tint_off: '跟随心情：关',
      autoland_on: '开机落在这里：开',
      autoland_off: '开机落在这里：关',
      spark_hint: '最近心情',
      folder_picked: '已选择目录：',
      folder_canceled: '已取消选择',
      shortcut: '快捷键',
      version: '版本',
    };

    const EN = {
      title: 'Observatory',
      subtitle: 'Sessions and runtime state',
      live: 'Live',
      nav: 'Observatory',
      k_theme: 'Theme',
      k_lang: 'Language',
      k_viewport: 'Viewport',
      k_motion: 'Motion',
      k_network: 'Network',
      k_vis: 'Visibility',
      pref_system: 'System',
      pref_light: 'Light',
      pref_dark: 'Dark',
      motion_full: 'Full',
      motion_reduced: 'Reduced',
      net_online: 'Online',
      net_offline: 'Offline',
      vis_visible: 'Foreground',
      vis_hidden: 'Background',
      greet_night: 'Late night',
      greet_morning: 'Good morning',
      greet_afternoon: 'Good afternoon',
      greet_evening: 'Good evening',
      recent: 'Recent sessions',
      filter: 'Filter sessions…',
      empty_title: 'No sessions yet',
      empty_hint: 'Start a new session below, or pick one from the sidebar.',
      count: 'sessions',
      resume: 'Back to current session',
      running: 'Running',
      done: 'New reply',
      just_now: 'just now',
      minutes_ago: 'min ago',
      hours_ago: 'h ago',
      yesterday: 'yesterday',
      deck: 'Deck',
      act_new: 'New session',
      act_new_d: 'Pick a workspace to begin',
      act_folder: 'Open folder',
      act_folder_d: 'Browse and pick a directory',
      act_back: 'Back to conversation',
      act_back_d: 'Return to the session view',
      act_sidebar: 'Toggle left column',
      act_sidebar_d: 'The session list column',
      sidebar_toggled: 'Left column toggled',
      act_theme: 'Cycle theme',
      act_theme_d: 'Rotate system / light / dark',
      act_lang: 'Cycle language',
      act_lang_d: 'Rotate through registered locales',
      studio: 'Accent studio',
      studio_hint: 'Pick an accent and preview it. "Try on interface" is a temporary token layer that reverts when you leave this page.',
      studio_follow: 'Follow theme',
      studio_try: 'Try on interface',
      studio_trying: 'Trying · click to revert',
      preview: 'Accent preview',
      mood_title: 'Mood',
      mood_offline: 'Mood plugin not connected',
      no_match: 'No matching sessions',
      data_offline: 'Session data unavailable',
      mode_workspace: 'workspace',
      mode_session: 'session',
      picker_title: 'New session',
      picker_hint: 'Pick a workspace first',
      picker_cancel: 'Cancel',
      picker_empty: 'No workspaces yet',
      picker_empty_hint: 'Open or create one from the left column first.',
      pin: 'Pin',
      unpin: 'Unpin',
      palette_open: 'Jump to',
      palette_open_d: 'Search sessions and actions (Ctrl+K)',
      palette_title: 'Jump to',
      palette_hint: 'Type to filter, ↑↓ to move, Enter to open',
      palette_empty: 'No matches',
      tint_on: 'Mood tint: on',
      tint_off: 'Mood tint: off',
      autoland_on: 'Land here on start: on',
      autoland_off: 'Land here on start: off',
      spark_hint: 'Recent mood',
      folder_picked: 'Picked directory: ',
      folder_canceled: 'Selection cancelled',
      shortcut: 'Shortcut',
      version: 'Version',
    };

    const EMPTY_SNAPSHOT = { active: 'zh-CN', locales: [], revision: 0 };

    const ACCENTS = [
      { id: 'aurora', zh: '极光', en: 'Aurora', light: '#12766b', dark: '#4fd1c5' },
      { id: 'ember', zh: '余烬', en: 'Ember', light: '#b4451f', dark: '#ff8f62' },
      { id: 'violet', zh: '紫罗兰', en: 'Violet', light: '#5b3fbf', dark: '#b39dff' },
      { id: 'ocean', zh: '深海', en: 'Ocean', light: '#1f5fa8', dark: '#6fb6ff' },
      { id: 'gold', zh: '鎏金', en: 'Gold', light: '#8a6a12', dark: '#e8c45a' },
      { id: 'rose', zh: '玫红', en: 'Rose', light: '#a83259', dark: '#ff8fb0' },
    ];

    const CSS = `
.obs-root { position: relative; height: 100%; overflow: hidden; display: flex; flex-direction: column; background: var(--dsw-alias-bg-base); color: var(--dsw-alias-label-primary); }
.obs-inner { flex: 1 1 auto; min-height: 0; width: 100%; max-width: 1220px; margin: 0 auto; box-sizing: border-box; padding: 12px 16px; display: flex; flex-direction: column; gap: 8px; }
.obs-head { flex: 0 0 auto; display: flex; align-items: center; gap: 8px; }
.obs-h1 { margin: 0; font-size: 17px; font-weight: 650; letter-spacing: .005em; }
.obs-tag { font-size: 11px; color: var(--dsw-alias-label-secondary); border: 1px solid var(--dsw-alias-border-l1); border-radius: 999px; padding: 1px 7px; }
.obs-live { display: inline-flex; align-items: center; gap: 6px; font-size: 11px; color: var(--dsw-alias-label-secondary); }
.obs-live::before { content: ''; width: 6px; height: 6px; border-radius: 50%; background: var(--dsw-alias-state-success-primary); }
.obs-hero { position: relative; flex: 0 0 auto; overflow: hidden; border: 1px solid var(--dsw-alias-border-l1); border-radius: 12px; padding: 9px 13px; background: linear-gradient(150deg, var(--dsw-alias-bg-layer-1), var(--dsw-alias-bg-layer-2)); }
.obs-canvas { position: absolute; inset: 0; width: 100%; height: 100%; color: var(--dsw-alias-brand-primary); opacity: .85; pointer-events: none; }
.obs-hero-inner { position: relative; display: flex; align-items: center; gap: 12px; min-width: 0; }
.obs-greet { font-size: 14px; font-weight: 640; }
.obs-time { font-size: 20px; font-weight: 620; line-height: 1.05; letter-spacing: .01em; font-variant-numeric: tabular-nums; }
.obs-date { margin-top: 2px; font-size: 11px; color: var(--dsw-alias-label-secondary); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.obs-matrix { display: grid; grid-template-columns: repeat(6, minmax(0, 1fr)); gap: 5px; flex: 1 1 auto; min-width: 0; }
.obs-home { flex: 1 1 auto; min-height: 0; display: grid; grid-template-columns: minmax(0, 1.55fr) minmax(0, 1fr); gap: 8px; }
.obs-col { display: flex; flex-direction: column; gap: 8px; min-height: 0; min-width: 0; }
.obs-card { border: 1px solid var(--dsw-alias-border-l1); border-radius: 12px; background: var(--dsw-alias-bg-layer-1); padding: 10px 12px; min-width: 0; min-height: 0; }
.obs-card--grow { flex: 1 1 auto; display: flex; flex-direction: column; overflow: hidden; }
.obs-card-head { display: flex; align-items: center; justify-content: space-between; gap: 8px; margin-bottom: 6px; flex: 0 0 auto; }
.obs-h2 { margin: 0; font-size: 10px; letter-spacing: .1em; text-transform: uppercase; color: var(--dsw-alias-label-secondary); }
.obs-count { font-size: 10px; color: var(--dsw-alias-label-secondary); font-variant-numeric: tabular-nums; }
.obs-input { width: 100%; box-sizing: border-box; padding: 5px 8px; border-radius: 8px; border: 1px solid var(--dsw-alias-border-l1); background: var(--dsw-alias-bg-base); color: inherit; font: inherit; font-size: 11.5px; margin-bottom: 6px; flex: 0 0 auto; }
.obs-input:focus { outline: 2px solid var(--dsw-alias-brand-primary); outline-offset: 1px; border-color: transparent; }
.obs-sessions { display: flex; flex-direction: column; justify-content: flex-start; gap: 1px; flex: 1 1 auto; min-height: 0; overflow-y: auto; overflow-x: hidden; scrollbar-width: thin; }
.obs-session { display: flex; align-items: center; gap: 8px; width: 100%; text-align: left; padding: 5px 8px; border-radius: 8px; border: 1px solid transparent; background: transparent; color: inherit; font: inherit; cursor: pointer; transition: background .12s ease, border-color .12s ease; flex: 0 0 auto; min-height: 34px; }
.obs-session:hover { background: var(--dsw-alias-bg-layer-2); border-color: var(--dsw-alias-border-l1); }
.obs-session:focus-visible { outline: 2px solid var(--dsw-alias-brand-primary); outline-offset: -1px; }
.obs-session[data-current="true"] { border-color: var(--dsw-alias-brand-primary); }
.obs-dot { width: 6px; height: 6px; border-radius: 50%; flex: 0 0 auto; background: var(--dsw-alias-state-idle-primary); opacity: .55; }
.obs-dot[data-running="true"] { background: var(--dsw-alias-state-success-primary); opacity: 1; }
.obs-dot[data-completed="true"] { background: var(--dsw-alias-brand-primary); opacity: 1; }
.obs-s-body { min-width: 0; flex: 1 1 auto; }
.obs-s-title { display: block; font-size: 12px; font-weight: 550; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.obs-s-meta { display: block; font-size: 10.5px; color: var(--dsw-alias-label-secondary); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.obs-s-time { flex: 0 0 auto; font-size: 10.5px; color: var(--dsw-alias-label-secondary); font-variant-numeric: tabular-nums; }
.obs-empty { padding: 10px 6px; text-align: center; color: var(--dsw-alias-label-secondary); font-size: 11.5px; line-height: 1.5; }
.obs-empty b { display: block; margin-bottom: 2px; color: var(--dsw-alias-label-primary); font-size: 12px; }
.obs-cell { border: 1px solid var(--dsw-alias-border-l1); border-radius: 8px; padding: 4px 7px; background: var(--dsw-alias-bg-base); min-width: 0; }
.obs-k { font-size: 9px; letter-spacing: .05em; text-transform: uppercase; color: var(--dsw-alias-label-secondary); }
.obs-v { margin-top: 1px; font-size: 11px; font-weight: 550; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.obs-actions { display: flex; flex-direction: column; justify-content: flex-start; gap: 3px; flex: 1 1 auto; min-height: 0; overflow: hidden; }
.obs-act { display: flex; gap: 8px; align-items: center; text-align: left; padding: 5px 7px; border-radius: 8px; border: 1px solid transparent; background: transparent; color: inherit; font: inherit; cursor: pointer; transition: background .12s ease, border-color .12s ease; flex: 1 1 auto; min-height: 36px; max-height: 62px; }
.obs-act:hover { background: var(--dsw-alias-bg-layer-2); border-color: var(--dsw-alias-border-l1); }
.obs-act:focus-visible { outline: 2px solid var(--dsw-alias-brand-primary); outline-offset: -1px; }
.obs-act[disabled] { opacity: .45; cursor: not-allowed; }
.obs-ico { flex: 0 0 auto; width: 22px; height: 22px; border-radius: 7px; display: grid; place-items: center; background: var(--dsw-alias-bg-layer-2); border: 1px solid var(--dsw-alias-border-l1); }
.obs-a-body { min-width: 0; }
.obs-t { display: block; font-size: 12px; font-weight: 550; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.obs-d { display: block; margin-top: 1px; font-size: 10px; line-height: 1.3; color: var(--dsw-alias-label-secondary); font-weight: 400; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.obs-swatches { display: flex; gap: 6px; flex-wrap: wrap; align-items: center; }
.obs-swatch { width: 22px; height: 22px; padding: 0; border-radius: 7px; cursor: pointer; border: 1px solid var(--dsw-alias-border-l2); }
.obs-swatch[aria-pressed="true"] { outline: 2px solid var(--dsw-alias-label-primary); outline-offset: 2px; }
.obs-preview { margin-top: 8px; display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
.obs-chip { display: inline-flex; align-items: center; padding: 4px 10px; border-radius: 999px; font-size: 11.5px; background: var(--obs-accent, var(--dsw-alias-brand-primary)); color: var(--dsw-alias-bg-base); }
.obs-btn { padding: 4px 9px; border-radius: 7px; border: 1px solid var(--dsw-alias-border-l1); background: var(--dsw-alias-bg-layer-2); color: inherit; font: inherit; font-size: 11px; cursor: pointer; }
.obs-btn:hover { border-color: var(--dsw-alias-brand-primary); }
.obs-btn[aria-pressed="true"] { border-color: var(--dsw-alias-brand-primary); }
.obs-hint { margin-top: 6px; font-size: 10.5px; line-height: 1.4; color: var(--dsw-alias-label-secondary); }
.obs-mood { display: flex; flex-direction: column; gap: 5px; min-height: 0; }
.obs-mood-main { display: flex; align-items: center; gap: 8px; min-width: 0; }
.obs-mood-emoji { font-size: 22px; line-height: 1; flex: 0 0 auto; }
.obs-mood-val { font-size: 13px; font-weight: 600; font-variant-numeric: tabular-nums; }
.obs-mood-reason { font-size: 10.5px; line-height: 1.4; color: var(--dsw-alias-label-secondary); display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
.obs-dims { display: flex; flex-wrap: wrap; gap: 3px; overflow: hidden; max-height: 22px; }
.obs-dim { font-size: 10px; color: var(--dsw-alias-label-secondary); border: 1px solid var(--dsw-alias-border-l1); border-radius: 999px; padding: 0 6px; }
.obs-toast { display: flex; gap: 8px; align-items: center; padding: 6px 10px; border-radius: 9px; border: 1px solid var(--dsw-alias-border-l1); background: var(--dsw-alias-bg-layer-1); font-size: 11.5px; word-break: break-all; flex: 0 0 auto; }
.obs-toast[data-kind="error"] { border-color: var(--dsw-alias-state-error-primary); color: var(--dsw-alias-state-error-primary); }
.obs-picker-layer { position: absolute; inset: 0; z-index: 20; display: grid; place-items: center; padding: 16px; background: rgba(8, 10, 16, .34); }
.obs-picker { width: min(440px, 100%); max-height: 100%; min-height: 0; display: flex; flex-direction: column; gap: 8px; padding: 14px; border-radius: 14px; border: 1px solid var(--dsw-alias-border-l1); background: var(--dsw-alias-bg-overlay); box-shadow: 0 16px 48px rgba(0, 0, 0, .28); }
.obs-picker-head { display: flex; align-items: baseline; justify-content: space-between; gap: 10px; flex: 0 0 auto; }
.obs-picker-hint { font-size: 11px; color: var(--dsw-alias-label-secondary); }
.obs-picker-list { display: flex; flex-direction: column; gap: 4px; overflow-y: auto; min-height: 0; flex: 1 1 auto; }
.obs-picker-item { display: flex; flex-direction: column; gap: 2px; align-items: flex-start; text-align: left; padding: 8px 10px; border-radius: 9px; border: 1px solid var(--dsw-alias-border-l1); background: var(--dsw-alias-bg-layer-1); color: inherit; font: inherit; cursor: pointer; flex: 0 0 auto; }
.obs-picker-item:hover { border-color: var(--dsw-alias-brand-primary); background: var(--dsw-alias-bg-layer-2); }
.obs-picker-item:focus-visible { outline: 2px solid var(--dsw-alias-brand-primary); outline-offset: 1px; }
.obs-picker-name { font-size: 12.5px; font-weight: 550; }
.obs-picker-path { max-width: 100%; font-size: 10.5px; color: var(--dsw-alias-label-secondary); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.obs-picker-foot { display: flex; justify-content: flex-end; flex: 0 0 auto; }
.obs-picker-item[data-active="true"] { border-color: var(--dsw-alias-brand-primary); background: var(--dsw-alias-bg-layer-2); }
.obs-pin { flex: 0 0 auto; width: 20px; height: 20px; padding: 0; display: grid; place-items: center; border: 1px solid transparent; border-radius: 6px; background: transparent; color: var(--dsw-alias-label-secondary); cursor: pointer; opacity: 0; transition: opacity .12s ease, color .12s ease; }
.obs-session:hover .obs-pin, .obs-session:focus-within .obs-pin, .obs-pin[aria-pressed="true"] { opacity: 1; }
.obs-pin[aria-pressed="true"] { color: var(--dsw-alias-brand-primary); border-color: var(--dsw-alias-border-l1); }
.obs-pin:hover { border-color: var(--dsw-alias-border-l1); background: var(--dsw-alias-bg-layer-2); }
.obs-spark-wrap { margin-top: 2px; color: var(--dsw-alias-brand-primary); opacity: .9; }
.obs-spark { display: block; width: 100%; height: 26px; }
.obs-foot-toggle { font-size: 10.5px; padding: 2px 8px; }
.obs-foot { flex: 0 0 auto; display: flex; justify-content: space-between; gap: 10px; flex-wrap: wrap; font-size: 10.5px; color: var(--dsw-alias-label-secondary); }
.obs-resume { margin-top: auto; padding-top: 6px; display: flex; justify-content: flex-end; }
.obs-kbd { font: inherit; font-size: 10px; padding: 0 4px; border-radius: 4px; border: 1px solid var(--dsw-alias-border-l1); background: var(--dsw-alias-bg-layer-2); }
@media (max-width: 1000px) {
  .obs-matrix { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  .obs-hero-inner { flex-wrap: wrap; }
}
@media (max-width: 860px) {
  .obs-home { grid-template-columns: minmax(0, 1fr); grid-template-rows: minmax(0, 1fr) auto; }
  .obs-col--side { flex-direction: row; align-items: stretch; }
  .obs-col--side > .obs-card { flex: 1 1 0; min-width: 0; }
  .obs-col--side > .obs-card--grow { flex: 1.2 1 0; }
  .obs-actions { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); grid-auto-rows: min-content; }
}
@media (max-width: 620px) {
  .obs-matrix { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .obs-card--studio { display: none; }
  .obs-h1 { font-size: 15px; }
}
@media (max-height: 720px) {
  .obs-hint { display: none; }
  .obs-hero { padding: 7px 12px; }
  .obs-session { padding: 4px 8px; }
  .obs-act { padding: 4px 7px; }
}
@media (prefers-reduced-motion: reduce) { .obs-session, .obs-act, .obs-btn { transition: none; } }
`;

    function svg(size, children, extra) {
      return h(
        'svg',
        Object.assign(
          {
            width: size,
            height: size,
            viewBox: '0 0 24 24',
            fill: 'none',
            stroke: 'currentColor',
            strokeWidth: 1.8,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            'aria-hidden': true,
          },
          extra,
        ),
        children,
      );
    }

    const ICONS = {
      back: () => svg(15, [h('path', { key: 'a', d: 'M15 5l-7 7 7 7' }), h('path', { key: 'b', d: 'M8 12h11' })]),
      plus: () => svg(15, [h('path', { key: 'a', d: 'M12 5v14' }), h('path', { key: 'b', d: 'M5 12h14' })]),
      folder: () => svg(15, [h('path', { key: 'a', d: 'M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z' })]),
      sidebar: () => svg(15, [h('rect', { key: 'a', x: 3, y: 4, width: 18, height: 16, rx: 2 }), h('path', { key: 'b', d: 'M9 4v16' })]),
      theme: () => svg(15, [h('circle', { key: 'a', cx: 12, cy: 12, r: 4.2 }), h('path', { key: 'b', d: 'M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5.2 5.2l1.6 1.6M17.2 17.2l1.6 1.6M18.8 5.2l-1.6 1.6M6.8 17.2l-1.6 1.6' })]),
      lang: () => svg(15, [h('circle', { key: 'a', cx: 12, cy: 12, r: 8.6 }), h('path', { key: 'b', d: 'M3.6 12h16.8' }), h('path', { key: 'c', d: 'M12 3.4c2.6 2.4 4 5.4 4 8.6s-1.4 6.2-4 8.6c-2.6-2.4-4-5.4-4-8.6s1.4-6.2 4-8.6z' })]),
      search: () => svg(15, [h('circle', { key: 'a', cx: 10.5, cy: 10.5, r: 6.2 }), h('path', { key: 'b', d: 'M15.2 15.2L20 20' })]),
      pin: () => svg(13, [h('path', { key: 'a', d: 'M9 4l7 7-3 1-3 5-1-5-4-3 4-5z' })]),
    };

    function Spark({ points }) {
      const width = 160;
      const height = 26;
      const values = points.map((point) => Math.max(0, Math.min(100, Number(point.v) || 0)));
      const step = values.length > 1 ? width / (values.length - 1) : width;
      const path = values
        .map((value, index) => (index === 0 ? 'M' : 'L') + (index * step).toFixed(1) + ' ' + (height - (value / 100) * height).toFixed(1))
        .join(' ');
      return h(
        'svg',
        { className: 'obs-spark', viewBox: '0 0 ' + width + ' ' + height, preserveAspectRatio: 'none', 'aria-hidden': true },
        h('path', { d: path, fill: 'none', stroke: 'currentColor', strokeWidth: 1.4, strokeLinejoin: 'round', strokeLinecap: 'round' }),
      );
    }

    function NavIcon({ size, active }) {
      return h(
        'span',
        {
          style: {
            display: 'grid',
            placeItems: 'center',
            width: size,
            height: size,
            color: active ? 'var(--dsw-alias-brand-primary)' : 'currentColor',
            opacity: active ? 1 : 0.8,
          },
        },
        svg(Math.max(14, size - 4), [
          h('path', { key: 'a', d: 'M3.5 14.5L14 6.5l3 4L6.5 18.5z' }),
          h('path', { key: 'b', d: 'M15.5 7.6L19.5 4.6' }),
          h('circle', { key: 'c', cx: 19.6, cy: 4.4, r: 2.4, opacity: 0.6 }),
          h('path', { key: 'd', d: 'M9 16.8l.6 4.2' }),
          h('path', { key: 'e', d: 'M9.6 21l-3.4 1.4M9.6 21l3.4 1.4' }),
        ]),
      );
    }

    function Starfield({ reduced }) {
      const ref = React.useRef(null);
      React.useEffect(() => {
        const canvas = ref.current;
        if (!canvas || typeof canvas.getContext !== 'function') return undefined;
        const paint = canvas.getContext('2d');
        if (!paint) return undefined;
        let width = 1;
        let height = 1;
        let frame = 0;
        let last = 0;
        const stars = [];

        const reseed = () => {
          const rect = canvas.getBoundingClientRect();
          const dpr = Math.min(window.devicePixelRatio || 1, 2);
          width = Math.max(1, rect.width);
          height = Math.max(1, rect.height);
          canvas.width = Math.round(width * dpr);
          canvas.height = Math.round(height * dpr);
          paint.setTransform(dpr, 0, 0, dpr, 0, 0);
          const count = Math.round(Math.min(150, Math.max(40, (width * height) / 8000)));
          stars.length = 0;
          for (let index = 0; index < count; index += 1) {
            stars.push({
              x: Math.random() * width,
              y: Math.random() * height,
              r: 0.7 + Math.random() * 1.3,
              a: 0.4 + Math.random() * 0.55,
              vx: (Math.random() - 0.5) * 0.004,
              vy: (Math.random() - 0.5) * 0.004,
              phase: Math.random() * Math.PI * 2,
            });
          }
        };

        const color = () => {
          const value = window.getComputedStyle(canvas).color;
          // Canvas rejects `currentColor`; an unresolvable token would silently
          // keep the previous fill (black), which is invisible on the dark theme.
          return /^(rgb|hsl)a?\(/i.test(value) || value.charAt(0) === '#' ? value : '#6b8cff';
        };

        const draw = (time) => {
          const delta = last === 0 ? 16 : Math.min(64, time - last);
          last = time;
          paint.clearRect(0, 0, width, height);
          paint.fillStyle = color();
          for (const star of stars) {
            if (!reduced) {
              star.x += star.vx * delta;
              star.y += star.vy * delta;
              if (star.x < 0) star.x += width;
              if (star.x > width) star.x -= width;
              if (star.y < 0) star.y += height;
              if (star.y > height) star.y -= height;
            }
            paint.globalAlpha = reduced ? star.a : star.a * (0.65 + 0.35 * Math.sin(time / 1100 + star.phase));
            paint.beginPath();
            paint.arc(star.x, star.y, star.r, 0, Math.PI * 2);
            paint.fill();
          }
          paint.globalAlpha = 1;
          if (!reduced) frame = window.requestAnimationFrame(draw);
        };

        reseed();
        const observer = typeof window.ResizeObserver === 'function' ? new window.ResizeObserver(reseed) : null;
        if (observer) observer.observe(canvas);
        if (reduced) draw(16);
        else frame = window.requestAnimationFrame(draw);

        const onVisibility = () => {
          if (reduced) return;
          if (document.hidden) {
            if (frame) window.cancelAnimationFrame(frame);
            frame = 0;
          } else if (!frame) {
            last = 0;
            frame = window.requestAnimationFrame(draw);
          }
        };
        document.addEventListener('visibilitychange', onVisibility);

        return () => {
          if (frame) window.cancelAnimationFrame(frame);
          if (observer) observer.disconnect();
          document.removeEventListener('visibilitychange', onVisibility);
        };
      }, [reduced]);
      return h('canvas', { ref, className: 'obs-canvas', 'aria-hidden': true });
    }

    function Clock({ now, label, size }) {
      const edge = size || 96;
      const center = 76;
      const radius = 68;
      const seconds = now.getSeconds() + now.getMilliseconds() / 1000;
      const minutes = now.getMinutes() + seconds / 60;
      const hours = (now.getHours() % 12) + minutes / 60;
      const ticks = [];
      for (let index = 0; index < 60; index += 1) {
        const major = index % 5 === 0;
        const angle = index * 6;
        ticks.push(
          h('line', {
            key: 't' + index,
            x1: center,
            y1: center - (radius - (major ? 9 : 4)),
            x2: center,
            y2: center - (radius - 3),
            stroke: 'var(--dsw-alias-label-secondary)',
            strokeWidth: major ? 1.8 : 1,
            strokeLinecap: 'round',
            opacity: major ? 0.75 : 0.32,
            transform: 'rotate(' + angle + ' ' + center + ' ' + center + ')',
          }),
        );
      }
      const hand = (angle, length, width, color) =>
        h('line', {
          key: 'h' + angle.toFixed(2) + '-' + length,
          x1: center,
          y1: center,
          x2: center,
          y2: center - length,
          stroke: color,
          strokeWidth: width,
          strokeLinecap: 'round',
          transform: 'rotate(' + angle + ' ' + center + ' ' + center + ')',
        });
      return h(
        'svg',
        {
          width: edge,
          height: edge,
          viewBox: '0 0 152 152',
          role: 'img',
          'aria-label': label,
          style: { flex: '0 0 auto' },
        },
        h('circle', {
          cx: center,
          cy: center,
          r: radius,
          fill: 'var(--dsw-alias-bg-base)',
          stroke: 'var(--dsw-alias-border-l1)',
          strokeWidth: 1.5,
        }),
        ticks,
        hand(hours * 30, 34, 5, 'var(--dsw-alias-label-primary)'),
        hand(minutes * 6, 50, 3, 'var(--dsw-alias-label-primary)'),
        hand(seconds * 6, 56, 1.6, 'var(--dsw-alias-brand-primary)'),
        h('circle', { cx: center, cy: center, r: 4, fill: 'var(--dsw-alias-brand-primary)' }),
      );
    }

    function readEnv() {
      return {
        width: typeof window === 'undefined' ? 0 : window.innerWidth,
        height: typeof window === 'undefined' ? 0 : window.innerHeight,
        dpr: typeof window === 'undefined' ? 1 : Math.round((window.devicePixelRatio || 1) * 100) / 100,
        online: typeof navigator === 'undefined' ? true : navigator.onLine !== false,
        visible: typeof document === 'undefined' ? true : document.visibilityState !== 'hidden',
        reduced:
          typeof window !== 'undefined' && typeof window.matchMedia === 'function'
            ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
            : false,
      };
    }

    function basename(path) {
      if (typeof path !== 'string' || path === '') return '';
      const parts = path.split(/[\\/]+/).filter(Boolean);
      return parts.length ? parts[parts.length - 1] : path;
    }

    // Local-only preferences. Everything degrades to defaults when storage is
    // unavailable (private mode, quota, a stubbed window in tests).
    const PREFS_KEY = 'plugin.observatory.prefs';
    const MOOD_KEY = 'plugin.observatory.mood';

    function readPrefs() {
      try {
        const raw = window.localStorage.getItem(PREFS_KEY);
        const parsed = raw ? JSON.parse(raw) : null;
        return parsed && typeof parsed === 'object' ? parsed : {};
      } catch (error) {
        return {};
      }
    }

    function writePrefs(patch) {
      try {
        const next = Object.assign({}, readPrefs(), patch);
        window.localStorage.setItem(PREFS_KEY, JSON.stringify(next));
        return next;
      } catch (error) {
        return null;
      }
    }

    function readMoodSeries() {
      try {
        const raw = window.localStorage.getItem(MOOD_KEY);
        const parsed = raw ? JSON.parse(raw) : null;
        if (!Array.isArray(parsed)) return [];
        return parsed.filter((point) => point && typeof point.v === 'number' && typeof point.t === 'number').slice(-48);
      } catch (error) {
        return [];
      }
    }

    function writeMoodSeries(series) {
      try {
        window.localStorage.setItem(MOOD_KEY, JSON.stringify(series.slice(-48)));
      } catch (error) {
        /* quota or private mode: the curve just stays session-local */
      }
    }

    return {
      inject: ['slots', 'locale'],
      apply(ctx) {
        const locale = ctx.get('locale');
        const t = locale ? locale.bind(NS) : (key) => key;
        const tr = (key) => {
          const text = t(key);
          return typeof text === 'string' && text !== key ? text : (ZH[key] ?? key);
        };
        const subscribe = (listener) => (locale ? locale.subscribe(listener) : () => {});
        const snapshot = () => (locale ? locale.getSnapshot() : EMPTY_SNAPSHOT);

        function useLocaleTick() {
          React.useSyncExternalStore(subscribe, snapshot, snapshot);
        }

        if (locale) {
          for (const tag of ['zh', 'zh-CN', 'zh-Hans']) ctx.effect(() => locale.register(NS, tag, ZH));
          for (const tag of ['en', 'en-US']) ctx.effect(() => locale.register(NS, tag, EN));
        }

        function service(key) {
          try {
            return ctx.get(key);
          } catch (error) {
            return undefined;
          }
        }

        function localeTag() {
          const value = locale ? locale.getSnapshot().active : 'zh-CN';
          return typeof value === 'string' && value !== '' ? value : 'zh-CN';
        }

        function Page(props) {
          useLocaleTick();
          const [now, setNow] = React.useState(() => new Date());
          const [env, setEnv] = React.useState(readEnv);
          const [toast, setToast] = React.useState(null);
          const [accentId, setAccentId] = React.useState('follow');
          const [trying, setTrying] = React.useState(false);
          const [folder, setFolder] = React.useState(null);
          const [filter, setFilter] = React.useState('');
          const [mood, setMood] = React.useState(null);
          const [picker, setPicker] = React.useState(false);
          const [pins, setPins] = React.useState(() => {
            const saved = readPrefs().pins;
            return Array.isArray(saved) ? saved.filter((id) => typeof id === 'string') : [];
          });
          const [autoLand, setAutoLand] = React.useState(() => readPrefs().autoLand !== false);
          const [moodTint, setMoodTint] = React.useState(() => readPrefs().moodTint === true);
          const [series, setSeries] = React.useState(readMoodSeries);
          const [palette, setPalette] = React.useState({ open: false, query: '', index: 0 });

          const useSessions = props ? props.useSessions : undefined;
          const list = useSessions ? useSessions((state) => state) : null;

          const useWorkspaces = props ? props.useWorkspaces : undefined;
          const workspaceSnap = useWorkspaces ? useWorkspaces((state) => state) : null;

          const theme = service('theme');
          const layout = service('layout');
          const workspace = service('uiWorkspace');
          const sessionService = service('sessions');

          let themeSnap = null;
          try {
            themeSnap = theme ? theme.getTheme() : null;
          } catch (error) {
            themeSnap = null;
          }
          const scheme = themeSnap && themeSnap.active && themeSnap.active.colorScheme === 'dark' ? 'dark' : 'light';
          const accent = ACCENTS.find((item) => item.id === accentId) || null;
          const accentColor = accent ? accent[scheme] : null;

          // WorkspaceSnapshot's shape is not part of the documented surface, so
          // accept the plausible containers instead of trusting one shape.
          const workspaceRows = (() => {
            const source = workspaceSnap;
            let rows = [];
            if (Array.isArray(source)) rows = source;
            else if (source && Array.isArray(source.workspaces)) rows = source.workspaces;
            else if (source && Array.isArray(source.items)) rows = source.items;
            else if (source && source.byId && typeof source.byId === 'object') rows = Object.keys(source.byId).map((key) => source.byId[key]);
            return rows
              .filter((row) => row && (row.workspaceId || row.id))
              .map((row) => ({
                id: row.workspaceId || row.id,
                title: String(row.title || basename(row.path) || row.workspaceId || row.id),
                path: String(row.path || ''),
              }));
          })();

          React.useEffect(() => {
            const timer = window.setInterval(() => setNow(new Date()), 1000);
            return () => window.clearInterval(timer);
          }, []);

          React.useEffect(() => {
            const refresh = () => setEnv(readEnv());
            window.addEventListener('resize', refresh);
            window.addEventListener('online', refresh);
            window.addEventListener('offline', refresh);
            document.addEventListener('visibilitychange', refresh);
            return () => {
              window.removeEventListener('resize', refresh);
              window.removeEventListener('online', refresh);
              window.removeEventListener('offline', refresh);
              document.removeEventListener('visibilitychange', refresh);
            };
          }, []);

          React.useEffect(() => {
            if (!toast) return undefined;
            const timer = window.setTimeout(() => setToast(null), 4200);
            return () => window.clearTimeout(timer);
          }, [toast]);

          React.useEffect(() => {
            if (!picker) return undefined;
            const onKey = (event) => {
              if (event && event.key === 'Escape') setPicker(false);
            };
            window.addEventListener('keydown', onKey);
            return () => window.removeEventListener('keydown', onKey);
          }, [picker]);

          // Escape closes the palette even when focus left its input.
          React.useEffect(() => {
            if (!palette.open) return undefined;
            const onKey = (event) => {
              if (event && event.key === 'Escape') setPalette({ open: false, query: '', index: 0 });
            };
            window.addEventListener('keydown', onKey);
            return () => window.removeEventListener('keydown', onKey);
          }, [palette.open]);

          // Ctrl/Cmd+K opens the jump palette, the way a home surface should.
          React.useEffect(() => {
            const onKey = (event) => {
              if (!event || !(event.ctrlKey || event.metaKey) || event.shiftKey || event.altKey) return;
              if (typeof event.key !== 'string' || event.key.toLowerCase() !== 'k') return;
              event.preventDefault();
              setPalette((current) => (current.open ? current : { open: true, query: '', index: 0 }));
            };
            window.addEventListener('keydown', onKey);
            return () => window.removeEventListener('keydown', onKey);
          }, []);

          // Mood curve: one sample whenever the value actually changes.
          React.useEffect(() => {
            const value = mood && typeof mood.mood === 'number' ? mood.mood : null;
            if (value === null) return;
            setSeries((previous) => {
              const last = previous[previous.length - 1];
              if (last && last.v === value && Date.now() - last.t < 60000) return previous;
              const next = previous.concat([{ t: Date.now(), v: value }]).slice(-48);
              writeMoodSeries(next);
              return next;
            });
          }, [mood && mood.mood]);

          // Optional: let the mood tint the whole UI (temporary token layer).
          React.useEffect(() => {
            if (!moodTint || !theme) return undefined;
            const value = mood && typeof mood.mood === 'number' ? mood.mood : null;
            if (value === null) return undefined;
            const hue = Math.round(210 - (Math.max(0, Math.min(100, value)) / 100) * 190);
            let dispose = null;
            try {
              dispose = theme.overrideTokens('plugin.observatory.mood', {
                '--dsw-alias-brand-primary': {
                  light: 'hsl(' + hue + ' 70% 45%)',
                  dark: 'hsl(' + hue + ' 75% 66%)',
                },
              });
            } catch (error) {
              dispose = null;
            }
            return () => {
              if (typeof dispose === 'function') {
                try {
                  dispose();
                } catch (error) {
                  /* the newer layer owns the token now */
                }
              }
            };
          }, [moodTint, mood && mood.mood, theme]);

          // The mood plugin publishes a same-origin state route; the card hides
          // itself when that plugin is absent or the request is refused.
          React.useEffect(() => {
            let alive = true;
            let timer = 0;
            let failures = 0;
            const load = async () => {
              try {
                if (typeof fetch !== 'function') return;
                const response = await fetch('/dsh-feiyu-mood/state', {
                  headers: { accept: 'application/json' },
                  credentials: 'same-origin',
                  cache: 'no-store',
                });
                if (!response || !response.ok) throw new Error('http ' + (response ? response.status : 0));
                const data = await response.json();
                failures = 0;
                if (alive) setMood(data && data.ok ? data : null);
              } catch (error) {
                failures += 1;
                if (alive) setMood(null);
                // A refused or absent route must not poll forever: the host
                // logs every rejection, so two strikes and the card rests.
                if (failures >= 2 && timer) {
                  window.clearInterval(timer);
                  timer = 0;
                }
              }
            };
            load();
            timer = window.setInterval(load, 15000);
            return () => {
              alive = false;
              if (timer) window.clearInterval(timer);
            };
          }, []);

          React.useEffect(() => {
            if (!trying || !theme || !accent) return undefined;
            let dispose = null;
            try {
              dispose = theme.overrideTokens('plugin.observatory.preview', {
                '--dsw-alias-brand-primary': { light: accent.light, dark: accent.dark },
              });
            } catch (error) {
              dispose = null;
            }
            return () => {
              if (typeof dispose === 'function') {
                try {
                  dispose();
                } catch (error) {
                  /* a re-overridden layer stays owned by the newer call */
                }
              }
            };
          }, [trying, accentId, theme]);

          const run = (action) => async () => {
            try {
              const message = await action();
              if (message) setToast({ kind: 'ok', text: message });
            } catch (error) {
              setToast({ kind: 'error', text: (error && error.message) || String(error) });
            }
          };

          const timeLabel = (() => {
            try {
              return now.toLocaleTimeString(localeTag(), { hour12: false });
            } catch (error) {
              return String(now.getHours()).padStart(2, '0') + ':' + String(now.getMinutes()).padStart(2, '0');
            }
          })();
          const dateLabel = (() => {
            try {
              return now.toLocaleDateString(localeTag(), {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                weekday: 'long',
              });
            } catch (error) {
              return now.toISOString().slice(0, 10);
            }
          })();

          const hour = now.getHours();
          const greeting =
            hour < 5 ? tr('greet_night') : hour < 12 ? tr('greet_morning') : hour < 18 ? tr('greet_afternoon') : tr('greet_evening');

          const relative = (timestamp) => {
            if (typeof timestamp !== 'number' || !Number.isFinite(timestamp)) return '';
            const diff = Math.max(0, now.getTime() - timestamp);
            if (diff < 60 * 1000) return tr('just_now');
            if (diff < 60 * 60 * 1000) return Math.round(diff / 60000) + ' ' + tr('minutes_ago');
            if (diff < 24 * 60 * 60 * 1000) return Math.round(diff / 3600000) + ' ' + tr('hours_ago');
            if (diff < 48 * 60 * 60 * 1000) return tr('yesterday');
            try {
              return new Date(timestamp).toLocaleDateString(localeTag(), { month: 'short', day: 'numeric' });
            } catch (error) {
              return '';
            }
          };

          // Selecting a Session is a navigation action, not a sessions-service
          // method: ISessions has no open(), uiWorkspace.openSession() owns it.
          // It already shows the Conversation, so no extra selectPanel here —
          // selectPanel() aborts any navigation still in flight.
          const openSession = (id) => {
            if (id === undefined || id === null) return;
            try {
              if (workspace) workspace.openSession(id);
            } catch (error) {
              setToast({ kind: 'error', text: (error && error.message) || String(error) });
            }
          };

          // startSession() ends in replaceMain(..., "preserve"), which selects
          // the blank but never reveals the Conversation; and a selectPanel()
          // right after would abort its in-flight navigation (beginNavigation).
          // So create the blank explicitly, then reveal it through openSession.
          const chooseWorkspace = async (workspaceId) => {
            setPicker(false);
            try {
              if (!workspace) return;
              if (sessionService && typeof sessionService.create === 'function') {
                const created = await sessionService.create({ workspaceId });
                workspace.openSession(created);
                return;
              }
              workspace.startSession(workspaceId);
            } catch (error) {
              setToast({ kind: 'error', text: (error && error.message) || String(error) });
            }
          };

          const summaries = (() => {
            if (!list || !Array.isArray(list.ids) || !list.byId) return [];
            const rows = [];
            for (const id of list.ids) {
              const summary = list.byId[id];
              if (summary) rows.push(summary);
            }
            rows.sort((left, right) => {
              const pinnedLeft = pins.includes(left.id) ? 1 : 0;
              const pinnedRight = pins.includes(right.id) ? 1 : 0;
              if (pinnedLeft !== pinnedRight) return pinnedRight - pinnedLeft;
              return (right.updatedAt || 0) - (left.updatedAt || 0);
            });
            const needle = filter.trim().toLowerCase();
            const matched = needle
              ? rows.filter(
                  (row) =>
                    String(row.displayTitle || '').toLowerCase().includes(needle) ||
                    String(row.cwd || '').toLowerCase().includes(needle),
                )
              : rows;
            return matched.slice(0, 12);
          })();
          const totalSessions = list && Array.isArray(list.ids) ? list.ids.length : 0;
          const currentId = list ? list.current : undefined;

          const cells = [
            [tr('k_theme'), (themeSnap ? tr('pref_' + themeSnap.preference) : '—') + (themeSnap && themeSnap.active ? ' · ' + themeSnap.active.id : '')],
            [tr('k_lang'), String((locale ? locale.getSnapshot().active : '—'))],
            [tr('k_viewport'), env.width + '×' + env.height + ' · ' + env.dpr + 'x'],
            [tr('k_motion'), env.reduced ? tr('motion_reduced') : tr('motion_full')],
            [tr('k_network'), env.online ? tr('net_online') : tr('net_offline')],
            [tr('k_vis'), env.visible ? tr('vis_visible') : tr('vis_hidden')],
          ];

          const actions = [
            {
              id: 'palette',
              icon: 'search',
              title: tr('palette_open'),
              description: tr('palette_open_d'),
              run: () => {
                setPalette({ open: true, query: '', index: 0 });
                return null;
              },
            },
            {
              id: 'new',
              icon: 'plus',
              title: tr('act_new'),
              description: tr('act_new_d'),
              run: workspace
                ? () => {
                    // Ask which workspace first; only pickless when there is nothing to pick.
                    if (workspaceRows.length === 0) {
                      workspace.startSession();
                      return null;
                    }
                    setPicker(true);
                    return null;
                  }
                : null,
            },
            {
              id: 'folder',
              icon: 'folder',
              title: tr('act_folder'),
              description: tr('act_folder_d'),
              run: workspace
                ? async () => {
                    const path = await workspace.pickDirectory();
                    if (!path) return tr('folder_canceled');
                    setFolder(path);
                    return tr('folder_picked') + path;
                  }
                : null,
            },
            {
              id: 'back',
              icon: 'back',
              title: tr('act_back'),
              description: tr('act_back_d'),
              run: layout ? () => layout.selectPanel('conversation') : null,
            },
            {
              id: 'sidebar',
              icon: 'sidebar',
              title: tr('act_sidebar'),
              description: tr('act_sidebar_d'),
              run: layout
                ? () => {
                    layout.toggleSidebar();
                    return tr('sidebar_toggled');
                  }
                : null,
            },
            {
              id: 'theme',
              icon: 'theme',
              title: tr('act_theme'),
              description: tr('act_theme_d'),
              run: theme
                ? () => {
                    const order = ['system', 'light', 'dark'];
                    const preference = theme.getTheme().preference;
                    const next = order[(order.indexOf(preference) + 1 + order.length) % order.length];
                    theme.setTheme(next);
                    return tr('pref_' + next);
                  }
                : null,
            },
            {
              id: 'lang',
              icon: 'lang',
              title: tr('act_lang'),
              description: tr('act_lang_d'),
              run:
                locale && locale.getSnapshot().locales && locale.getSnapshot().locales.length > 1
                  ? () => {
                      const snap = locale.getSnapshot();
                      const index = snap.locales.findIndex((item) => item.id === snap.active);
                      const next = snap.locales[(index + 1 + snap.locales.length) % snap.locales.length];
                      locale.setLocale(next.id);
                      return next.label || next.id;
                    }
                  : null,
            },
          ];

          // Jump palette: the first four deck actions plus the visible sessions.
          const paletteEntries = (() => {
            const needle = palette.query.trim().toLowerCase();
            const entries = actions
              .filter((action) => action.id !== 'palette' && action.run)
              .map((action) => ({
                id: 'act:' + action.id,
                label: action.title,
                hint: action.description,
                run: () => run(action.run),
              }))
              .concat(
                summaries.map((summary) => ({
                  id: 's:' + summary.id,
                  label: String(summary.displayTitle || summary.id),
                  hint: basename(summary.cwd),
                  run: () => openSession(summary.id),
                })),
              );
            if (!needle) return entries.slice(0, 10);
            return entries
              .filter((entry) => (entry.label + ' ' + entry.hint).toLowerCase().includes(needle))
              .slice(0, 10);
          })();

          const closePalette = () => setPalette({ open: false, query: '', index: 0 });
          const choosePalette = (entry) => {
            closePalette();
            if (entry) entry.run();
          };

          const togglePin = (id) => {
            const next = pins.includes(id) ? pins.filter((item) => item !== id) : pins.concat([id]);
            setPins(next);
            writePrefs({ pins: next });
          };

          const sessionsCard = h(
            'div',
            { className: 'obs-card obs-card--grow' },
            h(
              'div',
              { className: 'obs-card-head' },
              h('h2', { className: 'obs-h2' }, tr('recent')),
              h('span', { className: 'obs-count' }, totalSessions + ' ' + tr('count')),
            ),
            list && totalSessions > 0
              ? h('input', {
                  className: 'obs-input',
                  type: 'search',
                  value: filter,
                  placeholder: tr('filter'),
                  'aria-label': tr('filter'),
                  onChange: (event) => setFilter(event.target.value),
                })
              : null,
            !list
              ? h('div', { className: 'obs-empty' }, tr('data_offline'))
              : totalSessions === 0
              ? h(
                  'div',
                  { className: 'obs-empty' },
                  h('b', null, tr('empty_title')),
                  tr('empty_hint'),
                )
              : h(
                  'div',
                  { className: 'obs-sessions' },
                  summaries.length === 0
                    ? h('div', { className: 'obs-empty' }, tr('no_match'))
                    : summaries.map((summary) => {
                        const pinned = pins.includes(summary.id);
                        return h(
                          'div',
                          {
                            key: summary.id,
                            role: 'button',
                            tabIndex: 0,
                            className: 'obs-session',
                            'data-current': summary.id === currentId ? 'true' : 'false',
                            'data-pinned': pinned ? 'true' : 'false',
                            title: String(summary.displayTitle || summary.id),
                            onClick: () => openSession(summary.id),
                            onKeyDown: (event) => {
                              if (!event) return;
                              // Space/Enter on the nested pin button must not open the row.
                              if (event.target && event.currentTarget && event.target !== event.currentTarget) return;
                              if (event.key === 'Enter' || event.key === ' ') {
                                event.preventDefault();
                                openSession(summary.id);
                              }
                            },
                          },
                          h('span', {
                            className: 'obs-dot',
                            'data-running': summary.running ? 'true' : 'false',
                            'data-completed': summary.completed ? 'true' : 'false',
                          }),
                          h(
                            'span',
                            { className: 'obs-s-body' },
                            h('span', { className: 'obs-s-title', style: { display: 'block' } }, String(summary.displayTitle || summary.id)),
                            h(
                              'span',
                              { className: 'obs-s-meta', style: { display: 'block' } },
                              [basename(summary.cwd), summary.running ? tr('running') : summary.completed ? tr('done') : null]
                                .filter(Boolean)
                                .join(' · ') || ' ',
                            ),
                          ),
                          h('span', { className: 'obs-s-time' }, relative(summary.updatedAt)),
                          h(
                            'button',
                            {
                              type: 'button',
                              className: 'obs-pin',
                              'aria-pressed': pinned,
                              title: pinned ? tr('unpin') : tr('pin'),
                              'aria-label': pinned ? tr('unpin') : tr('pin'),
                              onClick: (event) => {
                                if (event && typeof event.stopPropagation === 'function') event.stopPropagation();
                                togglePin(summary.id);
                              },
                            },
                            ICONS.pin ? ICONS.pin() : null,
                          ),
                        );
                      }),
                ),
            currentId
              ? h(
                  'div',
                  { className: 'obs-resume' },
                  h(
                    'button',
                    { type: 'button', className: 'obs-btn', onClick: () => openSession(currentId) },
                    tr('resume'),
                  ),
                )
              : null,
          );

          return h(
            'div',
            { className: 'obs-root' },
            h('style', null, CSS),
            h(
              'div',
              { className: 'obs-inner' },
              h(
                'div',
                { className: 'obs-head' },
                h('h1', { className: 'obs-h1' }, tr('title')),
                h('span', { className: 'obs-tag' }, tr('subtitle')),
                h('span', { className: 'obs-live' }, tr('live')),
              ),
              h(
                'div',
                { className: 'obs-hero' },
                h(Starfield, { reduced: env.reduced }),
                h(
                  'div',
                  { className: 'obs-hero-inner' },
                  h(Clock, { now, label: timeLabel, size: 56 }),
                  h(
                    'div',
                    { style: { minWidth: 0 } },
                    h('div', { className: 'obs-greet' }, greeting),
                    h('div', { className: 'obs-time' }, timeLabel),
                    h('div', { className: 'obs-date' }, dateLabel + ' · ' + (Intl.DateTimeFormat().resolvedOptions().timeZone || 'local')),
                  ),
                  h(
                    'div',
                    { className: 'obs-matrix' },
                    cells.map(([label, value]) =>
                      h(
                        'div',
                        { className: 'obs-cell', key: label, title: value },
                        h('div', { className: 'obs-k' }, label),
                        h('div', { className: 'obs-v' }, value),
                      ),
                    ),
                  ),
                ),
              ),
              toast ? h('div', { className: 'obs-toast', 'data-kind': toast.kind, role: 'status' }, toast.text) : null,
              h(
                'div',
                { className: 'obs-home' },
                h('div', { className: 'obs-col obs-col--main' }, sessionsCard),
                h(
                  'div',
                  { className: 'obs-col obs-col--side' },
                  h(
                    'div',
                    { className: 'obs-card obs-card--mood' },
                    h(
                      'div',
                      { className: 'obs-card-head' },
                      h('h2', { className: 'obs-h2' }, tr('mood_title')),
                      mood
                        ? h('span', { className: 'obs-count' }, mood.mode === 'workspace' ? tr('mode_workspace') : mood.mode === 'session' ? tr('mode_session') : '')
                        : null,
                    ),
                    mood
                      ? h(
                          'div',
                          { className: 'obs-mood' },
                          h(
                            'div',
                            { className: 'obs-mood-main' },
                            h('span', { className: 'obs-mood-emoji', 'aria-hidden': true }, String(mood.emoji || '🙂')),
                            h(
                              'div',
                              null,
                              h('div', { className: 'obs-mood-val' }, String(mood.mood) + ' · ' + String(mood.moodLabel || '')),
                              h(
                                'div',
                                { className: 'obs-s-meta' },
                                [mood.name, mood.ownerName].filter(Boolean).join(' → ') || ' ',
                              ),
                            ),
                          ),
                          mood.lastReason ? h('div', { className: 'obs-mood-reason' }, String(mood.lastReason)) : null,
                          series.length >= 2
                            ? h(
                                'div',
                                { className: 'obs-spark-wrap', title: tr('spark_hint') },
                                h(Spark, { points: series.slice(-24) }),
                              )
                            : null,
                          Array.isArray(mood.dims) && mood.dims.some((dim) => dim && dim.value > 0)
                            ? h(
                                'div',
                                { className: 'obs-dims' },
                                mood.dims
                                  .filter((dim) => dim && dim.value > 0)
                                  .slice(0, 5)
                                  .map((dim) =>
                                    h('span', { key: String(dim.key), className: 'obs-dim' }, String(dim.label) + ' ' + String(dim.value)),
                                  ),
                              )
                            : null,
                        )
                      : h('div', { className: 'obs-empty' }, tr('mood_offline')),
                  ),
                  h(
                    'div',
                    { className: 'obs-card obs-card--grow' },
                    h('div', { className: 'obs-card-head' }, h('h2', { className: 'obs-h2' }, tr('deck'))),
                    h(
                      'div',
                      { className: 'obs-actions' },
                      actions.map((action) =>
                        h(
                          'button',
                          {
                            key: action.id,
                            type: 'button',
                            className: 'obs-act',
                            disabled: !action.run,
                            title: action.title + ' · ' + action.description,
                            onClick: action.run ? run(action.run) : undefined,
                          },
                          h('span', { className: 'obs-ico' }, ICONS[action.icon] ? ICONS[action.icon]() : null),
                          h(
                            'span',
                            { className: 'obs-a-body' },
                            h('span', { className: 'obs-t', style: { display: 'block' } }, action.title),
                            h('span', { className: 'obs-d', style: { display: 'block' } }, action.description),
                          ),
                        ),
                      ),
                    ),
                  ),
                  h(
                    'div',
                    { className: 'obs-card obs-card--studio' },
                    h('div', { className: 'obs-card-head' }, h('h2', { className: 'obs-h2' }, tr('studio'))),
                    h(
                      'div',
                      { style: accentColor ? { '--obs-accent': accentColor } : undefined },
                      h(
                        'div',
                        { className: 'obs-swatches' },
                        h(
                          'button',
                          {
                            type: 'button',
                            className: 'obs-btn',
                            'aria-pressed': accentId === 'follow',
                            onClick: () => {
                              setAccentId('follow');
                              setTrying(false);
                            },
                          },
                          tr('studio_follow'),
                        ),
                        ACCENTS.map((item) =>
                          h('button', {
                            key: item.id,
                            type: 'button',
                            className: 'obs-swatch',
                            title: item[localeTag().startsWith('en') ? 'en' : 'zh'],
                            'aria-label': item[localeTag().startsWith('en') ? 'en' : 'zh'],
                            'aria-pressed': accentId === item.id,
                            style: { background: item[scheme] },
                            onClick: () => setAccentId(item.id),
                          }),
                        ),
                      ),
                      h(
                        'div',
                        { className: 'obs-preview' },
                        h('span', { className: 'obs-chip' }, tr('preview')),
                        accent
                          ? h(
                              'button',
                              {
                                type: 'button',
                                className: 'obs-btn',
                                'aria-pressed': trying,
                                onClick: () => setTrying((value) => !value),
                              },
                              trying ? tr('studio_trying') : tr('studio_try'),
                            )
                          : null,
                        folder ? h('span', { className: 'obs-hint', style: { marginTop: 0 } }, folder) : null,
                        h(
                          'button',
                          {
                            type: 'button',
                            className: 'obs-btn',
                            'aria-pressed': moodTint,
                            disabled: !mood,
                            onClick: () => {
                              const next = !moodTint;
                              setMoodTint(next);
                              writePrefs({ moodTint: next });
                            },
                          },
                          moodTint ? tr('tint_on') : tr('tint_off'),
                        ),
                      ),
                      h('div', { className: 'obs-hint' }, tr('studio_hint')),
                    ),
                  ),
                ),
              ),
              h(
                'div',
                { className: 'obs-foot' },
                h(
                  'span',
                  null,
                  tr('shortcut') + ' ',
                  h('kbd', { className: 'obs-kbd' }, 'Ctrl'),
                  ' + ',
                  h('kbd', { className: 'obs-kbd' }, 'Shift'),
                  ' + ',
                  h('kbd', { className: 'obs-kbd' }, 'O'),
                ),
                h(
                  'span',
                  null,
                  h(
                    'button',
                    {
                      type: 'button',
                      className: 'obs-btn obs-foot-toggle',
                      'aria-pressed': autoLand,
                      onClick: () => {
                        const next = !autoLand;
                        setAutoLand(next);
                        writePrefs({ autoLand: next });
                      },
                    },
                    autoLand ? tr('autoland_on') : tr('autoland_off'),
                  ),
                ),
                h('span', null, '@local/observatory · ' + tr('version') + ' ' + VERSION),
              ),
            ),
            picker
              ? h(
                  'div',
                  { className: 'obs-picker-layer', role: 'presentation', onClick: () => setPicker(false) },
                  h(
                    'div',
                    {
                      className: 'obs-picker',
                      role: 'dialog',
                      'aria-modal': 'true',
                      'aria-label': tr('picker_title'),
                      onClick: (event) => {
                        if (event && typeof event.stopPropagation === 'function') event.stopPropagation();
                      },
                    },
                    h(
                      'div',
                      { className: 'obs-picker-head' },
                      h('h2', { className: 'obs-h2' }, tr('picker_title')),
                      h('span', { className: 'obs-picker-hint' }, tr('picker_hint')),
                    ),
                    workspaceRows.length
                      ? h(
                          'div',
                          { className: 'obs-picker-list' },
                          workspaceRows.map((row) =>
                            h(
                              'button',
                              {
                                key: row.id,
                                type: 'button',
                                className: 'obs-picker-item',
                                title: row.path || row.title,
                                onClick: () => chooseWorkspace(row.id),
                              },
                              h('span', { className: 'obs-picker-name' }, row.title),
                              row.path ? h('span', { className: 'obs-picker-path' }, row.path) : null,
                            ),
                          ),
                        )
                      : h(
                          'div',
                          { className: 'obs-empty' },
                          h('b', null, tr('picker_empty')),
                          tr('picker_empty_hint'),
                        ),
                    h(
                      'div',
                      { className: 'obs-picker-foot' },
                      h(
                        'button',
                        { type: 'button', className: 'obs-btn', onClick: () => setPicker(false) },
                        tr('picker_cancel'),
                      ),
                    ),
                  ),
                )
              : null,
            palette.open
              ? h(
                  'div',
                  { className: 'obs-picker-layer', role: 'presentation', onClick: closePalette },
                  h(
                    'div',
                    {
                      className: 'obs-picker obs-palette',
                      role: 'dialog',
                      'aria-modal': 'true',
                      'aria-label': tr('palette_title'),
                      onClick: (event) => {
                        if (event && typeof event.stopPropagation === 'function') event.stopPropagation();
                      },
                    },
                    h(
                      'div',
                      { className: 'obs-picker-head' },
                      h('h2', { className: 'obs-h2' }, tr('palette_title')),
                      h('span', { className: 'obs-picker-hint' }, tr('palette_hint')),
                    ),
                    h('input', {
                      className: 'obs-input',
                      type: 'text',
                      value: palette.query,
                      placeholder: tr('palette_hint'),
                      'aria-label': tr('palette_title'),
                      onChange: (event) =>
                        setPalette((current) => ({ open: true, query: event.target.value, index: 0 })),
                      onKeyDown: (event) => {
                        if (!event) return;
                        if (event.key === 'ArrowDown') {
                          event.preventDefault();
                          setPalette((current) => ({
                            open: true,
                            query: current.query,
                            index: Math.min(current.index + 1, Math.max(0, paletteEntries.length - 1)),
                          }));
                        } else if (event.key === 'ArrowUp') {
                          event.preventDefault();
                          setPalette((current) => ({
                            open: true,
                            query: current.query,
                            index: Math.max(0, current.index - 1),
                          }));
                        } else if (event.key === 'Enter') {
                          event.preventDefault();
                          choosePalette(paletteEntries[palette.index]);
                        } else if (event.key === 'Escape') {
                          event.preventDefault();
                          closePalette();
                        }
                      },
                    }),
                    paletteEntries.length
                      ? h(
                          'div',
                          { className: 'obs-picker-list' },
                          paletteEntries.map((entry, index) =>
                            h(
                              'button',
                              {
                                key: entry.id,
                                type: 'button',
                                className: 'obs-picker-item',
                                'data-active': index === palette.index ? 'true' : 'false',
                                onMouseEnter: () => setPalette((current) => ({ open: true, query: current.query, index })),
                                onClick: () => choosePalette(entry),
                              },
                              h('span', { className: 'obs-picker-name' }, entry.label),
                              entry.hint ? h('span', { className: 'obs-picker-path' }, entry.hint) : null,
                            ),
                          ),
                        )
                      : h('div', { className: 'obs-empty' }, tr('palette_empty')),
                  ),
                )
              : null,
          );
        }

        ctx.slots.inject('main', () => ctx.slots.register({ name: 'main', key: 'observatory' }, Page));

        ctx.slots.inject('sidebar.panellist', () =>
          ctx.slots.register(
            { name: 'sidebar.panellist', id: 'observatory', order: 5, label: () => tr('nav') },
            NavIcon,
          ),
        );

        ctx.effect(() => {
          const onKey = (event) => {
            if (!event || !(event.ctrlKey || event.metaKey) || !event.shiftKey) return;
            if (typeof event.key !== 'string' || event.key.toLowerCase() !== 'o') return;
            const target = service('layout');
            if (!target) return;
            event.preventDefault();
            target.selectPanel('observatory');
          };
          window.addEventListener('keydown', onKey);
          return () => window.removeEventListener('keydown', onKey);
        });

        // Land on the observatory: the page is the home surface on every reload.
        // The footer toggle stores the preference; it applies on the next load.
        ctx.effect(() => {
          if (readPrefs().autoLand === false) return undefined;
          const timer = window.setTimeout(() => {
            const target = service('layout');
            if (!target) return;
            try {
              target.selectPanel('observatory');
            } catch (error) {
              /* a shell without this panel keeps whatever it already shows */
            }
          }, 400);
          return () => window.clearTimeout(timer);
        });
      },
    };
  },
});
