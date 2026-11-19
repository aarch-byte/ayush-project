export interface JournalArticle {
  id: string;
  slug: string;
  title: string;
  topic: string;
  readTime: string;
  date: string;
  excerpt: string;
  isDraftOrPlaceholder: boolean;
  keyQuestions: string[];
}

export const JOURNAL_ENTRIES: JournalArticle[] = [
  {
    id: "unit-economics-vs-narrative",
    slug: "unit-economics-vs-narrative",
    title: "Understanding Unit Economics: When Narrative Meets Cash Flow",
    topic: "FINANCE & BUSINESS ANALYSIS",
    readTime: "4 min read",
    date: "WORKING NOTE",
    excerpt:
      "Observations from studying business models: why customer acquisition subsidies can disguise fragile fundamentals, and how looking closely at contribution margins helps evaluate real sustainability.",
    isDraftOrPlaceholder: true,
    keyQuestions: [
      "At what point does customer acquisition subsidization become unsustainable?",
      "How do changing capital environments impact businesses reliant on continuous external funding?",
    ],
  },
  {
    id: "platform-friction-and-flywheels",
    slug: "platform-friction-and-flywheels",
    title: "Exploring Digital Platforms: The Mechanics of Two-Sided Markets",
    topic: "DIGITAL BUSINESS & STRATEGY",
    readTime: "5 min read",
    date: "WORKING NOTE",
    excerpt:
      "Notes from digital business studies at IIM Bangalore: analyzing how multi-sided platforms solve initial chicken-and-egg coordination challenges and build enduring network effects.",
    isDraftOrPlaceholder: true,
    keyQuestions: [
      "How do early-stage platforms generate liquidity on one side of the market?",
      "What distinguishes genuine network effects from simple volume growth?",
    ],
  },
  {
    id: "data-without-context",
    slug: "data-without-context",
    title: "Data and Operational Reality: Why Numbers Need Context",
    topic: "DATA ANALYTICS",
    readTime: "3 min read",
    date: "WORKING NOTE",
    excerpt:
      "Learnings from data analytics and statistics: why quantitative figures in a spreadsheet can mislead without understanding on-the-ground operational incentives and consumer behavior.",
    isDraftOrPlaceholder: true,
    keyQuestions: [
      "How can metric definitions diverge from operational realities?",
      "Why qualitative observation remains essential alongside quantitative dashboards.",
    ],
  },
  {
    id: "social-enterprise-viability",
    slug: "social-enterprise-viability",
    title: "Lessons from MITTI Café: Balancing Social Mission with Financial Viability",
    topic: "SOCIAL ENTREPRENEURSHIP",
    readTime: "5 min read",
    date: "WORKING NOTE",
    excerpt:
      "Reflections from the national case competition finals at IIM Bangalore: why mission-driven organizations require careful financial planning to protect and scale their inclusive mission.",
    isDraftOrPlaceholder: true,
    keyQuestions: [
      "How do social enterprises manage higher operational and training costs while remaining competitive?",
      "What role can corporate partnerships play in supporting mission-driven scaling?",
    ],
  },
];
