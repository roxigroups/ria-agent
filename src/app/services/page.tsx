'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ShieldCheck, 
  Cpu, 
  Users2, 
  ArrowRight, 
  CheckCircle2, 
  Building, 
  Layers, 
  Globe2, 
  Server, 
  Activity, 
  Maximize2, 
  X, 
  BarChart3, 
  Zap, 
  Radio 
} from 'lucide-react';
import HeaderNav from '@/components/HeaderNav';
import ParticleCanvas from '@/components/ParticleCanvas';
import TiltCard from '@/components/TiltCard';
import Footer from '@/components/Footer';

export default function ServicesPage() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

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
      {/* 3D Particle Canvas Overlay */}
      <ParticleCanvas />

      {/* Unified Top Navigation */}
      <HeaderNav />

      {/* Content Container */}
      <div className="responsive-page-container">
        {/* Top 2-Column Hero: Dashboard TiltCard + Enterprise Editions Matter */}
        <div className="responsive-grid-2col">
          {/* Left Column: 3D TiltCard with User-Provided Analytics Dashboard Image */}
          <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            <TiltCard
              maxTilt={10}
              scale={1.01}
              glareOpacity={0.25}
              className="skeuo-chassis"
              style={{ width: '100%' }}
            >
              <div
                style={{
                  position: 'relative',
                  borderRadius: '20px',
                  padding: '1.5rem',
                  background: 'linear-gradient(180deg, #141418 0%, #08080a 100%)',
                }}
              >
                {/* 4 Corner Screws (Top) */}
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.85rem' }}>
                  <div className="skeuo-screw" />
                  <div className="skeuo-screw" />
                </div>

                {/* Dashboard Image Container with Interactive Zoom */}
                <div
                  onClick={() => setIsLightboxOpen(true)}
                  style={{
                    position: 'relative',
                    width: '100%',
                    aspectRatio: '1024 / 682',
                    borderRadius: '14px',
                    overflow: 'hidden',
                    border: '1px solid rgba(255, 255, 255, 0.22)',
                    boxShadow: '0 14px 40px rgba(180, 40, 255, 0.16), 0 0 25px rgba(0, 0, 0, 0.95), inset 0 0 25px rgba(0, 0, 0, 0.7)',
                    cursor: 'zoom-in',
                    backgroundColor: '#07070a',
                  }}
                  title="Click to expand telemetry dashboard"
                >
                  <Image
                    src="/images/invoice-analytics-dashboard.png"
                    alt="Autonomous Invoice Operations & Real-Time Telemetry Dashboard"
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                  />

                  {/* Tactile Badge (Top Left) */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '0.85rem',
                      left: '0.85rem',
                      padding: '0.4rem 0.9rem',
                      borderRadius: '8px',
                      background: 'rgba(10, 10, 14, 0.88)',
                      border: '1px solid rgba(255, 255, 255, 0.35)',
                      backdropFilter: 'blur(10px)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.45rem',
                      fontSize: '0.74rem',
                      color: '#FFFFFF',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 700,
                      letterSpacing: '0.04em',
                    }}
                  >
                    <span className="green-led" />
                    <span>TELEMETRY CONSOLE // LIVE</span>
                  </div>

                  {/* Expand Indicator (Top Right) */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '0.85rem',
                      right: '0.85rem',
                      padding: '0.4rem 0.65rem',
                      borderRadius: '8px',
                      background: 'rgba(10, 10, 14, 0.85)',
                      border: '1px solid rgba(255, 255, 255, 0.3)',
                      backdropFilter: 'blur(10px)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      fontSize: '0.72rem',
                      color: '#FFFFFF',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 600,
                    }}
                  >
                    <Maximize2 size={12} />
                    <span>EXPAND</span>
                  </div>
                </div>

                {/* Caption & Metrics */}
                <div style={{ padding: '1.2rem 0.25rem 0.25rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#FFFFFF' }}>
                      Autonomous Operations Cockpit
                    </h3>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.8rem',
                        color: '#FFFFFF',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        fontWeight: 600,
                      }}
                    >
                      <CheckCircle2 size={15} color="#FFFFFF" /> 99.99% SLA
                    </span>
                  </div>

                  <p style={{ fontSize: '0.86rem', color: 'var(--white-muted)', marginTop: '0.4rem', lineHeight: 1.55 }}>
                    Unified real-time telemetry: Dynamic settlement rings, neural voice processing load, and multi-tier aging velocity.
                  </p>

                  <div
                    style={{
                      display: 'flex',
                      gap: '0.75rem',
                      marginTop: '1.1rem',
                    }}
                  >
                    <div className="skeuo-inset" style={{ flex: 1, padding: '0.75rem', textAlign: 'center' }}>
                      <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 800, color: '#FFFFFF', fontSize: '1.15rem' }}>
                        75%
                      </div>
                      <div style={{ fontSize: '0.7rem', color: 'var(--white-muted)', marginTop: '0.2rem' }}>Auto-Resolved</div>
                    </div>
                    <div className="skeuo-inset" style={{ flex: 1, padding: '0.75rem', textAlign: 'center' }}>
                      <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 800, color: '#FFFFFF', fontSize: '1.15rem' }}>
                        &lt;95ms
                      </div>
                      <div style={{ fontSize: '0.7rem', color: 'var(--white-muted)', marginTop: '0.2rem' }}>Voice Latency</div>
                    </div>
                    <div className="skeuo-inset" style={{ flex: 1, padding: '0.75rem', textAlign: 'center' }}>
                      <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 800, color: '#FFFFFF', fontSize: '1.15rem' }}>
                        4.8x
                      </div>
                      <div style={{ fontSize: '0.7rem', color: 'var(--white-muted)', marginTop: '0.2rem' }}>AR Velocity</div>
                    </div>
                  </div>
                </div>

                {/* 4 Corner Screws (Bottom) */}
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.85rem' }}>
                  <div className="skeuo-screw" />
                  <div className="skeuo-screw" />
                </div>
              </div>
            </TiltCard>
          </div>

          {/* Right Column: Building Invoice Enterprise Editions Matter */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.75rem',
            }}
          >
            <div className="skeuo-badge">
              <span className="amber-led" />
              <span>SERVICES // ENTERPRISE EDITIONS &amp; AR ARCHITECTURE</span>
            </div>

            <h1
              style={{
                fontSize: 'clamp(1.9rem, 5.5vw, 3.8rem)',
                fontWeight: 800,
                lineHeight: 1.12,
                letterSpacing: '-0.02em',
                color: '#FFFFFF',
              }}
            >
              Building Invoice Enterprise Editions
            </h1>

            <p
              style={{
                fontSize: '1.12rem',
                color: 'var(--white-dim)',
                lineHeight: 1.68,
                fontWeight: 400,
              }}
            >
              We engineer custom autonomous invoice and accounts receivable infrastructure designed to seamlessly embed into complex global enterprise environments with zero workflow disruption.
            </p>

            {/* Enterprise Editions - In Matter of Lines */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.2rem',
                marginTop: '0.25rem',
              }}
            >
              {/* Edition 1: Core Enterprise AR Edition */}
              <div
                className="skeuo-inset"
                style={{
                  padding: '1.35rem 1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.6rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <Layers size={20} color="#FFFFFF" />
                  <h3 style={{ color: '#FFFFFF', fontSize: '1.15rem', fontWeight: 700 }}>
                    1. Invoice Core Enterprise Edition
                  </h3>
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <li style={{ color: 'var(--white-dim)', fontSize: '0.92rem', lineHeight: 1.5 }}>
                    • <strong>Automated Outbound Campaigns:</strong> Smart scheduling across 30, 60, and 90+ day aging buckets with real-time customer profile lookups.
                  </li>
                  <li style={{ color: 'var(--white-dim)', fontSize: '0.92rem', lineHeight: 1.5 }}>
                    • <strong>Live ERP Ledger Integration:</strong> Native bi-directional webhooks with SAP, Oracle NetSuite, Microsoft Dynamics, and Salesforce.
                  </li>
                  <li style={{ color: 'var(--white-dim)', fontSize: '0.92rem', lineHeight: 1.5 }}>
                    • <strong>One-Click Payment Dispatch:</strong> Automated SMS and WhatsApp payment links sent instantaneously during the call.
                  </li>
                </ul>
              </div>

              {/* Edition 2: Global Multi-Currency & Compliance Edition */}
              <div
                className="skeuo-inset"
                style={{
                  padding: '1.35rem 1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.6rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <Globe2 size={20} color="#FFFFFF" />
                  <h3 style={{ color: '#FFFFFF', fontSize: '1.15rem', fontWeight: 700 }}>
                    2. Global Multi-Currency &amp; Compliance Edition
                  </h3>
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <li style={{ color: 'var(--white-dim)', fontSize: '0.92rem', lineHeight: 1.5 }}>
                    • <strong>140+ Regional Dialects:</strong> Localized cadence and natural financial terminology across North America, Europe, Asia, and Latin America.
                  </li>
                  <li style={{ color: 'var(--white-dim)', fontSize: '0.92rem', lineHeight: 1.5 }}>
                    • <strong>Strict Regulatory Guardrails:</strong> Pre-programmed adherence to FDCPA, CFPB, HIPAA, SOC2 Type II, and regional collection hours.
                  </li>
                  <li style={{ color: 'var(--white-dim)', fontSize: '0.92rem', lineHeight: 1.5 }}>
                    • <strong>Multi-Tax &amp; Currency Engine:</strong> Dynamic VAT/GST tax recalculation and real-time FX rate settlement.
                  </li>
                </ul>
              </div>

              {/* Edition 3: Dedicated Private Cluster Edition */}
              <div
                className="skeuo-inset"
                style={{
                  padding: '1.35rem 1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.6rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <Server size={20} color="#FFFFFF" />
                  <h3 style={{ color: '#FFFFFF', fontSize: '1.15rem', fontWeight: 700 }}>
                    3. Dedicated Private Cluster Edition
                  </h3>
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <li style={{ color: 'var(--white-dim)', fontSize: '0.92rem', lineHeight: 1.5 }}>
                    • <strong>Isolated VPC / On-Premise Deployment:</strong> Fully air-gapped or dedicated VPC hosting ensuring complete data sovereignty.
                  </li>
                  <li style={{ color: 'var(--white-dim)', fontSize: '0.92rem', lineHeight: 1.5 }}>
                    • <strong>Dedicated High-Throughput SIP Trunks:</strong> Guaranteed sub-95ms latency with carrier-grade trunk redundancy.
                  </li>
                  <li style={{ color: 'var(--white-dim)', fontSize: '0.92rem', lineHeight: 1.5 }}>
                    • <strong>Custom Fine-Tuned Voice Models:</strong> Trained on your proprietary corporate identity, billing policies, and legal playbooks.
                  </li>
                </ul>
              </div>
            </div>

            {/* Action Button */}
            <div style={{ paddingTop: '0.5rem' }}>
              <Link
                href="/contact"
                className="btn-skeuo-primary responsive-btn-full"
                style={{ textDecoration: 'none' }}
              >
                <span>Request Enterprise Edition Demo</span>
                <ArrowRight size={18} color="#000000" />
              </Link>
            </div>
          </div>
        </div>

        {/* Section: Telemetry Modules Breakdown (Matching Dashboard 01 - 09) */}
        <div style={{ marginTop: 'clamp(3.5rem, 8vw, 7rem)' }}>
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3.5rem' }}>
            <div className="skeuo-badge" style={{ display: 'inline-flex', marginBottom: '1rem' }}>
              <span className="green-led" />
              <span>DASHBOARD ARCHITECTURE // 01 – 09 TELEMETRY MODULES</span>
            </div>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3.8vw, 2.5rem)', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.02em' }}>
              Real-Time Telemetry &amp; Control Architecture
            </h2>
            <p style={{ color: 'var(--white-muted)', fontSize: '1rem', marginTop: '0.75rem', lineHeight: 1.6 }}>
              Every Enterprise Edition instance delivers continuous visibility through our 9-module operational console, correlating autonomous acoustic modeling with live balance settlement.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
              gap: '1.25rem',
            }}
          >
            {[
              {
                num: '01',
                title: 'Resolution Dial',
                desc: 'Continuous real-time settlement tracking with 75% instant resolution rate across automated inbound and outbound calls.',
                metric: '75% Clear',
              },
              {
                num: '02',
                title: 'System Process Load',
                desc: 'Live compute utilization monitor for multi-tenant acoustic synthesis, semantic indexing, and database write queues.',
                metric: '35% Load',
              },
              {
                num: '03',
                title: 'Channel Capacity Arc',
                desc: 'Multi-tier SIP trunk bandwidth allocation with dynamic autoscaling across peak regional business operating hours.',
                metric: 'Dynamic Scaling',
              },
              {
                num: '04',
                title: 'Acoustic Cadence Spectrum',
                desc: 'Full-duplex audio stream analysis ensuring sub-95ms natural interruptions, breath modeling, and zero conversational jitter.',
                metric: '< 95ms RT',
              },
              {
                num: '05',
                title: 'Multi-Curve AR Velocity',
                desc: 'Predictive settlement trajectories comparing current batch collection curves against historical baseline aging models.',
                metric: 'Multi-Curve',
              },
              {
                num: '06',
                title: 'Risk Calibration Sliders',
                desc: 'Granular threshold controls for dispute escalation, settlement discount permissions, and agent handoff triggers.',
                metric: 'Granular Sliders',
              },
              {
                num: '07',
                title: 'Live Trend Ledger',
                desc: 'Real-time telemetry table tracking daily collected volume, aging velocity improvements, and recovered amounts.',
                metric: '+34% MoM',
              },
              {
                num: '08',
                title: 'Dispatch Matrix Calendar',
                desc: 'Automated omnichannel campaign scheduler honoring timezone-specific compliance regulations and optimal pickup windows.',
                metric: 'Compliance Guard',
              },
              {
                num: '09',
                title: 'Sentiment & Intent Radar',
                desc: 'Real-time acoustic sentiment evaluation measuring customer satisfaction, intent clarity, and conversational empathy.',
                metric: 'Dual Gauge',
              },
            ].map((module) => (
              <div
                key={module.num}
                className="skeuo-chassis"
                style={{
                  padding: '1.4rem',
                  borderRadius: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '1rem',
                  background: 'linear-gradient(180deg, #131316 0%, #09090b 100%)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.65rem' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.85rem',
                        fontWeight: 800,
                        color: 'rgba(255, 255, 255, 0.5)',
                        padding: '0.2rem 0.55rem',
                        borderRadius: '6px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                      }}
                    >
                      {module.num}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.75rem',
                        color: '#FFFFFF',
                        fontWeight: 700,
                      }}
                    >
                      {module.metric}
                    </span>
                  </div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '0.35rem' }}>
                    {module.title}
                  </h4>
                  <p style={{ fontSize: '0.84rem', color: 'var(--white-muted)', lineHeight: 1.55 }}>
                    {module.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Global Footer */}
        <Footer />
      </div>

      {/* Interactive Lightbox Modal for High-Resolution Dashboard Inspection */}
      {isLightboxOpen && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setIsLightboxOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            backgroundColor: 'rgba(0, 0, 0, 0.92)',
            backdropFilter: 'blur(16px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              maxWidth: '1200px',
              width: '100%',
              borderRadius: '20px',
              padding: '1.75rem',
              background: 'linear-gradient(180deg, #16161b 0%, #09090c 100%)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.95), 0 0 40px rgba(180, 40, 255, 0.25)',
            }}
          >
            {/* Modal Header */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '1.25rem',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                paddingBottom: '1rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span className="green-led" />
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#FFFFFF' }}>
                  Enterprise Invoice Telemetry Cockpit // Modules 01–09
                </h3>
              </div>
              <button
                onClick={() => setIsLightboxOpen(false)}
                style={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                  borderRadius: '10px',
                  padding: '0.45rem',
                  color: '#FFFFFF',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.2s ease',
                }}
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            {/* High-Resolution Dashboard Image */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '1024 / 682',
                borderRadius: '14px',
                overflow: 'hidden',
                border: '1px solid rgba(255, 255, 255, 0.25)',
                backgroundColor: '#07070a',
              }}
            >
              <Image
                src="/images/invoice-analytics-dashboard.png"
                alt="Full resolution Enterprise Invoice Analytics Dashboard"
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>

            {/* Modal Footer Notes */}
            <div
              style={{
                marginTop: '1.25rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '0.75rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                color: 'var(--white-muted)',
              }}
            >
              <span>TELEMETRY FEED: 100% OPERATIONAL • CLUSTER: ALPHA-01</span>
              <span>PRESS ESC OR CLICK OUTSIDE TO CLOSE</span>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
