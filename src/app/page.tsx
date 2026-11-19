import React from "react";
import { HeroSection } from "@/components/hero/HeroSection";
import { IntroSection } from "@/components/home/IntroSection";
import { JourneySection } from "@/components/home/JourneySection";
import { WorkSection } from "@/components/home/WorkSection";
import { ThinkingSection } from "@/components/home/ThinkingSection";
import { BeyondSection } from "@/components/home/BeyondSection";
import { ContactSection } from "@/components/home/ContactSection";

export default function HomePage() {
  return (
    <div className="relative w-full">
      {/* SECTION 01 — CINEMATIC HERO */}
      <HeroSection />

      {/* SECTION 02 — INTRODUCTION */}
      <IntroSection />

      {/* SECTION 03 — THE JOURNEY */}
      <JourneySection />

      {/* SECTION 04 — SELECTED WORK */}
      <WorkSection />

      {/* SECTION 05 — THE THINKING */}
      <ThinkingSection />

      {/* SECTION 06 — BEYOND THE WORK */}
      <BeyondSection />

      {/* SECTION 07 — CONTACT */}
      <ContactSection />
    </div>
  );
}
