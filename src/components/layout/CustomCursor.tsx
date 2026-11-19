"use client";

import React, { useEffect, useRef, useState } from "react";

type CursorState = "default" | "interactive" | "view" | "3d";

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [cursorState, setCursorState] = useState<CursorState>("default");
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Position references for smooth requestAnimationFrame lerp
  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const animFrameId = useRef<number | null>(null);

  useEffect(() => {
    // 1. Hardware & Preference Checks
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!hasFinePointer || prefersReducedMotion) {
      return;
    }

    setEnabled(true);
    document.body.classList.add("custom-cursor-active");

    // 2. Track Mouse Movement & Elements
    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);

      // Fast update for central dot directly
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }

      // Contextual Interactive State Detection
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const is3DElement = Boolean(
        target.closest("canvas") ||
        target.closest('[data-cursor="3d"]') ||
        target.closest(".cursor-grab")
      );

      const isViewCard = Boolean(
        target.closest('[data-cursor="view"]') ||
        target.closest('a[href^="/work"]') ||
        target.closest('.group\\/project')
      );

      const isInteractiveElement = Boolean(
        target.closest("a") ||
        target.closest("button") ||
        target.closest("input") ||
        target.closest("textarea") ||
        target.closest("select") ||
        target.closest('[role="button"]') ||
        target.closest('[data-cursor="pointer"]')
      );

      if (is3DElement) {
        setCursorState("3d");
      } else if (isViewCard) {
        setCursorState("view");
      } else if (isInteractiveElement) {
        setCursorState("interactive");
      } else {
        setCursorState("default");
      }
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    const onMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mousedown", onMouseDown, { passive: true });
    window.addEventListener("mouseup", onMouseUp, { passive: true });
    document.documentElement.addEventListener("mouseleave", onMouseLeave);
    document.documentElement.addEventListener("mouseenter", onMouseEnter);

    // 3. Smooth Ring Trailing Animation Loop
    const lerp = (start: number, end: number, factor: number) =>
      start + (end - start) * factor;

    const render = () => {
      const { x: targetX, y: targetY } = mousePos.current;
      const { x: currentX, y: currentY } = ringPos.current;

      // Lerp factor: 0.2 gives snappy yet organic fluid trail
      const newX = lerp(currentX, targetX, 0.2);
      const newY = lerp(currentY, targetY, 0.2);

      ringPos.current = { x: newX, y: newY };

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${newX}px, ${newY}px, 0)`;
      }

      animFrameId.current = requestAnimationFrame(render);
    };

    animFrameId.current = requestAnimationFrame(render);

    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.documentElement.removeEventListener("mouseleave", onMouseLeave);
      document.documentElement.removeEventListener("mouseenter", onMouseEnter);

      if (animFrameId.current) {
        cancelAnimationFrame(animFrameId.current);
      }
    };
  }, [isVisible]);

  if (!enabled) return null;

  // Determine Dimensions & Visual Styles based on State
  let ringSize = "w-8 h-8 -top-4 -left-4"; // 32px default
  let ringStyles =
    "border border-universe-accent/40 bg-transparent";
  let showViewLabel = false;
  let show3DLabel = false;

  if (cursorState === "interactive") {
    ringSize = "w-12 h-12 -top-6 -left-6"; // 48px
    ringStyles =
      "border border-universe-accent bg-universe-accent/10 shadow-[0_0_15px_rgba(216,255,62,0.18)]";
  } else if (cursorState === "view") {
    ringSize = "w-16 h-16 -top-8 -left-8"; // 64px
    ringStyles =
      "border border-universe-accent bg-universe-bg/85 backdrop-blur-sm shadow-[0_0_20px_rgba(216,255,62,0.22)]";
    showViewLabel = true;
  } else if (cursorState === "3d") {
    ringSize = "w-14 h-14 -top-7 -left-7"; // 56px
    ringStyles =
      "border border-dashed border-universe-accent bg-universe-accent/5 animate-[spin_12s_linear_infinite]";
    show3DLabel = true;
  }

  return (
    <div
      aria-hidden="true"
      className={`fixed top-0 left-0 pointer-events-none z-[9999] transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* 1. Trailing Outer Ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none will-change-transform"
      >
        <div
          className={`relative rounded-full flex items-center justify-center transition-all duration-200 ease-out ${ringSize} ${ringStyles} ${
            isClicking ? "scale-90" : "scale-100"
          }`}
        >
          {showViewLabel && (
            <span className="font-mono text-[9px] font-black uppercase tracking-widest text-universe-accent select-none">
              VIEW
            </span>
          )}
          {show3DLabel && (
            <span className="font-mono text-[8px] font-black uppercase tracking-widest text-universe-accent select-none">
              DRAG
            </span>
          )}
        </div>
      </div>

      {/* 2. Immediate Central Acid-Green Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none will-change-transform"
      >
        <div
          className={`w-1.5 h-1.5 -top-[3px] -left-[3px] relative rounded-full bg-universe-accent shadow-[0_0_8px_rgba(216,255,62,0.85)] transition-transform duration-150 ${
            cursorState === "interactive"
              ? "scale-125"
              : cursorState === "3d"
              ? "scale-75"
              : "scale-100"
          } ${isClicking ? "scale-50" : ""}`}
        />
      </div>
    </div>
  );
}
