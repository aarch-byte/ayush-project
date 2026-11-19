"use client";

import React, { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { ChromeSculpture } from "./ChromeSculpture";

function WebGLFallback() {
  return (
    <div
      className="w-full h-full flex items-center justify-center p-8 select-none"
      role="img"
      aria-label="Geometric fallback representation of the philosophical monolith sculpture"
    >
      <div className="relative w-72 h-72 rounded-full border border-universe-accent/20 bg-gradient-to-tr from-universe-surface via-universe-card to-universe-bg flex items-center justify-center shadow-[0_0_80px_rgba(216,255,62,0.15)] animate-pulse-slow">
        {/* Procedural SVG Hypercube / Philosophical Monolith Illusion */}
        <svg
          viewBox="0 0 200 200"
          className="w-52 h-52 text-universe-accent opacity-85"
          fill="none"
        >
          <polygon
            points="60,30 140,30 180,80 140,170 60,170 20,80"
            stroke="#D8FF3E"
            strokeWidth="2"
            strokeDasharray="4 2"
            className="animate-spin"
            style={{ animationDuration: "30s", transformOrigin: "center" }}
          />
          <circle
            cx="100"
            cy="100"
            r="38"
            stroke="#F2EFE7"
            strokeWidth="3"
            className="animate-ping"
            style={{ animationDuration: "5s" }}
          />
        </svg>
        <span className="absolute bottom-4 font-mono text-[10px] text-universe-muted uppercase tracking-widest">
          PHILOSOPHICAL MONOLITH // FALLBACK
        </span>
      </div>
    </div>
  );
}

export function SculptureCanvas() {
  const [hasWebGL, setHasWebGL] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const canvas = document.createElement("canvas");
      const gl =
        canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (!gl) {
        setHasWebGL(false);
      }
    } catch {
      setHasWebGL(false);
    }
  }, []);

  if (!mounted) {
    return <div className="w-full h-[500px] sm:h-[600px] lg:h-[680px]" />;
  }

  if (!hasWebGL) {
    return <WebGLFallback />;
  }

  return (
    <div className="w-full h-[500px] sm:h-[600px] lg:h-[680px] relative">
      <Canvas
        camera={{ position: [0, 0, 7.8], fov: 38 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        dpr={[1, 2]}
      >
        {/* Studio Lighting Setup */}
        <ambientLight intensity={0.5} />

        {/* Key Light (Dramatic Pure White from Top-Left) */}
        <directionalLight position={[-5, 6, 5]} intensity={3.2} color="#FFFFFF" />

        {/* Soft Slate/Indigo Rim Fill */}
        <directionalLight position={[5, -4, 3]} intensity={1.5} color="#88A0B8" />

        {/* Signature Accent Rim Light (Acid Green Reflection) */}
        <pointLight
          position={[4, 3.5, -1.5]}
          intensity={8.0}
          color="#D8FF3E"
          distance={14}
        />

        {/* Deep Coral Rim Point Light (Base Accent) */}
        <pointLight
          position={[-3, -4.5, 1]}
          intensity={3.0}
          color="#FF674A"
          distance={10}
        />

        <Suspense fallback={null}>
          <ChromeSculpture />
        </Suspense>
      </Canvas>
    </div>
  );
}
