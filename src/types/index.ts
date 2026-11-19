export interface NavItem {
  id: string;
  number: string;
  label: string;
  href: string;
  description?: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  status: string;
  focus?: string;
}

export interface MilestoneItem {
  year: string;
  title: string;
  roleOrCategory: string;
  description: string;
  highlight?: boolean;
}

export interface CaseStudySummary {
  id: string;
  slug: string;
  title: string;
  category: string;
  context: string;
  summary: string;
  role: string;
  outcomes: string[];
  link: string;
}

export interface ArticleSummary {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  summary: string;
  isPlaceholder?: boolean;
}
