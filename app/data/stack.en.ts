import type { ResumeBundle } from './types'
import { education, jobs } from './shared.en'
import { uiEn } from './ui.en'

/** Full-stack engineer — translated from 陈燕松-全栈开发工程师.md */
export const stackEn: ResumeBundle = {
  site: {
    title: 'Chen Yansong · Full-stack Engineer',
    description:
      'Chen Yansong — nine-plus years of enterprise admin frontend, delivering backend and mobile solo too. Rust server, Vue 3 admin, Flutter app and a React hotel system, all built end to end; 100k-row lists at 20fps → 55fps. Guangzhou, full-stack engineer.',
    url: 'https://cmrookie.github.io/personal-web/',
    updated: '2026.10',
  },

  profile: {
    name: 'Chen Yansong',
    nameEn: '陈燕松',
    role: 'Full-stack Engineer',
    roleEn: 'Full-stack Engineer',
    headline: 'full-stack',
    roles: ['Admin frontend', 'Rust backend'],
    focus: 'three clients, solo',
    pitch:
      'Nine-plus years of enterprise admin frontend, having led routing, permissions and state architecture on four admin systems. The backend holds up too: I wrote the recruiting platform server in Rust, then ported the same domain to Java 21 + Spring Boot. The three-client recruiting platform and the hotel system were both built end to end by me.',
    location: 'Guangzhou',
    status: 'Open to work',
    target: 'Full-stack Engineer',
    salary: '15-18K',
    years: '12 years',
    age: '34',
    phone: '18826474591',
    phoneDisplay: '188 2647 4591',
    email: '944727074@qq.com',
    github: 'https://github.com/CMrookie',
    gitee: 'https://gitee.com/rookie_c',
    industry: '4 admin systems · ERP / CRM / data platform / SaaS',
    education: 'Guangzhou Maritime University · Computer Networks · Associate degree',
  },

  sectionCopy: {
    strengths: 'Admin frontend, backend and mobile — one person carries the whole chain.',
    skills: 'Bold = can deliver alone. Each row names the evidence behind it.',
    experience: 'Healthcare → business services → bags & luggage ERP → smart CRM → home-furnishing ERP / CRM → independent delivery.',
    work: 'A three-client recruiting platform, a hotel key system, plus two enterprise projects: purchased systems and multi-platform mini programs.',
    contact: 'Looking for a full-stack role in Guangzhou, admin systems and manufacturing preferred. Every number here can be defended in an interview — ask away.',
  },

  basicInfo: [
    { label: 'Experience', value: '12 years' },
    { label: 'Age', value: '34' },
    { label: 'Education', value: 'Associate degree · Computer Networks' },
    { label: 'Target role', value: 'Full-stack Engineer' },
    { label: 'Location', value: 'Guangzhou' },
    { label: 'Availability', value: 'Immediately' },
  ],

  strengths: [
    {
      title: 'Nine-plus years of enterprise admin frontend',
      body: 'Healthcare SaaS, smart CRM, a bags ERP, a home-furnishing ERP/CRM and a data platform — I have led routing, permissions and state architecture on four admin systems.',
    },
    {
      title: 'Backend delivery at project level',
      body: 'I wrote the recruiting platform server in Rust, with integration tests against real PostgreSQL (fresh database per case, all migrations replayed); the same domain was then ported to Java 21 + Spring Boot with the API contract and data model kept identical.',
    },
    {
      title: 'Three clients, carried by one person',
      body: 'Rust server, Vue 3 admin and Flutter app by the same person, with the API contract and data flow defined by me; the hotel admin console and guest portal were also built solo in React.',
    },
    {
      title: 'Quantified results you can dig into',
      body: '100k-row lists from 20fps to 55fps and the first request from 1.8s to 0.6s, plus real-user performance collection with threshold alerting; four-level RBAC; WebSocket heartbeat renewal and lock-state push; ECharts dashboards that took reports from a working day to real time.',
    },
  ],

  skillGroups: [
    {
      label: 'Backend',
      desc: 'Rust / Java',
      core: ['Rust', 'actix-web', 'sqlx', 'PostgreSQL', 'Java 21', 'Spring Boot', 'Spring JDBC'],
      items: [
        'Delivered the recruiting platform server solo',
        'Integration tests on a real database (fresh DB per case, all migrations replayed)',
        'The same domain ported Rust → Java, contract and data model unchanged',
      ],
    },
    {
      label: 'Database',
      desc: 'PostgreSQL / MySQL',
      core: ['PostgreSQL', 'MySQL'],
      items: ['Schema migrations', 'Partial indexes', 'Conditional updates as locks', 'EXPLAIN ANALYZE'],
    },
    {
      label: 'Frontend frameworks',
      desc: 'Vue 3 / React',
      core: ['Vue 3 / Vue 2', 'TypeScript', 'React + Ant Design'],
      items: ['Led routing, permissions and state architecture on four admin systems', 'Built the hotel admin console and guest portal solo'],
    },
    {
      label: 'Complex UI',
      desc: 'lists / approvals / dashboards',
      core: ['100k-row virtual scrolling', 'Multi-level approvals and state-machine forms', 'ECharts dashboards', 'BPMN process display'],
      items: ['Scroll 20fps → 55fps', 'Reports from one working day to real time'],
    },
    {
      label: 'Performance & observability',
      desc: 'real-user collection',
      core: ['PerformanceObserver (LCP / INP / CLS)', 'Threshold alerting', 'Performance baselines'],
      items: ['Regression hunting', 'Structured logging', 'One error contract across frontend and backend'],
    },
    {
      label: 'Realtime',
      desc: 'long-lived connections',
      core: ['WebSocket'],
      items: ['Heartbeat renewal and reconnect', 'Snapshot + incremental alignment', 'Lock-state push and conflict disabling'],
    },
    {
      label: 'Mobile / mini programs',
      desc: 'four stacks',
      core: ['Flutter + Dart', 'React', 'Taro + Vue 3 + NutUI', 'Native mini program / uni-app'],
      items: ['Recruiting app', 'Hotel guest portal', 'Sales-cloud to-dos (WeChat / Alipay)', 'ERP merchant order and inventory lookup'],
    },
    {
      label: 'Engineering',
      desc: 'build & migration',
      core: ['Vite / Webpack', 'vue-tsc type gate', 'OpenAPI'],
      items: ['Codemod migration (Element UI → Element Plus, hundreds of files)', 'Structured logging'],
    },
    {
      label: 'Tooling',
      desc: 'daily',
      core: ['Git', 'Linux', 'Nginx', 'Docker Compose', 'WebRTC'],
      items: [],
    },
  ],

  jobs,

  projects: [
    {
      title: 'Job Board · Recruiting Platform',
      kicker: 'Personal project · server + web admin + Flutter app',
      period: '2026.09 — present',
      intro:
        'A recruiting platform shared by three roles — job seeker, recruiter and reviewer. The server, the web admin and the mobile app were all built by one person, with the API contract and data flow defined by me.',
      stack: ['Rust', 'actix-web', 'sqlx', 'PostgreSQL', 'WebSocket', 'Vue 3', 'TypeScript', 'Vite', 'naive-ui', 'Flutter', 'Dart'],
      highlights: [
        'Server delivered solo: written in Rust + actix-web + sqlx, with integration tests against real PostgreSQL (fresh database per case, all migrations replayed); the same domain was then ported to Java 21 + Spring Boot with the API contract and data model kept identical.',
        'Admin console role convergence: a Vue 3 + TypeScript admin where admin and reviewer share one role-judgement function and type, and a route guard bounces unauthorised access back to the landing page — adding a role changes one place. The request layer parses error bodies once, 401 clears the token and logs out, and the server has one error exit with 5xx scrubbed.',
        'Claim lock and live state: complaint review is claimed on open, renewed by heartbeat, and released automatically if closed without submitting; lock changes are pushed to the reviewer group over WebSocket, and actions are disabled with the holder shown while someone else holds it; a heartbeat timeout triggers server-side reclamation, and reconnects align by snapshot + delta to avoid deadlocks and double processing.',
        'Measurable lock behaviour: lock wait time, claim conflict rate and heartbeat renewal failures go to structured logs and a dashboard — which is how I found and fixed a renewal failure caused by client clock skew.',
        'Flutter app: login, job browsing, job detail and profile built solo; the network layer parses error bodies, logs out on 401 and handles loading / empty / retry states; role logic is shared with the admin console to control which entries are visible.',
      ],
      repos: [
        { label: 'Server', url: 'https://github.com/CMrookie/meow-star-careers' },
        { label: 'Admin', url: 'https://github.com/CMrookie/meow-star-careers-admin' },
        { label: 'Mobile', url: 'https://github.com/CMrookie/meow_star_careers_app' },
      ],
    },
    {
      title: 'Hotel Electronic Key System',
      kicker: 'Personal project · full-stack, built solo',
      period: '2026',
      intro:
        'Hotel door locks come from many vendors, so the goal was to make the lock a replaceable layer — swapping vendors should not mean rewriting the business logic. Express + SQLite backend, React + Ant Design admin console and guest portal.',
      stack: ['Express', 'SQLite', 'React', 'Ant Design', 'JWT', 'bcrypt', 'WebSocket'],
      highlights: [
        'A lock abstraction: one entry point plus the adapter pattern (a simulated lock out of the box, a real vendor adapter reserved) — swapping vendors means replacing the adapter, with zero changes to business code.',
        'Full key lifecycle: issue, report lost, reissue, revoke, expire and extend; checkout revokes automatically and moves the room to cleaning, with no front-desk manual step.',
        'Four unlock paths fully audited: phone NFC, staff card, front-desk remote and mechanical key, each recording success or failure and the reason, traceable alongside staff activity logs.',
        'Four roles, four room states, one dashboard: module-level permissions for admin / manager / front desk / housekeeping; vacant / occupied / cleaning / maintenance transitions; room-state distribution, occupancy, 14-day unlock trend, lock online status and battery, exception alerts.',
        'Realtime lock board: online status and battery arrive as incremental WebSocket pushes, so the board reflects unlock and offline events without a full refresh; reconnects align by snapshot + delta to avoid gaps.',
        'Guest portal: a React mobile web app where guests self-serve key and lock actions through the same adapter entry point, unaware of the vendor; responsive layout, touch feedback and weak-network retries.',
      ],
    },
    {
      title: 'Purchased Systems (OMS + MES)',
      kicker: 'Xuanwu Wireless · frontend',
      period: '2020.09 — 2022.04',
      intro:
        'A purchased order management system and manufacturing execution system that needed continuous business extension without touching the underlying framework — otherwise the vendor’s next release could not be merged.',
      stack: ['Vue 2', 'Element UI', 'ECharts', 'RuoYi'],
      highlights: [
        'OMS: changed the order and product modules and tracked down defects, with every change kept in the business layer and none intruding into the framework, so vendor upgrades stayed mergeable; menus and data dictionaries became configuration, so new roles and permissions needed no code.',
        'MES: built multi-metric trend and share charts in ECharts to replace the Excel daily report; paged and trimmed fields on detail lists; output, inventory and process progress read from the same source as the ERP.',
        'Iterated for a year and a half across orders, products, permissions and production dashboards.',
      ],
    },
    {
      title: 'E-commerce Mini Programs (multi-platform)',
      kicker: 'Several companies · frontend',
      period: '2018 — 2024',
      intro: 'One e-commerce business had to run on several mini-program platforms; a separate codebase per platform makes maintenance grow linearly.',
      stack: ['Taro', 'Vue 3', 'NutUI', 'Native mini program', 'uni-app'],
      highlights: [
        'One codebase, many platforms: Taro + Vue 3 + NutUI covering 9 platforms (WeChat / Alipay / Baidu / Douyin / QQ / JD / quick app and more), with 11 business pages maintained in one place.',
        'Mini programs wired into ERP inventory and shipping: orders, inventory holds and shipping status flow back to the ERP and share one data definition with its inventory movements and goods receipts — no more "the shop says in stock, the warehouse cannot ship".',
        'Tightened the SKU selector to cut mis-taps that end in a bounce, plus image lazy loading + CDN and a skeleton screen on the detail page.',
      ],
    },
  ],

  education,

  facts: [
    { label: 'Languages', value: 'Chinese (native)' },
    { label: 'Open to', value: 'Anywhere in Guangzhou; high-intensity early-stage pace' },
  ],

  ui: uiEn,
}
