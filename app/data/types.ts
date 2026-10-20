export interface Site {
  title: string
  description: string
  url: string
  updated: string
}

export interface Profile {
  name: string
  nameEn: string
  role: string
  roleEn: string
  headline: string
  roles: string[]
  focus: string
  pitch: string
  location: string
  status: string
  target: string
  salary: string
  years: string
  age: string
  phone: string
  phoneDisplay: string
  email: string
  github: string
  gitee: string
  industry: string
  education: string
}

export interface Strength {
  title: string
  body: string
}

export interface SkillGroup {
  label: string
  desc: string
  items: string[]
  core?: string[]
}

export interface Job {
  period: string
  company: string
  short?: string
  role: string
  place: string
  summary: string
  stack: string[]
  bullets: string[]
  kind?: 'job' | 'note'
}

export interface Repo {
  label: string
  url: string
}

export interface Project {
  title: string
  kicker: string
  period?: string
  intro: string
  stack: string[]
  highlights?: string[]
  results?: string[]
  repos?: Repo[]
}

export interface Education {
  school: string
  major: string
  degree: string
  period: string
}

export interface Fact {
  label: string
  value: string
}

export interface Ui {
  intentLabel: string
  viewProject: string
  downloadPdf: string
  savePdf: string
  basicInfoTitle: string
  basicInfoAria: string
  results: string
  giteeMirror: string
  contactTitle: string
  copyEmail: string
  copyEmailAria: string
  copied: string
  copyFailed: string
  sections: { strengths: string; skills: string; experience: string; work: string }
  nav: { strengths: string; skills: string; experience: string; work: string; contact: string }
  backToTop: string
  navAria: string
  themeToLight: string
  themeToDark: string
  langAria: string
}

export interface ResumeBundle {
  site: Site
  profile: Profile
  sectionCopy: {
    strengths: string
    skills: string
    experience: string
    work: string
    contact: string
  }
  basicInfo: Fact[]
  strengths: Strength[]
  skillGroups: SkillGroup[]
  jobs: Job[]
  projects: Project[]
  education: Education
  facts: Fact[]
  ui: Ui
}
