"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, ArrowUpRight } from "lucide-react";
import { NAVIGATION_LINKS } from "@/data/navigation";
import { PERSONAL_DATA } from "@/data/personal";

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MenuOverlay({ isOpen, onClose }: MenuOverlayProps) {
  const pathname = usePathname();
  const overlayRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Close on Escape key and trap body scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
      setTimeout(() => closeButtonRef.current?.focus(), 50);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      role="dialog"
      aria-modal="true"
      aria-label="Site Navigation"
      className="fixed inset-0 z-50 bg-universe-bg/95 backdrop-blur-xl flex flex-col justify-between p-6 sm:p-10 lg:p-16 overflow-y-auto animate-in fade-in duration-300"
    >
      {/* Top Header inside overlay */}
      <div className="flex items-center justify-between border-b border-universe-border/50 pb-6">
        <div className="flex items-center gap-3">
          <span className="font-display font-bold text-xl tracking-tighter text-universe-text">
            {PERSONAL_DATA.brand}
          </span>
          <span className="text-[10px] font-mono tracking-widest text-universe-muted uppercase hidden sm:inline">
            // INDEX EXPLORER
          </span>
        </div>

        <button
          ref={closeButtonRef}
          onClick={onClose}
          type="button"
          className="group flex items-center gap-2 px-4 py-2 rounded-full border border-universe-border bg-universe-surface hover:border-universe-accent text-xs font-mono uppercase tracking-widest transition-all focus:outline-none focus:ring-1 focus:ring-universe-accent"
          aria-label="Close menu"
        >
          <span className="text-universe-muted group-hover:text-universe-accent transition-colors">
            CLOSE
          </span>
          <X className="w-4 h-4 text-universe-muted group-hover:text-universe-accent transition-colors" />
        </button>
      </div>

      {/* Main Navigation Links */}
      <nav className="my-auto py-10">
        <ul className="flex flex-col space-y-4 sm:space-y-6">
          {NAVIGATION_LINKS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.id} className="group relative">
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="flex flex-col sm:flex-row sm:items-baseline justify-between py-2 transition-all"
                >
                  <div className="flex items-baseline gap-4 sm:gap-8">
                    <span
                      className={`font-mono text-xs sm:text-sm tracking-widest transition-colors ${
                        isActive
                          ? "text-universe-accent font-bold"
                          : "text-universe-muted group-hover:text-universe-accent"
                      }`}
                    >
                      {item.number}
                    </span>
                    <span
                      className={`font-display text-3xl sm:text-5xl lg:text-7xl font-bold tracking-tight uppercase transition-all duration-300 ${
                        isActive
                          ? "text-universe-accent translate-x-2"
                          : "text-universe-text group-hover:text-universe-accent group-hover:translate-x-3"
                      }`}
                    >
                      {item.label}
                    </span>
                  </div>

                  <div className="flex items-center gap-4 mt-1 sm:mt-0 pl-8 sm:pl-0">
                    {item.description && (
                      <span className="hidden md:inline font-mono text-xs text-universe-muted max-w-xs text-right opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {item.description}
                      </span>
                    )}
                    <ArrowUpRight
                      className={`w-5 h-5 transition-transform duration-300 ${
                        isActive
                          ? "text-universe-accent rotate-45"
                          : "text-universe-muted opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1"
                      }`}
                    />
                  </div>
                </Link>
                <div
                  className={`h-px w-full transition-all duration-500 ${
                    isActive
                      ? "bg-universe-accent/40"
                      : "bg-universe-border/30 group-hover:bg-universe-accent/20"
                  }`}
                />
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Bottom Metadata & Footer in Overlay */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-universe-border/50 font-mono text-xs text-universe-muted">
        <div>
          <span className="block text-universe-accent uppercase text-[10px] tracking-widest mb-1">
            LOCATION
          </span>
          <p className="text-universe-text">{PERSONAL_DATA.location}</p>
        </div>

        <div>
          <span className="block text-universe-accent uppercase text-[10px] tracking-widest mb-1">
            CORE PHILOSOPHY
          </span>
          <p className="text-universe-text max-w-sm line-clamp-1">
            {PERSONAL_DATA.philosophy}
          </p>
        </div>

        <div className="md:text-right">
          <span className="block text-universe-accent uppercase text-[10px] tracking-widest mb-1">
            STATUS
          </span>
          <p className="text-universe-text">{PERSONAL_DATA.status}</p>
        </div>
      </div>
    </div>
  );
}
