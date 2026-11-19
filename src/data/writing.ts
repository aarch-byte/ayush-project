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
    readTime: "Working Note",
    date: "WORKING NOTE",
    excerpt:
      "Working note on business models: examining customer acquisition costs, contribution margins, and how cash flow reflects underlying operational sustainability.",
    isDraftOrPlaceholder: true,
    keyQuestions: [
      "At what point does customer acquisition subsidization become unsustainable?",
      "How do changing capital environments impact businesses reliant on external funding?",
    ],
  },
  {
    id: "platform-friction-and-flywheels",
    slug: "platform-friction-and-flywheels",
    title: "Exploring Digital Platforms: The Mechanics of Two-Sided Markets",
    topic: "DIGITAL BUSINESS & STRATEGY",
    readTime: "Working Note",
    date: "WORKING NOTE",
    excerpt:
      "Notes from digital business studies at IIM Bangalore: analyzing how multi-sided platforms approach coordination challenges and network effects.",
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
    readTime: "Working Note",
    date: "WORKING NOTE",
    excerpt:
      "Notes from data analytics studies: why quantitative figures in spreadsheets require qualitative context and understanding of real-world operational constraints.",
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
    readTime: "Working Note",
    date: "WORKING NOTE",
    excerpt:
      "Reflections from the case competition at IIM Bangalore: why mission-driven organizations benefit from careful financial planning to protect their social mission.",
    isDraftOrPlaceholder: true,
    keyQuestions: [
      "How do social enterprises manage operational and training costs while remaining viable?",
      "What role can structured corporate partnerships play in supporting mission-driven scaling?",
    ],
  },
];
