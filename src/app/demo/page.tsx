'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import HeaderNav from '@/components/HeaderNav';
import ParticleCanvas from '@/components/ParticleCanvas';
import TiltCard from '@/components/TiltCard';
import Footer from '@/components/Footer';
import '@/components/calling/calling.css';
import {
  PhoneCall,
  Sparkles,
  Headphones,
  CheckCircle2,
  Zap,
  ShieldCheck,
  Languages,
  Activity,
  CalendarCheck,
  Bot,
  Radio,
  Clock,
  ArrowRight,
  Sliders,
  Cpu,
  HelpCircle,
} from 'lucide-react';

// Dynamically import LiveKitModal with SSR disabled for client-side WebRTC compatibility
const LiveKitModal = dynamic(() => import('@/components/calling/LiveKitModal'), {
  ssr: false,
});

export default function DemoPage() {
  const [showSupport, setShowSupport] = useState(false);

  const handleSupportClick = () => {
    setShowSupport(true);
  };

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
        {/* Hero Header */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            maxWidth: '920px',
            margin: '0 auto 3.5rem',
            gap: '1.25rem',
          }}
        >
          {/* Top Skeuomorphic Telemetry Badge */}
          <div className="skeuo-badge">
            <span className="amber-led" />
            <span>INTERACTIVE VOICE AGENT // REAL-TIME CALLING COCKPIT</span>
          </div>

          {/* Main Title */}
          <h1
            style={{
              fontSize: 'clamp(2.1rem, 5.5vw, 3.8rem)',
              fontWeight: 800,
              lineHeight: 1.12,
              letterSpacing: '-0.02em',
              color: '#FFFFFF',
            }}
          >
            Sales is One Part.{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #FFFFFF 0%, #A3A3A3 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Timely Payment Collection
            </span>{' '}
            is Everything.
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: 'clamp(1rem, 1.8vw, 1.18rem)',
              color: 'var(--white-dim)',
              lineHeight: 1.6,
              maxWidth: '740px',
            }}
          >
            Meet <strong style={{ color: '#FFFFFF' }}>RIA</strong> — your enterprise’s autonomous intelligent voice collection assistant.
            Systematic payment follow-ups, payment commitment tracking, and zero excuses.
          </p>

          {/* Primary Interactive Call Trigger & Q/A Button */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1rem',
              marginTop: '1.5rem',
              width: '100%',
            }}
          >
            <button
              onClick={handleSupportClick}
              className="btn-skeuo-primary"
              id="hero-start-voice-call-btn"
              style={{
                padding: '1.15rem 2.8rem',
                fontSize: '1.08rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.85rem',
              }}
            >
              <PhoneCall size={22} color="#000000" />
              <span>Talk to RIA (Start Live Call)</span>
            </button>

            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.84rem',
                color: 'var(--white-muted)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                flexWrap: 'wrap',
                justifyContent: 'center',
              }}
            >
              <Languages size={15} color="#FFFFFF" />
              <span>Speaks natural Telugu-English (Tanglish), Hindi &amp; English • Sub-95ms LiveKit WebRTC</span>
            </div>
          </div>
        </div>

        {/* Live Calling Cockpit Plate */}
        <div style={{ maxWidth: '1000px', margin: '0 auto 4rem', width: '100%' }}>
          <TiltCard maxTilt={4} className="skeuo-chassis">
            <div
              style={{
                padding: 'clamp(1.75rem, 4vw, 2.75rem)',
                background: 'linear-gradient(180deg, #151518 0%, #0a0a0c 100%)',
                borderRadius: '20px',
              }}
            >
              {/* Top Header & Screws */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
                  paddingBottom: '1.1rem',
                  marginBottom: '1.75rem',
                  flexWrap: 'wrap',
                  gap: '0.75rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <div className="skeuo-screw" />
                  <div className="skeuo-screw" />
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.85rem',
                      fontWeight: 700,
                      color: '#FFFFFF',
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                    }}
                  >
                    VOICE REASONING COCKPIT // NODE ALPHA-01
                  </span>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.78rem',
                    color: 'var(--white-dim)',
                  }}
                >
                  <span className="amber-led" />
                  <span>ONLINE • READY TO CONNECT</span>
                </div>
              </div>

              {/* Inset Screen Body */}
              <div
                className="skeuo-inset"
                style={{
                  padding: 'clamp(1.5rem, 3.5vw, 2.5rem)',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '1.25rem',
                }}
              >
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '16px',
                    background: 'rgba(255, 255, 255, 0.08)',
                    border: '1px solid rgba(255, 255, 255, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Bot size={32} color="#FFFFFF" />
                </div>

                <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#FFFFFF' }}>
                  Direct Voice Dispatch Terminal
                </h3>

                <p style={{ fontSize: '0.92rem', color: 'var(--white-muted)', maxWidth: '560px', lineHeight: 1.6 }}>
                  Click below to launch an encrypted sub-95ms WebRTC voice session directly with RIA.
                  Experience real-time speech synthesis, natural interruptions, and multilingual commitment tracking.
                </p>

                <button
                  onClick={handleSupportClick}
                  className="btn-skeuo-primary"
                  style={{ marginTop: '0.5rem' }}
                >
                  <Radio size={18} color="#000000" />
                  <span>Launch Live Voice Session</span>
                </button>
              </div>

              {/* Bottom Screws */}
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1.25rem' }}>
                <div className="skeuo-screw" />
                <div className="skeuo-screw" />
              </div>
            </div>
          </TiltCard>
        </div>

        {/* 4 Feature Pillars Grid (Skeuomorphic Obsidian Chassis) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
            marginBottom: '4rem',
          }}
        >
          {/* Card 1 */}
          <TiltCard maxTilt={6} className="skeuo-chassis" style={{ height: '100%' }}>
            <div style={{ padding: '1.75rem', height: '100%', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.2rem' }}>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Activity size={20} color="#FFFFFF" />
                </div>
                <div className="skeuo-screw" />
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '0.5rem' }}>
                Systematic Follow-ups
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--white-muted)', lineHeight: 1.55 }}>
                Analyzes pending amounts, due dates, and previous notes to follow up at the right time with precision context.
              </p>
            </div>
          </TiltCard>

          {/* Card 2 */}
          <TiltCard maxTilt={6} className="skeuo-chassis" style={{ height: '100%' }}>
            <div style={{ padding: '1.75rem', height: '100%', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.2rem' }}>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <CalendarCheck size={20} color="#FFFFFF" />
                </div>
                <div className="skeuo-screw" />
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '0.5rem' }}>
                Commitment Recording
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--white-muted)', lineHeight: 1.55 }}>
                Understands customer payment commitments, records exact promised dates, and schedules automatic follow-up triggers.
              </p>
            </div>
          </TiltCard>

          {/* Card 3 */}
          <TiltCard maxTilt={6} className="skeuo-chassis" style={{ height: '100%' }}>
            <div style={{ padding: '1.75rem', height: '100%', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.2rem' }}>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Languages size={20} color="#FFFFFF" />
                </div>
                <div className="skeuo-screw" />
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '0.5rem' }}>
                Natural Multilingual Speech
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--white-muted)', lineHeight: 1.55 }}>
                Conversational Telugu + English (Tanglish), English, and Hindi with respectful, polite Indian business etiquette.
              </p>
            </div>
          </TiltCard>

          {/* Card 4 */}
          <TiltCard maxTilt={6} className="skeuo-chassis" style={{ height: '100%' }}>
            <div style={{ padding: '1.75rem', height: '100%', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.2rem' }}>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Zap size={20} color="#FFFFFF" />
                </div>
                <div className="skeuo-screw" />
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '0.5rem' }}>
                Zero Excuses, Pure Focus
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--white-muted)', lineHeight: 1.55 }}>
                24/7 continuous autonomous calling fleet. No leaves, no fatigue, and 100% focused on recovery velocity.
              </p>
            </div>
          </TiltCard>
        </div>

        {/* 100-Minute Trial Pilot Banner */}
        <div
          className="skeuo-chassis"
          style={{
            padding: 'clamp(2rem, 4vw, 3.5rem)',
            borderRadius: '24px',
            textAlign: 'center',
            marginBottom: '3.5rem',
            background: 'linear-gradient(145deg, #151518 0%, #08080a 100%)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1.25rem',
          }}
        >
          <div className="skeuo-badge">
            <span className="amber-led" />
            <span>ENTERPRISE TRIAL PILOT</span>
          </div>

          <h2 style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)', fontWeight: 800, color: '#FFFFFF' }}>
            Ready to Experience RIA in Action?
          </h2>

          <p style={{ fontSize: '1.05rem', color: 'var(--white-dim)', maxWidth: '640px', lineHeight: 1.6 }}>
            Get <strong style={{ color: '#FFFFFF' }}>100 minutes free</strong> to test RIA on your actual customer network.
            See practical recovery results before deciding.
          </p>

          <button
            onClick={handleSupportClick}
            className="btn-skeuo-primary"
            style={{ marginTop: '0.5rem' }}
          >
            <Bot size={18} color="#000000" />
            <span>Start 100-Minute Free Demo</span>
          </button>
        </div>

        {/* Global 3-Space Footer */}
        <Footer />
      </div>

      {/* Floating Calling Agent Trigger Button */}
      <button
        onClick={handleSupportClick}
        style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          zIndex: 90,
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          padding: '0.9rem 1.6rem',
          backgroundColor: '#FFFFFF',
          color: '#000000',
          borderRadius: '9999px',
          border: '1px solid #FFFFFF',
          fontWeight: 800,
          fontSize: '0.95rem',
          cursor: 'pointer',
          boxShadow: '0 8px 30px rgba(0, 0, 0, 0.8), 0 0 20px rgba(255, 255, 255, 0.35)',
          transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.05)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
        }}
        id="floating-livekit-demo-btn"
      >
        <span className="amber-led" />
        <span>Talk to RIA Demo</span>
      </button>

      {/* LiveKit Calling Modal */}
      {showSupport && <LiveKitModal setShowSupport={setShowSupport} />}
    </main>
  );
}
