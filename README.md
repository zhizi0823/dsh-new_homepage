# 观测台 · @local/observatory

> 把 DSH 的 Web 界面变成一页能用的首页：打开就看见状态，抬手就能进会话。

当前版本 **1.2.0**（内部构建号 3）。变更记录见 [CHANGELOG.md](CHANGELOG.md)。

[![](https://img.shields.io/badge/powered_by-dsh-4D6BFE?style=flat-square&logo=deepseek&logoColor=white)](https://github.com/deepseek-ai/deepseek-harness)
[![](https://img.shields.io/github/v/release/zhizi0823/dsh-new_homepage?style=flat-square&label=version)](https://github.com/zhizi0823/dsh-new_homepage/releases)
[![](https://img.shields.io/github/license/zhizi0823/dsh-new_homepage?style=flat-square)](LICENSE)
[![](https://img.shields.io/badge/platform-DSH%20Web-4D6BFE?style=flat-square)](https://github.com/deepseek-ai/deepseek-harness)
[![](https://img.shields.io/github/actions/workflow/status/zhizi0823/dsh-new_homepage/test.yml?branch=main&style=flat-square&label=tests)](https://github.com/zhizi0823/dsh-new_homepage/actions)
[![](https://img.shields.io/github/last-commit/zhizi0823/dsh-new_homepage?style=flat-square)](https://github.com/zhizi0823/dsh-new_homepage/commits/main)

![插件图标](icon.svg)

## 为什么要有它

DSH 默认落在对话里——要换会话得去左边翻，要看运行状态得翻设置，要开新会话得先找到入口。
观测台把这些收进一页：**每次打开/刷新先落在这里**，从这儿决定"接着聊、开新的、还是调一下"。

它只读公开的客户端服务、不碰会话正文、不改任何数据。

## 功能

### 一屏布局

整个页面按视口高度自适应，**不产生整页滚动**：头部、穹顶、底部状态条高度固定，中间面板吃掉剩余高度。

| 视口宽 | 布局 |
|---|---|
| > 1000px | 左右两栏：左「最近会话」，右「心情 / 驾驶台 / 调色台」 |
| ≤ 1000px | 状态矩阵折成 3×2，穹顶变两行 |
| ≤ 860px | 单栏：会话在上，心情 / 驾驶台 / 调色台并排在下 |
| ≤ 620px | 状态矩阵 2 列，隐藏调色台 |
| 高度 ≤ 720px | 收紧内边距与行距，隐藏提示文字 |

会话列表在卡片内部滚动，不会把整页撑高；其余区域按剩余高度伸缩并裁切。

### 跳转面板（Ctrl / Cmd + K）

一个只在本页生效的命令面板：输入即筛选，把一个工作区里的**动作**（新建、打开文件夹、回到对话、收左栏、切主题…）和**会话**放在同一个列表里；`↑ ↓` 选择，`回车` 打开，`Esc` 关闭。驾驶台第一项「跳转」也能打开它。

### 置顶会话

会话行右侧有钉子（悬停出现）：点一下钉到列表顶部，再点取消。置顶记在浏览器 `localStorage` 里，刷新仍在；置顶组内部仍按最近活动排序。

### 开机落在这里

页脚中间的开关控制**下次加载是否自动落到观测台**。关掉后，刷新/重开会停在 DSH 自己的默认面板；设置在 `localStorage`，下次加载生效（本页不立刻跳走）。

### 穹顶

- **星场**：canvas 粒子，DPR 自适应；切到后台自动停帧；`prefers-reduced-motion` 时静止。
- **机械表盘**：秒针连续走，配数字时钟、长日期、本地时区。
- **问候语**：早上好 / 下午好 / 晚上好 / 夜深了，按本地时间自动换。

### 运行状态

六格实时信息，每秒刷新：

| 格 | 内容 |
|---|---|
| 主题 | 偏好（跟随系统 / 浅色 / 深色）+ 当前主题 id |
| 语言 | 当前活动 locale |
| 视口 | 宽 × 高 · DPR |
| 动效 | 完整 / 已减弱 |
| 网络 | 在线 / 离线 |
| 可见性 | 前台 / 后台 |

### 最近会话

- 按最近活动倒序，最多 12 条；
- 每条：标题、目录名、相对时间（刚刚 / N 分钟前 / N 小时前 / 昨天 / 日期）、状态点；
- **状态点**：灰＝闲置，绿＝进行中，品牌色＝有新回复未读；
- 顶部筛选框按标题或路径实时过滤；
- 行右侧的钉子把会话钉到顶部（`localStorage` 持久化，置顶组内仍按时间排）；
- 点一条：`uiWorkspace.openSession(sessionId)` 切进那个会话并切到对话面板（`openSession` 自带 `reveal`，我们不再补 `selectPanel`，否则会 abort 它的导航）；
- 「回到当前会话」按钮依赖会话列表快照里的 `current` 字段：当前这版 DSH 的 `SessionListState` 没有它，所以按钮不会出现（代码保留，字段回来就自动生效）。

### 心情（可选）

装了 [`dsh-feiyu-mood`](https://github.com/Yuuyuko-uu/dsh-feiyu-mood) 时，读它的同源接口
`/dsh-feiyu-mood/state`，显示表情、心情值、档位、最近一次理由与还没消退的情绪。

- 每 15 秒刷新一次；
- 心情值变化时记一个采样点（最多 48 个，存在 `localStorage`），卡片里画成一条迷你曲线；
- 没装或接口拒绝：显示「心情插件未连接」，**连续两次失败后停止轮询**（不往对方日志里刷拒绝记录）；
- 它是纯可选的一面：没有这个插件，页面其它部分完全不受影响。

### 驾驶台

七个动作，全部调用真实服务，服务缺失时按钮自动禁用而不是报错：

| 动作 | 调用的接口 |
|---|---|
| 跳转 | 打开命令面板（与 `Ctrl/Cmd+K` 同一个，纯前端） |
| 新建会话 | 先弹工作区选择器；选中后 `sessions.create({ workspaceId })` → `uiWorkspace.openSession(id)`（无工作区时退回 `startSession()`） |
| 打开文件夹 | `uiWorkspace.pickDirectory()`（选中的路径会留在页面上） |
| 回到对话 | `layout.selectPanel('conversation')` |
| 收起 / 展开左栏 | `layout.toggleSidebar()`（与左栏自带的展开按钮同一条调用） |
| 切换主题 | `theme.setTheme()`，跟随系统 → 浅色 → 深色 |
| 切换语言 | `locale.setLocale()`，在已注册语言间轮换 |

### 调色台

- 六个预设强调色 + 「跟随主题」；
- 页内先预览；
- 「试用到界面」用 `theme.overrideTokens()` 叠一层**临时令牌**，实时改整个界面的强调色；
- 「跟随心情」：按当前心情值在冷色→暖色之间映射强调色，同样走临时令牌层，关闭即还原；
- 离开本页或取消试用即还原——不会把用户的主题改坏。

## 使用

| 做什么 | 怎么做 |
|---|---|
| 打开观测台 | 左侧图标栏的望远镜，或 `Ctrl / Cmd + Shift + O` |
| 搜索并跳转 | `Ctrl / Cmd + K`，或驾驶台「跳转」 |
| 回到会话 | 点「最近会话」里的任意一条，或驾驶台的「回到对话」 |
| 钉住常用会话 | 会话行右侧的钉子 |
| 关掉自动落地 | 页脚的「开机落在这里」开关 |

首页默认每次加载落一次：插件在启动 400ms 后调一次 `layout.selectPanel('observatory')`。

## 安装

```bash
# 在 DSH 里：设置 → 插件 → 安装，target 填本目录绝对路径
# 或命令行：
dsh plugin --profile desktop add link:<本目录绝对路径>
```

装完**刷新页面**；页脚应显示 `版本 1.1.0`，若不是，说明客户端模块还是旧的，重启一次 DSH。

卸载：`dsh plugin --profile desktop remove @local/observatory`，或插件管理器里移除。

## 兼容性与依赖

- **平台**：DSH Web 客户端插件（`platform: web`）。
- **槽位**：`main`（key `observatory`）与 `sidebar.panellist`；两者都是公开槽位，注册不替换任何内置内容。
- **必需服务**：`slots`、`locale`。
- **可选服务**：`theme`、`layout`、`uiWorkspace`、`sessions`——缺哪个，对应区域降级。
- **语言**：中英双语，跟随 DSH 的活动 locale；文案全部走 locale 注册表。
- **主题**：只用 `--dsw-alias-*` 令牌，明暗主题都能用；强调色由调色台临时覆盖。

## 已知限制

1. **纯客户端**：没有 Host 逻辑，不读会话正文、不写任何数据。
2. **自动落地每页一次**：如果你更希望"只在没有当前会话时才落到首页"，把 `client.js` 末尾那个 400ms 的 `selectPanel('observatory')` 效果删掉即可（或改成先判断 `sessions` 的 `current`）。
3. **心情卡依赖第三方路由**：`dsh-feiyu-mood` 的接口路径或鉴权方式变了，卡片会退化成「未连接」，需要跟着改一行 URL。
4. **视觉未在自动化环境验证**：本仓库的测试覆盖结构、文案、类名与交互逻辑，**不覆盖像素**。窄屏（< 900px 折单列）、星场密度、表盘比例需要在真实页面里看。
5. **不使用 `useWorkspaces`**：工作区信息暂时通过会话的 `cwd` 反推目录名，没有单独的工作区分组。

## 开发

### 目录

```
index.js           宿主半边（空实现，全部逻辑在客户端）
client.js          客户端半边：页面、图标、样式、中英文案
cordis.patch.yml   插入一行插件
locale/en.json     插件管理器显示用的英文标题与描述
locale/zh.json     中文标题与描述
icon.svg           插件图标（望远镜）
test/audit.mjs     静态体检
test/smoke.cjs     冒烟渲染
README.md          本文
CHANGELOG.md       变更记录
```

### 测试

```bash
node test/audit.mjs   # 文案键覆盖 / 图标覆盖 / CSS 括号与类名 / 规则粘连
node test/smoke.cjs   # 替身 React 单遍渲染：注册、会话列表、点击进入、快捷键、启动跳转
```

`smoke.cjs` 用一套极小的 React 替身跑整棵树，不需要浏览器、不碰 DSH，几毫秒出结果。
两者都通过之后再刷新页面看效果。

CI 在 [.github/workflows/test.yml](.github/workflows/test.yml)：每次 push 到 `main`、提 PR 或手动触发时，用 Node 22 跑上面这两条，README 顶部的 `tests` 徽章就是它的状态。

### 改哪里

| 想改 | 改哪里 |
|---|---|
| 文案 | `client.js` 里的 `ZH` / `EN` 两张表（键必须成对） |
| 强调色备选 | `client.js` 里的 `ACCENTS` |
| 布局与间距 | `client.js` 顶部的 `CSS` 字符串（类名统一 `obs-` 前缀） |
| 首页排序条数 | `summaries.slice(0, 12)` |
| 自动落地 | 文件末尾 400ms 的那个 `ctx.effect` |

## 许可

[MIT License](LICENSE) © 2026 zhizi0823

可以自由使用、修改、再分发和商用，保留版权与许可声明即可。图标为本项目手绘 SVG，随本项目一并按 MIT 授权。

> `package.json` 里的 `private: true` 只表示**不发布到 npm**，不影响 MIT 授权下的分发与使用。
