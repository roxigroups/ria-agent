'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import HeaderNav from '@/components/HeaderNav';
import ParticleCanvas from '@/components/ParticleCanvas';
import Footer from '@/components/Footer';

const AVATAR_IMAGE_BASE64 =
  'data:image/webp;base64,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';

interface ArticleItem {
  id: string;
  num: string;
  channel: 'distribution' | 'collection' | 'telecalling';
  channelLabel: string;
  title: string;
  description: string;
  readTime: string;
  url: string;
  isWide?: boolean;
}

const ARTICLES: ArticleItem[] = [
  {
    id: '01',
    num: '01',
    channel: 'distribution',
    channelLabel: 'Distribution Intelligence',
    title: 'The AI-Powered Distributor: What Distribution Will Look Like in 2030',
    description:
      'A look at how AI agents, real-time intelligence and autonomous workflows could reshape distributor operations by 2030.',
    readTime: '08 Min Read',
    url: 'https://arohana.blog/the-ai-powered-distributor-what-distribution-will-look-like-in-2030/',
  },
  {
    id: '02',
    num: '02',
    channel: 'distribution',
    channelLabel: 'Distribution Intelligence',
    title: 'Why Retailer Follow-Up Is One of the Biggest Challenges in Distribution',
    description:
      'Why fragmented retailer communication creates operational gaps and how intelligent systems can bring consistency to follow-up.',
    readTime: '07 Min Read',
    url: 'https://arohana.blog/why-retailer-follow-up-is-one-of-the-biggest-challenges-in-distribution/',
  },
  {
    id: '03',
    num: '03',
    channel: 'distribution',
    channelLabel: 'Distribution Intelligence',
    title: 'How AI Can Manage Thousands of Retailer Conversations at Scale',
    description:
      'Exploring how AI agents can handle high-volume retailer conversations while maintaining consistency, context and operational intelligence.',
    readTime: '07 Min Read',
    url: 'https://arohana.blog/how-ai-can-manage-thousands-of-retailer-conversations-at-scale/',
    isWide: true,
  },
  {
    id: '04',
    num: '04',
    channel: 'collection',
    channelLabel: 'Collection Intelligence',
    title: 'How the RIA Collection Agent Works: From Invoice to Payment',
    description:
      'A practical look at the collection journey and how an AI collection agent can automate follow-up from invoice creation to payment.',
    readTime: '08 Min Read',
    url: 'https://arohana.blog/how-the-ria-collection-agent-works-from-invoice-to-payment/',
  },
  {
    id: '05',
    num: '05',
    channel: 'collection',
    channelLabel: 'Collection Intelligence',
    title: 'From Pending Payments to Predictable Cash Flow',
    description:
      'How AI-powered collection workflows can help distributors move from reactive payment follow-up toward predictable cash flow.',
    readTime: '07 Min Read',
    url: 'https://arohana.blog/from-pending-payments-to-predictable-cash-flow-the-ai-collection-shift/',
  },
  {
    id: '06',
    num: '06',
    channel: 'telecalling',
    channelLabel: 'AI Telecalling',
    title: 'AI Telecalling vs. Traditional Telecalling',
    description:
      'Understanding the operational differences between traditional telecalling teams and AI-powered calling agents for distribution businesses.',
    readTime: '06 Min Read',
    url: 'https://arohana.blog/ai-telecalling-vs-traditional-telecalling-what-should-distributors-choose/',
    isWide: true,
  },
  {
    id: '07',
    num: '07',
    channel: 'collection',
    channelLabel: 'Collection Intelligence',
    title: 'The Hidden Cost of Manual Payment Collection',
    description:
      'The operational, financial and productivity costs hidden inside traditional manual payment collection processes.',
    readTime: '07 Min Read',
    url: 'https://arohana.blog/the-hidden-cost-of-manual-payment-collection-for-distributors/',
  },
  {
    id: '08',
    num: '08',
    channel: 'collection',
    channelLabel: 'Collection Intelligence',
    title: 'What Is an AI Collection Agent?',
    description:
      'A practical guide to AI collection agents and how distributors can use intelligent automation to improve payment follow-up.',
    readTime: '08 Min Read',
    url: 'https://arohana.blog/what-is-an-ai-collection-agent-a-complete-guide-for-distributors/',
  },
  {
    id: '09',
    num: '09',
    channel: 'collection',
    channelLabel: 'Collection Intelligence',
    title: 'The Future of Distributor Collections',
    description:
      'Why AI agents are changing distributor collections and creating a new model for intelligent payment operations.',
    readTime: '07 Min Read',
    url: 'https://arohana.blog/the-future-of-distributor-collections-why-ai-agents-are-changing-the-game/',
    isWide: true,
  },
];

const TRUST_STEPS = [
  {
    title: 'Retailer identity',
    subtitle: 'Matched to the right account',
  },
  {
    title: 'Consent & calling hours',
    subtitle: 'Within permitted window',
  },
  {
    title: 'Balance reconciled',
    subtitle: 'Payments received are counted',
  },
  {
    title: 'AI disclosed & logged',
    subtitle: 'Transparent, recorded, auditable',
  },
];

export default function InsightsPage() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'distribution' | 'collection' | 'telecalling'>('all');
  const [trustStep, setTrustStep] = useState<number>(0);
  const [isTrustVerified, setIsTrustVerified] = useState<boolean>(false);
  const [isTrustScanning, setIsTrustScanning] = useState<boolean>(true);
  const trustRef = useRef<HTMLDivElement>(null);

  // Filtered list
  const filteredArticles = ARTICLES.filter(
    (item) => activeFilter === 'all' || item.channel === activeFilter
  );

  // Trust check interactive sequence
  useEffect(() => {
    let timer: NodeJS.Timeout;
    const runSequence = () => {
      let current = 0;
      setTrustStep(0);
      setIsTrustVerified(false);
      setIsTrustScanning(true);

      const nextStep = () => {
        if (current < TRUST_STEPS.length) {
          current++;
          setTrustStep(current);
          timer = setTimeout(nextStep, 1100);
        } else {
          setIsTrustScanning(false);
          setIsTrustVerified(true);
          timer = setTimeout(runSequence, 4500);
        }
      };

      timer = setTimeout(nextStep, 1100);
    };

    runSequence();

    return () => clearTimeout(timer);
  }, []);

  return (
    <main
      id="main"
      style={{
        minHeight: '100vh',
        backgroundColor: '#000000',
        color: '#FFFFFF',
        position: 'relative',
        overflowX: 'hidden',
      }}
    >
      {/* 3D Starfield Background Canvas */}
      <ParticleCanvas />

      {/* Global Header Navigation */}
      <HeaderNav />

      {/* JSON-LD Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'CollectionPage',
                '@id': 'https://www.riaaiagent.com/insights#page',
                url: 'https://www.riaaiagent.com/insights',
                name: 'RIA Insights | Intelligent Distribution & AI Agents',
                description:
                  'Explore RIA insights on AI-powered distribution, retailer intelligence, collection automation and autonomous AI agents.',
                inLanguage: 'en',
                isPartOf: {
                  '@type': 'WebSite',
                  name: 'RIA ai Agent',
                  url: 'https://www.riaaiagent.com/',
                },
                mainEntity: { '@id': 'https://www.riaaiagent.com/insights#articles' },
              },
            ],
          }),
        }}
      />

      {/* Scoped Styles for Insights Page */}
      <style jsx global>{`
        :root {
          --card: #0b0b0c;
          --card-2: #111113;
          --line: rgba(255, 255, 255, 0.1);
          --line-2: rgba(255, 255, 255, 0.18);
          --muted: #a1a1aa;
          --faint: #71717a;
          --ok: #22c55e;
          --font: 'Outfit', system-ui, -apple-system, sans-serif;
          --mono: 'JetBrains Mono', monospace;
          --r-card: 14px;
          --r-panel: 22px;
          --r-btn: 12px;
          --container: 1200px;
          --gutter: clamp(16px, 4vw, 40px);
          --ease: cubic-bezier(0.22, 0.7, 0.2, 1);
        }

        .insights-container {
          width: 100%;
          max-width: var(--container);
          margin: 0 auto;
          padding: 0 var(--gutter);
        }

        .chip {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 9px 18px 9px 14px;
          border: 1px solid var(--line-2);
          border-radius: 999px;
          background: rgba(14, 14, 16, 0.85);
          font-size: 11.5px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          line-height: 1.35;
        }
        .chip::before {
          content: '';
          flex: none;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #fff;
          box-shadow: 0 0 8px rgba(255, 255, 255, 0.8);
        }

        .mono-label {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: var(--mono);
          font-size: 11.5px;
          font-weight: 600;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--muted);
        }
        .mono-label::before {
          content: '';
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #fff;
          box-shadow: 0 0 8px rgba(255, 255, 255, 0.7);
        }

        .tag {
          display: inline-flex;
          align-items: center;
          padding: 4px 10px;
          border: 1px solid var(--line-2);
          border-radius: 6px;
          font-family: var(--mono);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #fff;
          white-space: nowrap;
        }

        .btn-action {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          min-height: 52px;
          padding: 0 28px;
          border-radius: var(--r-btn);
          font-size: 15px;
          font-weight: 700;
          letter-spacing: 0.01em;
          text-decoration: none;
          transition: transform 0.3s var(--ease), box-shadow 0.3s var(--ease),
            background 0.3s var(--ease), border-color 0.3s var(--ease);
          cursor: pointer;
        }
        .btn-action svg {
          width: 16px;
          height: 16px;
          transition: transform 0.3s var(--ease);
        }
        .btn-action:hover svg {
          transform: translateX(4px);
        }
        .btn-primary-glow {
          background: #fff;
          color: #000;
          box-shadow: 0 6px 24px rgba(255, 255, 255, 0.12);
        }
        .btn-primary-glow:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 34px rgba(255, 255, 255, 0.2);
        }
        .btn-ghost-dark {
          background: rgba(14, 14, 16, 0.8);
          color: #fff;
          border: 1px solid var(--line-2);
        }
        .btn-ghost-dark:hover {
          border-color: rgba(255, 255, 255, 0.45);
          transform: translateY(-2px);
        }

        .panel-chassis {
          position: relative;
          border: 1px solid var(--line-2);
          border-radius: var(--r-panel);
          background: linear-gradient(180deg, #0e0e10, #070708);
        }
        .screw-corner {
          position: absolute;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #d4d4d8;
          box-shadow: inset 0 0 0 2px #3f3f46;
        }
        .screw-corner::after {
          content: '';
          position: absolute;
          left: 2px;
          right: 2px;
          top: 4px;
          height: 2px;
          background: #3f3f46;
        }
        .screw-corner.tl {
          top: 14px;
          left: 14px;
        }
        .screw-corner.tr {
          top: 14px;
          right: 14px;
        }
        .screw-corner.bl {
          bottom: 14px;
          left: 14px;
        }
        .screw-corner.br {
          bottom: 14px;
          right: 14px;
        }

        /* Hero */
        .insights-hero {
          padding: clamp(40px, 7vw, 96px) 0 clamp(48px, 7vw, 96px);
        }
        .hero-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
          gap: clamp(32px, 5vw, 64px);
          align-items: center;
        }
        .insights-hero h1 {
          margin-top: 26px;
          font-size: clamp(36px, 4.6vw, 60px);
          font-weight: 800;
          letter-spacing: -0.025em;
          line-height: 1.1;
        }
        .hero-lede {
          margin-top: 22px;
          max-width: 540px;
          font-size: clamp(16px, 1.5vw, 18px);
          color: var(--muted);
          line-height: 1.6;
        }
        .hero-status {
          margin-top: 26px;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
          font-family: var(--mono);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--faint);
        }
        .hero-status .live {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #fff;
        }
        .pulse-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--ok);
          animation: pulse-ring 2.2s infinite;
          flex: none;
        }
        @keyframes pulse-ring {
          0% {
            box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.6);
          }
          70% {
            box-shadow: 0 0 0 9px rgba(34, 197, 94, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(34, 197, 94, 0);
          }
        }
        .hero-actions {
          margin-top: 32px;
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        /* Trust-check console */
        .trust-console {
          padding: 34px 26px 26px;
        }
        .trust-stage {
          position: relative;
          border: 1px solid var(--line-2);
          border-radius: 16px;
          overflow: hidden;
          background: radial-gradient(
              circle at 50% 45%,
              rgba(56, 120, 255, 0.16),
              transparent 62%
            ),
            #050506;
          aspect-ratio: 16 / 11;
          display: grid;
          place-items: center;
        }
        .stage-chip {
          position: absolute;
          top: 12px;
          left: 12px;
          z-index: 3;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 12px;
          border-radius: 8px;
          border: 1px solid var(--line-2);
          background: rgba(0, 0, 0, 0.7);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }
        .stage-chip svg {
          width: 13px;
          height: 13px;
        }
        .stage-state {
          position: absolute;
          top: 12px;
          right: 12px;
          z-index: 3;
          padding: 6px 10px;
          border-radius: 8px;
          border: 1px solid var(--line-2);
          background: rgba(0, 0, 0, 0.7);
          font-family: var(--mono);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--muted);
          transition: color 0.4s, border-color 0.4s;
        }
        .stage-state.verified {
          color: var(--ok);
          border-color: rgba(34, 197, 94, 0.5);
        }

        .avatar-wrap {
          position: relative;
          width: min(62%, 290px);
          aspect-ratio: 1;
          animation: bob-avatar 5s ease-in-out infinite;
        }
        @keyframes bob-avatar {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        .avatar-wrap img {
          position: absolute;
          inset: 7%;
          width: 86%;
          height: 86%;
          border-radius: 50%;
          object-fit: cover;
        }
        .ring {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          border: 1px dashed rgba(255, 255, 255, 0.28);
          animation: spin-ring 22s linear infinite;
        }
        .ring::before {
          content: '';
          position: absolute;
          top: -4px;
          left: 50%;
          width: 8px;
          height: 8px;
          margin-left: -4px;
          border-radius: 50%;
          background: #fff;
          box-shadow: 0 0 10px #fff;
        }
        .ring-2 {
          inset: 3.5%;
          border-style: solid;
          border-color: rgba(255, 255, 255, 0.08);
          animation-duration: 34s;
          animation-direction: reverse;
        }
        .ring-2::before {
          background: #60a5fa;
          box-shadow: 0 0 10px #60a5fa;
          top: auto;
          bottom: -4px;
        }
        @keyframes spin-ring {
          to {
            transform: rotate(360deg);
          }
        }
        .scan-overlay {
          position: absolute;
          left: 7%;
          right: 7%;
          top: 7%;
          height: 86%;
          border-radius: 50%;
          overflow: hidden;
          pointer-events: none;
        }
        .scan-overlay::after {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          height: 22%;
          top: -22%;
          background: linear-gradient(
            180deg,
            transparent,
            rgba(120, 180, 255, 0.35),
            transparent
          );
          border-bottom: 1px solid rgba(160, 210, 255, 0.8);
          animation: scan-pass 1.6s ease-in-out infinite;
        }
        @keyframes scan-pass {
          to {
            top: 100%;
          }
        }
        .verified-badge-anim {
          position: absolute;
          right: -4%;
          bottom: 8%;
          z-index: 2;
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 7px 12px;
          border-radius: 999px;
          background: #fff;
          color: #000;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
          transition: opacity 0.35s var(--ease),
            transform 0.5s cubic-bezier(0.3, 1.6, 0.5, 1);
        }
        .verified-badge-anim svg {
          width: 14px;
          height: 14px;
          color: var(--ok);
        }

        .trust-head {
          margin-top: 20px;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 12px;
        }
        .trust-head h2 {
          font-size: 20px;
          font-weight: 700;
          letter-spacing: -0.01em;
        }
        .trust-count {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          font-weight: 600;
          color: var(--muted);
          white-space: nowrap;
        }
        .trust-count b {
          color: #fff;
        }
        .trust-list {
          list-style: none;
          margin: 14px 0 0;
          padding: 0;
          display: grid;
          gap: 8px;
        }
        .trust-item-row {
          display: grid;
          grid-template-columns: 26px minmax(0, 1fr) auto;
          align-items: center;
          gap: 12px;
          padding: 10px 12px;
          border: 1px solid var(--line);
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.02);
          transition: border-color 0.4s, background 0.4s;
        }
        .trust-item-row strong {
          display: block;
          font-size: 14px;
          font-weight: 600;
        }
        .trust-item-row span.sub {
          display: block;
          font-size: 12.5px;
          color: var(--faint);
        }
        .trust-item-row .state-text {
          font-family: var(--mono);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--faint);
        }
        .t-icon-circle {
          width: 26px;
          height: 26px;
          border-radius: 50%;
          border: 1px solid var(--line-2);
          display: grid;
          place-items: center;
          position: relative;
        }
        .t-icon-circle svg {
          width: 13px;
          height: 13px;
          opacity: 0;
          transform: scale(0.4);
          transition: opacity 0.3s,
            transform 0.4s cubic-bezier(0.3, 1.6, 0.5, 1);
        }
        .trust-item-row.is-checking {
          border-color: rgba(255, 255, 255, 0.28);
        }
        .trust-item-row.is-checking .t-icon-circle {
          border-top-color: #fff;
          animation: spin-ring 0.8s linear infinite;
        }
        .trust-item-row.is-checking .state-text {
          color: #fff;
        }
        .trust-item-row.is-done {
          border-color: rgba(34, 197, 94, 0.35);
          background: rgba(34, 197, 94, 0.05);
        }
        .trust-item-row.is-done .t-icon-circle {
          background: var(--ok);
          border-color: var(--ok);
        }
        .trust-item-row.is-done .t-icon-circle svg {
          opacity: 1;
          transform: none;
          color: #000;
        }
        .trust-item-row.is-done .state-text {
          color: var(--ok);
        }

        /* Section generic */
        .section-wrap {
          padding: clamp(48px, 7vw, 88px) 0;
        }
        .section-header-block {
          display: flex;
          flex-wrap: wrap;
          align-items: flex-end;
          justify-content: space-between;
          gap: 16px 32px;
          margin-bottom: clamp(26px, 4vw, 40px);
        }
        .section-header-block h2 {
          margin-top: 18px;
          font-size: clamp(28px, 4vw, 44px);
          font-weight: 800;
          line-height: 1.1;
        }
        .section-header-block p {
          color: var(--muted);
          max-width: 420px;
          font-size: 15px;
        }

        /* Featured Card */
        .featured-card-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr);
          gap: 0;
          overflow: hidden;
          transition: border-color 0.35s var(--ease),
            transform 0.35s var(--ease);
        }
        .featured-card-grid:hover {
          border-color: rgba(255, 255, 255, 0.4);
          transform: translateY(-3px);
        }
        .featured-body {
          padding: clamp(36px, 5vw, 56px) clamp(24px, 4vw, 48px);
          display: flex;
          flex-direction: column;
          gap: 18px;
          min-width: 0;
        }
        .featured-meta {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 10px;
        }
        .featured-body h3 {
          font-size: clamp(26px, 3.2vw, 38px);
          font-weight: 800;
          line-height: 1.1;
        }
        .featured-body p {
          color: var(--muted);
          font-size: clamp(15px, 1.4vw, 17px);
          max-width: 58ch;
          line-height: 1.6;
        }
        .featured-body .btn-action {
          align-self: flex-start;
          margin-top: 8px;
        }
        .featured-visual {
          position: relative;
          margin: 18px;
          border: 1px solid var(--line);
          border-radius: 16px;
          background: #050506;
          min-height: 300px;
          overflow: hidden;
        }
        .featured-visual svg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
        }
        .svg-flow-path {
          stroke-dasharray: 3 9;
          animation: flow-anim 3.5s linear infinite;
        }
        @keyframes flow-anim {
          to {
            stroke-dashoffset: -48;
          }
        }
        .core-ring-spin {
          transform-box: fill-box;
          transform-origin: center;
          animation: spin-ring 20s linear infinite;
        }

        /* Channel Filters Sticky */
        .intelligence-filters-sticky {
          position: sticky;
          top: 0;
          z-index: 50;
          padding: 14px 0;
          background: rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-top: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
        }
        .filters-inner-row {
          display: flex;
          align-items: center;
          gap: 18px;
        }
        .filters-nav-pill {
          display: flex;
          align-items: center;
          gap: 6px;
          list-style: none;
          padding: 4px;
          margin: 0;
          border: 1px solid var(--line-2);
          border-radius: 999px;
          background: rgba(14, 14, 16, 0.85);
          overflow-x: auto;
          scrollbar-width: none;
        }
        .filters-nav-pill::-webkit-scrollbar {
          display: none;
        }
        .filter-btn-item {
          padding: 8px 16px;
          border-radius: 999px;
          border: none;
          background: transparent;
          color: var(--muted);
          font-family: var(--font);
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          cursor: pointer;
          white-space: nowrap;
          transition: all 0.25s var(--ease);
        }
        .filter-btn-item:hover {
          color: #fff;
        }
        .filter-btn-item.active {
          background: #fff;
          color: #000;
          box-shadow: 0 2px 12px rgba(255, 255, 255, 0.2);
        }

        /* Library Grid */
        .library-grid-layout {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
        }
        .channel-sep-divider {
          grid-column: 1 / -1;
          display: flex;
          align-items: center;
          gap: 16px;
          margin-top: 22px;
        }
        .channel-sep-divider::after {
          content: '';
          flex: 1;
          height: 1px;
          background: var(--line);
        }

        .insight-card-box {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 14px;
          min-width: 0;
          padding: clamp(20px, 2.6vw, 26px);
          border: 1px solid var(--line-2);
          border-radius: var(--r-card);
          background: var(--card);
          text-decoration: none;
          color: #fff;
          transition: border-color 0.35s var(--ease),
            transform 0.35s var(--ease), background 0.35s var(--ease);
        }
        .insight-card-box:hover {
          border-color: rgba(255, 255, 255, 0.4);
          transform: translateY(-4px);
          background: var(--card-2);
        }
        .insight-card-box.is-wide {
          grid-column: 1 / -1;
        }
        .card-top-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }
        .num-tile-badge {
          width: 46px;
          height: 46px;
          border-radius: 12px;
          border: 1px solid var(--line-2);
          display: grid;
          place-items: center;
          font-family: var(--mono);
          font-size: 15px;
          font-weight: 700;
          color: #fff;
          background: #050506;
          transition: background 0.35s var(--ease), color 0.35s var(--ease);
        }
        .insight-card-box:hover .num-tile-badge {
          background: #fff;
          color: #000;
        }
        .card-label-kicker {
          font-family: var(--mono);
          font-size: 10.5px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--faint);
          transition: color 0.35s;
        }
        .insight-card-box:hover .card-label-kicker {
          color: var(--muted);
        }
        .insight-card-box h3 {
          font-size: clamp(19px, 1.8vw, 22px);
          font-weight: 700;
          letter-spacing: -0.015em;
          line-height: 1.25;
        }
        .insight-card-box p {
          color: var(--muted);
          font-size: 15px;
          line-height: 1.55;
        }
        .card-foot-row {
          margin-top: auto;
          padding-top: 16px;
          border-top: 1px solid var(--line);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }
        .read-time-pill {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-family: var(--mono);
          font-size: 10.5px;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--faint);
        }
        .read-time-pill svg {
          width: 13px;
          height: 13px;
        }
        .access-link-arrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: var(--mono);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--muted);
          transition: color 0.3s;
        }
        .access-link-arrow svg {
          width: 14px;
          height: 14px;
          transition: transform 0.3s var(--ease);
        }
        .insight-card-box:hover .access-link-arrow {
          color: #fff;
        }
        .insight-card-box:hover .access-link-arrow svg {
          transform: translateX(5px);
        }

        /* CTA */
        .cta-panel-wrap {
          padding: clamp(40px, 6vw, 72px) clamp(24px, 5vw, 64px);
          display: grid;
          grid-template-columns: minmax(0, 1.3fr) auto;
          gap: 32px;
          align-items: end;
          overflow: hidden;
        }
        .cta-panel-wrap h2 {
          margin-top: 20px;
          font-size: clamp(30px, 4.6vw, 52px);
          font-weight: 800;
          line-height: 1.1;
        }
        .cta-panel-wrap p {
          margin-top: 16px;
          max-width: 520px;
          color: var(--muted);
          font-size: clamp(15px, 1.4vw, 17px);
          line-height: 1.6;
        }

        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr;
          }
          .trust-console {
            max-width: 560px;
          }
          .featured-card-grid {
            grid-template-columns: 1fr;
          }
          .featured-visual {
            min-height: 220px;
            margin: 0 18px 18px;
          }
          .cta-panel-wrap {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 720px) {
          .library-grid-layout {
            grid-template-columns: 1fr;
            gap: 14px;
          }
        }
        @media (max-width: 480px) {
          .trust-console {
            padding: 30px 14px 18px;
          }
          .trust-item-row {
            grid-template-columns: 24px minmax(0, 1fr);
          }
          .trust-item-row .state-text {
            display: none;
          }
          .hero-actions .btn-action {
            flex: 1 1 100%;
          }
        }
      `}</style>

      {/* ================= HERO ================= */}
      <section className="insights-hero" aria-labelledby="hero-title">
        <div className="insights-container hero-grid">
          <div className="hero-copy">
            <span className="chip">RIA // Intelligence Insights</span>
            <h1 id="hero-title">The Thinking Behind Intelligent Distribution</h1>
            <p className="hero-lede">
              Perspectives, research and practical intelligence on AI-powered distribution, retailer operations, collection intelligence and autonomous AI agents.
            </p>
            <p className="hero-status">
              <span className="live">
                <span className="pulse-dot" aria-hidden="true" />
                Knowledge Node
              </span>{' '}
              // Distribution Intelligence // Online
            </p>
            <div className="hero-actions">
              <a className="btn-action btn-primary-glow" href="#featured">
                <span>Read Featured Insight</span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
              <a className="btn-action btn-ghost-dark" href="#library">
                Browse Library
              </a>
            </div>
          </div>

          {/* Trust Check Console Panel */}
          <div
            className={`panel-chassis trust-console ${
              isTrustVerified ? 'is-verified' : isTrustScanning ? 'is-scanning' : ''
            }`}
            ref={trustRef}
            aria-label="RIA trust check demonstration"
          >
            <span className="screw-corner tl" aria-hidden="true" />
            <span className="screw-corner tr" aria-hidden="true" />
            <span className="screw-corner bl" aria-hidden="true" />
            <span className="screw-corner br" aria-hidden="true" />

            <div className="trust-stage">
              <span className="stage-chip">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                RIA Trust Check
              </span>
              <span className={`stage-state ${isTrustVerified ? 'verified' : ''}`} aria-live="polite">
                {isTrustVerified ? 'Verified' : 'Running'}
              </span>

              <div className="avatar-wrap">
                <span className="ring" aria-hidden="true" />
                <span className="ring ring-2" aria-hidden="true" />
                <img
                  src={AVATAR_IMAGE_BASE64}
                  width={280}
                  height={280}
                  alt="RIA, the AI distribution agent"
                />
                <span className="scan-overlay" aria-hidden="true" />
                <span
                  className="verified-badge-anim"
                  style={{
                    opacity: isTrustVerified ? 1 : 0,
                    transform: isTrustVerified ? 'none' : 'scale(0.6) rotate(-8deg)',
                  }}
                  aria-hidden="true"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Verified
                </span>
              </div>
            </div>

            <div className="trust-head">
              <h2>Every Call, Checked First</h2>
              <span className="trust-count">
                <b>{trustStep}</b>/{TRUST_STEPS.length} checks
              </span>
            </div>

            <ul className="trust-list">
              {TRUST_STEPS.map((step, idx) => {
                const isDone = trustStep > idx || isTrustVerified;
                const isChecking = trustStep === idx && !isTrustVerified;
                return (
                  <li
                    key={idx}
                    className={`trust-item-row ${
                      isDone ? 'is-done' : isChecking ? 'is-checking' : ''
                    }`}
                  >
                    <span className="t-icon-circle">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </span>
                    <span>
                      <strong>{step.title}</strong>
                      <span className="sub">{step.subtitle}</span>
                    </span>
                    <span className="state-text">
                      {isDone ? 'Passed' : isChecking ? 'Checking' : 'Pending'}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      {/* ================= FEATURED INTELLIGENCE ================= */}
      <section className="section-wrap" id="featured" aria-labelledby="featured-heading">
        <div className="insights-container">
          <div className="section-header-block">
            <div>
              <span className="chip">Featured Intelligence // 001</span>
              <h2 id="featured-heading">Featured Insight</h2>
            </div>
          </div>

          <article className="panel-chassis featured-card-grid">
            <span className="screw-corner tl" aria-hidden="true" />
            <span className="screw-corner tr" aria-hidden="true" />
            <span className="screw-corner bl" aria-hidden="true" />
            <span className="screw-corner br" aria-hidden="true" />

            <div className="featured-body">
              <div className="featured-meta">
                <span className="tag">Distribution Intelligence</span>
              </div>
              <h3>RIA: Building the Intelligent Operating Layer for Distribution</h3>
              <p>
                How distribution is evolving from traditional transaction systems toward an intelligent operating layer capable of understanding conversations, collections, retailer behaviour and operational signals.
              </p>
              <a
                className="btn-action btn-primary-glow"
                href="https://arohana.blog/ria-building-the-intelligent-operating-layer-for-distribution/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Read insight: RIA: Building the Intelligent Operating Layer for Distribution (opens in a new tab)"
              >
                <span>Read Insight</span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
            </div>

            <div className="featured-visual" aria-hidden="true">
              <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
                <g stroke="rgba(255,255,255,.06)">
                  <path d="M0 75H400M0 150H400M0 225H400M100 0V300M200 0V300M300 0V300" />
                </g>
                <g fill="none" stroke="rgba(255,255,255,.55)" strokeWidth="1.2">
                  <path className="svg-flow-path" d="M64 64 L200 150" />
                  <path className="svg-flow-path" d="M336 64 L200 150" style={{ animationDelay: '-1s' }} />
                  <path className="svg-flow-path" d="M64 236 L200 150" style={{ animationDelay: '-2s' }} />
                  <path className="svg-flow-path" d="M336 236 L200 150" style={{ animationDelay: '-0.5s' }} />
                </g>
                <circle
                  className="core-ring-spin"
                  cx="200"
                  cy="150"
                  r="46"
                  fill="none"
                  stroke="rgba(255,255,255,.35)"
                  strokeDasharray="2 7"
                />
                <circle cx="200" cy="150" r="26" fill="#0b0b0c" stroke="#fff" strokeWidth="1.5" />
                <circle cx="200" cy="150" r="5" fill="#fff" />
                <g fill="#0b0b0c" stroke="rgba(255,255,255,.7)" strokeWidth="1.2">
                  <rect x="54" y="54" width="20" height="20" rx="5" />
                  <rect x="326" y="54" width="20" height="20" rx="5" />
                  <rect x="54" y="226" width="20" height="20" rx="5" />
                  <rect x="326" y="226" width="20" height="20" rx="5" />
                </g>
                <g fontFamily="JetBrains Mono, monospace" fontSize="8.5" letterSpacing="1.5" fill="#71717a">
                  <text x="54" y="44">CONVERSATIONS</text>
                  <text x="282" y="44">COLLECTIONS</text>
                  <text x="54" y="268">RETAILERS</text>
                  <text x="304" y="268">SIGNALS</text>
                </g>
              </svg>
            </div>
          </article>
        </div>
      </section>

      {/* ================= FILTERS & LIBRARY ================= */}
      <div>
        <section className="intelligence-filters-sticky" aria-labelledby="filters-heading">
          <div className="insights-container filters-inner-row">
            <h2 id="filters-heading" className="mono-label">
              Intelligence Channels
            </h2>
            <div className="filters-nav-pill">
              <button
                type="button"
                className={`filter-btn-item ${activeFilter === 'all' ? 'active' : ''}`}
                onClick={() => setActiveFilter('all')}
              >
                All
              </button>
              <button
                type="button"
                className={`filter-btn-item ${activeFilter === 'distribution' ? 'active' : ''}`}
                onClick={() => setActiveFilter('distribution')}
              >
                Distribution Intelligence
              </button>
              <button
                type="button"
                className={`filter-btn-item ${activeFilter === 'collection' ? 'active' : ''}`}
                onClick={() => setActiveFilter('collection')}
              >
                Collection Intelligence
              </button>
              <button
                type="button"
                className={`filter-btn-item ${activeFilter === 'telecalling' ? 'active' : ''}`}
                onClick={() => setActiveFilter('telecalling')}
              >
                AI Telecalling
              </button>
            </div>
            <p
              style={{
                marginLeft: 'auto',
                fontFamily: 'var(--mono)',
                fontSize: '11px',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--faint)',
                whiteSpace: 'nowrap',
              }}
              aria-live="polite"
            >
              <span>{filteredArticles.length < 10 ? `0${filteredArticles.length}` : filteredArticles.length}</span> insights
            </p>
          </div>
        </section>

        <section className="section-wrap" id="library" aria-labelledby="library-heading">
          <div className="insights-container">
            <div className="section-header-block">
              <div>
                <span className="chip">Insight Library // 01 – 09</span>
                <h2 id="library-heading">Intelligence Archive</h2>
              </div>
              <p>Practical thinking on distributor operations, retailer follow-up, collections and AI calling.</p>
            </div>

            <div className="library-grid-layout">
              {activeFilter === 'all' && (
                <div className="channel-sep-divider">
                  <span className="mono-label">Distribution Intelligence</span>
                </div>
              )}

              {filteredArticles.map((article) => (
                <a
                  key={article.id}
                  className={`insight-card-box ${article.isWide ? 'is-wide' : ''}`}
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Access insight: ${article.title} (opens in a new tab)`}
                >
                  <div className="card-top-row">
                    <span className="num-tile-badge">{article.num}</span>
                    <span className="tag">{article.channelLabel}</span>
                  </div>
                  <span className="card-label-kicker">
                    Insight {article.num} // {article.channelLabel}
                  </span>
                  <h3>{article.title}</h3>
                  <p>{article.description}</p>
                  <div className="card-foot-row">
                    <span className="read-time-pill">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <circle cx="12" cy="12" r="9" />
                        <path d="M12 7v5l3 2" />
                      </svg>
                      {article.readTime}
                    </span>
                    <span className="access-link-arrow">
                      <span>Access Insight</span>
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M5 12h14M13 6l6 6-6 6" />
                      </svg>
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* ================= CLOSING CTA ================= */}
      <section className="section-wrap" aria-labelledby="cta-heading">
        <div className="insights-container">
          <div className="panel-chassis cta-panel-wrap">
            <span className="screw-corner tl" aria-hidden="true" />
            <span className="screw-corner tr" aria-hidden="true" />
            <span className="screw-corner bl" aria-hidden="true" />
            <span className="screw-corner br" aria-hidden="true" />
            <div>
              <span className="chip">Fleet Deployment Desk // Ready</span>
              <h2 id="cta-heading">Ready to Deploy Intelligence?</h2>
              <p>See how RIA&apos;s AI agents can transform distributor conversations, collections and operational intelligence.</p>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              <Link className="btn-action btn-primary-glow" href="/">
                <span>Explore RIA</span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
              <Link className="btn-action btn-ghost-dark" href="/demo">
                <span>Book a Demo</span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <Footer />
    </main>
  );
}
