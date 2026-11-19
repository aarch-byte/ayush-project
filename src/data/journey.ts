export interface TimelineItem {
  year: string;
  period: string;
  title: string;
  category: "EDUCATION" | "LEADERSHIP" | "COMPETITION" | "DIPLOMACY";
  institutionOrContext: string;
  description: string;
  highlight?: boolean;
  tags: string[];
}

export const JOURNEY_TIMELINE: TimelineItem[] = [
  {
    year: "PRESENT",
    period: "2024 — ONGOING",
    title: "BBA in Digital Business & Entrepreneurship",
    category: "EDUCATION",
    institutionOrContext: "IIM Bangalore",
    description:
      "Deepening strategic insight across digital platforms, platform economics, digital business transformation, and venture creation frameworks at one of India's premier management institutions.",
    highlight: true,
    tags: ["Digital Business", "Platform Strategy", "Venture Economics"],
  },
  {
    year: "PRESENT",
    period: "2024 — ONGOING",
    title: "B.Com (Hons.) Data Analytics",
    category: "EDUCATION",
    institutionOrContext: "Guru Nanak Dev University (GNDU)",
    description:
      "Building quantitative foundations in financial accounting, statistics, quantitative modeling, database management, and data-driven corporate finance.",
    highlight: true,
    tags: ["Data Analytics", "Financial Accounting", "Quantitative Methods"],
  },
  {
    year: "2024",
    period: "NATIONAL FINALS",
    title: "MITTI Café Case Competition — Top 10 Finalist",
    category: "COMPETITION",
    institutionOrContext: "MITTI Social Initiatives",
    description:
      "Advanced to the offline national grand finale as a Top 10 finalist. Formulated 'MITTI Compass', an end-to-end strategic financial blueprint balancing disability employment with unit-level profitability and institutional corporate café expansion.",
    highlight: true,
    tags: ["Top 10 Finalist", "Offline Finalist", "Financial Modeling", "Social Impact"],
  },
  {
    year: "2023",
    period: "CADET SERVICE",
    title: "National Cadet Corps (NCC) — 'A' Certificate (Alpha Grade)",
    category: "LEADERSHIP",
    institutionOrContext: "NCC Directorate",
    description:
      "Awarded the highest 'Alpha' grade upon completion of NCC training. Honed operational discipline, situational leadership, drill precision, and endurance under pressure.",
    highlight: false,
    tags: ["Alpha Grade", "Discipline", "Tactical Training"],
  },
  {
    year: "2023",
    period: "STUDENT GOVERNANCE",
    title: "School House Captain",
    category: "LEADERSHIP",
    institutionOrContext: "Senior School Leadership Council",
    description:
      "Elected House Captain. Led over 250 students across inter-house sporting tournaments, academic debates, cultural exhibitions, and cross-grade mentorship initiatives.",
    highlight: false,
    tags: ["Student Leadership", "Team Coordination", "Mentorship"],
  },
  {
    year: "2023",
    period: "COMPETITION",
    title: "Intra-School Business & Economy Quiz — 2nd Position",
    category: "COMPETITION",
    institutionOrContext: "Commerce & Economics Society",
    description:
      "Secured 2nd position evaluating market developments, macroeconomic indicators, corporate valuation shifts, and global trade history.",
    highlight: false,
    tags: ["2nd Position", "Market Knowledge", "Macroeconomics"],
  },
  {
    year: "2022 — 2023",
    period: "DIPLOMACY DEBATES",
    title: "Model United Nations (MUN) — Delegate in Two Conferences",
    category: "DIPLOMACY",
    institutionOrContext: "Regional Model UN Assemblies",
    description:
      "Represented assigned member states in intensive multilateral negotiations, debate defense, crisis resolutions, and geopolitical coalition drafting.",
    highlight: false,
    tags: ["Multilateral Diplomacy", "Resolution Drafting", "Public Speaking"],
  },
];
