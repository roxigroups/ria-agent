'use client';

import React from 'react';
import Link from 'next/link';
import HeaderNav from '@/components/HeaderNav';
import ParticleCanvas from '@/components/ParticleCanvas';
import Footer from '@/components/Footer';
import DemoFaqSection from '@/components/demo/DemoFaqSection';
import {
  PhoneCall,
  Sparkles,
  BookOpen,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Layers,
  HelpCircle,
} from 'lucide-react';

export default function QAPage() {
  return (
    <main
      style={{
        minHeight: '100vh',
        backgroundColor: '#000000',
        color: '#FFFFFF',
        position: 'relative',
        overflowX: 'hidden',
      }}
    >
      {/* 3D Atmospheric Particle Field */}
      <ParticleCanvas />

      {/* Global Top Navigation */}
      <HeaderNav />

      {/* Content Container */}
      <div className="responsive-page-container" style={{ paddingTop: '7.5rem' }}>
        {/* Page Hero Header */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            maxWidth: '920px',
            margin: '0 auto 2.5rem',
            gap: '1.25rem',
          }}
        >
          {/* Top Telemetry Badge */}
          <div className="skeuo-badge">
            <span className="amber-led" />
            <span>DISTRIBUTION INTELLIGENCE // FREQUENTLY ASKED QUESTIONS (Q&amp;A)</span>
          </div>

          {/* Main Title */}
          <h1
            style={{
              fontSize: 'clamp(2.1rem, 5vw, 3.6rem)',
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              color: '#FFFFFF',
            }}
          >
            From Retailer Conversations to{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #FFFFFF 0%, #A3A3A3 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Distribution Intelligence
            </span>
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: 'clamp(1rem, 1.8vw, 1.15rem)',
              color: 'var(--white-dim)',
              lineHeight: 1.6,
              maxWidth: '760px',
            }}
          >
            Comprehensive answers to all questions regarding RIA’s live capabilities, architecture, guardrails, ERP integrations, workflows, and the modular platform roadmap.
          </p>

          {/* Direct CTA Quick Actions */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem',
              flexWrap: 'wrap',
              marginTop: '0.5rem',
            }}
          >
            <Link
              href="/demo"
              className="btn-skeuo-primary"
              style={{
                padding: '0.95rem 2.2rem',
                fontSize: '0.98rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.65rem',
                textDecoration: 'none',
              }}
            >
              <PhoneCall size={18} color="#000000" />
              <span>Experience Live Demo Call</span>
            </Link>

            <Link
              href="/contact"
              className="btn-skeuo-secondary"
              style={{
                padding: '0.95rem 2rem',
                fontSize: '0.95rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.65rem',
                borderRadius: '12px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                background: 'rgba(255, 255, 255, 0.06)',
                color: '#FFFFFF',
                textDecoration: 'none',
                fontWeight: 600,
              }}
            >
              <span>Schedule Pilot on Your Data</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* Full Interactive 60-Q&A Knowledge Base */}
        <DemoFaqSection />

        {/* Bottom Fast Track Banner */}
        <div
          style={{
            maxWidth: '1000px',
            margin: '0 auto 4rem',
            background: 'linear-gradient(180deg, #151518 0%, #0a0a0c 100%)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            borderRadius: '20px',
            padding: 'clamp(1.75rem, 3.5vw, 2.5rem)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem',
          }}
        >
          <div>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                color: 'var(--white-muted)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: '0.35rem',
              }}
            >
              READY TO EVALUATE RIA?
            </span>
            <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#FFFFFF', margin: 0 }}>
              Start with a sample pilot on your own accounts.
            </h3>
            <p style={{ color: 'var(--white-dim)', fontSize: '0.9rem', margin: '0.35rem 0 0' }}>
              No ERP replacement required. Works from your existing Tally, Marg, or Busy data exports.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <Link
              href="/demo"
              className="btn-skeuo-primary"
              style={{
                padding: '0.85rem 1.75rem',
                fontSize: '0.92rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                textDecoration: 'none',
              }}
            >
              <PhoneCall size={16} color="#000000" />
              <span>Try Live Call</span>
            </Link>
          </div>
        </div>

        {/* Global Footer */}
        <Footer />
      </div>
    </main>
  );
}
