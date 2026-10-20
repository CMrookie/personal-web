import type { ResumeBundle } from './types'
import { education, jobs } from './shared.zh'
import { uiZh } from './ui.zh'

/** 全栈开发工程师 —— 来源：陈燕松-全栈开发工程师.md */
export const stackZh: ResumeBundle = {
  site: {
    title: '陈燕松 · 全栈开发工程师',
    description:
      '陈燕松，9 年多企业级中后台前端 + 独立交付后端与移动端。Rust 服务端、Vue3 后台、Flutter 移动端与 React 酒店系统均为独立完成；10 万级列表 20fps → 55fps。广州，全栈开发工程师。',
    url: 'https://cmrookie.github.io/personal-web/',
    updated: '2026.10',
  },

  profile: {
    name: '陈燕松',
    nameEn: 'CHEN YANSONG',
    role: '全栈开发工程师',
    roleEn: 'Full-stack Engineer',
    headline: 'full-stack',
    roles: ['中后台前端', 'Rust 后端'],
    focus: '三端独立交付',
    pitch:
      '9 年多企业级中后台前端，主导过 4 个中后台系统的路由、权限与状态架构。后端能独立交付：Rust 写完招聘平台服务端，同一业务再移植到 Java 21 + Spring Boot。招聘平台三端与酒店系统都是一个人走完的。',
    location: '广州',
    status: '求职中',
    target: '全栈开发工程师',
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
    strengths: '中后台前端、后端与移动端，一个人能走完整条链路。',
    skills: '加粗为能独立交付的；每条都写清证据，面试可直接追问。',
    experience: '互联网医疗 → 企业服务 → 箱包皮具 ERP → 智慧 CRM → 家居制造 ERP / CRM → 独立开发。',
    work: '招聘平台三端、酒店电子钥匙系统，以及采购系统与电商小程序两段企业交付。',
    contact: '正在找广州的全栈岗位，中后台与制造业方向优先。简历里的每个数字都能在面试里展开讲，欢迎直接问细节。',
  },

  basicInfo: [
    { label: '工作年限', value: '12 年' },
    { label: '年龄', value: '34 岁' },
    { label: '学历', value: '大专 · 计算机网络技术' },
    { label: '求职意向', value: '全栈开发工程师' },
    { label: '期望城市', value: '广州' },
    { label: '到岗时间', value: '随时' },
  ],

  strengths: [
    {
      title: '9 年多企业级中后台前端',
      body: '医疗 SaaS、智慧 CRM、箱包 ERP、家居制造 ERP/CRM、数据平台，主导过 4 个中后台系统的路由、权限与状态架构。',
    },
    {
      title: '后端项目级独立交付',
      body: 'Rust 写完招聘平台服务端，真实 PostgreSQL 集成测试（每例独立建库、重放全部迁移）；同一业务移植到 Java 21 + Spring Boot，接口契约与数据模型保持一致。',
    },
    {
      title: '三端全链路自己走通',
      body: 'Rust 服务端、Vue3 后台、Flutter 移动端同一人完成，接口契约与数据流自己定义；另用 React 完成酒店管理端与访客手机门户。',
    },
    {
      title: '复杂场景有可追问的量化结果与观测口径',
      body: '10 万级列表 20fps → 55fps、首屏接口 1.8s → 0.6s，并建立真实用户性能采集与阈值告警；RBAC 四级权限；WebSocket 心跳续约与锁状态推送；ECharts 看板将报表产出从 1 个工作日缩短到实时。',
    },
  ],

  skillGroups: [
    {
      label: '后端',
      desc: 'Rust / Java',
      core: ['Rust', 'actix-web', 'sqlx', 'PostgreSQL', 'Java 21', 'Spring Boot', 'Spring JDBC'],
      items: [
        '独立交付招聘平台服务端',
        '真实库集成测试（每例独立建库、重放全部迁移）',
        '同一业务 Rust → Java 移植，接口契约与数据模型保持一致',
      ],
    },
    {
      label: '数据库',
      desc: 'PostgreSQL / MySQL',
      core: ['PostgreSQL', 'MySQL'],
      items: ['迁移管理', '部分索引', '条件更新做并发锁', 'EXPLAIN ANALYZE 读执行计划'],
    },
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
      items: ['性能回归排查', '结构化日志', '前后端错误契约统一封装'],
    },
    {
      label: '实时交互',
      desc: '长连接',
      core: ['WebSocket'],
      items: ['心跳续约与断线重连', '快照 + 增量对齐', '锁状态实时推送与冲突禁用'],
    },
    {
      label: '移动端 / 小程序',
      desc: '四端都做过',
      core: ['Flutter + Dart', 'React', 'Taro + Vue3 + NutUI', '原生小程序 / uni-app'],
      items: ['招聘平台移动端', '酒店访客手机门户', '销售云移动端待办（微信 / 支付宝）', 'ERP 商家侧订单与库存查询'],
    },
    {
      label: '工程化',
      desc: '构建与迁移',
      core: ['Vite / Webpack', 'vue-tsc 类型门禁', 'OpenAPI'],
      items: ['codemod 批量迁移（Element UI → Element Plus，数百文件）', '结构化日志'],
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
      title: '职聘 · 招聘平台',
      kicker: '个人项目 · 服务端 + Web 后台 + Flutter 移动端',
      period: '2026.09 — 至今',
      intro:
        '求职者、招聘者、审核员三种角色共用的招聘平台，服务端、Web 后台、移动端由同一人完成，接口契约与数据流自己定义。',
      stack: ['Rust', 'actix-web', 'sqlx', 'PostgreSQL', 'WebSocket', 'Vue3', 'TypeScript', 'Vite', 'naive-ui', 'Flutter', 'Dart'],
      highlights: [
        '服务端独立交付：用 Rust + actix-web + sqlx 写完招聘平台服务端，配真实 PostgreSQL 集成测试（每例独立建库、重放全部迁移）；并将同一套业务移植到 Java 21 + Spring Boot，接口契约与数据模型保持一致。',
        'Web 后台角色收敛：Vue3 + TypeScript 中后台，admin 与 reviewer 共用同一套角色判定函数与类型，路由守卫把越权访问打回落地页，新增角色只改一处判定；请求层统一解析错误体，401 自动清理令牌并登出，服务端错误契约单一出口，5xx 脱敏。',
        '认领锁与实时状态：投诉审核打开即认领、定时心跳续约、关闭未提交自动释放；锁状态变更通过 WebSocket 推送到同组审核员，他人持锁时操作自动禁用并显示持锁人；心跳超时触发服务端锁回收，断线重连后以快照 + 增量对齐，避免死锁与重复处理。',
        '锁交互可观测口径：锁等待时长、认领冲突率、心跳续约失败次数写入结构化日志并接入看板；据此定位并修复一次因客户端时钟偏差导致的续约失败。',
        'Flutter 移动端：独立完成登录鉴权、职位浏览、职位详情、个人中心等核心页面；网络层统一解析错误体、401 自动登出、加载 / 空态 / 失败重试；与后台共用角色判定逻辑，按角色控制入口可见性。',
      ],
      repos: [
        { label: '服务端', url: 'https://github.com/CMrookie/meow-star-careers' },
        { label: '后台管理端', url: 'https://github.com/CMrookie/meow-star-careers-admin' },
        { label: '移动端', url: 'https://github.com/CMrookie/meow_star_careers_app' },
      ],
    },
    {
      title: '酒店电子钥匙管理系统',
      kicker: '个人项目 · 全栈独立完成',
      period: '2026',
      intro:
        '酒店门锁硬件厂商各异，目标是把「门锁」变成可替换的底层，避免换锁厂就重改整套业务逻辑。Express + SQLite 后端，React + Ant Design 管理端与访客手机门户。',
      stack: ['Express', 'SQLite', 'React', 'Ant Design', 'JWT', 'bcrypt', 'WebSocket'],
      highlights: [
        '适配器模式收敛门锁操作：统一入口 + 适配器模式（内置模拟门锁、预留真实厂商适配器）→ 换锁厂只需替换适配器，业务代码 0 改动。',
        '钥匙完整生命周期：发卡 / 挂失 / 补发 / 作废 / 过期 / 续住顺延；退房自动注销并转清洁，不依赖前台手动操作。',
        '四种开锁方式留痕审计：手机 NFC / 员工卡 / 前台远程 / 机械钥匙，每次开锁记录成功失败与原因，配合员工操作日志可追溯。',
        '四角色 + 四房态 + 数据看板：管理员 / 经理 / 前台 / 客房服务员模块级权限；空闲 / 已入住 / 清洁中 / 维修中四态流转；房态分布、入住率、近 14 天开锁趋势、门锁在线状态与电量、异常提醒。',
        '门锁状态实时看板：在线状态与电量通过 WebSocket 推送增量更新，房态看板无需全量刷新；断线重连后以快照 + 增量对齐，避免重连期间状态空洞。',
        '访客手机门户：React 移动端 Web，访客在手机浏览器完成钥匙 / 门锁自助操作，统一调用门锁适配器入口，不感知厂商差异；做响应式布局、触控反馈与弱网重试。',
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
    {
      title: '电商小程序（多端）',
      kicker: '多家公司 · 前端开发',
      period: '2018 — 2024',
      intro: '同一套电商业务要覆盖多个小程序平台，每个平台各写一份的话维护成本随平台数线性增长。',
      stack: ['Taro', 'Vue3', 'NutUI', '原生小程序', 'uni-app'],
      highlights: [
        '一套代码多端：用 Taro + Vue3 + NutUI 覆盖 9 个平台（微信 / 支付宝 / 百度 / 抖音 / QQ / 京东 / 快应用等），11 个业务页面只维护一处。',
        '打通小程序与 ERP 的库存、发货状态：订单与库存占用、发货状态回流 ERP，与库存流水、出入库单据同一套口径，杜绝「商城显示有货、仓库发不出」。',
        '收敛 SKU 选择器交互减少误选跳失，并做图片懒加载 + CDN、详情页骨架屏。',
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
