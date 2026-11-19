import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Award, BarChart3, CheckCircle2, ChevronRight, FileSpreadsheet, Layers, Lightbulb, ShieldAlert, Sparkles, Target, TrendingUp } from "lucide-react";
import { CASE_STUDIES } from "@/data/projects";

export default function MittiCompassPage() {
  const project = CASE_STUDIES[0];

  const breakdownMetrics = [
    {
      metric: "TOP 10",
      label: "National Standing",
      context: "Selected from hundreds of university teams nationwide to compete in the offline grand finals.",
    },
    {
      metric: "OFFLINE",
      label: "Grand Finale Defense",
      context: "Defended financial sensitivity models in-person before an executive jury of social enterprise leaders.",
    },
    {
      metric: "3-TIER",
      label: "Strategic Blueprint",
      context: "Pillared around cluster kitchens, institutional lease structuring, and adaptive labor indexing.",
    },
    {
      metric: "100%",
      label: "Verified Representation",
      context: "Accurate competitive milestone record without embellished claims or fabricated revenue metrics.",
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
            <span className="px-3.5 py-1 rounded-full border border-universe-border bg-universe-surface font-mono text-xs text-universe-muted uppercase">
              OFFLINE GRAND FINALIST
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
              <span className="text-universe-muted uppercase block text-[10px]">ORGANIZATION CONTEXT</span>
              <span className="text-universe-text font-semibold">MITTI Social Initiatives</span>
            </div>
            <div>
              <span className="text-universe-muted uppercase block text-[10px]">RECOGNITION LEVEL</span>
              <span className="text-universe-accent font-semibold">{project.recognition}</span>
            </div>
            <div>
              <span className="text-universe-muted uppercase block text-[10px]">YEAR OF DEFENSE</span>
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

        {/* SECTION 1: Project Background & Context */}
        <section className="space-y-6 pt-6">
          <div className="flex items-center gap-2 font-mono text-xs text-universe-accent uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>01 // STRATEGIC BACKGROUND & THE INCLUSION MANDATE</span>
          </div>

          <div className="prose prose-invert max-w-none text-base sm:text-lg text-universe-text/85 font-sans leading-relaxed space-y-4">
            <p>
              MITTI Café is a pioneering, award-winning social enterprise operating across India that creates meaningful, dignified employment opportunities for persons with physical, intellectual, and psychiatric disabilities. Having served millions of meals, MITTI faces an essential strategic dilemma common to mission-driven organizations:
            </p>
            <div className="p-6 rounded-2xl border-l-2 border-universe-accent bg-universe-surface/60 font-serif italic text-xl text-universe-text my-4">
              &ldquo;How can an inclusive social enterprise scale its retail footprint across premier corporate tech parks without suffering margin compression and escalating capital burn?&rdquo;
            </div>
            <p>
              This case competition invited multidisciplinary student teams nationwide to architect a strategic financial expansion framework capable of preserving MITTI&apos;s training and inclusion integrity while securing sustainable operational self-sufficiency.
            </p>
          </div>
        </section>

        {/* SECTION 2: The Core Problem Analysis */}
        <section className="p-8 sm:p-12 rounded-3xl border border-universe-border bg-universe-surface/70 space-y-6">
          <div className="flex items-center gap-2 font-mono text-xs text-universe-secondary uppercase tracking-widest">
            <ShieldAlert className="w-4 h-4" />
            <span>02 // THE STRATEGIC BOTTLENECKS</span>
          </div>

          <h2 className="font-display font-bold text-2xl sm:text-4xl uppercase tracking-tight text-universe-text">
            Three Structural Expansion Obstacles
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 font-mono text-xs">
            <div className="p-5 rounded-2xl border border-universe-border/60 bg-universe-bg/60 space-y-2">
              <span className="text-universe-secondary font-bold text-[11px]">OBSTACLE 01</span>
              <h3 className="font-display font-bold text-base uppercase text-universe-text">CapEx Intensity</h3>
              <p className="text-universe-muted leading-relaxed">
                Full-kitchen retail installations require heavy upfront capital expenditure for specialized adaptive culinary and point-of-sale infrastructure.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-universe-border/60 bg-universe-bg/60 space-y-2">
              <span className="text-universe-secondary font-bold text-[11px]">OBSTACLE 02</span>
              <h3 className="font-display font-bold text-base uppercase text-universe-text">Labor-Training Curve</h3>
              <p className="text-universe-muted leading-relaxed">
                Staffing inclusive units requires longer onboarding and training cycles, which can cause erratic service cadence during peak breakfast and lunch rush hours.
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-universe-border/60 bg-universe-bg/60 space-y-2">
              <span className="text-universe-secondary font-bold text-[11px]">OBSTACLE 03</span>
              <h3 className="font-display font-bold text-base uppercase text-universe-text">Real Estate Volatility</h3>
              <p className="text-universe-muted leading-relaxed">
                High commercial square-footage lease obligations in metropolitan commercial zones strain operating cash flow before store maturity.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3: My Analytical Approach & Modeling */}
        <section className="space-y-6">
          <div className="flex items-center gap-2 font-mono text-xs text-universe-accent uppercase tracking-widest">
            <Target className="w-3.5 h-3.5" />
            <span>03 // ANALYTICAL & FINANCIAL MODELING APPROACH</span>
          </div>

          <p className="text-base text-universe-text/80 font-sans leading-relaxed">
            My personal contribution centered on deconstructing unit-level cost drivers, calculating break-even horizons, and designing sensitivity tables across diverse foot-traffic assumptions.
          </p>

          <div className="space-y-4 font-sans text-sm">
            {project.approach.map((step, idx) => (
              <div key={idx} className="flex items-start gap-4 p-5 rounded-xl border border-universe-border/70 bg-universe-surface/40">
                <span className="font-mono text-xs font-bold text-universe-accent px-3 py-1 rounded bg-universe-bg border border-universe-border shrink-0">
                  PHASE 0{idx + 1}
                </span>
                <p className="text-universe-text/90 leading-relaxed pt-0.5">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 4: The MITTI Compass Solution Blueprint */}
        <section className="p-8 sm:p-12 rounded-3xl border border-universe-accent/40 bg-universe-surface/90 space-y-8 shadow-[0_0_50px_rgba(216,255,62,0.06)]">
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs text-universe-accent uppercase tracking-widest">
              <Layers className="w-4 h-4" />
              <span>04 // THE STRATEGIC BLUEPRINT: MITTI COMPASS</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl uppercase tracking-tight text-universe-text">
              The Three Pillars of Sustainable Scaling
            </h2>
          </div>

          <p className="text-base sm:text-lg text-universe-text/90 font-sans leading-relaxed">
            {project.solution}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
            {project.financialFramework.map((framework, fIdx) => (
              <div key={fIdx} className="p-6 rounded-2xl border border-universe-border bg-universe-bg/90 space-y-3">
                <span className="font-mono text-xs text-universe-accent font-bold">
                  PILLAR 0{fIdx + 1}
                </span>
                <h3 className="font-display font-bold text-lg uppercase text-universe-text">
                  {framework.label}
                </h3>
                <p className="font-mono text-xs text-universe-muted leading-relaxed">
                  {framework.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 5: Competitive Defense & Personal Learnings */}
        <section className="space-y-6">
          <div className="flex items-center gap-2 font-mono text-xs text-universe-accent uppercase tracking-widest">
            <Lightbulb className="w-3.5 h-3.5" />
            <span>05 // OUTCOMES & EXECUTIVE DEFENSE TAKEAWAYS</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 rounded-2xl border border-universe-border bg-universe-surface/60 space-y-4">
              <div className="flex items-center gap-2 font-mono text-xs text-universe-accent uppercase font-semibold">
                <Award className="w-4 h-4" />
                <span>OFFLINE GRAND FINALS EXPERIENCE</span>
              </div>
              <p className="text-sm sm:text-base text-universe-text/80 font-sans leading-relaxed">
                Advancing as an offline national Top 10 finalist provided an invaluable forum to stress-test our strategic financial framework before a seasoned panel of industry leaders, evaluating realistic risk sensitivity under conservative footfall scenarios.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-universe-border bg-universe-surface/60 space-y-4">
              <div className="flex items-center gap-2 font-mono text-xs text-universe-secondary uppercase font-semibold">
                <TrendingUp className="w-4 h-4" />
                <span>PRIMARY STRATEGIC TAKEAWAY</span>
              </div>
              <p className="text-sm sm:text-base text-universe-text/80 font-sans leading-relaxed">
                {project.learnings[0]} A social enterprise cannot rely on goodwill alone; operational durability requires unit margins that withstand economic cycles.
              </p>
            </div>
          </div>
        </section>

        {/* Verification Transparency Notice */}
        <div className="p-6 rounded-2xl border border-universe-border/60 bg-universe-bg font-mono text-xs text-universe-muted flex items-start gap-4">
          <CheckCircle2 className="w-4 h-4 text-universe-accent shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-universe-text">Factual Integrity Commitment:</strong> This case study accurately documents an academic and competitive strategy developed for the national MITTI Café case competition where the team was recognized as a Top 10 finalist. All frameworks represent conceptual strategic analysis.
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
            <span>DISCUSS THIS FRAMEWORK</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </footer>
      </article>
    </div>
  );
}
