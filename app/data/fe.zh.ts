import type { ResumeBundle } from './types'
import { education, jobs } from './shared.zh'
import { uiZh } from './ui.zh'

/** 前端开发工程师 —— 来源：陈燕松-前端开发工程师.md */
export const feZh: ResumeBundle = {
  site: {
    title: '陈燕松 · 前端开发工程师',
    description:
      '陈燕松，9 年多企业级中后台前端。主导 4 个中后台系统的路由、权限与状态架构；10 万级列表滚动 20fps → 55fps、首屏接口 1.8s → 0.6s，并建立真实用户性能监控。广州，前端开发工程师。',
    url: 'https://cmrookie.github.io/personal-web/frontend/',
    updated: '2026.10',
  },

  profile: {
    name: '陈燕松',
    nameEn: 'CHEN YANSONG',
    role: '前端开发工程师',
    roleEn: 'Frontend Engineer',
    headline: 'vue 3 frontend',
    roles: ['中后台前端', '复杂界面与性能'],
    focus: '可观测性',
    pitch:
      '9 年多企业级中后台前端：医疗 SaaS、智慧 CRM、箱包 ERP、家居制造 ERP/CRM、数据平台，主导过 4 个中后台系统的路由、权限与状态架构。性能不只是调过 —— 建立了基线与真实用户监控，让后续迭代不敢把指标做回去。',
    location: '广州',
    status: '求职中',
    target: '前端开发工程师',
    salary: '15-18K',
    years: '12 年',
    age: '34 岁',
    phone: '18826474591',
    phoneDisplay: '188 2647 4591',
    email: '944727074@qq.com',
    github: 'https://github.com/CMrookie',
    gitee: 'https://gitee.com/rookie_c',
    industry: '4 套中后台 · ERP / CRM / 数据平台 / SaaS',
    education: '广州航海学院 · 计算机网络技术 · 大专',
  },

  sectionCopy: {
    strengths: '中后台前端、复杂界面与性能，做过的每一块都能拿出数字。',
    skills: '加粗为能独立交付的；每条都写清证据，面试可直接追问。',
    experience: '互联网医疗 → 企业服务 → 箱包皮具 ERP → 智慧 CRM → 家居制造 ERP / CRM → 独立开发。',
    work: '招聘平台后台与移动端、酒店系统，以及采购系统与电商小程序两段企业交付。',
    contact: '正在找广州的前端岗位，中后台与电商方向优先。简历里的每个数字都能在面试里展开讲，欢迎直接问细节。',
  },

  basicInfo: [
    { label: '工作年限', value: '12 年' },
    { label: '年龄', value: '34 岁' },
    { label: '学历', value: '大专 · 计算机网络技术' },
    { label: '求职意向', value: '前端开发工程师' },
    { label: '期望城市', value: '广州' },
    { label: '到岗时间', value: '随时' },
  ],

  strengths: [
    {
      title: '9 年多企业级中后台前端',
      body: '医疗 SaaS、智慧 CRM、箱包 ERP、家居制造 ERP/CRM、数据平台，主导过 4 个中后台系统的路由、权限与状态架构。',
    },
    {
      title: '复杂界面与性能优化有可追问的量化结果',
      body: '10 万级列表滚动 20fps → 55fps、首屏接口 1.8s → 0.6s；并建立性能基线与真实用户监控，让迭代不敢把指标做回去。',
    },
    {
      title: '权限与实时交互落地经验',
      body: 'RBAC 四级权限、按岗位 / 部门配置菜单与按钮权限；WebSocket 心跳续约与锁状态推送，处理断线重连与状态对齐。',
    },
    {
      title: '移动端 / 小程序有真实项目',
      body: 'Flutter 独立完成招聘平台移动端；React 完成酒店访客手机门户；Taro + Vue3 + NutUI 做过销售云移动端待办；原生小程序 / uni-app 做过 ERP 商家侧订单与库存查询。',
    },
  ],

  skillGroups: [
    {
      label: '前端框架',
      desc: 'Vue3 / React',
      core: ['Vue3 / Vue2', 'TypeScript', 'React + Ant Design'],
      items: ['主导 4 个中后台系统的路由、权限与状态架构', '独立完成酒店管理端与访客手机门户'],
    },
    {
      label: '复杂界面',
      desc: '列表 / 审批 / 看板',
      core: ['十万级列表虚拟滚动', '多级审批流与状态机式表单', 'ECharts 看板', 'BPMN 流程展示'],
      items: ['滚动 20fps → 55fps', '报表产出 1 个工作日 → 实时'],
    },
    {
      label: '性能与可观测性',
      desc: '真实用户采集',
      core: ['PerformanceObserver（LCP / INP / CLS）', '阈值告警', '性能基线'],
      items: ['性能回归排查', '结构化日志', '前端错误统一封装'],
    },
    {
      label: '权限体系',
      desc: 'RBAC',
      core: ['RBAC 四级权限', '按岗位 / 部门配置菜单与按钮'],
      items: ['动态路由与权限指令'],
    },
    {
      label: '实时交互',
      desc: '长连接',
      core: ['WebSocket'],
      items: ['心跳续约与断线重连', '快照 + 增量对齐', '锁状态实时推送与冲突禁用'],
    },
    {
      label: '工程化',
      desc: '构建与迁移',
      core: ['Vite / Webpack', 'vue-tsc 类型门禁', 'OpenAPI'],
      items: ['codemod 批量迁移（Element UI → Element Plus，数百文件）', '结构化日志'],
    },
    {
      label: '移动端 / 小程序',
      desc: '四端都做过',
      core: ['Flutter + Dart', 'React', 'Taro + Vue3 + NutUI', '原生小程序 / uni-app'],
      items: ['招聘平台移动端', '酒店访客手机门户', '销售云移动端待办（微信 / 支付宝）', 'ERP 商家侧订单与库存查询'],
    },
    {
      label: '后端了解',
      desc: '能读也能写',
      core: ['Rust', 'actix-web', 'sqlx', 'PostgreSQL', 'Java 21 + Spring Boot'],
      items: ['独立交付过个人项目服务端', '完成同一业务 Rust → Java 移植', '能读接口契约、定位前后端联调问题'],
    },
    {
      label: '基础工具',
      desc: '日常',
      core: ['Git', 'Linux', 'Nginx', 'Docker Compose', 'WebRTC'],
      items: [],
    },
  ],

  jobs,

  projects: [
    {
      title: '职聘 · 招聘平台后台管理端',
      kicker: '个人项目 · 前端开发',
      period: '2026.09 — 至今',
      intro:
        '求职者、招聘者、审核员三种角色共用的招聘平台后台管理端，覆盖登录、用户管理、审核账号、投诉审核、职位与企业档案、审核工作量看板、投诉等级规则等业务页面。',
      stack: ['Vue3', 'TypeScript', 'Vite', 'naive-ui', 'WebSocket'],
      highlights: [
        '角色收敛的路由与菜单：admin 与 reviewer 共用同一套角色判定函数与类型，路由守卫把越权访问直接打回落地页 → 新增角色只改一处判定，不在每个页面重写 v-if。',
        '认领锁与实时状态：投诉审核打开即认领、定时心跳续约、关闭未提交自动释放；锁状态变更通过 WebSocket 推送到同组审核员，他人持锁时操作自动禁用并显示持锁人；心跳超时（断网 / 页面挂起）触发服务端锁回收，断线重连后以快照 + 增量对齐，避免死锁与重复处理。',
        '锁交互可观测口径：锁等待时长、认领冲突率、心跳续约失败次数写入结构化日志并接入看板；据此定位并修复一次因客户端时钟偏差导致的续约失败。',
        '零额外依赖的工程取舍：图标用内联 SVG、状态用模块级单例而不引 Pinia、自研图表组件而不引图表库 → 依赖面小、构建快、升级不被第三方卡住。',
        '接口与错误统一封装：请求层统一解析错误体，401 自动清理令牌并登出；服务端错误契约单一出口，5xx 脱敏。',
      ],
      repos: [{ label: '后台管理端', url: 'https://github.com/CMrookie/meow-star-careers-admin' }],
    },
    {
      title: '职聘 · 招聘平台移动端（Flutter）',
      kicker: '个人项目 · 移动端开发',
      period: '2026.09 — 至今',
      intro:
        '职聘平台的求职者 / 招聘者移动端，与 Web 后台共用同一套服务端接口、错误契约与角色权限模型。',
      stack: ['Flutter', 'Dart', 'RESTful API'],
      highlights: [
        '独立完成核心页面与路由组织：登录鉴权、职位浏览、职位详情、个人中心等流程，接口契约与 Web 后台保持一致。',
        '网络层统一封装：错误体解析、401 令牌失效登出、加载 / 空态 / 失败重试统一处理，页面层只关注业务状态。',
        '角色入口控制：与后台管理端共用角色判定逻辑，按角色控制移动端入口可见性。',
        '组件化与体验：拆分列表项、筛选栏、状态占位组件，保证列表滚动、弱网加载与空态展示的一致性。',
      ],
      repos: [{ label: '移动端', url: 'https://github.com/CMrookie/meow_star_careers_app' }],
    },
    {
      title: '酒店电子钥匙管理系统',
      kicker: '个人项目 · 管理端 + 访客手机门户',
      period: '2026',
      intro:
        '酒店门锁硬件厂商各异，目标是把「门锁」变成可替换的底层，避免换锁厂就重改整套业务逻辑。',
      stack: ['React', 'Ant Design', 'JWT', 'WebSocket', 'Express', 'SQLite'],
      highlights: [
        '管理端（React + Ant Design）：实现员工、房间、门锁、钥匙、审计日志等管理页面；四角色模块级权限；四房态流转与房间 / 门锁一对一绑定。',
        '门锁状态实时看板：在线状态与电量通过 WebSocket 推送增量更新，房态看板无需轮询即可反映开锁 / 离线事件；断线重连后以快照 + 增量对齐，避免重连期间状态空洞。',
        '访客手机门户（移动端 Web）：访客通过手机浏览器完成钥匙 / 门锁相关自助操作；统一调用门锁适配器入口，不感知厂商差异；做响应式布局、触控反馈与弱网重试。',
        '四种开锁方式留痕审计：手机 NFC / 员工卡 / 前台远程 / 机械钥匙，每次开锁记录成功失败与原因。',
      ],
    },
    {
      title: '采购系统二次开发（OMS + MES）',
      kicker: '广州玄武无线 · 前端开发',
      period: '2020.09 — 2022.04',
      intro:
        '公司采购的订单管理系统与制造执行系统，需在不改动底层框架的前提下持续做业务扩展 —— 否则厂商下一版本无法合并。',
      stack: ['Vue2', 'Element UI', 'ECharts', 'RuoYi'],
      highlights: [
        'OMS 订单系统：修改订单与商品模块、定位并修复问题，改动全部收敛在业务层、没有侵入底层框架，后续厂商升级可合并；菜单与数据字典走配置，新增角色与权限项不改代码。',
        'MES 制造执行系统：用 ECharts 做多指标趋势与占比图，替代 Excel 汇总日报；明细列表分页与字段裁剪；页面产量、库存、工序进度与后台 ERP 同一套数据源。',
        '持续迭代 1 年半，覆盖订单、商品、权限、生产看板等多个业务的日常需求。',
      ],
    },
  ],

  education,

  facts: [
    { label: '语言', value: '中文（母语）' },
    { label: '可接受', value: '广州全境；接受早期团队的高强度节奏' },
  ],

  ui: uiZh,
}
