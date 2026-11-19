export interface TimelineItem {
  year: string;
  period: string;
  title: string;
  category: "EDUCATION" | "LEADERSHIP" | "COMPETITION" | "DIPLOMACY" | "TEACHING";
  institutionOrContext: string;
  description: string;
  highlight?: boolean;
  tags: string[];
}

export const JOURNEY_TIMELINE: TimelineItem[] = [
  {
    year: "PRESENT",
    period: "ONGOING (CONCURRENT)",
    title: "BBA in Digital Business & Entrepreneurship",
    category: "EDUCATION",
    institutionOrContext: "IIM Bangalore",
    description:
      "Pursuing foundational studies in digital platforms, platform economics, business model innovation, and entrepreneurial strategy at IIM Bangalore.",
    highlight: true,
    tags: ["Digital Business", "Entrepreneurship", "Strategy"],
  },
  {
    year: "PRESENT",
    period: "ONGOING (CONCURRENT)",
    title: "B.Com (Hons.) Data Analytics",
    category: "EDUCATION",
    institutionOrContext: "Guru Nanak Dev University (GNDU)",
    description:
      "Developing analytical foundations in financial accounting, corporate finance, statistics, database management, and quantitative business analytics.",
    highlight: true,
    tags: ["Data Analytics", "Financial Accounting", "Quantitative Methods"],
  },
  {
    year: "2026",
    period: "NOVEMBER 2026",
    title: "Top 10 Finalist — MITTI Café Case Competition",
    category: "COMPETITION",
    institutionOrContext: "IIM Bangalore",
    description:
      "Reached the national Top 10 and participated in the offline final round at IIM Bangalore. Contributed to marketing and finance aspects, developing 'MITTI Compass' — an expansion simulator concept balancing disability employment with strategic planning.",
    highlight: true,
    tags: ["Top 10 Finalist", "Offline Finals", "IIM Bangalore", "Social Enterprise"],
  },
  {
    year: "2025",
    period: "CLASS XII (2025)",
    title: "School House Captain",
    category: "LEADERSHIP",
    institutionOrContext: "Senior Secondary School",
    description:
      "Served as House Captain during Class XII, coordinating house participation across school sports tournaments, cultural activities, and student council initiatives.",
    highlight: false,
    tags: ["Student Leadership", "House Captain", "Coordination"],
  },
  {
    year: "2025",
    period: "CLASS XII (2025)",
    title: "Intra-School Business Quiz — 2nd Position",
    category: "COMPETITION",
    institutionOrContext: "School Commerce Society",
    description:
      "Achieved second position in a competitive intra-school business quiz testing macroeconomic awareness, financial concepts, and corporate history.",
    highlight: false,
    tags: ["2nd Position", "Business Quiz", "Macroeconomics"],
  },
  {
    year: "2024 — PRESENT",
    period: "INDEPENDENT WORK",
    title: "Independent Accountancy Tuition",
    category: "TEACHING",
    institutionOrContext: "Independent Teaching",
    description:
      "Independently tutoring commerce students in Accountancy, explaining fundamental ledger accounting, financial statement preparation, and core commercial concepts.",
    highlight: false,
    tags: ["Accountancy", "Independent Teaching", "Financial Concepts"],
  },
  {
    year: "2023",
    period: "CLASS VIII – X (COMPLETED 2023)",
    title: "National Cadet Corps (NCC) — 'A' Certificate (Alpha Grade)",
    category: "LEADERSHIP",
    institutionOrContext: "NCC Directorate",
    description:
      "Completed three years of cadet training from Class VIII to Class X, earning the 'A' Certificate with Alpha Grade through drill discipline, tactical exercises, and field training.",
    highlight: false,
    tags: ["Alpha Grade", "NCC A Certificate", "Discipline"],
  },
  {
    year: "2022 — 2023",
    period: "HIGH SCHOOL",
    title: "Model United Nations (MUN) — Delegate in Two Conferences",
    category: "DIPLOMACY",
    institutionOrContext: "Model UN Conferences",
    description:
      "Participated as a delegate in two Model United Nations conferences, representing assigned countries in committee deliberations, resolution drafting, and collaborative negotiation.",
    highlight: false,
    tags: ["Delegate", "Two Conferences", "Negotiation"],
  },
];
