'use client';

import React, { useState, useEffect, useRef } from 'react';
import ParticleCanvas from '@/components/ParticleCanvas';
import NavigationDock from '@/components/NavigationDock';
import HeroSection from '@/components/sections/HeroSection';
import CapabilitiesSection from '@/components/sections/CapabilitiesSection';
import SynergySection from '@/components/sections/SynergySection';
import DeploymentSection from '@/components/sections/DeploymentSection';

export default function Home() {
  const [activeSection, setActiveSection] = useState(0);
  const [isAudioMuted, setIsAudioMuted] = useState(true);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const navigateToSection = (index: number) => {
    const el = document.getElementById(`section-${index}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleAudio = () => {
    setIsAudioMuted((prev) => !prev);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const sections = [0, 1, 2, 3].map((i) => document.getElementById(`section-${i}`));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            const id = entry.target.getAttribute('id');
            if (id) {
              const idx = parseInt(id.replace('section-', ''), 10);
              if (!isNaN(idx)) {
                setActiveSection(idx);
              }
            }
          }
        });
      },
      {
        root: container,
        threshold: 0.5,
      }
    );

    sections.forEach((sec) => {
      if (sec) observer.observe(sec);
    });

    // Keyboard navigation (Arrow keys, PageUp, PageDown)
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['input', 'textarea', 'select'].includes((e.target as HTMLElement)?.tagName?.toLowerCase())) {
        return;
      }
      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault();
        navigateToSection(Math.min(activeSection + 1, 3));
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        navigateToSection(Math.max(activeSection - 1, 0));
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      observer.disconnect();
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeSection]);

  return (
    <main
      ref={containerRef}
      className="viewport-container"
      id="main-viewport"
    >
      {/* 3D Particle Atmosphere Field */}
      <ParticleCanvas />

      {/* Floating 3D Navigation & Controls */}
      <NavigationDock
        activeSection={activeSection}
        onNavigate={navigateToSection}
        isAudioMuted={isAudioMuted}
        onToggleAudio={toggleAudio}
      />

      {/* Page 1: 1st Video (Home / Hero) */}
      <HeroSection
        onExploreClick={() => navigateToSection(1)}
        isMuted={isAudioMuted || activeSection !== 0}
        isActive={activeSection === 0}
      />

      {/* Page 2: 2nd Video (Capabilities & Call Center Team) */}
      <CapabilitiesSection
        isMuted={isAudioMuted || activeSection !== 1}
        isActive={activeSection === 1}
      />

      {/* Page 3: 3rd Video (Synergy & Colleagues Office) */}
      <SynergySection
        isMuted={isAudioMuted || activeSection !== 2}
        isActive={activeSection === 2}
      />

      {/* Page 4: 4th Video (Deployment Terminal) */}
      <DeploymentSection
        isMuted={isAudioMuted || activeSection !== 3}
        isActive={activeSection === 3}
      />
    </main>
  );
}
