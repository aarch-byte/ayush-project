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
  pillars: {
    label: string;
    description: string;
  }[];
  financialFramework: {
    label: string;
    description: string;
  }[];
  learnings: string[];
  featured: boolean;
  status: "Conceptual Simulator" | "Exploratory Concept";
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "mitti-compass",
    slug: "mitti-compass",
    title: "MITTI COMPASS",
    subtitle: "Conceptual Financial & Expansion-Planning Simulator Developed for MITTI Café",
    category: "Financial Planning & Expansion Strategy",
    badge: "Top 10 Finalist — MITTI Café Case Competition",
    year: "November 2026",
    context:
      "A conceptual financial and expansion-planning simulator developed in the MITTI Café case competition focusing on a social enterprise that employs persons with disabilities. The team reached the Top 10 and participated in the offline final round at IIM Bangalore in November 2026.",
    role: "Marketing & Finance Strategy, Expansion Simulator Design",
    recognition: "Top 10 Finalist | Offline Final-Round Participant, IIM Bangalore",
    problem:
      "MITTI Café balances a dual mission: employing persons with disabilities while managing costs in competitive urban locations. The strategic challenge was formulating an expansion model to evaluate potential sites and plan financial sustainability without overextending resources.",
    approach: [
      "Conceptual geospatial location mapping to evaluate potential store coordinates.",
      "Developing financial planning scenarios under differing footfall assumptions.",
      "Structuring a conceptual 'Spokes vs. Lighthouses' operating model.",
      "Evaluating funding considerations and corporate partnership opportunities.",
    ],
    solution:
      "A conceptual financial planning and expansion-decision simulator proposing location evaluation criteria, scenario planning, and capital considerations for social enterprise scaling.",
    pillars: [
      {
        label: "Spokes vs. Lighthouses Model",
        description:
          "A proposed conceptual structure pairing flagship locations with lower-overhead corporate kiosks to balance visibility with cost control.",
      },
      {
        label: "Geospatial Location Mapping",
        description:
          "Conceptual criteria for assessing location density, accessibility for staff with disabilities, and corporate proximity.",
      },
      {
        label: "Scenario & Funding Planning",
        description:
          "Scenario-based projections considering capital requirements, corporate partnerships, and operational sustainability.",
      },
    ],
    financialFramework: [
      {
        label: "Spokes vs. Lighthouses Model",
        description:
          "A proposed conceptual structure pairing flagship locations with lower-overhead corporate kiosks to balance visibility with cost control.",
      },
      {
        label: "Geospatial Location Mapping",
        description:
          "Conceptual criteria for assessing location density, accessibility for staff with disabilities, and corporate proximity.",
      },
      {
        label: "Scenario & Funding Planning",
        description:
          "Scenario-based projections considering capital requirements, corporate partnerships, and operational sustainability.",
      },
    ],
    learnings: [
      "Social enterprises benefit from careful financial planning and unit-level scrutiny to protect their inclusive mission.",
      "Presenting in the offline final round at IIM Bangalore provided valuable experience in evaluating assumptions under realistic business constraints.",
    ],
    featured: true,
    status: "Conceptual Simulator",
  },
  {
    id: "retail-analytics-model",
    slug: "retail-analytics-model",
    title: "OMNICHANNEL UNIT ECONOMICS SIMULATOR",
    subtitle: "Exploratory Thought Model on Working Capital & Inventory Dynamics",
    category: "Data Analytics & Quantitative Finance",
    badge: "Exploratory Concept (Not Built)",
    year: "Conceptual Exploration",
    context:
      "An exploratory concept and thought model examining working capital cycles, contribution margins, and inventory turnover across hybrid commerce scenarios.",
    role: "Conceptual Modeling & Scenario Analysis",
    recognition: "Exploratory Academic Concept",
    problem:
      "How inventory carrying costs and return logistics can impact operating cash flows in multichannel retail environments.",
    approach: [
      "Conceptual modeling of inventory turnover intervals.",
      "Hypothetical sensitivity analysis across variable fulfillment channel costs.",
    ],
    solution:
      "A conceptual framework outlining how data analysis can help visualize cash flow impacts from inventory lag and return rates.",
    pillars: [
      {
        label: "Inventory Flow Concept",
        description: "Conceptual analysis of holding costs across turnover rates.",
      },
      {
        label: "Margin Sensitivity",
        description: "Hypothetical analysis of fulfillment costs across channels.",
      },
      {
        label: "Scenario Exploration",
        description: "Exploring theoretical impacts on working capital cycles.",
      },
    ],
    financialFramework: [
      {
        label: "Inventory Flow Concept",
        description: "Conceptual analysis of holding costs across turnover rates.",
      },
      {
        label: "Margin Sensitivity",
        description: "Hypothetical analysis of fulfillment costs across channels.",
      },
      {
        label: "Scenario Exploration",
        description: "Exploring theoretical impacts on working capital cycles.",
      },
    ],
    learnings: [
      "Theoretical financial models must be grounded in real-world supply chain and operating conditions.",
    ],
    featured: false,
    status: "Exploratory Concept",
  },
];
