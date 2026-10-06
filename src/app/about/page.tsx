'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import HeaderNav from '@/components/HeaderNav';
import ParticleCanvas from '@/components/ParticleCanvas';
import Footer from '@/components/Footer';

export default function AboutPage() {
  const animRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = animRef.current;
    if (!el) return;

    const reduce =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduce) {
      el.classList.add('done');
      return;
    }

    let started = false;
    const startAnim = () => {
      if (started) return;
      started = true;
      el.classList.add('play');
      setTimeout(() => {
        el.classList.remove('play');
        el.classList.add('done');
        const fades = el.querySelectorAll<HTMLElement>(
          '.fade-roxy, .fade-by, .fade-chain, .fade-sub'
        );
        fades.forEach((item) => {
          item.style.opacity = '1';
          item.style.transform = 'none';
        });
        const wireFill = el.querySelector<HTMLElement>('.wire-fill');
        if (wireFill) wireFill.style.transform = 'scaleX(1)';
      }, 3600);
    };

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            startAnim();
            observer.disconnect();
          }
        },
        { threshold: 0.35 }
      );
      observer.observe(el);
      return () => observer.disconnect();
    } else {
      startAnim();
    }
  }, []);

  return (
    <main
      style={{
        minHeight: '100vh',
        backgroundColor: 'var(--black-pure, #000000)',
        color: 'var(--white-pure, #FFFFFF)',
        position: 'relative',
        overflowX: 'hidden',
      }}
    >
      {/* 3D Background Starfield Canvas */}
      <ParticleCanvas />

      {/* Global Top Navigation */}
      <HeaderNav />

      {/* Scoped Styles for About Page */}
      <style jsx global>{`
        .page-h1 {
          font-size: clamp(1.9rem, 5.5vw, 3.8rem);
          font-weight: 800;
          line-height: 1.12;
          letter-spacing: -0.02em;
          color: #ffffff;
        }
        .lede {
          color: var(--white-dim, #e5e5e5);
          font-size: 0.92rem;
          line-height: 1.55;
          max-width: 60ch;
        }
        .hier {
          font-family: var(--font-mono, monospace);
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--white-muted, #a3a3a3);
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 0.5rem 0.7rem;
        }
        .hier b {
          color: #ffffff;
          font-weight: 700;
        }
        .stack {
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
        }
        .section {
          margin-top: 5rem;
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
        }
        .section-h2 {
          font-size: clamp(1.5rem, 3.4vw, 2.4rem);
          font-weight: 800;
          line-height: 1.15;
          letter-spacing: -0.02em;
          color: #ffffff;
          max-width: 28ch;
        }
        .section-intro {
          color: var(--white-muted, #a3a3a3);
          font-size: 0.92rem;
          line-height: 1.55;
          max-width: 70ch;
        }
        .grid-3 {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 1.25rem;
        }
        @media (max-width: 1024px) {
          .grid-3 {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
        @media (max-width: 640px) {
          .grid-3 {
            grid-template-columns: 1fr;
          }
        }
        .grid-2 {
          display: grid;
          grid-template-columns: repeat(
            auto-fit,
            minmax(min(100%, 340px), 1fr)
          );
          gap: 1.25rem;
        }
        .card {
          padding: 1.4rem 1.6rem;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }
        .card-head {
          display: flex;
          align-items: center;
          gap: 0.65rem;
        }
        .card-head svg {
          flex-shrink: 0;
        }
        .card h3 {
          color: #ffffff;
          font-size: 1.15rem;
          font-weight: 700;
        }
        .card ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
        }
        .card li,
        .card p {
          color: var(--white-dim, #e5e5e5);
          font-size: 0.92rem;
          line-height: 1.55;
        }
        .tag {
          font-family: var(--font-mono, monospace);
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          padding: 0.3rem 0.65rem;
          border-radius: 6px;
          background-color: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: var(--white-dim, #e5e5e5);
          text-transform: uppercase;
          white-space: nowrap;
        }
        .tag.live {
          background: linear-gradient(180deg, #ffffff 0%, #d4d4d4 100%);
          color: #000000;
          border-color: #ffffff;
          font-weight: 800;
        }
        .stat {
          flex: 1;
          padding: 0.75rem;
          text-align: center;
        }
        .stat b {
          display: block;
          font-family: var(--font-mono, monospace);
          font-weight: 800;
          color: #ffffff;
          font-size: 1.15rem;
        }
        .stat span {
          display: block;
          font-size: 0.72rem;
          color: var(--white-muted, #a3a3a3);
          margin-top: 0.2rem;
        }
        .statement {
          padding: clamp(1.4rem, 3vw, 2rem) clamp(1.4rem, 3vw, 2.2rem);
        }
        .statement p {
          font-size: clamp(1.1rem, 2.2vw, 1.45rem);
          font-weight: 700;
          line-height: 1.35;
          letter-spacing: -0.01em;
          color: #ffffff;
        }
        .statement small {
          display: block;
          margin-top: 0.9rem;
          font-family: var(--font-mono, monospace);
          font-size: 0.75rem;
          letter-spacing: 0.06em;
          color: var(--white-muted, #a3a3a3);
          text-transform: uppercase;
        }
        @media (max-width: 768px) {
          .section {
            margin-top: 3.5rem;
          }
        }

        /* Hero Signal Panel */
        .hero-panel-inner {
          position: relative;
          border-radius: 20px;
          padding: clamp(1.1rem, 3vw, 1.5rem);
          background: linear-gradient(180deg, #151518 0%, #0a0a0c 100%);
        }
        .screws {
          display: flex;
          justify-content: space-between;
        }
        .link-stage {
          position: relative;
          margin: 0.85rem 0;
          border-radius: 14px;
          overflow: hidden;
          padding: clamp(1.4rem, 4vw, 2.2rem) clamp(1rem, 3vw, 1.6rem)
            clamp(1.2rem, 3vw, 1.6rem);
        }
        .link-grid {
          position: absolute;
          inset: 0;
          background-image: linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.04) 1px,
              transparent 0
            ),
            linear-gradient(
              180deg,
              rgba(255, 255, 255, 0.04) 1px,
              transparent 0
            );
          background-size: 32px 32px;
          pointer-events: none;
        }
        .stage-top {
          position: relative;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: clamp(1.2rem, 3vw, 1.8rem);
          font-family: var(--font-mono, monospace);
          font-size: 0.72rem;
          letter-spacing: 0.08em;
          color: var(--white-muted, #a3a3a3);
          text-transform: uppercase;
        }
        .stage-top .chip {
          padding: 0.35rem 0.7rem;
          border-radius: 8px;
          background: rgba(10, 10, 12, 0.85);
          border: 1px solid rgba(255, 255, 255, 0.4);
          color: #ffffff;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 0.45rem;
        }
        .link-row {
          position: relative;
          display: grid;
          grid-template-columns: auto 1fr auto;
          align-items: center;
          gap: clamp(0.6rem, 2vw, 1rem);
        }
        .node {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.6rem;
        }
        .logo-tile {
          position: relative;
          background: #ffffff;
          border: 1.5px solid rgba(255, 255, 255, 0.4);
          border-radius: 12px;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.95);
          overflow: hidden;
          flex-shrink: 0;
        }
        .logo-tile img {
          position: absolute;
          inset: 6%;
          width: 88%;
          height: 88%;
          object-fit: contain;
        }
        .logo-tile.ria {
          width: clamp(115px, 24vw, 160px);
          aspect-ratio: 1.45/1;
        }
        .logo-tile.roxy {
          width: clamp(80px, 16vw, 105px);
          aspect-ratio: 1/1;
        }
        .node-cap {
          font-family: var(--font-mono, monospace);
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: var(--white-muted, #a3a3a3);
          text-transform: uppercase;
          text-align: center;
        }
        .wire {
          position: relative;
          height: 2px;
          background: rgba(255, 255, 255, 0.14);
          border-radius: 2px;
          min-width: 40px;
        }
        .wire-fill {
          position: absolute;
          top: 0;
          bottom: 0;
          right: 0;
          width: 100%;
          background: linear-gradient(
            270deg,
            rgba(255, 255, 255, 0.95),
            rgba(255, 255, 255, 0.35)
          );
          transform-origin: right center;
          transform: scaleX(0);
        }
        .wire-packet {
          position: absolute;
          top: 50%;
          right: 0;
          width: 7px;
          height: 7px;
          margin: -3.5px -3.5px 0 0;
          border-radius: 50%;
          background: #ffffff;
          box-shadow: 0 0 8px rgba(255, 255, 255, 0.8);
          opacity: 0;
        }
        .ria-pulse {
          position: absolute;
          inset: -6px;
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.5);
          opacity: 0;
          pointer-events: none;
        }
        .resolve {
          position: relative;
          margin-top: clamp(1.2rem, 3vw, 1.6rem);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.45rem;
          text-align: center;
          font-family: var(--font-mono, monospace);
          text-transform: uppercase;
        }
        .resolve .by {
          font-size: 0.72rem;
          letter-spacing: 0.16em;
          color: var(--white-muted, #a3a3a3);
          font-weight: 700;
        }
        .resolve .chain {
          font-size: clamp(0.92rem, 2.4vw, 1.05rem);
          letter-spacing: 0.12em;
          color: #ffffff;
          font-weight: 700;
        }
        .resolve .chain span {
          color: var(--white-muted, #a3a3a3);
          padding: 0 0.45rem;
        }
        .resolve .sub {
          font-size: 0.7rem;
          letter-spacing: 0.1em;
          color: var(--white-subtle, #737373);
          font-weight: 600;
        }
        .panel-foot {
          padding: 1.2rem 0.25rem 0.25rem;
        }
        .panel-foot .row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.75rem;
          flex-wrap: wrap;
        }
        .panel-foot h3 {
          font-size: 1.25rem;
          font-weight: 700;
          color: #ffffff;
        }
        .panel-foot p {
          font-size: 0.88rem;
          color: var(--white-muted, #a3a3a3);
          margin-top: 0.4rem;
          line-height: 1.55;
        }
        .stats {
          display: flex;
          gap: 0.75rem;
          margin-top: 1.1rem;
        }
        @media (max-width: 480px) {
          .stats {
            gap: 0.5rem;
          }
          .stat {
            padding: 0.65rem 0.35rem;
          }
          .stat b {
            font-size: 0.95rem;
          }
          .stat span {
            font-size: 0.64rem;
          }
          .stage-top .sys {
            display: none;
          }
        }

        /* Animation timeline */
        .anim .fade-roxy {
          opacity: 0;
          transform: translateY(4px);
        }
        .anim .fade-by,
        .anim .fade-chain,
        .anim .fade-sub {
          opacity: 0;
          transform: translateY(4px);
        }
        .anim.play .ria-pulse {
          animation: pulse 1.1s ease-out 0.7s 1 both;
        }
        .anim.play .wire-fill {
          animation: wire 0.55s cubic-bezier(0.16, 1, 0.3, 1) 1.2s forwards;
        }
        .anim.play .wire-packet {
          animation: packet 0.55s cubic-bezier(0.16, 1, 0.3, 1) 1.2s forwards;
        }
        .anim.play .fade-roxy {
          animation: fadeIn 0.6s ease 1.7s forwards;
        }
        .anim.play .fade-by {
          animation: fadeIn 0.5s ease 2.2s forwards;
        }
        .anim.play .fade-chain {
          animation: fadeIn 0.5s ease 2.7s forwards;
        }
        .anim.play .fade-sub {
          animation: fadeIn 0.5s ease 2.95s forwards;
        }
        @keyframes pulse {
          0% {
            opacity: 0;
            transform: scale(0.98);
          }
          35% {
            opacity: 0.8;
          }
          100% {
            opacity: 0;
            transform: scale(1.04);
          }
        }
        @keyframes wire {
          to {
            transform: scaleX(1);
          }
        }
        @keyframes packet {
          0% {
            opacity: 1;
            right: 0;
          }
          85% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            right: 100%;
          }
        }
        @keyframes fadeIn {
          to {
            opacity: 1;
            transform: none;
          }
        }
        .anim.done .wire-packet {
          animation: idle 10s linear infinite;
        }
        @keyframes idle {
          0% {
            opacity: 0;
            right: 0;
          }
          4% {
            opacity: 0.7;
          }
          14% {
            opacity: 0.7;
          }
          18% {
            opacity: 0;
            right: 100%;
          }
          100% {
            opacity: 0;
            right: 100%;
          }
        }

        /* Distribution Diagram */
        .diagram-wrap {
          padding: clamp(1rem, 3vw, 1.6rem);
        }
        .diagram svg {
          display: block;
          width: 100%;
          height: auto;
        }
        .flow {
          stroke-dasharray: 4 6;
          animation: dash 6s linear infinite;
        }
        @keyframes dash {
          to {
            stroke-dashoffset: -100;
          }
        }
        .diagram-mobile {
          display: none;
          flex-direction: column;
          gap: 0.6rem;
        }
        .dm-node {
          padding: 0.85rem 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 0.75rem;
        }
        .dm-node b {
          font-size: 0.98rem;
          font-weight: 700;
        }
        .dm-node span {
          font-family: var(--font-mono, monospace);
          font-size: 0.7rem;
          letter-spacing: 0.08em;
          color: var(--white-muted, #a3a3a3);
          text-transform: uppercase;
          text-align: right;
        }
        .dm-node.core {
          border-color: rgba(255, 255, 255, 0.45);
        }
        .dm-arrow {
          align-self: center;
          font-family: var(--font-mono, monospace);
          font-size: 0.72rem;
          letter-spacing: 0.1em;
          color: var(--white-subtle, #737373);
        }
        @media (max-width: 640px) {
          .diagram {
            display: none;
          }
          .diagram-mobile {
            display: flex;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .flow {
            animation: none !important;
          }
          .anim .fade-roxy,
          .anim .fade-by,
          .anim .fade-chain,
          .anim .fade-sub {
            opacity: 1 !important;
            transform: none !important;
            animation: none !important;
          }
          .anim .wire-fill {
            transform: scaleX(1) !important;
            animation: none !important;
          }
          .anim .wire-packet,
          .anim .ria-pulse {
            display: none !important;
          }
        }
      `}</style>

      <div className="responsive-page-container">
        {/* ===================== HERO ===================== */}
        <section className="responsive-grid-2col" aria-labelledby="about-h1">
          <div className="stack">
            <div className="skeuo-badge">
              <span className="amber-led" />
              <span>ABOUT RIA // ROXY INTELLIGENT AI</span>
            </div>
            <h1 id="about-h1" className="page-h1">
              Distribution Intelligence, Built by a Distributor
            </h1>
            <p className="lede">
              RIA — Roxy Intelligent AI — is an AI-powered distribution intelligence platform. It calls retailers in their own language, follows up on payments, captures orders and feedback, and turns every conversation into a clean, auditable business record for the distributor.
            </p>
            <div className="hier" aria-label="Brand hierarchy">
              <b>RIA</b>
              <span>//</span>
              <span>ROXY INTELLIGENT AI</span>
              <span>//</span>
              <span>A SMART INNOVATION BY ROXY GROUP</span>
            </div>
            <div
              className="responsive-hero-actions"
              style={{
                display: 'flex',
                gap: '1rem',
                flexWrap: 'wrap',
                paddingTop: '0.5rem',
              }}
            >
              <Link className="btn-skeuo-primary" href="/contact">
                <span>Deploy RIA for Your Distribution</span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
              <Link className="btn-skeuo-secondary" href="/demo">
                <span>Hear a Live Demo</span>
              </Link>
            </div>
          </div>

          {/* Hero RIA × Roxy animation */}
          <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            <div className="skeuo-chassis anim" ref={animRef} id="link-anim" style={{ width: '100%' }}>
              <div className="hero-panel-inner">
                <div className="screws">
                  <div className="skeuo-screw" />
                  <div className="skeuo-screw" />
                </div>

                <div className="link-stage skeuo-inset">
                  <div className="link-grid" />

                  <div className="stage-top">
                    <span className="chip">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
                      </svg>
                      IDENTITY LINK
                    </span>
                    <span className="sys">SIGNAL // ESTABLISHED</span>
                  </div>

                  <div className="link-row">
                    <div className="node fade-roxy">
                      <div className="logo-tile roxy">
                        <img alt="Roxy Group logo" src="/images/roxy-group-logo.png" />
                      </div>
                      <span className="node-cap">ROXY GROUP</span>
                    </div>
                    <div className="wire" aria-hidden="true">
                      <div className="wire-fill" />
                      <div className="wire-packet" />
                    </div>
                    <div className="node">
                      <div style={{ position: 'relative' }}>
                        <div className="ria-pulse" aria-hidden="true" />
                        <div className="logo-tile ria">
                          <img
                            alt="RIA — AI-Powered Distribution Intelligence Platform logo"
                            src="/images/ria-platform-logo.png"
                          />
                        </div>
                      </div>
                      <span className="node-cap">RIA</span>
                    </div>
                  </div>

                  <div className="resolve">
                    <span className="by fade-by">A SMART INNOVATION BY</span>
                    <span className="chain fade-chain">
                      ROXY GROUP<span>→</span>RIA
                    </span>
                    <span className="sub fade-sub">DISTRIBUTION EXPERIENCE → AI INTELLIGENCE</span>
                  </div>
                </div>

                <div className="panel-foot">
                  <div className="row">
                    <h3>Roxy Intelligent AI</h3>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono, monospace)',
                        fontSize: '0.8rem',
                        color: '#FFFFFF',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        fontWeight: 600,
                      }}
                    >
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#FFFFFF"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path d="m9 12 2 2 4-4" />
                      </svg>
                      Collection Agent Live
                    </span>
                  </div>
                  <p>
                    Built inside an operating distribution business, proven on its own retailer network first, then offered to distributors across India.
                  </p>
                  <div className="stats">
                    <div className="skeuo-inset stat">
                      <b>46+ Yrs</b>
                      <span>Roxy Group legacy</span>
                    </div>
                    <div className="skeuo-inset stat">
                      <b>3</b>
                      <span>Telugu · Hindi · English</span>
                    </div>
                    <div className="skeuo-inset stat">
                      <b>G1–G6</b>
                      <span>Compliance gates</span>
                    </div>
                  </div>
                </div>

                <div className="screws" style={{ marginTop: '0.85rem' }}>
                  <div className="skeuo-screw" />
                  <div className="skeuo-screw" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== 01 // ORIGIN ===================== */}
        <section className="section" aria-labelledby="s1">
          <div className="mono-label">
            <span className="amber-led" />
            <span>01 // ORIGIN</span>
          </div>
          <h2 id="s1" className="section-h2">
            Born on the distribution floor, not in a lab
          </h2>
          <div className="grid-2">
            <div className="skeuo-inset card">
              <div className="card-head">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#FFFFFF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
                  <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
                  <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
                  <path d="M10 6h4" />
                  <path d="M10 10h4" />
                  <path d="M10 14h4" />
                  <path d="M10 18h4" />
                </svg>
                <h3>The problem we lived with</h3>
              </div>
              <ul>
                <li>
                  • <strong>Phone-led trade:</strong> Orders, reminders and complaints across hundreds of retailers still run on manual calls, WhatsApp and spreadsheets.
                </li>
                <li>
                  • <strong>Missed follow-ups:</strong> Payments slip, retailers go uncalled on busy days, and what was promised on a call is rarely recorded.
                </li>
                <li>
                  • <strong>Limited visibility:</strong> Management sees outcomes late, after the cash or the order is already lost.
                </li>
              </ul>
            </div>
            <div className="skeuo-inset card">
              <div className="card-head">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#FFFFFF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 2v4" />
                  <path d="m16.2 7.8 2.9-2.9" />
                  <path d="M18 12h4" />
                  <path d="m16.2 16.2 2.9 2.9" />
                  <path d="M12 18v4" />
                  <path d="m4.9 19.1 2.9-2.9" />
                  <path d="M2 12h4" />
                  <path d="m4.9 4.9 2.9 2.9" />
                </svg>
                <h3>The answer we built</h3>
              </div>
              <ul>
                <li>
                  • <strong>Customer-zero:</strong> RIA was designed by Roxy Group for its own automotive spare-parts distribution network in Hyderabad.
                </li>
                <li>
                  • <strong>Proven before it is sold:</strong> Every workflow runs on Roxy&apos;s real retailers and real receivables first.
                </li>
                <li>
                  • <strong>Then shared:</strong> What works for Roxy is packaged for other distributors as a subscription platform.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ===================== 02 // INTELLIGENCE MODEL ===================== */}
        <section className="section" aria-labelledby="s2">
          <div className="mono-label">
            <span className="amber-led" />
            <span>02 // INTELLIGENCE MODEL</span>
          </div>
          <h2 id="s2" className="section-h2">
            The AI holds the conversation. The rules hold the numbers.
          </h2>
          <p className="section-intro">
            RIA separates conversation from authority. The language model understands the retailer; deterministic business logic decides balances, compliance and outcomes. Nothing that matters to your books is left to a guess.
          </p>
          <div className="grid-3">
            <div className="skeuo-inset card">
              <div className="card-head">
                <span className="tag">LAYER 01</span>
                <h3>Policy &amp; Data</h3>
              </div>
              <p>
                Dealer and receipt matching, reconciliation of outstanding versus paid, calling hours, frequency caps, DND and opt-out — all deterministic and tested.
              </p>
            </div>
            <div className="skeuo-inset card">
              <div className="card-head">
                <span className="tag">LAYER 02</span>
                <h3>Conversation</h3>
              </div>
              <p>
                Multilingual voice understanding of intent, objections and promises to pay. The AI only ever sees the reconciled balance it is allowed to state.
              </p>
            </div>
            <div className="skeuo-inset card">
              <div className="card-head">
                <span className="tag">LAYER 03</span>
                <h3>Outcome</h3>
              </div>
              <p>
                Every call ends in one validated outcome code from a fixed, versioned list. Free text is never a business decision — and unknown codes are rejected.
              </p>
            </div>
          </div>
        </section>

        {/* ===================== 03 // DISTRIBUTION-FIRST ARCHITECTURE ===================== */}
        <section className="section" aria-labelledby="s3">
          <div className="mono-label">
            <span className="amber-led" />
            <span>03 // DISTRIBUTION-FIRST ARCHITECTURE</span>
          </div>
          <h2 id="s3" className="section-h2">
            Designed around how Indian distribution actually works
          </h2>
          <div className="grid-2">
            <div className="skeuo-inset card">
              <div className="card-head">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#FFFFFF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect width="20" height="8" x="2" y="2" rx="2" />
                  <rect width="20" height="8" x="2" y="14" rx="2" />
                  <path d="M6 6h.01" />
                  <path d="M6 18h.01" />
                </svg>
                <h3>Orchestration at the core</h3>
              </div>
              <ul>
                <li>
                  • <strong>Agents propose, the engine commits:</strong> Only the orchestration engine writes lead and account state — no agent can quietly change your records.
                </li>
                <li>
                  • <strong>Append-only event log:</strong> Every action is recorded in order, so any call or decision can be traced and audited later.
                </li>
                <li>
                  • <strong>Configurable policy:</strong> Contact rules, schemes and escalation paths change in configuration, not in code.
                </li>
              </ul>
            </div>
            <div className="skeuo-inset card">
              <div className="card-head">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#FFFFFF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                <h3>Built for distributors and their retailers</h3>
              </div>
              <ul>
                <li>
                  • <strong>Voice-first, WhatsApp-ready:</strong> Retailers are reached on the phone in their language — no new app to install.
                </li>
                <li>
                  • <strong>Works with existing books:</strong> Starts from outstanding and receipt reports exported from Marg, Tally or Busy.
                </li>
                <li>
                  • <strong>Human handoff by design:</strong> Disputes and sensitive cases go to a named person with a response timer, never into a void.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ===================== 04 // AI AGENT ECOSYSTEM ===================== */}
        <section className="section" aria-labelledby="s4">
          <div className="mono-label">
            <span className="amber-led" />
            <span>04 // AI AGENT ECOSYSTEM</span>
          </div>
          <h2 id="s4" className="section-h2">
            One platform, a fleet of specialised agents
          </h2>
          <p className="section-intro">
            Each agent handles one job well and shares the same identity, compliance gate and audit trail. Status is shown plainly: what runs today, and what is rolling out in phases.
          </p>
          <div className="grid-3">
            <div className="skeuo-inset card">
              <div className="card-head" style={{ justifyContent: 'space-between' }}>
                <h3>Collection Agent</h3>
                <span className="tag live">LIVE</span>
              </div>
              <p>
                Calls retailers on outstanding dues, reconciles before stating any amount, records promises to pay and escalates disputes to a person.
              </p>
            </div>
            <div className="skeuo-inset card">
              <div className="card-head" style={{ justifyContent: 'space-between' }}>
                <h3>Marketing Agent</h3>
                <span className="tag">PHASED ROLLOUT</span>
              </div>
              <p>
                Responds to new enquiries from WhatsApp, social and B2B sources within seconds, qualifies them and books demos.
              </p>
            </div>
            <div className="skeuo-inset card">
              <div className="card-head" style={{ justifyContent: 'space-between' }}>
                <h3>Order Agent</h3>
                <span className="tag">PHASED ROLLOUT</span>
              </div>
              <p>
                Captures repeat orders from retailers by voice, matches local product names to the right SKU, and confirms before booking.
              </p>
            </div>
            <div className="skeuo-inset card">
              <div className="card-head" style={{ justifyContent: 'space-between' }}>
                <h3>Feedback &amp; Complaints</h3>
                <span className="tag">PHASED ROLLOUT</span>
              </div>
              <p>
                Collects retailer satisfaction and logs complaints for action, so service problems surface before they cost a relationship.
              </p>
            </div>
            <div className="skeuo-inset card">
              <div className="card-head" style={{ justifyContent: 'space-between' }}>
                <h3>Demo Agent</h3>
                <span className="tag">PHASED ROLLOUT</span>
              </div>
              <p>
                Runs guided voice demonstrations for prospective distributors and hands warm leads to the sales desk.
              </p>
            </div>
            <div className="skeuo-inset card">
              <div className="card-head" style={{ justifyContent: 'space-between' }}>
                <h3>Distribution Intelligence</h3>
                <span className="tag">ROADMAP</span>
              </div>
              <p>
                Turns call and order history into demand, coverage and collection insight for distributors and management.
              </p>
            </div>
          </div>
        </section>

        {/* ===================== 05 // CONNECTED DISTRIBUTION ===================== */}
        <section className="section" aria-labelledby="s5">
          <div className="mono-label">
            <span className="amber-led" />
            <span>05 // CONNECTED DISTRIBUTION</span>
          </div>
          <h2 id="s5" className="section-h2">
            Every retailer, every cycle, one connected record
          </h2>
          <div className="skeuo-chassis diagram-wrap">
            <div className="diagram">
              <svg viewBox="0 0 1000 300" role="img" aria-labelledby="dg-title">
                <title id="dg-title">
                  Data flows from distributor books into the RIA core, which reaches retailers by voice, WhatsApp and SMS, and returns outcomes to dashboards.
                </title>
                <g fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5">
                  <path className="flow" d="M215 95 H395" />
                  <path className="flow" d="M215 205 H395" />
                  <path className="flow" d="M605 150 C680 150 680 70 765 70" />
                  <path className="flow" d="M605 150 H765" />
                  <path className="flow" d="M605 150 C680 150 680 230 765 230" />
                </g>
                <g fontFamily="Space Grotesk, monospace" textAnchor="middle">
                  <rect x="25" y="65" width="190" height="60" rx="14" fill="#0a0a0c" stroke="rgba(255,255,255,0.18)" />
                  <text x="120" y="92" fill="#FFFFFF" fontSize="15" fontWeight="700">
                    DISTRIBUTOR BOOKS
                  </text>
                  <text x="120" y="112" fill="#A3A3A3" fontSize="11" letterSpacing="1">
                    MARG · TALLY · BUSY
                  </text>
                  <rect x="25" y="175" width="190" height="60" rx="14" fill="#0a0a0c" stroke="rgba(255,255,255,0.18)" />
                  <text x="120" y="202" fill="#FFFFFF" fontSize="15" fontWeight="700">
                    RECEIPTS &amp; ORDERS
                  </text>
                  <text x="120" y="222" fill="#A3A3A3" fontSize="11" letterSpacing="1">
                    DAILY FEEDS
                  </text>

                  <rect x="395" y="55" width="210" height="190" rx="18" fill="#0f0f12" stroke="rgba(255,255,255,0.45)" />
                  <text x="500" y="100" fill="#A3A3A3" fontSize="11" letterSpacing="2">
                    ORCHESTRATION
                  </text>
                  <text x="500" y="140" fill="#FFFFFF" fontSize="30" fontWeight="700" fontFamily="Outfit, sans-serif">
                    RIA CORE
                  </text>
                  <text x="500" y="172" fill="#A3A3A3" fontSize="11" letterSpacing="1">
                    RECONCILE · GATE · LOG
                  </text>
                  <circle cx="500" cy="210" r="4" fill="#FFFFFF">
                    <animate attributeName="opacity" values="1;.35;1" dur="2.2s" repeatCount="indefinite" />
                  </circle>

                  <rect x="765" y="40" width="210" height="60" rx="14" fill="#0a0a0c" stroke="rgba(255,255,255,0.18)" />
                  <text x="870" y="67" fill="#FFFFFF" fontSize="15" fontWeight="700">
                    RETAILERS
                  </text>
                  <text x="870" y="87" fill="#A3A3A3" fontSize="11" letterSpacing="1">
                    VOICE · WHATSAPP · SMS
                  </text>
                  <rect x="765" y="120" width="210" height="60" rx="14" fill="#0a0a0c" stroke="rgba(255,255,255,0.18)" />
                  <text x="870" y="147" fill="#FFFFFF" fontSize="15" fontWeight="700">
                    SALES DESK
                  </text>
                  <text x="870" y="167" fill="#A3A3A3" fontSize="11" letterSpacing="1">
                    HUMAN HANDOFF
                  </text>
                  <rect x="765" y="200" width="210" height="60" rx="14" fill="#0a0a0c" stroke="rgba(255,255,255,0.18)" />
                  <text x="870" y="227" fill="#FFFFFF" fontSize="15" fontWeight="700">
                    MANAGEMENT
                  </text>
                  <text x="870" y="247" fill="#A3A3A3" fontSize="11" letterSpacing="1">
                    DASHBOARDS · REPORTS
                  </text>
                </g>
              </svg>
            </div>
            <div className="diagram-mobile" aria-label="Connected distribution flow">
              <div className="skeuo-inset dm-node">
                <b>Distributor books</b>
                <span>Marg · Tally · Busy</span>
              </div>
              <div className="dm-arrow">↓ DAILY FEED</div>
              <div className="skeuo-inset dm-node core">
                <b>RIA Core</b>
                <span>Reconcile · Gate · Log</span>
              </div>
              <div className="dm-arrow">↓ OUTCOMES</div>
              <div className="skeuo-inset dm-node">
                <b>Retailers</b>
                <span>Voice · WhatsApp · SMS</span>
              </div>
              <div className="skeuo-inset dm-node">
                <b>Sales desk</b>
                <span>Human handoff</span>
              </div>
              <div className="skeuo-inset dm-node">
                <b>Management</b>
                <span>Dashboards</span>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== 06 // THE ROXY CONNECTION ===================== */}
        <section className="section" aria-labelledby="s6">
          <div className="mono-label">
            <span className="amber-led" />
            <span>06 // THE ROXY CONNECTION</span>
          </div>
          <h2 id="s6" className="section-h2">
            Decades of distribution experience, written into software
          </h2>
          <div className="responsive-grid-2col" style={{ gap: '1.25rem', alignItems: 'stretch' }}>
            <div className="skeuo-inset card">
              <div className="card-head">
                <div className="logo-tile" style={{ width: '48px', height: '48px', borderRadius: '10px' }}>
                  <img alt="Roxy Group logo" src="/images/roxy-group-logo.png" />
                </div>
                <h3>Roxy Group</h3>
              </div>
              <ul>
                <li>
                  • <strong>46+ years in trade:</strong> A Hyderabad-based group spanning automotive distribution, FMCG, exports and more.
                </li>
                <li>
                  • <strong>Industry foundation:</strong> Roxy&apos;s daily experience with retailers, credit and collections shapes how RIA speaks and decides.
                </li>
                <li>
                  • <strong>Recognised performance:</strong> A TVS ASTRA award winner in automotive distribution.
                </li>
              </ul>
            </div>
            <div className="skeuo-inset card">
              <div className="card-head">
                <div className="logo-tile" style={{ width: '48px', height: '48px', borderRadius: '10px' }}>
                  <img alt="RIA logo" src="/images/ria-platform-logo.png" />
                </div>
                <h3>RIA</h3>
              </div>
              <ul>
                <li>
                  • <strong>The technology brand:</strong> RIA is the AI platform; Roxy Group is the distribution business behind it.
                </li>
                <li>
                  • <strong>Same rulebook:</strong> RIA is held to the standard Roxy holds itself to — <em style={{ fontStyle: 'normal', color: '#FFFFFF' }}>We Deliver What We Commit.</em>
                </li>
                <li>
                  • <strong>Customer-zero:</strong> Roxy runs RIA on its own network before any other distributor does.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ===================== 07 // VISION + 08 // MISSION ===================== */}
        <div className="responsive-grid-2col" style={{ marginTop: '5rem', alignItems: 'stretch', gap: '1.25rem' }}>
          <section className="stack" aria-labelledby="s7" style={{ gap: '1.25rem' }}>
            <div className="mono-label">
              <span className="amber-led" />
              <span>07 // VISION</span>
            </div>
            <div className="skeuo-inset statement" style={{ flex: 1 }}>
              <h2 id="s7" style={{ position: 'absolute', width: '1px', height: '1px', overflow: 'hidden', clip: 'rect(0 0 0 0)' }}>
                Vision
              </h2>
              <p>
                To be the intelligence layer of Indian distribution — so that every distributor, however small, runs with the discipline and visibility of the largest.
              </p>
              <small>INDIA FIRST // EMERGING MARKETS ONLY AFTER INDIA IS PROVEN</small>
            </div>
          </section>
          <section className="stack" aria-labelledby="s8" style={{ gap: '1.25rem' }}>
            <div className="mono-label">
              <span className="amber-led" />
              <span>08 // MISSION</span>
            </div>
            <div className="skeuo-inset card" style={{ flex: 1 }}>
              <h2 id="s8" style={{ position: 'absolute', width: '1px', height: '1px', overflow: 'hidden', clip: 'rect(0 0 0 0)' }}>
                Mission
              </h2>
              <ul>
                <li>
                  • <strong>Cover every retailer:</strong> No shop forgotten on a busy day, in any of our supported languages.
                </li>
                <li>
                  • <strong>Protect working capital:</strong> Disciplined, respectful follow-up on every payment due.
                </li>
                <li>
                  • <strong>Keep a true record:</strong> Every call, promise and outcome captured and auditable.
                </li>
                <li>
                  • <strong>Free people for judgement:</strong> Let the AI handle routine calls so teams focus on relationships.
                </li>
              </ul>
            </div>
          </section>
        </div>

        {/* ===================== 09 // RESPONSIBLE INTELLIGENCE ===================== */}
        <section className="section" aria-labelledby="s9">
          <div className="mono-label">
            <span className="amber-led" />
            <span>09 // RESPONSIBLE INTELLIGENCE</span>
          </div>
          <h2 id="s9" className="section-h2">
            Compliance is a feature, not a footnote
          </h2>
          <p className="section-intro">
            Every outbound call and message passes the same six-step gate before it is made. Every pass and every block is logged.
          </p>
          <div className="grid-3">
            <div className="skeuo-inset card">
              <div className="card-head">
                <span className="tag">G1 – G2</span>
                <h3>Consent &amp; channel</h3>
              </div>
              <p>
                Lawful basis under India&apos;s DPDP Act 2023, and TRAI / DLT and DND checks before any call or SMS.
              </p>
            </div>
            <div className="skeuo-inset card">
              <div className="card-head">
                <span className="tag">G3 – G4</span>
                <h3>Contact &amp; content</h3>
              </div>
              <p>
                Calls only between 08:00 and 19:00, capped in frequency, paused on festival days — and every statement grounded in reconciled data.
              </p>
            </div>
            <div className="skeuo-inset card">
              <div className="card-head">
                <span className="tag">G5 – G6</span>
                <h3>Guardrails &amp; integrity</h3>
              </div>
              <p>
                Commercial limits the AI cannot exceed, and duplicate-safe actions so no retailer is called or charged twice by mistake.
              </p>
            </div>
          </div>
          <div className="skeuo-inset card" style={{ marginTop: '1.25rem' }}>
            <ul>
              <li>
                • <strong>Always disclosed:</strong> RIA tells the retailer it is an AI assistant and that the call is recorded.
              </li>
              <li>
                • <strong>Never threatens:</strong> Respectful language only; dues are never shared with unauthorised third parties.
              </li>
              <li>
                • <strong>Opt-out honoured at once:</strong> A retailer who asks not to be called is not called again.
              </li>
              <li>
                • <strong>When in doubt, a human decides:</strong> If records conflict, RIA states no amount and escalates to a person.
              </li>
            </ul>
          </div>
        </section>

        {/* ===================== CLOSING CTA ===================== */}
        <section className="section">
          <div
            className="skeuo-chassis"
            style={{
              padding: 'clamp(1.4rem, 3vw, 2rem)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1.5rem',
            }}
          >
            <div className="stack" style={{ gap: '0.6rem', maxWidth: '60ch' }}>
              <div className="mono-label" style={{ fontSize: '0.75rem' }}>
                <span className="amber-led" />
                <span>DISPATCH // EMPOWERING DISTRIBUTORS ACROSS INDIA</span>
              </div>
              <h2
                style={{
                  fontSize: 'clamp(1.3rem, 2.6vw, 1.8rem)',
                  fontWeight: 800,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.2,
                }}
              >
                Bring RIA to your distribution network
              </h2>
              <p
                style={{
                  color: 'var(--white-muted, #a3a3a3)',
                  fontSize: '0.92rem',
                  lineHeight: 1.55,
                }}
              >
                Start with collections, see the results on your own retailers, then grow from there.
              </p>
            </div>
            <div className="responsive-hero-actions" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link className="btn-skeuo-primary" href="/contact">
                <span>Talk to the RIA Team</span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* ===================== FOOTER ===================== */}
        <Footer />
      </div>
    </main>
  );
}
