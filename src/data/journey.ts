export interface TimelineItem {
  year: string;
  period: string;
  title: string;
  category: "EDUCATION" | "LEADERSHIP" | "COMPETITION" | "DIPLOMACY" | "TEACHING";
  institutionOrContext: string;
  description: string;
  highlight?: boolean;
  tags: string[];
  image?: {
    src: string;
    alt: string;
    caption?: string;
  };
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
    image: {
      src: "/images/ayush-iim-bangalore.jpg",
      alt: "Ayush standing in front of the Indian Institute of Management Bangalore signage.",
      caption: "Indian Institute of Management Bangalore",
    },
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
      "Reached the Top 10 and participated in the offline final round at IIM Bangalore. Contributed to marketing and finance aspects, developing 'MITTI Compass' — a conceptual financial and expansion-planning simulator for social enterprise scaling.",
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
      "Served as School House Captain during Class XII in 2025.",
    highlight: false,
    tags: ["Student Leadership", "House Captain", "Class XII"],
  },
  {
    year: "2025",
    period: "CLASS XII (2025)",
    title: "Intra-School Business Quiz — 2nd Position",
    category: "COMPETITION",
    institutionOrContext: "School Commerce Society",
    description:
      "Achieved second position in a Class XII intra-school business quiz in 2025.",
    highlight: false,
    tags: ["2nd Position", "Business Quiz", "Class XII"],
  },
  {
    year: "2024 — PRESENT",
    period: "INDEPENDENT WORK",
    title: "Independent Accountancy Tuition",
    category: "TEACHING",
    institutionOrContext: "Independent Teaching",
    description:
      "Independently tutoring high school students in Accountancy, explaining fundamental ledger accounting and financial statement concepts.",
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
      "Completed NCC cadet training from Class VIII to Class X (completed in 2023), receiving the 'A' Certificate with Alpha Grade.",
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
      "Participated as a delegate in two Model United Nations conferences.",
    highlight: false,
    tags: ["Delegate", "Two Conferences", "Model UN"],
  },
];
