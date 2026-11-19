"use client";

import React, { useRef, useMemo, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { Float } from "@react-three/drei";

export function ChromeSculpture() {
  const groupRef = useRef<THREE.Group>(null);
  const outerBoxRef = useRef<THREE.Group>(null);
  const innerCoreRef = useRef<THREE.Mesh>(null);
  const ringRef1 = useRef<THREE.Mesh>(null);
  const ringRef2 = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const { viewport } = useThree();
  const isMobile = viewport.width < 5;

  React.useEffect(() => {
    try {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      setPrefersReducedMotion(mediaQuery.matches);
      const listener = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
      mediaQuery.addEventListener("change", listener);
      return () => mediaQuery.removeEventListener("change", listener);
    } catch {}
  }, []);

  // 1. Philosophical Form: The Organic Mind Transcending Fixed Boundaries
  // A fluid, continuous Möbius knot that physically threads through and expands beyond the box
  const fluidCoreGeometry = useMemo(() => {
    // Generate a higher-order Torus Knot with organic undulating harmonic frequencies
    const p = 2;
    const q = 3;
    const tubularSegments = 180;
    const radialSegments = 36;
    const radius = 1.35;
    const tube = 0.38;

    return new THREE.TorusKnotGeometry(radius, tube, tubularSegments, radialSegments, p, q);
  }, []);

  // 2. The "Deconstructed Box": The literal philosophical construct
  // "I'm not here to fit into a box. I'm here to explore what's outside it."
  const boxEdgesGeometry = useMemo(() => {
    // An open 3D architectural hyper-cube wireframe
    const boxGeo = new THREE.BoxGeometry(2.6, 2.6, 2.6);
    return new THREE.EdgesGeometry(boxGeo);
  }, []);

  // 3. Orbiting Dials: Cognitive Gyroscope / Perpetual Exploration
  const dialGeometry1 = useMemo(() => new THREE.TorusGeometry(2.1, 0.02, 16, 100), []);
  const dialGeometry2 = useMemo(() => new THREE.TorusGeometry(2.35, 0.015, 16, 100), []);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    const { pointer } = state;
    // Damped cursor tracking for intuitive perspective shift
    const targetRotX = pointer.y * 0.4;
    const targetRotY = pointer.x * 0.55;

    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      targetRotX,
      0.04
    );
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      targetRotY,
      0.04
    );

    // Continuous philosophical counter-rotations (disabled if prefersReducedMotion)
    if (!prefersReducedMotion) {
      if (innerCoreRef.current) {
        innerCoreRef.current.rotation.y += delta * 0.22;
        innerCoreRef.current.rotation.x += delta * 0.12;
        innerCoreRef.current.rotation.z += delta * 0.08;
      }

      if (outerBoxRef.current) {
        outerBoxRef.current.rotation.x -= delta * 0.07;
        outerBoxRef.current.rotation.y -= delta * 0.09;
      }

      if (ringRef1.current) {
        ringRef1.current.rotation.x += delta * 0.3;
        ringRef1.current.rotation.y += delta * 0.15;
      }
      if (ringRef2.current) {
        ringRef2.current.rotation.y -= delta * 0.25;
        ringRef2.current.rotation.z += delta * 0.18;
      }
    }

    if (outerBoxRef.current) {
      const targetBoxScale = hovered ? 1.15 : 1.0;
      outerBoxRef.current.scale.lerp(
        new THREE.Vector3(targetBoxScale, targetBoxScale, targetBoxScale),
        0.08
      );
    }
  });

  return (
    <group
      ref={groupRef}
      scale={isMobile ? 0.7 : 0.95}
      position={[0, 0, 0]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <Float
        speed={prefersReducedMotion ? 0 : 1.4}
        rotationIntensity={prefersReducedMotion ? 0 : 0.2}
        floatIntensity={prefersReducedMotion ? 0 : 0.25}
      >
        
        {/* ============================================================ */}
        {/* PHILOSOPHICAL ELEMENT 1: The Liquid Chrome Transcendent Mind */}
        {/* Weaves through and transcends the boundaries of the box       */}
        {/* ============================================================ */}
        <mesh
          ref={innerCoreRef}
          geometry={fluidCoreGeometry}
          castShadow
          receiveShadow
        >
          <meshPhysicalMaterial
            color="#FAFAFA"
            metalness={0.98}
            roughness={0.06}
            clearcoat={1.0}
            clearcoatRoughness={0.04}
            reflectivity={1.0}
            envMapIntensity={3.5}
            emissive={hovered ? "#2b450a" : "#0d1a04"}
            emissiveIntensity={hovered ? 0.7 : 0.25}
          />
        </mesh>

        {/* ============================================================ */}
        {/* PHILOSOPHICAL ELEMENT 2: The Open "Box" Construct           */}
        {/* Tilted, deconstructed, and expanding outwards                */}
        {/* ============================================================ */}
        <group ref={outerBoxRef}>
          {/* Wireframe Edges of the Box */}
          <lineSegments geometry={boxEdgesGeometry}>
            <lineBasicMaterial
              color={hovered ? "#D8FF3E" : "#77766F"}
              transparent
              opacity={hovered ? 0.85 : 0.45}
              linewidth={1.5}
            />
          </lineSegments>

          {/* Corner Vertices / Anchor Nodes */}
          {[
            [-1.3, -1.3, -1.3],
            [1.3, -1.3, -1.3],
            [1.3, 1.3, -1.3],
            [-1.3, 1.3, -1.3],
            [-1.3, -1.3, 1.3],
            [1.3, -1.3, 1.3],
            [1.3, 1.3, 1.3],
            [-1.3, 1.3, 1.3],
          ].map(([x, y, z], idx) => (
            <mesh key={idx} position={[x, y, z]}>
              <boxGeometry args={[0.08, 0.08, 0.08]} />
              <meshBasicMaterial
                color={hovered ? "#D8FF3E" : "#A0A09B"}
                transparent
                opacity={0.8}
              />
            </mesh>
          ))}
        </group>

        {/* ============================================================ */}
        {/* PHILOSOPHICAL ELEMENT 3: Orbiting Dial Rings                 */}
        {/* Unbounded exploration and continuous learning                */}
        {/* ============================================================ */}
        <mesh
          ref={ringRef1}
          geometry={dialGeometry1}
          rotation={[Math.PI / 4, 0, Math.PI / 6]}
        >
          <meshBasicMaterial
            color="#D8FF3E"
            transparent
            opacity={0.7}
          />
        </mesh>

        <mesh
          ref={ringRef2}
          geometry={dialGeometry2}
          rotation={[0, Math.PI / 3, Math.PI / 4]}
        >
          <meshBasicMaterial
            color="#FF674A"
            transparent
            opacity={0.5}
          />
        </mesh>

        {/* Center Golden Ratio Pulse Seed */}
        <mesh position={[0, 0, 0]}>
          <octahedronGeometry args={[0.22, 0]} />
          <meshPhysicalMaterial
            color="#D8FF3E"
            emissive="#D8FF3E"
            emissiveIntensity={hovered ? 1.2 : 0.6}
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>
      </Float>
    </group>
  );
}
