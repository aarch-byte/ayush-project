"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Clock, Copy, Mail, MessageSquare, Send, Sparkles, User } from "lucide-react";
import { PERSONAL_DATA } from "@/data/personal";

export default function ContactPage() {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    topic: "Business Strategy / Ideas",
    message: "",
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("ayush@digitaluniverse.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.email || !formState.message) return;
    setSubmitted(true);
  };

  return (
    <div className="relative min-h-screen pt-24 sm:pt-32 pb-24 bg-universe-bg text-universe-text">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 universe-grid pointer-events-none opacity-25" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-universe-accent/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 font-mono text-xs text-universe-muted">
          <Link href="/" className="hover:text-universe-accent transition-colors flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>HOME</span>
          </Link>
          <span>/</span>
          <span className="text-universe-accent uppercase">07 CONNECT</span>
        </div>

        {/* Page Header */}
        <header className="border-b border-universe-border/60 pb-12 space-y-6">
          <div className="flex items-center gap-2 font-mono text-xs text-universe-accent uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>TRANSMISSION PORTAL // DIRECT DIALOGUE</span>
          </div>

          <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-8xl uppercase tracking-tightest leading-[0.92]">
            LET&apos;S MAKE <br />
            <span className="font-serif italic font-normal text-universe-accent lowercase tracking-normal">
              something happen.
            </span>
          </h1>

          <p className="font-mono text-xs sm:text-sm text-universe-muted max-w-2xl leading-relaxed">
            Whether you want to deconstruct an unconventional business model, discuss the MITTI Compass financial framework, explore a collaborative venture, or simply exchange ideas with a curious mind.
          </p>
        </header>

        {/* Contact Grid: Direct Connection & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Direct Dossier */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Email Card */}
            <div className="p-8 rounded-3xl border border-universe-border bg-universe-surface/80 space-y-4">
              <span className="font-mono text-[11px] text-universe-accent uppercase tracking-widest block font-semibold">
                DIRECT INBOX
              </span>
              <p className="font-display font-bold text-2xl text-universe-text tracking-tight break-all">
                ayush@digitaluniverse.com
              </p>
              <button
                onClick={handleCopyEmail}
                type="button"
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-universe-border bg-universe-bg hover:border-universe-accent font-mono text-xs text-universe-text hover:text-universe-accent transition-all font-semibold"
              >
                {copied ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-universe-accent" />
                    <span>COPIED TO CLIPBOARD</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>COPY EMAIL ADDRESS</span>
                  </>
                )}
              </button>
            </div>

            {/* Professional Profiles */}
            <div className="p-8 rounded-3xl border border-universe-border bg-universe-surface/80 space-y-4 font-mono text-xs">
              <span className="text-universe-accent uppercase tracking-widest block font-semibold text-[11px]">
                NETWORKS & LOCATION
              </span>

              <div className="space-y-3">
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl border border-universe-border/60 bg-universe-bg hover:border-universe-accent hover:text-universe-accent transition-all text-universe-text group"
                >
                  <span className="font-semibold">LINKEDIN // VERIFIED PROFILE</span>
                  <ArrowUpRight className="w-4 h-4 text-universe-muted group-hover:text-universe-accent transition-colors" />
                </a>

                <div className="p-4 rounded-xl border border-universe-border/40 bg-universe-bg/40 text-universe-muted flex items-center justify-between">
                  <span>BASE GEOGRAPHY</span>
                  <span className="text-universe-text font-semibold">{PERSONAL_DATA.location}</span>
                </div>
              </div>
            </div>

            {/* Response Protocol */}
            <div className="p-6 rounded-2xl border border-universe-border/40 bg-universe-surface/40 font-mono text-xs text-universe-muted space-y-2">
              <span className="text-universe-accent uppercase block font-semibold text-[11px] flex items-center gap-2">
                <Clock className="w-3.5 h-3.5" />
                <span>RESPONSE PROTOCOL</span>
              </span>
              <p className="leading-relaxed">
                Direct communication, zero automated filters. Messages typically receive an authentic personal reply within 24–48 hours.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Transmission Form */}
          <div className="lg:col-span-7 p-8 sm:p-12 rounded-3xl border border-universe-border bg-universe-surface/90 relative">
            {submitted ? (
              <div className="py-20 text-center space-y-6 animate-in fade-in duration-500">
                <div className="w-20 h-20 rounded-full bg-universe-accent/20 border-2 border-universe-accent text-universe-accent flex items-center justify-center mx-auto shadow-[0_0_40px_rgba(216,255,62,0.3)]">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-display font-bold text-3xl text-universe-text uppercase tracking-tight">
                    TRANSMISSION DELIVERED
                  </h3>
                  <p className="font-mono text-xs text-universe-muted max-w-sm mx-auto leading-relaxed">
                    Thank you, {formState.name || "Colleague"}. Your note has been securely transmitted. Ayush will review and respond.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormState({ name: "", email: "", topic: "Business Strategy / Ideas", message: "" });
                  }}
                  className="px-6 py-2.5 rounded-full border border-universe-border bg-universe-bg font-mono text-xs text-universe-accent hover:border-universe-accent transition-all"
                >
                  TRANSMIT ANOTHER NOTE
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex items-center justify-between border-b border-universe-border/60 pb-4">
                  <span className="font-mono text-xs text-universe-accent uppercase tracking-widest font-semibold flex items-center gap-2">
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>TRANSMISSION FORM</span>
                  </span>
                  <span className="font-mono text-[10px] text-universe-muted uppercase">
                    ALL FIELDS SECURE
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2 font-mono text-xs">
                    <label htmlFor="name" className="text-universe-muted uppercase block font-semibold">
                      YOUR NAME
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-universe-border bg-universe-bg text-universe-text placeholder:text-universe-muted/40 focus:border-universe-accent focus:ring-1 focus:ring-universe-accent outline-none font-mono text-xs transition-all"
                    />
                  </div>

                  <div className="space-y-2 font-mono text-xs">
                    <label htmlFor="email" className="text-universe-muted uppercase block font-semibold">
                      EMAIL ADDRESS
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="e.g. alex@example.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-universe-border bg-universe-bg text-universe-text placeholder:text-universe-muted/40 focus:border-universe-accent focus:ring-1 focus:ring-universe-accent outline-none font-mono text-xs transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2 font-mono text-xs">
                  <label htmlFor="topic" className="text-universe-muted uppercase block font-semibold">
                    INQUIRY FOCUS
                  </label>
                  <select
                    id="topic"
                    value={formState.topic}
                    onChange={(e) => setFormState({ ...formState, topic: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-universe-border bg-universe-bg text-universe-text focus:border-universe-accent focus:ring-1 focus:ring-universe-accent outline-none font-mono text-xs transition-all"
                  >
                    <option value="Business Strategy / Ideas">Business Strategy & Digital Platforms</option>
                    <option value="MITTI Compass Case Inquiry">MITTI Compass Case Study Inquiry</option>
                    <option value="Data Analytics Discussion">Data Analytics & Quantitative Finance</option>
                    <option value="General Conversation / Connect">General Intellectual Exchange / Connect</option>
                  </select>
                </div>

                <div className="space-y-2 font-mono text-xs">
                  <label htmlFor="message" className="text-universe-muted uppercase block font-semibold">
                    YOUR NOTE / INQUIRY
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    placeholder="Describe your inquiry, business problem, or idea..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-universe-border bg-universe-bg text-universe-text placeholder:text-universe-muted/40 focus:border-universe-accent focus:ring-1 focus:ring-universe-accent outline-none font-mono text-xs transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full group flex items-center justify-center gap-2 py-4 rounded-xl bg-universe-accent text-universe-bg font-mono text-xs font-bold uppercase tracking-wider hover:bg-white transition-all shadow-[0_0_25px_rgba(216,255,62,0.25)]"
                >
                  <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  <span>TRANSMIT MESSAGE TO AYUSH</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Footer Navigation */}
        <footer className="pt-12 border-t border-universe-border/60 flex items-center justify-between font-mono text-xs">
          <Link href="/beyond" className="hover:text-universe-accent transition-colors flex items-center gap-1">
            <span>← 06 BEYOND THE WORK</span>
          </Link>
          <Link href="/" className="hover:text-universe-accent transition-colors flex items-center gap-1">
            <span>01 RETURN TO HOME →</span>
          </Link>
        </footer>
      </div>
    </div>
  );
}
