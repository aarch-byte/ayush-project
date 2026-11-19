import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Award, BarChart3, CheckCircle2, ChevronRight, Compass, FileSpreadsheet, Layers, Lightbulb, MapPin, ShieldAlert, Sparkles, Target, TrendingUp } from "lucide-react";
import { CASE_STUDIES } from "@/data/projects";

export default function MittiCompassPage() {
  const project = CASE_STUDIES[0];

  const breakdownMetrics = [
    {
      metric: "TOP 10",
      label: "National Finalist",
      context: "Selected among top teams nationally to present in the offline final round at IIM Bangalore.",
    },
    {
      metric: "OFFLINE",
      label: "IIM Bangalore Finals",
      context: "Participated in the offline final-round presentation and evaluation at IIM Bangalore in November 2026.",
    },
    {
      metric: "CONCEPT",
      label: "Strategic Simulator",
      context: "Designed an interactive financial planning and expansion simulator concept for location-based decision support.",
    },
    {
      metric: "CASE STUDY",
      label: "Competition Entry",
      context: "Presented as a conceptual proposal and simulation developed for the national case competition finals.",
    },
  ];

  return (
    <div className="relative min-h-screen pt-24 sm:pt-32 pb-24 bg-universe-bg text-universe-text">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 universe-grid pointer-events-none opacity-25" />

      <article className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 font-mono text-xs text-universe-muted">
          <Link href="/work" className="hover:text-universe-accent flex items-center gap-1 transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>SELECTED WORK</span>
          </Link>
          <span>/</span>
          <span className="text-universe-accent uppercase">CASE STUDY // MITTI COMPASS</span>
        </div>

        {/* Case Study Header Dossier */}
        <header className="space-y-6 border-b border-universe-border/60 pb-12">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3.5 py-1 rounded-full bg-universe-accent text-universe-bg font-mono text-xs font-bold uppercase tracking-wider">
              {project.badge}
            </span>
            <span className="px-3.5 py-1 rounded-full border border-universe-border bg-universe-surface font-mono text-xs text-universe-accent uppercase">
              OFFLINE FINALIST — IIM BANGALORE
            </span>
          </div>

          <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-8xl uppercase tracking-tightest leading-[0.92]">
            {project.title}
          </h1>

          <p className="font-serif italic text-2xl sm:text-3xl text-universe-text/90 leading-snug">
            {project.subtitle}
          </p>

          {/* Dossier Metadata Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-universe-border/40 font-mono text-xs">
            <div>
              <span className="text-universe-muted uppercase block text-[10px]">MY CONTRIBUTION</span>
              <span className="text-universe-text font-semibold">{project.role}</span>
            </div>
            <div>
              <span className="text-universe-muted uppercase block text-[10px]">ENTERPRISE CONTEXT</span>
              <span className="text-universe-text font-semibold">MITTI Social Initiatives</span>
            </div>
            <div>
              <span className="text-universe-muted uppercase block text-[10px]">RECOGNITION</span>
              <span className="text-universe-accent font-semibold">{project.recognition}</span>
            </div>
            <div>
              <span className="text-universe-muted uppercase block text-[10px]">TIMELINE</span>
              <span className="text-universe-text font-semibold">{project.year}</span>
            </div>
          </div>
        </header>

        {/* Executive Highlights Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {breakdownMetrics.map((item, idx) => (
            <div key={idx} className="p-6 rounded-2xl border border-universe-border bg-universe-surface/70 space-y-2">
              <span className="font-display font-black text-2xl sm:text-3xl text-universe-accent">
                {item.metric}
              </span>
              <span className="font-mono text-xs text-universe-text block uppercase font-semibold">
                {item.label}
              </span>
              <p className="font-mono text-[11px] text-universe-muted leading-relaxed">
                {item.context}
              </p>
            </div>
          ))}
        </div>

        {/* SECTION 1: Background & Social Mandate */}
        <section className="space-y-6 pt-6">
          <div className="flex items-center gap-2 font-mono text-xs text-universe-accent uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>01 // SOCIAL ENTERPRISE CONTEXT & MISSION</span>
          </div>

          <div className="prose prose-invert max-w-none text-base sm:text-lg text-universe-text/85 font-sans leading-relaxed space-y-4">
            <p>
              MITTI Café is a social enterprise dedicated to providing meaningful and dignified employment for persons with physical, intellectual, and psychiatric disabilities. Across its café network, MITTI creates inclusive physical spaces that demonstrate social value alongside commercial hospitality.
            </p>
            <div className="p-6 rounded-2xl border-l-2 border-universe-accent bg-universe-surface/60 font-serif italic text-xl text-universe-text my-4">
              &ldquo;How can an inclusive social enterprise evaluate potential new locations, balance high urban rental costs, and expand sustainably without overextending capital resources?&rdquo;
            </div>
            <p>
              As participants in the MITTI Café Case Competition, our team reached the national Top 10 and presented in the offline final round at IIM Bangalore in November 2026. My contributions centered on marketing, financial planning, and conceptualizing an expansion-decision simulator.
            </p>
          </div>
        </section>

        {/* SECTION 2: Problem Formulation */}
        <section className="p-8 sm:p-12 rounded-3xl border border-universe-border bg-universe-surface/70 space-y-6">
          <div className="flex items-center gap-2 font-mono text-xs text-universe-secondary uppercase tracking-widest">
            <ShieldAlert className="w-4 h-4" />
            <span>02 // THE STRATEGIC EXPANSION CHALLENGE</span>
          </div>

          <h2 className="font-display font-bold text-2xl sm:text-4xl uppercase tracking-tight text-universe-text">
            Key Expansion Dilemmas
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 font-mono text-xs">
            <div className="p-5 rounded-2xl border border-universe-border/60 bg-universe-bg/60 space-y-2">
              <span className="text-universe-secondary font-bold text-[11px]">CHALLENGE 01</span>
              <h3 className="font-display font-bold text-base uppercase text-universe-text">Location Feasibility</h3>
              <p className="text-universe-muted leading-relaxed">
                Determining whether high-traffic commercial spaces or corporate IT campuses offer better risk-adjusted returns for inclusive café setups.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-universe-border/60 bg-universe-bg/60 space-y-2">
              <span className="text-universe-secondary font-bold text-[11px]">CHALLENGE 02</span>
              <h3 className="font-display font-bold text-base uppercase text-universe-text">CapEx Allocation</h3>
              <p className="text-universe-muted leading-relaxed">
                Balancing upfront investments in accessible café infrastructure against available cash reserves and donor or corporate partnership commitments.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-universe-border/60 bg-universe-bg/60 space-y-2">
              <span className="text-universe-secondary font-bold text-[11px]">CHALLENGE 03</span>
              <h3 className="font-display font-bold text-base uppercase text-universe-text">Operational Scalability</h3>
              <p className="text-universe-muted leading-relaxed">
                Preserving specialized staff training and support structures as the number of operating outlets increases across geographically dispersed locations.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3: Proposed Simulator Concept */}
        <section className="space-y-6">
          <div className="flex items-center gap-2 font-mono text-xs text-universe-accent uppercase tracking-widest">
            <Target className="w-3.5 h-3.5" />
            <span>03 // PROPOSED SOLUTION: MITTI COMPASS SIMULATOR CONCEPT</span>
          </div>

          <p className="text-base text-universe-text/80 font-sans leading-relaxed">
            MITTI Compass was conceived as an interactive decision-support simulator designed to assist management in evaluating expansion opportunities before committing capital. The proposal integrated geospatial mapping, financial planning, scenario modeling, and funding structures.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 font-mono text-xs">
            <div className="p-6 rounded-2xl border border-universe-border bg-universe-surface/60 space-y-3">
              <div className="flex items-center gap-2 text-universe-accent font-semibold">
                <MapPin className="w-4 h-4" />
                <span>GEOSPATIAL LOCATION MAPPING</span>
              </div>
              <p className="text-universe-muted leading-relaxed">
                Evaluating potential café locations using commercial density metrics, transit convenience for disabled staff, and proximity to institutional corporate partners.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-universe-border bg-universe-surface/60 space-y-3">
              <div className="flex items-center gap-2 text-universe-accent font-semibold">
                <Compass className="w-4 h-4" />
                <span>SPOKES VS. LIGHTHOUSES MODEL</span>
              </div>
              <p className="text-universe-muted leading-relaxed">
                Proposing high-visibility flagship &ldquo;Lighthouse&rdquo; cafés in prime areas, paired with lean, lower-overhead corporate &ldquo;Spokes&rdquo; to expand the employment footprint sustainably.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-universe-border bg-universe-surface/60 space-y-3">
              <div className="flex items-center gap-2 text-universe-accent font-semibold">
                <BarChart3 className="w-4 h-4" />
                <span>DYNAMIC SCENARIO MODELING</span>
              </div>
              <p className="text-universe-muted leading-relaxed">
                Testing financial sensitivity across conservative, moderate, and optimistic customer footfalls to assess cash-flow stability under varied conditions.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-universe-border bg-universe-surface/60 space-y-3">
              <div className="flex items-center gap-2 text-universe-accent font-semibold">
                <Layers className="w-4 h-4" />
                <span>FUNDING & CSR STRUCTURING</span>
              </div>
              <p className="text-universe-muted leading-relaxed">
                Incorporating grant allocations, CSR partnerships, and corporate sponsor leasing models into the financial projections to mitigate initial capital risk.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 4: Strategic Learnings & Offline Defense */}
        <section className="p-8 sm:p-12 rounded-3xl border border-universe-border bg-universe-surface/70 space-y-6">
          <div className="flex items-center gap-2 font-mono text-xs text-universe-accent uppercase tracking-widest">
            <Lightbulb className="w-3.5 h-3.5" />
            <span>04 // REFLECTIONS FROM THE IIM BANGALORE FINALS</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl border border-universe-border/60 bg-universe-bg/60 space-y-3">
              <h3 className="font-display font-bold text-lg text-universe-text uppercase">
                The Value of In-Person Defense
              </h3>
              <p className="text-sm text-universe-text/80 font-sans leading-relaxed">
                Presenting our proposal in the offline final round at IIM Bangalore provided a valuable opportunity to receive feedback from judges experienced in social enterprise strategy, challenging us to defend our assumptions and focus on operational practicalities.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-universe-border/60 bg-universe-bg/60 space-y-3">
              <h3 className="font-display font-bold text-lg text-universe-text uppercase">
                Balancing Mission and Math
              </h3>
              <p className="text-sm text-universe-text/80 font-sans leading-relaxed">
                The competition reinforced that social impact and rigorous financial planning are complementary, not contradictory. Sustainable economics provide the foundation that allows an inclusive mission to thrive long-term.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 5: Scope & Documentation Note */}
        <div className="p-6 rounded-2xl border border-universe-border/60 bg-universe-bg font-mono text-xs text-universe-muted flex items-start gap-4">
          <CheckCircle2 className="w-4 h-4 text-universe-accent shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-universe-text">Documentation Note:</strong> This case study reflects a conceptual strategy and decision-support simulation framework developed for the MITTI Café Case Competition (Top 10 Finalist | Offline Final-Round Participant at IIM Bangalore, November 2026). It represents academic and competitive strategic analysis and does not claim commercial adoption or measured operational metrics.
          </p>
        </div>

        {/* Closing Action Footer */}
        <footer className="pt-12 border-t border-universe-border/60 flex flex-wrap items-center justify-between gap-6 font-mono text-xs">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 hover:text-universe-accent transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>RETURN TO SELECTED WORK</span>
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-universe-accent text-universe-bg font-bold tracking-wider hover:bg-white transition-all shadow-[0_0_20px_rgba(216,255,62,0.2)]"
          >
            <span>DISCUSS THIS STRATEGY</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </footer>
      </article>
    </div>
  );
}
