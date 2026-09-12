'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Headphones, Activity, Zap, ArrowRight, CheckCircle2, Building2, Timer, ReceiptText, ShieldCheck } from 'lucide-react';
import HeaderNav from '@/components/HeaderNav';
import ParticleCanvas from '@/components/ParticleCanvas';
import TiltCard from '@/components/TiltCard';

export default function AboutPage() {
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
        <div className="responsive-grid-2col">
          {/* Left Column: Comprehensive Matter */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.75rem',
            }}
          >
            <div className="skeuo-badge">
              <span className="amber-led" />
              <span>ABOUT US // COMPANY &amp; VOICE INVOICE ARCHITECTURE</span>
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
              Real-Time Humanoid Voice &amp; Autonomous Invoice Agents
            </h1>

            {/* About Company - In Matter of Lines */}
            <div
              className="skeuo-inset"
              style={{
                padding: '1.4rem 1.6rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.65rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <Building2 size={20} color="#FFFFFF" />
                <h3 style={{ color: '#FFFFFF', fontSize: '1.15rem', fontWeight: 700 }}>
                  About RIA Intelligence
                </h3>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                <li style={{ color: 'var(--white-dim)', fontSize: '0.92rem', lineHeight: 1.55 }}>
                  • <strong>Enterprise Mission:</strong> Building autonomous AI voice collection agents for high-concurrency finance, telecom, and customer operations.
                </li>
                <li style={{ color: 'var(--white-dim)', fontSize: '0.92rem', lineHeight: 1.55 }}>
                  • <strong>Scale &amp; Reliability:</strong> Powering over 2.4 million daily automated calls with human-grade empathy, zero call drops, and 99.4% CSAT.
                </li>
                <li style={{ color: 'var(--white-dim)', fontSize: '0.92rem', lineHeight: 1.55 }}>
                  • <strong>Full Multimodal Stack:</strong> Native telephony SIP trunking, LLM reasoning, voice synthesis, and real-time ERP ledger integration.
                </li>
              </ul>
            </div>

            {/* Voice Latency - In Matter of Lines */}
            <div
              className="skeuo-inset"
              style={{
                padding: '1.4rem 1.6rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.65rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <Timer size={20} color="#FFFFFF" />
                <h3 style={{ color: '#FFFFFF', fontSize: '1.15rem', fontWeight: 700 }}>
                  Ultra-Low Voice Latency (&lt; 95ms)
                </h3>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                <li style={{ color: 'var(--white-dim)', fontSize: '0.92rem', lineHeight: 1.55 }}>
                  • <strong>Sub-95ms Full-Duplex Speed:</strong> Instantaneous speech turnaround eliminates unnatural robotic pauses.
                </li>
                <li style={{ color: 'var(--white-dim)', fontSize: '0.92rem', lineHeight: 1.55 }}>
                  • <strong>Seamless Interruption Handling:</strong> Automatically pauses speaking the millisecond a customer interjects or asks a clarifying question.
                </li>
                <li style={{ color: 'var(--white-dim)', fontSize: '0.92rem', lineHeight: 1.55 }}>
                  • <strong>Acoustic Cadence Modeling:</strong> Emulates natural human breathing, dialect cadence, and empathetic tone adjustments in real-time.
                </li>
              </ul>
            </div>

            {/* Invoice Collection Agent - In Matter of Lines */}
            <div
              className="skeuo-inset"
              style={{
                padding: '1.4rem 1.6rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.65rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <ReceiptText size={20} color="#FFFFFF" />
                <h3 style={{ color: '#FFFFFF', fontSize: '1.15rem', fontWeight: 700 }}>
                  Autonomous Invoice &amp; Collection Agent
                </h3>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                <li style={{ color: 'var(--white-dim)', fontSize: '0.92rem', lineHeight: 1.55 }}>
                  • <strong>Automated AR Follow-ups:</strong> Proactively dials outstanding invoice accounts with exact ledger and line-item invoice clarity.
                </li>
                <li style={{ color: 'var(--white-dim)', fontSize: '0.92rem', lineHeight: 1.55 }}>
                  • <strong>Instant Payment Dispatches:</strong> Securely generates and SMS-delivers PCI-DSS compliant checkout links while on the live voice call.
                </li>
                <li style={{ color: 'var(--white-dim)', fontSize: '0.92rem', lineHeight: 1.55 }}>
                  • <strong>Dispute Resolution &amp; Installments:</strong> Negotiates compliant payment structures within company risk guidelines without requiring manual supervisor review.
                </li>
              </ul>
            </div>

            {/* Action Button */}
            <div style={{ paddingTop: '0.5rem' }}>
              <Link
                href="/contact"
                className="btn-skeuo-primary responsive-btn-full"
                style={{ textDecoration: 'none' }}
              >
                <span>Deploy Voice Invoice Agent</span>
                <ArrowRight size={18} color="#000000" />
              </Link>
            </div>
          </div>

          {/* Right Column: 3D TiltCard with Call Center Team Image */}
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
                  padding: 'clamp(1.1rem, 3vw, 1.5rem)',
                  background: 'linear-gradient(180deg, #151518 0%, #0a0a0c 100%)',
                }}
              >
                {/* 4 Corner Screws */}
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.85rem' }}>
                  <div className="skeuo-screw" />
                  <div className="skeuo-screw" />
                </div>

                {/* Image Container with Machined Chrome Frame */}
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    aspectRatio: '16 / 10',
                    borderRadius: '14px',
                    overflow: 'hidden',
                    border: '1px solid rgba(255, 255, 255, 0.25)',
                    boxShadow: '0 12px 30px rgba(0, 0, 0, 0.9), inset 0 0 20px rgba(0, 0, 0, 0.6)',
                  }}
                >
                  <Image
                    src="/images/call-center-team-agents-wearing-headset-assisting-customers.jpg"
                    alt="Call center team of agents wearing headset assisting customers"
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                  />

                  {/* Tactile Badge on Image */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '1rem',
                      left: '1rem',
                      padding: '0.45rem 1rem',
                      borderRadius: '8px',
                      background: 'rgba(10, 10, 12, 0.85)',
                      border: '1px solid rgba(255, 255, 255, 0.4)',
                      backdropFilter: 'blur(10px)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.45rem',
                      fontSize: '0.78rem',
                      color: '#FFFFFF',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 700,
                    }}
                  >
                    <Zap size={14} /> LIVE INVOICE AGENT FLEET
                  </div>
                </div>

                {/* Caption & Metrics */}
                <div style={{ padding: '1.2rem 0.25rem 0.25rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#FFFFFF' }}>
                      Invoice &amp; Accounts Receivable Hub
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
                      <CheckCircle2 size={15} color="#FFFFFF" /> 99.4% Resolution
                    </span>
                  </div>

                  <p style={{ fontSize: '0.88rem', color: 'var(--white-muted)', marginTop: '0.4rem', lineHeight: 1.55 }}>
                    Autonomous voice agents proactively collecting receivables, explaining invoice balances, and handling secure payment checkouts with sub-95ms voice latency.
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
                        &lt; 95ms
                      </div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--white-muted)', marginTop: '0.2rem' }}>Voice Latency</div>
                    </div>
                    <div className="skeuo-inset" style={{ flex: 1, padding: '0.75rem', textAlign: 'center' }}>
                      <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 800, color: '#FFFFFF', fontSize: '1.15rem' }}>
                        2.4M
                      </div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--white-muted)', marginTop: '0.2rem' }}>Daily Invoices</div>
                    </div>
                    <div className="skeuo-inset" style={{ flex: 1, padding: '0.75rem', textAlign: 'center' }}>
                      <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 800, color: '#FFFFFF', fontSize: '1.15rem' }}>
                        140+
                      </div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--white-muted)', marginTop: '0.2rem' }}>Dialects</div>
                    </div>
                  </div>
                </div>

                {/* Bottom Screws */}
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.85rem' }}>
                  <div className="skeuo-screw" />
                  <div className="skeuo-screw" />
                </div>
              </div>
            </TiltCard>
          </div>
        </div>
      </div>
    </main>
  );
}
