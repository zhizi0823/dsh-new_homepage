window.__ModuleLoader__.load({
  id: '@local/observatory',
  factory(require) {
    const React = require('react');
    const h = React.createElement;

    const NS = 'plugin.observatory';
    const VERSION = '1.0.0';

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
      act_sidebar: '收起 / 展开侧栏',
      act_sidebar_d: '给正文腾出更多宽度',
      act_right: '打开右栏',
      act_right_d: '展开右侧辅助面板',
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
      act_sidebar: 'Toggle sidebar',
      act_sidebar_d: 'Give the content column more room',
      act_right: 'Open right panel',
      act_right_d: 'Expand the auxiliary panel',
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
.obs-root { min-height: 100%; overflow-y: auto; background: var(--dsw-alias-bg-base); color: var(--dsw-alias-label-primary); }
.obs-inner { max-width: 1080px; margin: 0 auto; padding: 24px 22px 108px; display: flex; flex-direction: column; gap: 12px; }
.obs-head { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; }
.obs-h1 { margin: 0; font-size: 20px; font-weight: 650; letter-spacing: .005em; }
.obs-tag { font-size: 11.5px; color: var(--dsw-alias-label-secondary); border: 1px solid var(--dsw-alias-border-l1); border-radius: 999px; padding: 2px 8px; }
.obs-live { display: inline-flex; align-items: center; gap: 6px; font-size: 11.5px; color: var(--dsw-alias-label-secondary); }
.obs-live::before { content: ''; width: 6px; height: 6px; border-radius: 50%; background: var(--dsw-alias-state-success-primary); }
.obs-hero { position: relative; overflow: hidden; border: 1px solid var(--dsw-alias-border-l1); border-radius: 16px; padding: 16px 20px; background: linear-gradient(150deg, var(--dsw-alias-bg-layer-1), var(--dsw-alias-bg-layer-2)); }
.obs-canvas { position: absolute; inset: 0; width: 100%; height: 100%; color: var(--dsw-alias-brand-primary); opacity: .5; pointer-events: none; }
.obs-hero-inner { position: relative; display: flex; align-items: center; gap: 16px; flex-wrap: wrap; }
.obs-greet { font-size: 18px; font-weight: 640; }
.obs-time { font-size: 26px; font-weight: 620; line-height: 1.05; letter-spacing: .01em; font-variant-numeric: tabular-nums; }
.obs-date { margin-top: 4px; font-size: 12px; color: var(--dsw-alias-label-secondary); }
.obs-home { display: grid; grid-template-columns: minmax(0, 1.55fr) minmax(0, 1fr); gap: 12px; align-items: start; }
.obs-col { display: flex; flex-direction: column; gap: 12px; min-width: 0; }
.obs-card { border: 1px solid var(--dsw-alias-border-l1); border-radius: 14px; background: var(--dsw-alias-bg-layer-1); padding: 14px; min-width: 0; }
.obs-card-head { display: flex; align-items: center; justify-content: space-between; gap: 8px; margin-bottom: 10px; }
.obs-h2 { margin: 0; font-size: 11px; letter-spacing: .1em; text-transform: uppercase; color: var(--dsw-alias-label-secondary); }
.obs-count { font-size: 11px; color: var(--dsw-alias-label-secondary); font-variant-numeric: tabular-nums; }
.obs-input { width: 100%; box-sizing: border-box; padding: 7px 10px; border-radius: 9px; border: 1px solid var(--dsw-alias-border-l1); background: var(--dsw-alias-bg-base); color: inherit; font: inherit; font-size: 12px; margin-bottom: 8px; }
.obs-input:focus { outline: 2px solid var(--dsw-alias-brand-primary); outline-offset: 1px; border-color: transparent; }
.obs-sessions { display: flex; flex-direction: column; gap: 2px; }
.obs-session { display: flex; align-items: center; gap: 10px; width: 100%; text-align: left; padding: 8px 10px; border-radius: 10px; border: 1px solid transparent; background: transparent; color: inherit; font: inherit; cursor: pointer; transition: background .12s ease, border-color .12s ease; }
.obs-session:hover { background: var(--dsw-alias-bg-layer-2); border-color: var(--dsw-alias-border-l1); }
.obs-session:focus-visible { outline: 2px solid var(--dsw-alias-brand-primary); outline-offset: -1px; }
.obs-session[data-current="true"] { border-color: var(--dsw-alias-brand-primary); }
.obs-dot { width: 7px; height: 7px; border-radius: 50%; flex: 0 0 auto; background: var(--dsw-alias-state-idle-primary); opacity: .55; }
.obs-dot[data-running="true"] { background: var(--dsw-alias-state-success-primary); opacity: 1; }
.obs-dot[data-completed="true"] { background: var(--dsw-alias-brand-primary); opacity: 1; }
.obs-s-body { min-width: 0; flex: 1 1 auto; }
.obs-s-title { font-size: 13px; font-weight: 550; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.obs-s-meta { margin-top: 1px; font-size: 11px; color: var(--dsw-alias-label-secondary); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.obs-s-time { flex: 0 0 auto; font-size: 11px; color: var(--dsw-alias-label-secondary); font-variant-numeric: tabular-nums; }
.obs-empty { padding: 16px 8px; text-align: center; color: var(--dsw-alias-label-secondary); font-size: 12px; line-height: 1.65; }
.obs-empty b { display: block; margin-bottom: 4px; color: var(--dsw-alias-label-primary); font-size: 13px; }
.obs-matrix { display: grid; grid-template-columns: repeat(auto-fit, minmax(108px, 1fr)); gap: 6px; }
.obs-cell { border: 1px solid var(--dsw-alias-border-l1); border-radius: 9px; padding: 7px 9px; background: var(--dsw-alias-bg-base); min-width: 0; }
.obs-k { font-size: 10px; letter-spacing: .06em; text-transform: uppercase; color: var(--dsw-alias-label-secondary); }
.obs-v { margin-top: 2px; font-size: 12px; font-weight: 550; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.obs-actions { display: flex; flex-direction: column; gap: 4px; }
.obs-act { display: flex; gap: 9px; align-items: center; text-align: left; padding: 8px 9px; border-radius: 10px; border: 1px solid transparent; background: transparent; color: inherit; font: inherit; cursor: pointer; transition: background .12s ease, border-color .12s ease; }
.obs-act:hover { background: var(--dsw-alias-bg-layer-2); border-color: var(--dsw-alias-border-l1); }
.obs-act:focus-visible { outline: 2px solid var(--dsw-alias-brand-primary); outline-offset: -1px; }
.obs-act[disabled] { opacity: .45; cursor: not-allowed; }
.obs-ico { flex: 0 0 auto; width: 26px; height: 26px; border-radius: 8px; display: grid; place-items: center; background: var(--dsw-alias-bg-layer-2); border: 1px solid var(--dsw-alias-border-l1); }
.obs-a-body { min-width: 0; }
.obs-t { font-size: 12.5px; font-weight: 550; }
.obs-d { margin-top: 1px; font-size: 11px; line-height: 1.35; color: var(--dsw-alias-label-secondary); }
.obs-swatches { display: flex; gap: 7px; flex-wrap: wrap; align-items: center; }
.obs-swatch { width: 26px; height: 26px; padding: 0; border-radius: 8px; cursor: pointer; border: 1px solid var(--dsw-alias-border-l2); }
.obs-swatch[aria-pressed="true"] { outline: 2px solid var(--dsw-alias-label-primary); outline-offset: 2px; }
.obs-preview { margin-top: 10px; display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
.obs-chip { display: inline-flex; align-items: center; padding: 5px 11px; border-radius: 999px; font-size: 12px; background: var(--obs-accent, var(--dsw-alias-brand-primary)); color: var(--dsw-alias-bg-base); }
.obs-btn { padding: 5px 10px; border-radius: 8px; border: 1px solid var(--dsw-alias-border-l1); background: var(--dsw-alias-bg-layer-2); color: inherit; font: inherit; font-size: 11.5px; cursor: pointer; }
.obs-btn:hover { border-color: var(--dsw-alias-brand-primary); }
.obs-btn[aria-pressed="true"] { border-color: var(--dsw-alias-brand-primary); }
.obs-hint { margin-top: 8px; font-size: 11px; line-height: 1.5; color: var(--dsw-alias-label-secondary); }
.obs-toast { display: flex; gap: 8px; align-items: center; padding: 8px 12px; border-radius: 10px; border: 1px solid var(--dsw-alias-border-l1); background: var(--dsw-alias-bg-layer-1); font-size: 12px; word-break: break-all; }
.obs-toast[data-kind="error"] { border-color: var(--dsw-alias-state-error-primary); color: var(--dsw-alias-state-error-primary); }
.obs-mood { display: flex; flex-direction: column; gap: 8px; }
.obs-mood-main { display: flex; align-items: center; gap: 10px; }
.obs-mood-emoji { font-size: 28px; line-height: 1; }
.obs-mood-val { font-size: 15px; font-weight: 600; font-variant-numeric: tabular-nums; }
.obs-mood-reason { font-size: 11.5px; line-height: 1.45; color: var(--dsw-alias-label-secondary); display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
.obs-dims { display: flex; flex-wrap: wrap; gap: 4px; }
.obs-dim { font-size: 10.5px; color: var(--dsw-alias-label-secondary); border: 1px solid var(--dsw-alias-border-l1); border-radius: 999px; padding: 1px 7px; }
.obs-foot { display: flex; justify-content: space-between; gap: 12px; flex-wrap: wrap; margin-top: 2px; font-size: 11px; color: var(--dsw-alias-label-secondary); }
.obs-kbd { font: inherit; font-size: 10.5px; padding: 1px 5px; border-radius: 5px; border: 1px solid var(--dsw-alias-border-l1); background: var(--dsw-alias-bg-layer-2); }
@media (max-width: 900px) { .obs-home { grid-template-columns: 1fr; } }
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
      right: () => svg(15, [h('rect', { key: 'a', x: 3, y: 4, width: 18, height: 16, rx: 2 }), h('path', { key: 'b', d: 'M15 4v16' })]),
      theme: () => svg(15, [h('circle', { key: 'a', cx: 12, cy: 12, r: 4.2 }), h('path', { key: 'b', d: 'M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5.2 5.2l1.6 1.6M17.2 17.2l1.6 1.6M18.8 5.2l-1.6 1.6M6.8 17.2l-1.6 1.6' })]),
      lang: () => svg(15, [h('circle', { key: 'a', cx: 12, cy: 12, r: 8.6 }), h('path', { key: 'b', d: 'M3.6 12h16.8' }), h('path', { key: 'c', d: 'M12 3.4c2.6 2.4 4 5.4 4 8.6s-1.4 6.2-4 8.6c-2.6-2.4-4-5.4-4-8.6s1.4-6.2 4-8.6z' })]),
    };

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
              r: 0.4 + Math.random() * 1.25,
              a: 0.22 + Math.random() * 0.5,
              vx: (Math.random() - 0.5) * 0.004,
              vy: (Math.random() - 0.5) * 0.004,
              phase: Math.random() * Math.PI * 2,
            });
          }
        };

        const color = () => {
          const value = window.getComputedStyle(canvas).color;
          return value && value !== 'rgba(0, 0, 0, 0)' ? value : 'currentColor';
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
            paint.globalAlpha = reduced ? star.a : star.a * (0.55 + 0.45 * Math.sin(time / 1100 + star.phase));
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

          const useSessions = props ? props.useSessions : undefined;
          const list = useSessions ? useSessions((state) => state) : null;

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

          const openSession = (id) => {
            try {
              if (sessionService) sessionService.open(id);
              if (layout) layout.selectPanel('conversation');
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
            rows.sort((left, right) => (right.updatedAt || 0) - (left.updatedAt || 0));
            const needle = filter.trim().toLowerCase();
            const matched = needle
              ? rows.filter(
                  (row) =>
                    String(row.displayTitle || '').toLowerCase().includes(needle) ||
                    String(row.cwd || '').toLowerCase().includes(needle),
                )
              : rows;
            return matched.slice(0, 8);
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
              id: 'new',
              icon: 'plus',
              title: tr('act_new'),
              description: tr('act_new_d'),
              run: workspace
                ? () => {
                    workspace.startSession();
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
              run: layout ? () => layout.toggleSidebar() : null,
            },
            {
              id: 'right',
              icon: 'right',
              title: tr('act_right'),
              description: tr('act_right_d'),
              run: layout ? () => layout.openRightbar(false, false) : null,
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

          const sessionsCard = h(
            'div',
            { className: 'obs-card' },
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
                    : summaries.map((summary) =>
                        h(
                          'button',
                          {
                            key: summary.id,
                            type: 'button',
                            className: 'obs-session',
                            'data-current': summary.id === currentId ? 'true' : 'false',
                            title: String(summary.displayTitle || summary.id),
                            onClick: () => openSession(summary.id),
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
                        ),
                      ),
                ),
            currentId
              ? h(
                  'div',
                  { style: { marginTop: 8, display: 'flex', justifyContent: 'flex-end' } },
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
                  h(Clock, { now, label: timeLabel, size: 84 }),
                  h(
                    'div',
                    { style: { minWidth: 0, flex: '1 1 220px' } },
                    h('div', { className: 'obs-greet' }, greeting),
                    h('div', { className: 'obs-time' }, timeLabel),
                    h('div', { className: 'obs-date' }, dateLabel + ' · ' + (Intl.DateTimeFormat().resolvedOptions().timeZone || 'local')),
                  ),
                  h(
                    'div',
                    { className: 'obs-matrix', style: { flex: '2 1 360px' } },
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
                h('div', { className: 'obs-col' }, sessionsCard),
                h(
                  'div',
                  { className: 'obs-col' },
                  h(
                    'div',
                    { className: 'obs-card' },
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
                    { className: 'obs-card' },
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
                    { className: 'obs-card' },
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
                h('span', null, '@local/observatory · ' + tr('version') + ' ' + VERSION),
              ),
            ),
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
        ctx.effect(() => {
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
