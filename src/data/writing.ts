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
    title: "When the Music Stops: Why Cash Flow Always Defeats Vanity Metrics",
    topic: "FINANCE & VALUATION",
    readTime: "4 min read",
    date: "WORKING NOTE",
    excerpt:
      "A personal breakdown of why customer acquisition subsidies disguise flawed unit economics, and how analyzing Contribution Margin 3 reveals the true fragility of modern tech platforms.",
    isDraftOrPlaceholder: true,
    keyQuestions: [
      "At what inflection point does venture subsidization become value destruction?",
      "How do high-interest environments force direct accountability back to cash generation?",
    ],
  },
  {
    id: "platform-friction-and-flywheels",
    slug: "platform-friction-and-flywheels",
    title: "Deconstructing Two-Sided Marketplaces: Where Chicken Meets Egg",
    topic: "BUSINESS MODELS",
    readTime: "5 min read",
    date: "WORKING NOTE",
    excerpt:
      "Notes from analyzing digital platforms at IIM Bangalore: identifying the single critical constraint that allows one side of the market to subsidize the other organically.",
    isDraftOrPlaceholder: true,
    keyQuestions: [
      "Why do most marketplace start-ups die attempting to balance supply and demand simultaneously?",
      "How hard constraints in supply create asymmetric pricing power.",
    ],
  },
  {
    id: "data-without-context",
    slug: "data-without-context",
    title: "Data Without Operational Empathy is Merely Sophisticated Hallucination",
    topic: "DATA ANALYTICS",
    readTime: "3 min read",
    date: "WORKING NOTE",
    excerpt:
      "Observations from statistical coursework and case simulations: why numbers in a clean spreadsheet decouple from ground-floor human behavior unless tested in the field.",
    isDraftOrPlaceholder: true,
    keyQuestions: [
      "Why do regression models fail when operational incentives diverge from metric definitions?",
      "The value of pairing quantitative analytics with qualitative observations.",
    ],
  },
  {
    id: "social-enterprise-viability",
    slug: "social-enterprise-viability",
    title: "Reflections from MITTI Café: The Architecture of Sustainable Inclusion",
    topic: "ENTREPRENEURSHIP",
    readTime: "6 min read",
    date: "WORKING NOTE",
    excerpt:
      "Key learnings from the national finals: why social ventures must maintain sharper financial scrutiny than commercial competitors to protect their core humanitarian mission.",
    isDraftOrPlaceholder: true,
    keyQuestions: [
      "How can inclusive employment models achieve price parity in ultra-competitive retail spaces?",
      "Designing corporate partnerships that generate enduring mutual economic value.",
    ],
  },
];
