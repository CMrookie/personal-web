import type { ResumeBundle } from './types'
import { education, jobs } from './shared.en'
import { uiEn } from './ui.en'

/** Frontend engineer — translated from 陈燕松-前端开发工程师.md */
export const feEn: ResumeBundle = {
  site: {
    title: 'Chen Yansong · Frontend Engineer',
    description:
      'Chen Yansong — nine-plus years of enterprise admin frontend. Led routing, permissions and state architecture on four admin systems; 100k-row lists from 20fps to 55fps and the first request from 1.8s to 0.6s, with real-user performance monitoring. Guangzhou, frontend engineer.',
    url: 'https://cmrookie.github.io/personal-web/frontend/',
    updated: '2026.10',
  },

  profile: {
    name: 'Chen Yansong',
    nameEn: '陈燕松',
    role: 'Frontend Engineer',
    roleEn: 'Frontend Engineer',
    headline: 'vue 3 frontend',
    roles: ['Admin frontend', 'complex UI & performance'],
    focus: 'observability',
    pitch:
      'Nine-plus years of enterprise admin frontend: healthcare SaaS, smart CRM, a bags ERP, a home-furnishing ERP/CRM and a data platform, leading routing, permissions and state architecture on four of them. Performance is not just something I tuned — I set baselines and real-user monitoring so later iterations could not quietly undo the numbers.',
    location: 'Guangzhou',
    status: 'Open to work',
    target: 'Frontend Engineer',
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
    strengths: 'Admin frontend, complex UI and performance — every claim comes with a number.',
    skills: 'Bold = can deliver alone. Each row names the evidence behind it.',
    experience: 'Healthcare → business services → bags & luggage ERP → smart CRM → home-furnishing ERP / CRM → independent delivery.',
    work: 'A recruiting admin console and its mobile app, a hotel system, plus two enterprise projects: purchased systems and multi-platform mini programs.',
    contact: 'Looking for a frontend role in Guangzhou, admin systems and e-commerce preferred. Every number here can be defended in an interview — ask away.',
  },

  basicInfo: [
    { label: 'Experience', value: '12 years' },
    { label: 'Age', value: '34' },
    { label: 'Education', value: 'Associate degree · Computer Networks' },
    { label: 'Target role', value: 'Frontend Engineer' },
    { label: 'Location', value: 'Guangzhou' },
    { label: 'Availability', value: 'Immediately' },
  ],

  strengths: [
    {
      title: 'Nine-plus years of enterprise admin frontend',
      body: 'Healthcare SaaS, smart CRM, a bags ERP, a home-furnishing ERP/CRM and a data platform — I have led routing, permissions and state architecture on four admin systems.',
    },
    {
      title: 'Complex UI and performance with numbers to dig into',
      body: '100k-row lists from 20fps to 55fps and the first request from 1.8s to 0.6s; I also set performance baselines and real-user monitoring so later iterations could not quietly undo the numbers.',
    },
    {
      title: 'Permissions and realtime interaction in production',
      body: 'Four-level RBAC with menu and button permissions configured by role / department; WebSocket heartbeat renewal and lock-state push, including reconnect handling and state alignment.',
    },
    {
      title: 'Mobile and mini programs, with real projects',
      body: 'Flutter for the recruiting app, React for the hotel guest portal, Taro + Vue 3 + NutUI for sales-cloud mobile to-dos, and native / uni-app mini programs for ERP merchant order and inventory lookup.',
    },
  ],

  skillGroups: [
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
      items: ['Regression hunting', 'Structured logging', 'One error wrapper across the frontend'],
    },
    {
      label: 'Permissions',
      desc: 'RBAC',
      core: ['Four-level RBAC', 'Menu and button permissions by role / department'],
      items: ['Dynamic routes and permission directives'],
    },
    {
      label: 'Realtime',
      desc: 'long-lived connections',
      core: ['WebSocket'],
      items: ['Heartbeat renewal and reconnect', 'Snapshot + incremental alignment', 'Lock-state push and conflict disabling'],
    },
    {
      label: 'Engineering',
      desc: 'build & migration',
      core: ['Vite / Webpack', 'vue-tsc type gate', 'OpenAPI'],
      items: ['Codemod migration (Element UI → Element Plus, hundreds of files)', 'Structured logging'],
    },
    {
      label: 'Mobile / mini programs',
      desc: 'four stacks',
      core: ['Flutter + Dart', 'React', 'Taro + Vue 3 + NutUI', 'Native mini program / uni-app'],
      items: ['Recruiting app', 'Hotel guest portal', 'Sales-cloud to-dos (WeChat / Alipay)', 'ERP merchant order and inventory lookup'],
    },
    {
      label: 'Backend awareness',
      desc: 'reads and writes',
      core: ['Rust', 'actix-web', 'sqlx', 'PostgreSQL', 'Java 21 + Spring Boot'],
      items: ['Delivered a personal-project server solo', 'Ported the same domain Rust → Java', 'Can read an API contract and debug integration issues'],
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
      title: 'Job Board · Admin Console',
      kicker: 'Personal project · frontend',
      period: '2026.09 — present',
      intro:
        'The admin console of the recruiting platform shared by three roles, covering login, user management, reviewer accounts, complaint review, job and company records, review workload and complaint grading rules.',
      stack: ['Vue 3', 'TypeScript', 'Vite', 'naive-ui', 'WebSocket'],
      highlights: [
        'Role-converged routes and menus: admin and reviewer share one role-judgement function and type, and a route guard bounces unauthorised access back to the landing page — adding a role changes one place, with no per-page v-if to rewrite.',
        'Claim lock and live state: complaint review is claimed on open, renewed by heartbeat, and released automatically if closed without submitting; lock changes are pushed to the reviewer group over WebSocket, and actions are disabled with the holder shown while someone else holds it; a heartbeat timeout (offline or suspended tab) triggers server-side reclamation, and reconnects align by snapshot + delta to avoid deadlocks and double processing.',
        'Measurable lock behaviour: lock wait time, claim conflict rate and heartbeat renewal failures go to structured logs and a dashboard — which is how I found and fixed a renewal failure caused by client clock skew.',
        'Engineering trade-offs with no extra dependencies: inline SVG icons, module-level singletons instead of Pinia, and a hand-built chart component instead of a chart library — a smaller dependency surface, faster builds, and no third party blocking upgrades.',
        'One wrapper for requests and errors: the request layer parses error bodies once, 401 clears the token and logs out, and the server has one error exit with 5xx scrubbed.',
      ],
      repos: [{ label: 'Admin', url: 'https://github.com/CMrookie/meow-star-careers-admin' }],
    },
    {
      title: 'Job Board · Mobile App (Flutter)',
      kicker: 'Personal project · mobile',
      period: '2026.09 — present',
      intro:
        'The seeker / recruiter app for the same platform, sharing the server API, error contract and role model with the admin console.',
      stack: ['Flutter', 'Dart', 'RESTful API'],
      highlights: [
        'Core pages and routing built solo: login, job browsing, job detail and profile, with the API contract kept identical to the admin console.',
        'Network layer wrappers: error-body parsing, logout on 401, and unified loading / empty / retry handling, so page code only deals with business state.',
        'Role-based entry control: shares the role logic with the admin console to decide which entries are visible.',
        'Componentisation and UX: list items, filter bar and state placeholders split out so scrolling, weak-network loading and empty states stay consistent.',
      ],
      repos: [{ label: 'Mobile', url: 'https://github.com/CMrookie/meow_star_careers_app' }],
    },
    {
      title: 'Hotel Electronic Key System',
      kicker: 'Personal project · admin console + guest portal',
      period: '2026',
      intro:
        'Hotel door locks come from many vendors, so the goal was to make the lock a replaceable layer — swapping vendors should not mean rewriting the business logic.',
      stack: ['React', 'Ant Design', 'JWT', 'WebSocket', 'Express', 'SQLite'],
      highlights: [
        'Admin console (React + Ant Design): staff, rooms, locks, keys and audit-log pages; module-level permissions for four roles; four room states with a one-to-one room-lock binding.',
        'Realtime lock board: online status and battery arrive as incremental WebSocket pushes, so the board reflects unlock and offline events without polling; reconnects align by snapshot + delta to avoid gaps.',
        'Guest portal (mobile web): guests self-serve key and lock actions from a phone browser through the same adapter entry point, unaware of the vendor; responsive layout, touch feedback and weak-network retries.',
        'Four unlock paths fully audited: phone NFC, staff card, front-desk remote and mechanical key, each recording success or failure and the reason.',
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
  ],

  education,

  facts: [
    { label: 'Languages', value: 'Chinese (native)' },
    { label: 'Open to', value: 'Anywhere in Guangzhou; high-intensity early-stage pace' },
  ],

  ui: uiEn,
}
