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
  status: "Conceptual Simulator & Framework" | "Exploratory Quantitative Model";
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "mitti-compass",
    slug: "mitti-compass",
    title: "MITTI COMPASS",
    subtitle: "Interactive Financial & Expansion-Planning Simulator Concept for MITTI Café",
    category: "Financial Planning & Expansion Strategy",
    badge: "Top 10 Finalist — MITTI Café Case Competition",
    year: "November 2026",
    context:
      "Developed in the context of the MITTI Café Case Competition focusing on a social enterprise that employs persons with disabilities. The team reached the national Top 10 and participated in the offline final round at IIM Bangalore in November 2026.",
    role: "Marketing & Finance Strategy, Expansion Simulator Design",
    recognition: "Top 10 Finalist | Offline Final-Round Participant, IIM Bangalore",
    problem:
      "MITTI Café operates on a dual mandate: providing dignified employment to persons with disabilities while maintaining financial viability across high-cost urban environments. The expansion dilemma lies in evaluating new locations without overextending capital reserves or compromising specialized training workflows.",
    approach: [
      "Geospatial location mapping assessing demographic clusters, tech-park densities, and transit accessibility.",
      "Developing a dynamic scenario simulator contrasting conservative, moderate, and aggressive customer throughput assumptions.",
      "Structuring the 'Spokes vs. Lighthouses' operational model to balance flagships against lower-overhead institutional kiosks.",
      "Modeling funding considerations, grant utilization, and corporate sponsorship arrangements to protect cash flow reserves.",
    ],
    solution:
      "An interactive financial planning and expansion simulator concept that evaluates potential store locations, projects capital expenditure against expected footfalls, and compares institutional corporate hubs against high-street units before capital is deployed.",
    pillars: [
      {
        label: "Spokes vs. Lighthouses Model",
        description:
          "Proposes centralized high-visibility 'Lighthouses' supported by agile, low-overhead corporate 'Spokes' to balance brand presence with lean operations.",
      },
      {
        label: "Geospatial Location Mapping",
        description:
          "Evaluates potential site coordinates based on commercial density, transit convenience for disabled staff, and corporate partner proximity.",
      },
      {
        label: "Scenario & Funding Planning",
        description:
          "Simulates cash-flow runways under varying capital structures, including CSR partnerships, institutional leases, and grant-aided expansion.",
      },
    ],
    financialFramework: [
      {
        label: "Spokes vs. Lighthouses Model",
        description:
          "Proposes centralized high-visibility 'Lighthouses' supported by agile, low-overhead corporate 'Spokes' to balance brand presence with lean operations.",
      },
      {
        label: "Geospatial Location Mapping",
        description:
          "Evaluates potential site coordinates based on commercial density, transit convenience for disabled staff, and corporate partner proximity.",
      },
      {
        label: "Scenario & Funding Planning",
        description:
          "Simulates cash-flow runways under varying capital structures, including CSR partnerships, institutional leases, and grant-aided expansion.",
      },
    ],
    learnings: [
      "Mission-driven social enterprises require even stricter financial scrutiny than conventional businesses, because financial viability protects the humanitarian mission.",
      "Defending strategic models in-person at IIM Bangalore before an experienced jury reinforced the necessity of stress-testing operational assumptions under conservative scenarios.",
    ],
    featured: true,
    status: "Conceptual Simulator & Framework",
  },
  {
    id: "retail-analytics-model",
    slug: "retail-analytics-model",
    title: "OMNICHANNEL UNIT ECONOMICS SIMULATOR",
    subtitle: "Exploratory Working-Capital & Inventory Flow Concept",
    category: "Data Analytics & Quantitative Finance",
    badge: "Independent Exploratory Model",
    year: "2025",
    context:
      "An exploratory quantitative project developed to analyze working capital cycles, contribution margins, and inventory turnover across hybrid commerce scenarios.",
    role: "Quantitative Scenario Modeling",
    recognition: "Academic & Personal Exploration",
    problem:
      "Growing consumer brands often generate top-line expansion while encountering severe working capital strain due to inventory holding times and return logistics.",
    approach: [
      "Simulated inventory lead times and buffer levels across multi-channel distribution paths.",
      "Constructed sensitivity tables evaluating contribution margins after factoring fulfillment and payment processing costs.",
    ],
    solution:
      "A conceptual analytical model designed to visualize how variations in inventory velocity and return rates impact operating cash flows.",
    pillars: [
      {
        label: "Inventory Velocity Analysis",
        description: "Assessing carrying costs across variable SKU turnover rates.",
      },
      {
        label: "Margin Sensitivity Modeling",
        description: "Evaluating net contribution margins across differing fulfillment channel costs.",
      },
      {
        label: "Scenario Testing Dashboard",
        description: "Simulating cash-flow impact under delayed receivable cycles.",
      },
    ],
    financialFramework: [
      {
        label: "Inventory Velocity Analysis",
        description: "Assessing carrying costs across variable SKU turnover rates.",
      },
      {
        label: "Margin Sensitivity Modeling",
        description: "Evaluating net contribution margins across differing fulfillment channel costs.",
      },
      {
        label: "Scenario Testing Dashboard",
        description: "Simulating cash-flow impact under delayed receivable cycles.",
      },
    ],
    learnings: [
      "Data models are only as valuable as the operational realities they reflect; theoretical math must align with physical supply chain constraints.",
    ],
    featured: false,
    status: "Exploratory Quantitative Model",
  },
];
