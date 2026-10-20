import type { Education, Job, Project } from './types'

/** Shared by both resumes — same work history and education */

export const jobs: Job[] = [
  {
    period: '2024.05 — 2026.09',
    company: 'Co-founder, non-technical venture',
    short: 'Startup',
    role: 'Partner (business operations)',
    place: '—',
    summary: '',
    stack: [],
    bullets: [
      'Joined as a partner in a business venture, owning sourcing, customers and cost — the full operations of a business from zero to one.',
      'Kept shipping technical work as an independent developer in parallel: the recruiting platform (Rust server + Vue 3 admin + Flutter app) and the hotel key system (full-stack), keeping backend and mobile engineering current.',
    ],
    kind: 'note',
  },
  {
    period: '2022.05 — 2024.04',
    company: 'Zhaoqing Zhumei Furniture Co., Ltd.',
    short: 'Zhumei',
    role: 'ERP / CRM Frontend Engineer',
    place: 'Home furnishing',
    summary: 'In-house ERP and CRM for a Country Garden home-furnishing manufacturer (Vue 3 + TypeScript + Vite + Pinia).',
    stack: ['Vue 3', 'TypeScript', 'Vite', 'Pinia'],
    bullets: [
      'Data platform: maintained and extended the in-house zhumeidp platform (Vue 3 + Element Plus + BPMN), adding 15 information-management views and report pages, and extracting reusable table, search-bar and layout components so new pages were assembled rather than rebuilt.',
      'ERP / CRM core modules: frontend for production orders, materials, inventory and goods receipts on the ERP side, plus customer profiles, follow-ups and opportunities on the CRM side; handled multi-level approvals, status transitions and complex form validation.',
      'Permissions: configured menu and button permissions by role / department, aligned with the ERP org structure — one permission model controls both menu visibility and button-level actions.',
      'Performance monitoring: set a baseline for ERP detail lists, collected real-user LCP / CLS / INP through PerformanceObserver and wired in simple reporting, with a 1.0s LCP alert line and a 200ms INP investigation line — later iterations produced no performance regressions.',
      'Mobile entry: provided a mobile H5 entry for ERP/CRM approval to-dos and inventory lookup, reusing the same role / department permissions.',
    ],
  },
  {
    period: '2020.09 — 2022.04',
    company: 'Guangzhou Xuanwu Wireless Technology Co., Ltd.',
    short: 'Xuanwu',
    role: 'Frontend Engineer',
    place: 'Software · SaaS',
    summary: 'Smart CRM sales cloud (SaaS) with a multi-tenant permission model.',
    stack: ['Vue 2', 'Vue 3', 'Element UI'],
    bullets: [
      'Purchased-system work: maintained the purchased OMS order management and MES manufacturing execution systems (RuoYi + Vue 2 + Element UI + ECharts), changing order, product, production and permission modules to fit business needs; all changes stayed in the business layer so vendor upgrades remained mergeable.',
      'Sales cloud core pages: owned the core business pages, mostly Vue 2 with Vue 3 piloted on new modules; helped land the multi-tenant permission model so the same UI shows different data scopes per tenant and role.',
      'Mobile to-dos: ported sales-cloud approval to-dos, customer follow-ups and opportunity lists to WeChat / Alipay mini programs with Taro + Vue 3 + NutUI, sharing the API contract and tenant permissions with the web app.',
      'Component migration: took part in the Element UI → Element Plus migration — slot renames, el-form validation differences, the split icon package and codemod batch replacement — with no business interruption.',
    ],
  },
  {
    period: '2018.09 — 2020.08',
    company: 'Guangzhou Gaite Software Co., Ltd.',
    short: 'Gaite',
    role: 'Frontend Engineer',
    place: 'Software · ERP',
    summary: 'ERP for the bags & luggage industry, serving hundreds of enterprise customers.',
    stack: ['Vue 2', 'Element UI', 'Webpack', 'Spring Boot APIs'],
    bullets: [
      'ERP core modules: frontend for production orders, materials, inventory movements and goods receipts; integrated Spring Boot APIs and handled multi-level approvals, status transitions and complex form validation.',
      'Merchant mini program: gave ERP merchant customers a mobile entry (WeChat, native / uni-app) for order lookup, inventory movements and goods receipts, wired to backend permissions and data scope.',
      'Component reuse: extracted order status tags, the material picker and the approval timeline into an internal component library, cutting duplicated work on similar pages by ~30%.',
    ],
  },
  {
    period: '2016.07 — 2018.08',
    company: 'Guangzhou Yunchuangmen Management Consulting Co., Ltd.',
    short: 'Yunchuangmen',
    role: 'Frontend Engineer',
    place: 'Business services',
    summary: '',
    stack: ['Vue 2', 'Element UI', 'ECharts'],
    bullets: [
      'Customer management platform: built the frontend and took part in the Vue 2 + Element UI stack decision and tooling setup.',
      'Four-level RBAC: helped design the user - role - menu - button model and built the permission directive and dynamic routes.',
      'Performance work: fixed jank on a 100k+ row customer list with virtual scrolling + server-side paging + API field trimming — scroll rate 20fps → 55fps, first request 1.8s → 0.6s.',
      'Performance baseline: used Navigation Timing to record first-paint and request timings as a baseline for later comparisons.',
      'Data visualisation: built ECharts operations dashboards to replace manual tallying, taking reports from one working day to real time.',
    ],
  },
  {
    period: '2014.07 — 2016.06',
    company: 'Guangzhou Dingding Medical IT Co., Ltd.',
    short: 'Dingding Medical',
    role: 'Frontend Engineer',
    place: 'Internet healthcare',
    summary: '',
    stack: ['jQuery', 'Vue 2', 'Element UI', 'DingTalk Open Platform'],
    bullets: [
      'Patient-facing core modules: appointment booking, online consultation and report lookup.',
      'Slot calendar: built the 30-day, time-band, live-count component that fixed the mismatch between displayed availability and actual inventory.',
      'DingTalk ecosystem: worked on the DingTalk H5 micro-app, integrating SSO, the workbench entry and message push.',
    ],
  },
]

export const education: Education = {
  school: 'Guangzhou Maritime University',
  major: 'Computer Networks',
  degree: 'Associate degree',
  period: '2011.09 — 2014.06',
}
