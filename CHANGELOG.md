# 变更记录

本文件记录 `@local/observatory` 的版本变更。
格式参考 [Keep a Changelog](https://keepachangelog.com/zh-CN/1.1.0/)，版本号遵循语义化版本。

## [1.0.0] - 2026-11-15

首个正式版本。合并了开发期三轮迭代的能力，对外统一为 `1.0.0`。

### 新增

- **全页面板**：注册 `main` 槽位（key `observatory`）与 `sidebar.panellist` 图标入口，点图标或按 `Ctrl / Cmd + Shift + O` 切换。
- **穹顶**：canvas 星场（DPR 自适应、切后台停帧、尊重 `prefers-reduced-motion`）、秒针连续走的机械表盘、按时间切换的问候语、日期与时区。
- **运行状态矩阵**：主题、语言、视口与 DPR、动效、网络、前台/后台六格，每秒刷新。
- **最近会话**：
  - 按 `updatedAt` 倒序，最多 12 条；
  - 标题、目录名、相对时间；
  - 状态点：灰＝闲置、绿＝进行中、品牌色＝有新回复；
  - 按标题/路径实时筛选；
  - 点击经 `sessions.open()` 进入会话并切到对话面板；
  - 有当前会话时显示「回到当前会话」。
- **单屏布局**：页面高度撑满视口、**无整页滚动**；断点 1000 / 860 / 620 分别处理矩阵折行、单栏重排、隐藏调色台；高度 ≤ 720 时收紧间距并隐藏提示。会话列表在卡片内滚动，其余区域按剩余高度伸缩裁切。
- **心情卡（可选）**：读取 `dsh-feiyu-mood` 的 `/dsh-feiyu-mood/state`，显示表情、数值、档位、最近理由与未消退情绪；每 15 秒刷新，失败两次自动停止轮询。
- **驾驶台**：新建会话、打开文件夹、回到对话、收起侧栏、打开右栏、轮换主题、轮换语言——均为真实服务调用，服务缺失时按钮禁用。
- **调色台**：六个强调色、页内预览、「试用到界面」通过 `theme.overrideTokens()` 叠临时令牌层，离页即还原。
- **双语文案**：中英各一套，注册到 `plugin.observatory` 命名空间，跟随活动 locale。

### 工程

- 全部颜色使用 `--dsw-alias-*` 主题令牌，明暗主题通用。
- 所有副作用（定时器、事件监听、`requestAnimationFrame`、`ResizeObserver`、令牌层）都有对应的清理。
- `test/audit.mjs`：文案键覆盖、图标覆盖、CSS 括号平衡、类名与样式对应、规则粘连检查。
- `test/smoke.cjs`：用极小 React 替身渲染整棵树，验证注册、会话列表排序、点击进入、快捷键、启动跳转、空状态。

### 已知限制

- 纯客户端实现，不读写会话数据以外的任何内容（只读会话列表元信息）。
- 首页自动落地每页一次，尚无开关。
- 心情卡依赖第三方插件的同源路由，路径或鉴权变化时需要跟进。
- 自动化测试不覆盖像素级视觉；本次用无头 Edge 在 1440×900、1100×760、900×700、760×640 四档截图核对过"无整页滚动"，但真实 DSH 外壳的内边距仍建议肉眼确认一次。

## [1.1.0] - 2026-11-16

内部构建号 **2**。这一版修掉了首版落地后发现的交互问题，并补上「新建会话先选工作区」。

### 新增

- **新建会话先选工作区**：点「新建会话」弹出居中的工作区选择器（`Esc` / 点遮罩 / 「取消」关闭），列出工作区标题与路径；选中后 `sessions.create({ workspaceId })` → `uiWorkspace.openSession(id)`，直接落在空白新会话的对话页。一个工作区都没有时退回 `startSession()`。
- 工作区列表从槽位自带的 `useWorkspaces` 读取；它的快照形状没有公开类型，做了防御式归一化（`items` / `workspaces` / `byId` / 裸数组），并从 `startSession` 源码确认本版是 `{ items: WorkspaceView[] }`。
- 左栏按钮点了以后会弹一条「左栏已切换」回执，便于区分"点击没到"和"调用了没生效"。

### 修复

- **点会话报 `sessionService.open is not a function`**：`ISessions` 服务面没有 `open()`，选会话改走 `uiWorkspace.openSession(sessionId)`（`SessionTarget = SessionId | SubagentAddress`）。测试里让旧的 `sessions.open` 一调用就抛错。
- **选完工作区只跳到最近一次对话、新建没执行**：`startSession()` 内部是异步导航（`beginNavigation()` + 连接工作区），紧跟其后的 `layout.selectPanel('conversation')` 会把导航 **abort** 掉，新建被取消。已删掉选工作区、选会话后面两处多余的 `selectPanel`。
- **新建后面板不切换**：`startSession()` 结尾是 `replaceMain(..., "preserve")`，只选会话、不 reveal 对话面板。改为显式 `create` + `openSession`，后者走 `"reveal"` 分支（`selectPanel(null)`）。
- **移除驾驶台「打开右栏」**：`openRightbar(track)` 的 `track=false` 会开出 0px 宽的列，`true` 又会因为右栏没有内容而变成一整列空白；同时它和左栏容易混淆。

### 调整

- 侧栏按钮改名为「收起 / 展开左栏」，行为仍是 `layout.toggleSidebar()`——与左栏自带的展开按钮完全同一条调用。

### 测试

- 冒烟测试换成**带状态的最小 React**（最多 8 轮收敛），覆盖：会话行点击 → `openSession`；新建 → 弹窗 → 选工作区 → `create` → `openSession` → 弹窗关闭；并断言这些路径**不会**再补 `selectPanel('conversation')`。
- 静态体检 `test/audit.mjs`：文案键中英对齐、图标引用、CSS 括号、类名与规则对应、规则粘连。

### 已知限制

- 当前 DSH 的 `SessionListState` 没有 `current` 字段，「回到当前会话」按钮不会出现（代码保留，字段回来即生效）。
- 自动化测试仍不覆盖像素；本轮用无头 Edge 在 1440×900 / 1100×760 / 900×700 / 760×640 四档核对过"无整页滚动"，并单独截图检查了工作区选择器。

## 未发布

- 计划：自动落地改为可配置（仅在无当前会话时落地）。
- 计划：按工作区分组会话（`useWorkspaces`）。
- 计划：心情卡支持点击跳转到 `设置 → 鱼的心情`。
