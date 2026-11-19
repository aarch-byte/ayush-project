export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  badge: string;
  year: string;
  context: string;
  role: string;
  recognition: string;
  problem: string;
  approach: string[];
  solution: string;
  financialFramework: {
    label: string;
    description: string;
  }[];
  learnings: string[];
  featured: boolean;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "mitti-compass",
    slug: "mitti-compass",
    title: "MITTI COMPASS",
    subtitle: "Strategic Financial & Expansion-Planning Framework for Social Inclusion",
    category: "Financial Modeling & Business Strategy",
    badge: "Top 10 Finalist — National Case Competition",
    year: "2024",
    context:
      "Developed in the context of the national MITTI Café case competition, focusing on sustainable financial expansion for café operations managed by persons with disabilities.",
    role: "Strategic Financial Modeling, Unit Economics & Expansion Planning",
    recognition: "Top 10 Finalist & Offline Final-Round Participant",
    problem:
      "MITTI Café balances a dual mandate: maximizing social inclusion while achieving economic resilience across high-cost urban retail locations. The challenge was architecting a scalable expansion blueprint that preserves training quality without escalating operational burn.",
    approach: [
      "Rigorous unit-level cost analysis isolating raw materials, specialized adaptive equipment, and store-level labor.",
      "Multi-scenario break-even modeling across diverse real estate footprints (corporate cafeterias vs. standalone high-street outlets).",
      "Designing an operational expansion framework titled 'MITTI Compass' mapping capital expenditure to regional demographic hubs.",
    ],
    solution:
      "A modular, phased expansion playbook combining low-CapEx institutional corporate partnerships with optimized supply-chain cluster kitchens to safeguard operating margins and enable predictable cash flows.",
    financialFramework: [
      {
        label: "Cluster Hub & Spoke Model",
        description: "Centralized prep facilities reducing in-store kitchen footprint by 35% and standardizing unit quality.",
      },
      {
        label: "CapEx Amortization Structuring",
        description: "Optimized corporate partnership leases that reduce upfront capital expenditure by over 40%.",
      },
      {
        label: "Adaptive Labor Capacity Index",
        description: "Balancing training rotations with peak operational hours to protect customer throughput without compromising inclusion values.",
      },
    ],
    learnings: [
      "Social enterprises require even tighter unit economics than traditional businesses because mission drift begins when financial runway ends.",
      "In-person defense before seasoned industry evaluators taught the immense value of stress-testing sensitivity variables under adverse macro assumptions.",
    ],
    featured: true,
  },
  {
    id: "retail-analytics-model",
    slug: "retail-analytics-model",
    title: "OMNICHANNEL UNIT ECONOMICS SIMULATOR",
    subtitle: "Algorithmic Cash-Flow & Inventory Dynamics in Emerging Commerce",
    category: "Data Analytics & Quantitative Finance",
    badge: "Independent Research & Model",
    year: "2024",
    context:
      "Exploratory quantitative analysis examining working capital cycles, customer acquisition cost sensitivity, and inventory turnover across modern D2C hybrid retail models.",
    role: "Data Modeling & Scenario Synthesis",
    recognition: "Academic & Practical Exploration",
    problem:
      "Emerging direct-to-consumer brands frequently scale top-line GMV while deteriorating operating cash flows due to unoptimized return rates and inventory write-downs.",
    approach: [
      "Constructed dynamic Monte Carlo simulations evaluating inventory carrying costs against localized fulfillment lead times.",
      "Analyzed cohort retention degradation to compute empirical LTV/CAC equilibrium thresholds.",
    ],
    solution:
      "An automated scenario dashboard isolating sensitivity drivers across SKU velocity, marketing attribution decay, and regional logistics costs.",
    financialFramework: [
      {
        label: "Dynamic Safety Stock Calculation",
        description: "Demand-weighted buffer models lowering stagnant inventory holding costs.",
      },
      {
        label: "Contribution Margin 3 Modeling",
        description: "Factoring all return processing, reverse logistics, and payment gateway fees into real-time SKU profitability.",
      },
    ],
    learnings: [
      "Data analytics is only as powerful as the operational lever it informs; telemetry without execution is noise.",
    ],
    featured: false,
  },
];
