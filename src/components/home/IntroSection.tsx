import React from "react";
import Link from "next/link";
import { ArrowUpRight, Sparkles, BookOpen, User } from "lucide-react";
import { PERSONAL_DATA } from "@/data/personal";

export function IntroSection() {
  return (
    <section
      id="introduction"
      className="relative bg-[#F2EFE7] text-[#101010] py-20 lg:py-32 transition-colors overflow-hidden"
    >
      {/* Background Architectural Markings */}
      <div className="absolute top-8 left-8 font-mono text-[11px] text-[#77766F] uppercase tracking-widest pointer-events-none">
        // SECTION 02 — THE IDENTITY & PHILOSOPHY
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Headline */}
        <div className="border-b border-[#101010]/20 pb-8 mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-[#77766F] block mb-3">
            [ INTRODUCTION ]
          </span>
          <h2 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tightest leading-tight text-[#101010]">
            A CURIOUS MIND. <br />
            <span className="font-serif italic font-normal text-[#101010]/80 lowercase tracking-normal">
              an unfinished story.
            </span>
          </h2>
        </div>

        {/* Asymmetric Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Authentic Photography Treatment Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-[#101010]/15 bg-[#E5E0D5] shadow-2xl flex flex-col justify-between p-6">
              
              {/* Top Frame Tag */}
              <div className="flex items-center justify-between font-mono text-[10px] text-[#77766F] uppercase tracking-widest">
                <span>PORTRAIT ARCHIVE</span>
                <span>FIG. 01 — AYUSH</span>
              </div>

              {/* Artistic Minimal Silhouette & Typography Placeholder for User's Real Photo */}
              <div className="my-auto flex flex-col items-center justify-center text-center p-8 space-y-4">
                <div className="w-24 h-24 rounded-full border border-[#101010]/20 flex items-center justify-center bg-[#F2EFE7]">
                  <User className="w-10 h-10 text-[#77766F]" />
                </div>
                <div>
                  <span className="font-display font-bold text-2xl tracking-tight text-[#101010]">
                    AYUSH
                  </span>
                  <p className="font-mono text-xs text-[#77766F] mt-1">
                    IIM Bangalore & GNDU
                  </p>
                </div>
                <div className="px-3 py-1 rounded-full bg-[#101010] text-[#F2EFE7] font-mono text-[10px] tracking-wider uppercase">
                  UNBOUNDED EXPLORER
                </div>
              </div>

              {/* Bottom Frame Technical Note */}
              <div className="font-mono text-[10px] text-[#77766F] border-t border-[#101010]/10 pt-3 flex items-center justify-between">
                <span>PERSONAL ARCHIVE</span>
                <span>AUTHENTIC RECORD</span>
              </div>
            </div>

            {/* Corner Decorative Accent Pill */}
            <div className="mt-4 flex items-center gap-2 font-mono text-xs text-[#77766F]">
              <Sparkles className="w-3.5 h-3.5 text-[#101010]" />
              <span>&ldquo;A mind without fixed boundaries.&rdquo;</span>
            </div>
          </div>

          {/* Right Column: Narrative & Authentic Voice */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-6 text-[#101010]/90 text-base sm:text-lg leading-relaxed">
              <p className="font-serif italic text-2xl sm:text-3xl text-[#101010] leading-snug">
                I look at the world through two converging lenses: the strategic mechanics of how businesses create enduring value, and the quantitative truth hidden within numbers.
              </p>
              
              <p>
                My journey isn&apos;t confined to a predetermined trajectory. Currently pursuing a{" "}
                <strong className="text-[#101010] font-semibold">
                  BBA in Digital Business and Entrepreneurship at IIM Bangalore
                </strong>{" "}
                alongside a{" "}
                <strong className="text-[#101010] font-semibold">
                  B.Com (Hons.) in Data Analytics at GNDU
                </strong>
                , I operate at the intersection of business strategy, financial analysis, and technological systems.
              </p>

              <p>
                Whether strategizing unit economics for the{" "}
                <strong className="text-[#101010] font-semibold">
                  MITTI Café case competition as an offline national Top 10 finalist
                </strong>
                , commanding drill contingents as an{" "}
                <strong className="text-[#101010] font-semibold">
                  NCC Alpha-grade cadet
                </strong>
                , or stepping into the ring for boxing and the table for table tennis—I believe discipline in physical arenas fuels clarity in intellectual ones.
              </p>
            </div>

            {/* Verified Focus Badges */}
            <div className="pt-4 border-t border-[#101010]/15">
              <span className="font-mono text-[11px] uppercase tracking-widest text-[#77766F] block mb-3">
                // SPHERES OF INQUIRY & EXPLORATION
              </span>
              <div className="flex flex-wrap gap-2 font-mono text-xs">
                {PERSONAL_DATA.interests.map((interest, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-full border border-[#101010]/20 bg-[#E8E3D8] text-[#101010] hover:border-[#101010] transition-colors"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Link to Full About Page */}
            <div className="pt-4">
              <Link
                href="/about"
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#101010] text-[#F2EFE7] font-mono text-xs uppercase tracking-wider font-semibold hover:bg-neutral-800 transition-all shadow-xl"
              >
                <BookOpen className="w-4 h-4 text-[#D8FF3E]" />
                <span>READ THE COMPLETE ABOUT DOSSIER</span>
                <ArrowUpRight className="w-4 h-4 text-[#D8FF3E] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
