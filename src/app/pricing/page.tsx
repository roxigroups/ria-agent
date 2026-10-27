'use client';

import React, { useState, useEffect, useMemo, useRef } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  ShieldCheck,
  AlertCircle,
  HelpCircle,
  BarChart3,
  PhoneCall,
  CalendarCheck,
  CalendarX,
  SlidersHorizontal,
  Send,
  Clock,
  Activity,
  FileText,
  Users,
  Database,
  Store,
  History,
  BrainCircuit,
  Target,
  PhoneForwarded,
} from 'lucide-react';
import HeaderNav from '@/components/HeaderNav';
import ParticleCanvas from '@/components/ParticleCanvas';
import Footer from '@/components/Footer';
import './pricing.css';

const PLATFORM_FEE = 4999;
const REGULAR_PRICE = 7999;
const RATE_PER_MIN = 3;
const WORKING_DAYS = 24;
const MAX_CAPACITY = 200;

const WA_BASE = 'https://api.whatsapp.com/send?phone=918106668552&text=';
const START_MSG =
  'Hi RIA team, I want to start RIA Collection Intelligence on the ₹4,999/month launch offer (AI calling at ₹3/minute). Please share the next steps.';
const VOLUME_MSG =
  'Hi RIA team, I need more than 200 AI calling minutes per working day. Please share higher-volume plan details for RIA Collection Intelligence.';

const FEATURES = [
  {
    icon: BarChart3,
    title: 'Collection Dashboard',
    desc: 'Track outstanding, due and overdue amounts with real-time distribution analytics.',
  },
  {
    icon: PhoneCall,
    title: 'AI Payment Follow-ups',
    desc: 'Automate empathetic, compliance-governed retailer payment conversations.',
  },
  {
    icon: CalendarCheck,
    title: 'PTP Tracking',
    desc: 'Record, timestamp and automatically monitor promised payment dates (PTP).',
  },
  {
    icon: CalendarX,
    title: 'Broken PTP Detection',
    desc: 'Instantly identify missed payment commitments for prioritized follow-up.',
  },
  {
    icon: SlidersHorizontal,
    title: 'Retailer Priority',
    desc: 'Automatically identify which high-risk retailers require immediate human or AI attention.',
  },
  {
    icon: Send,
    title: 'Collection Campaigns',
    desc: 'Create, launch and govern targeted payment recovery campaigns across retailer clusters.',
  },
  {
    icon: Clock,
    title: 'Follow-up Scheduling',
    desc: 'Automate future follow-up cadences without overburdening your field staff.',
  },
  {
    icon: Activity,
    title: 'Call Intelligence',
    desc: 'Classify call intent, sentiment, reason for delay, and financial dispute signals.',
  },
  {
    icon: FileText,
    title: 'Collection Reports',
    desc: 'Audit trails, agent call transcripts, and executive recovery performance reports.',
  },
  {
    icon: Users,
    title: 'Multi-user Access',
    desc: 'Allow management, credit controllers, and field agents to collaborate with RBAC.',
  },
];

const FAQS = [
  {
    q: 'What does the ₹4,999 subscription include?',
    a: 'The full RIA Collection Intelligence platform, interactive dashboards, PTP tracking, retailer priority engine, campaign manager, multi-user role access, and audit reports.',
  },
  {
    q: 'Is AI calling included in the platform fee?',
    a: 'No. AI calling is billed separately at ₹3/minute based strictly on actual usage, so you never pay for idle time or unused minutes.',
  },
  {
    q: 'How many AI minutes can I use per day?',
    a: 'Up to 200 AI calling minutes per working day under this plan to ensure optimal carrier throughput and quality.',
  },
  {
    q: 'How many minutes is that per month?',
    a: 'Based on 24 average working days per month, the maximum operational capacity under this plan is 4,800 minutes/month.',
  },
  {
    q: 'Do I pay for unused minutes?',
    a: 'No. AI calling is metered and billed strictly on actual minutes consumed. Unused operational capacity carries no charge.',
  },
  {
    q: 'Can I use more than 200 minutes per day?',
    a: 'Yes! For large distributors and enterprise networks requiring greater calling throughput, custom volume plans are available. Contact our fleet deployment desk.',
  },
  {
    q: 'Is ₹4,999 the permanent price?',
    a: '₹4,999/month is our current launch offer (saving ₹3,000/month). The standard platform subscription is ₹7,999/month.',
  },
  {
    q: 'Are these prices inclusive of GST?',
    a: 'No. All prices on this platform are exclusive of standard 18% GST.',
  },
];

const FLOW_STEPS = [
  { idx: '01', name: 'Outstanding Data', icon: Database, isKey: false },
  { idx: '02', name: 'Retailer Behaviour', icon: Store, isKey: false },
  { idx: '03', name: 'Payment History', icon: History, isKey: false },
  { idx: '04', name: 'AI Analysis', icon: BrainCircuit, isKey: true },
  { idx: '05', name: 'Collection Priority', icon: Target, isKey: true },
  { idx: '06', name: 'AI Follow-up', icon: PhoneForwarded, isKey: true },
];

export default function PricingPage() {
  const [dailyMins, setDailyMins] = useState<number>(100);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [showSticky, setShowSticky] = useState<boolean>(false);
  const heroRef = useRef<HTMLDivElement>(null);

  // Synchronized Calculations
  const monthlyMins = useMemo(() => dailyMins * WORKING_DAYS, [dailyMins]);
  const aiUsageCost = useMemo(() => monthlyMins * RATE_PER_MIN, [monthlyMins]);
  const totalCost = useMemo(() => PLATFORM_FEE + aiUsageCost, [aiUsageCost]);

  const inrFormatter = useMemo(() => new Intl.NumberFormat('en-IN'), []);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Math.min(MAX_CAPACITY, Math.max(0, Number(e.target.value)));
    setDailyMins(val);
  };

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    if (isNaN(val)) return;
    setDailyMins(Math.min(MAX_CAPACITY, Math.max(0, val)));
  };

  // Set page title
  useEffect(() => {
    document.title = 'Pricing | RIA Collection Intelligence | RIA ai Agent';
  }, []);

  // Scroll listener for mobile sticky CTA
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      // Show when scrolled past hero
      setShowSticky(rect.bottom < 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="pricing-page-wrapper">
      {/* Background Atmosphere */}
      <div className="pricing-bg-gradient" aria-hidden="true" />
      <ParticleCanvas />

      {/* Global Navigation */}
      <HeaderNav />

      {/* Main Container */}
      <main className="responsive-page-container" style={{ paddingTop: '7.5rem' }}>
        {/* ===================== HERO SECTION ===================== */}
        <section className="pricing-hero" ref={heroRef} aria-labelledby="pricing-title">
          <div className="skeuo-badge" style={{ margin: '0 auto 1.25rem' }}>
            <span className="amber-led" />
            <span>RIA COLLECTION INTELLIGENCE // COMMERCIAL ARCHITECTURE</span>
          </div>

          <h1 id="pricing-title">
            AI-Powered <em>Collection Intelligence</em> for Distributors
          </h1>

          <p>
            Automate payment follow-ups, understand retailer payment behavior, and prioritize your next high-yield collection action with autonomous precision.
          </p>

          <div className="pricing-hero-ctas">
            <a
              href="https://riaaiagent.cc/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-ria"
            >
              <span>Start with RIA</span>
              <ArrowRight size={18} />
            </a>

            <Link href="/contact" className="btn-ghost-ria">
              <span>Book a Demo</span>
            </Link>
          </div>

          <div className="pricing-meta-strip">
            <span className="pricing-status-live">
              PLAN: <b>LIVE</b>
            </span>
            <span>
              PLATFORM: <b>₹4,999/MO</b>
            </span>
            <span>
              AI CALLING: <b>₹3/MIN</b>
            </span>
            <span>
              CAPACITY: <b>200 MIN/WORKING DAY</b>
            </span>
          </div>
        </section>

        {/* ===================== PRICING + CALCULATOR ===================== */}
        <section className="pricing-grid-2col" aria-label="Commercial Plans and Calculator">
          {/* Main Plan Card */}
          <article className="pricing-glass-panel pricing-main-card">
            <div className="pricing-card-header">
              <h2 className="pricing-card-title">RIA COLLECTION INTELLIGENCE</h2>
              <span className="pricing-launch-badge">
                <ShieldCheck size={13} />
                <span>LAUNCH SPECIFICATION</span>
              </span>
            </div>

            <div className="pricing-cost-display">
              <div className="pricing-old-price">
                <span>Regular price </span>₹{inrFormatter.format(REGULAR_PRICE)}/month
              </div>
              <div className="pricing-amount-row">
                <span className="pricing-big-num">₹{inrFormatter.format(PLATFORM_FEE)}</span>
                <span className="pricing-period-unit">/ month</span>
              </div>
              <span className="pricing-save-pill">
                Save ₹{inrFormatter.format(REGULAR_PRICE - PLATFORM_FEE)}/month
              </span>
            </div>

            <div className="pricing-rule-divider" role="presentation" />

            <p className="pricing-metric-label">AI CALLING</p>
            <div className="pricing-amount-row">
              <span className="pricing-metric-val">₹{RATE_PER_MIN}</span>
              <span className="pricing-period-unit">/ minute</span>
            </div>
            <p className="pricing-metric-sub">Billed separately based on actual verified usage</p>

            <div className="pricing-rule-divider" role="presentation" />

            <p className="pricing-metric-label">DAILY AI CALLING CAPACITY</p>
            <div className="pricing-amount-row">
              <span className="pricing-metric-val">{MAX_CAPACITY}</span>
              <span className="pricing-period-unit">minutes / working day</span>
            </div>
            <p className="pricing-metric-sub">Maximum throughput operational capacity per account</p>

            <div className="pricing-chips-row">
              <span className="pricing-chip">{WORKING_DAYS} average working days/month</span>
              <span style={{ color: '#2F7BFF' }}>→</span>
              <span className="pricing-chip pricing-chip-highlight">
                Up to {inrFormatter.format(MAX_CAPACITY * WORKING_DAYS)} minutes/month
              </span>
            </div>

            <div className="pricing-notice-box" role="note">
              <AlertCircle size={20} color="#2F7BFF" style={{ flexShrink: 0, marginTop: '2px' }} />
              <span>
                AI calling is not bundled into the platform subscription. You pay strictly for actual minutes consumed.
              </span>
            </div>

            <a
              href="https://riaaiagent.cc/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-ria btn-block-ria"
            >
              <span>Start Collection Intelligence</span>
              <ArrowRight size={17} />
            </a>

            <p className="pricing-tax-disclaimer">All prices are exclusive of 18% GST.</p>
          </article>

          {/* Interactive Usage Calculator */}
          <aside className="pricing-glass-panel calc-card-container" aria-label="Usage Calculator">
            <div className="skeuo-badge" style={{ alignSelf: 'flex-start', marginBottom: '0.4rem' }}>
              <span className="amber-led" />
              <span>INTERACTIVE COST ESTIMATOR</span>
            </div>

            <h2>Estimate Your Monthly RIA Cost</h2>
            <p className="calc-subtext">
              Adjust the daily calling workload to see your estimated monthly billing in real time.
            </p>

            <div className="calc-control-label">
              <label htmlFor="calc-slider">Average AI calling minutes per working day</label>
              <div className="calc-input-wrapper">
                <input
                  id="calc-num-input"
                  type="number"
                  min={0}
                  max={MAX_CAPACITY}
                  value={dailyMins}
                  onChange={handleNumberChange}
                  className="calc-number-box"
                  aria-label="Calling minutes number input"
                />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: '#737373' }}>
                  min
                </span>
              </div>
            </div>

            <input
              id="calc-slider"
              type="range"
              min={0}
              max={MAX_CAPACITY}
              step={5}
              value={dailyMins}
              onChange={handleSliderChange}
              className="calc-slider-range"
              aria-label="Average AI calling minutes slider"
              style={{
                background: `linear-gradient(90deg, #2F7BFF 0%, #2F7BFF ${(dailyMins / MAX_CAPACITY) * 100}%, rgba(255,255,255,0.12) ${(dailyMins / MAX_CAPACITY) * 100}%)`,
              }}
            />

            <div className="calc-tick-marks" aria-hidden="true">
              <span>0</span>
              <span>50</span>
              <span>100</span>
              <span>150</span>
              <span>200 max</span>
            </div>

            {dailyMins >= MAX_CAPACITY && (
              <div className="calc-cap-warning" role="status" aria-live="polite">
                <AlertCircle size={18} color="#FFD36B" style={{ flexShrink: 0 }} />
                <span>
                  Daily capacity cap reached. Need more volume?{' '}
                  <a
                    href={`${WA_BASE}${encodeURIComponent(VOLUME_MSG)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Contact RIA
                  </a>{' '}
                  for customized enterprise throughput.
                </span>
              </div>
            )}

            <ul className="calc-breakdown-list" aria-live="polite">
              <li>
                <span>
                  Monthly AI minutes
                  <small>
                    {dailyMins} daily min × {WORKING_DAYS} working days
                  </small>
                </span>
                <span>{inrFormatter.format(monthlyMins)} min</span>
              </li>
              <li>
                <span>
                  AI usage cost
                  <small>
                    {inrFormatter.format(monthlyMins)} min × ₹{RATE_PER_MIN}/min
                  </small>
                </span>
                <span>₹{inrFormatter.format(aiUsageCost)}</span>
              </li>
              <li>
                <span>
                  Platform fee (launch offer)
                  <small>standard ₹{inrFormatter.format(REGULAR_PRICE)}</small>
                </span>
                <span>₹{inrFormatter.format(PLATFORM_FEE)}</span>
              </li>
            </ul>

            <div className="calc-total-banner">
              <span className="calc-total-label">ESTIMATED TOTAL</span>
              <span className="calc-total-amount">
                ₹{inrFormatter.format(totalCost)}
                <small>/month</small>
              </span>
            </div>

            <p className="pricing-tax-disclaimer" style={{ textAlign: 'left', marginTop: '1.25rem' }}>
              * Based on {WORKING_DAYS} average operational working days. Actual invoice reflects exact metered minutes. Prices exclusive of 18% GST.
            </p>
          </aside>
        </section>

        {/* ===================== INCLUDED FEATURES ===================== */}
        <section className="features-section-wrap" aria-labelledby="features-title">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <div className="skeuo-badge" style={{ margin: '0 auto 1.25rem' }}>
              <span className="amber-led" />
              <span>PLATFORM SCOPE // ZERO HIDDEN ADD-ONS</span>
            </div>
            <h2
              id="features-title"
              style={{
                fontSize: 'clamp(2rem, 4vw, 3.2rem)',
                fontWeight: 800,
                color: '#FFFFFF',
                letterSpacing: '-0.02em',
                marginBottom: '0.85rem',
              }}
            >
              Everything You Need for Intelligent Collections
            </h2>
            <p style={{ color: 'var(--white-muted)', fontSize: '1.1rem', lineHeight: 1.6 }}>
              Every feature below is fully included in the ₹{inrFormatter.format(PLATFORM_FEE)}/month platform subscription.
            </p>
          </div>

          <div className="features-grid-5col">
            {FEATURES.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <article key={idx} className="feature-item-card">
                  <div className="feature-item-icon">
                    <IconComp size={22} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </article>
              );
            })}
          </div>
        </section>

        {/* ===================== COST EXAMPLES ===================== */}
        <section style={{ marginBottom: '6rem' }} aria-labelledby="examples-title">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <div className="skeuo-badge" style={{ margin: '0 auto 1.25rem' }}>
              <span className="amber-led" />
              <span>TRANSPARENT USAGE EXAMPLES</span>
            </div>
            <h2
              id="examples-title"
              style={{
                fontSize: 'clamp(2rem, 4vw, 3.2rem)',
                fontWeight: 800,
                color: '#FFFFFF',
                letterSpacing: '-0.02em',
                marginBottom: '0.85rem',
              }}
            >
              Pay for What You Actually Use
            </h2>
            <p style={{ color: 'var(--white-muted)', fontSize: '1.1rem', lineHeight: 1.6 }}>
              Launch-offer platform price plus AI calling at ₹3/minute, using 24 average working days.
            </p>
          </div>

          <div className="examples-grid-4col">
            {/* Light Usage */}
            <article className="example-tier-card">
              <div className="example-tier-header">
                <h3 className="example-tier-name">LIGHT USAGE</h3>
              </div>
              <p className="example-daily-mins">
                50 <small>min/day</small>
              </p>
              <p className="example-month-mins">1,200 min/month</p>
              <div className="example-progress-bar">
                <i style={{ width: '25%' }} />
              </div>
              <ul className="example-detail-rows">
                <li>
                  <span>AI usage</span>
                  <span>₹3,600</span>
                </li>
                <li>
                  <span>Platform</span>
                  <span>₹4,999</span>
                </li>
              </ul>
              <div className="example-total-row">
                <span>TOTAL</span>
                <b>
                  ₹8,599<small>/mo</small>
                </b>
              </div>
            </article>

            {/* Standard Usage */}
            <article className="example-tier-card tier-highlight">
              <div className="example-tier-header">
                <h3 className="example-tier-name">STANDARD USAGE</h3>
                <span className="pricing-launch-badge" style={{ fontSize: '0.66rem', padding: '0.25rem 0.6rem' }}>
                  MOST COMMON
                </span>
              </div>
              <p className="example-daily-mins">
                100 <small>min/day</small>
              </p>
              <p className="example-month-mins">2,400 min/month</p>
              <div className="example-progress-bar">
                <i style={{ width: '50%' }} />
              </div>
              <ul className="example-detail-rows">
                <li>
                  <span>AI usage</span>
                  <span>₹7,200</span>
                </li>
                <li>
                  <span>Platform</span>
                  <span>₹4,999</span>
                </li>
              </ul>
              <div className="example-total-row">
                <span>TOTAL</span>
                <b>
                  ₹12,199<small>/mo</small>
                </b>
              </div>
            </article>

            {/* High Usage */}
            <article className="example-tier-card">
              <div className="example-tier-header">
                <h3 className="example-tier-name">HIGH USAGE</h3>
              </div>
              <p className="example-daily-mins">
                150 <small>min/day</small>
              </p>
              <p className="example-month-mins">3,600 min/month</p>
              <div className="example-progress-bar">
                <i style={{ width: '75%' }} />
              </div>
              <ul className="example-detail-rows">
                <li>
                  <span>AI usage</span>
                  <span>₹10,800</span>
                </li>
                <li>
                  <span>Platform</span>
                  <span>₹4,999</span>
                </li>
              </ul>
              <div className="example-total-row">
                <span>TOTAL</span>
                <b>
                  ₹15,799<small>/mo</small>
                </b>
              </div>
            </article>

            {/* Maximum Capacity */}
            <article className="example-tier-card">
              <div className="example-tier-header">
                <h3 className="example-tier-name">MAX CAPACITY</h3>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.68rem',
                    color: '#8DB8FF',
                    border: '1px solid rgba(47,123,255,0.4)',
                    padding: '0.2rem 0.55rem',
                    borderRadius: '9999px',
                  }}
                >
                  CAP
                </span>
              </div>
              <p className="example-daily-mins">
                200 <small>min/day</small>
              </p>
              <p className="example-month-mins">4,800 min/month</p>
              <div className="example-progress-bar">
                <i style={{ width: '100%' }} />
              </div>
              <ul className="example-detail-rows">
                <li>
                  <span>AI usage</span>
                  <span>₹14,400</span>
                </li>
                <li>
                  <span>Platform</span>
                  <span>₹4,999</span>
                </li>
              </ul>
              <div className="example-total-row">
                <span>TOTAL</span>
                <b>
                  ₹19,399<small>/mo</small>
                </b>
              </div>
            </article>
          </div>

          <p className="pricing-tax-disclaimer" style={{ marginTop: '1.5rem' }}>
            Examples reflect the ₹4,999 launch offer. At standard ₹7,999 regular platform pricing, maximum capacity is ₹22,399/month. All amounts exclusive of 18% GST.
          </p>
        </section>

        {/* ===================== BILLING PILLARS ===================== */}
        <section style={{ marginBottom: '6rem' }} aria-labelledby="pillars-title">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <div className="skeuo-badge" style={{ margin: '0 auto 1.25rem' }}>
              <span className="amber-led" />
              <span>BILLING MECHANICS</span>
            </div>
            <h2
              id="pillars-title"
              style={{
                fontSize: 'clamp(2rem, 4vw, 3.2rem)',
                fontWeight: 800,
                color: '#FFFFFF',
                letterSpacing: '-0.02em',
              }}
            >
              Simple. Transparent. Scalable.
            </h2>
          </div>

          <div className="pillars-grid-3col">
            <article className="pillar-card-item">
              <span className="pillar-num">01 // PLATFORM</span>
              <h3>Platform</h3>
              <p>Pay for RIA’s Collection Intelligence software, dashboard, analytics and coordination hub.</p>
              <span className="pillar-tag">₹4,999/month launch offer</span>
            </article>

            <article className="pillar-card-item">
              <span className="pillar-num">02 // AI USAGE</span>
              <h3>AI Usage</h3>
              <p>Pay strictly for the LiveKit WebRTC AI calling minutes you actually consume. Zero waste.</p>
              <span className="pillar-tag">₹3/minute</span>
            </article>

            <article className="pillar-card-item">
              <span className="pillar-num">03 // CAPACITY</span>
              <h3>Capacity</h3>
              <p>Deploy up to 200 AI calling minutes per working day under this plan with guaranteed sub-95ms responsiveness.</p>
              <span className="pillar-tag">200 min/working day</span>
            </article>
          </div>
        </section>

        {/* ===================== DIFFERENTIATION FLOW ===================== */}
        <section className="diff-engine-section" aria-labelledby="diff-title">
          <div className="skeuo-badge" style={{ margin: '0 auto 1.25rem' }}>
            <span className="amber-led" />
            <span>COLLECTION INTELLIGENCE DECISION MATRIX</span>
          </div>

          <h2
            id="diff-title"
            style={{
              fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
              fontWeight: 800,
              color: '#FFFFFF',
              letterSpacing: '-0.02em',
            }}
          >
            RIA Doesn’t Just Call.
          </h2>

          <p className="diff-big-tagline">
            RIA <span>Decides</span> Who to Call.
          </p>

          <div className="diff-flow-grid">
            <div className="diff-flow-line" aria-hidden="true" />
            {FLOW_STEPS.map((step) => {
              const StepIcon = step.icon;
              return (
                <div key={step.idx} className={`diff-flow-step ${step.isKey ? 'flow-key-step' : ''}`}>
                  <div className="diff-flow-node">
                    <StepIcon size={26} />
                  </div>
                  <span className="diff-flow-idx">{step.idx}</span>
                  <span className="diff-flow-name">{step.name}</span>
                </div>
              );
            })}
          </div>

          <p className="diff-explanatory-foot">
            An AI voice caller simply dials a list. <b>RIA Collection Intelligence</b> first ingests your outstanding ledgers, analyzes retailer behaviour and payment history, calculates risk priority, and then coordinates empathetic follow-ups.{' '}
            <b>Every call is a calculated decision, never a blind dial.</b>
          </p>
        </section>

        {/* ===================== FAQ ACCORDION ===================== */}
        <section style={{ marginBottom: '6rem' }} aria-labelledby="faq-title">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <div className="skeuo-badge" style={{ margin: '0 auto 1.25rem' }}>
              <span className="amber-led" />
              <span>KNOWLEDGE BASE // FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h2
              id="faq-title"
              style={{
                fontSize: 'clamp(2rem, 4vw, 3.2rem)',
                fontWeight: 800,
                color: '#FFFFFF',
                letterSpacing: '-0.02em',
              }}
            >
              Frequently Asked Questions
            </h2>
          </div>

          <div className="pricing-faq-container">
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={index} className={`pricing-faq-item ${isOpen ? 'is-open' : ''}`}>
                  <div
                    className="pricing-faq-question"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    role="button"
                    tabIndex={0}
                    aria-expanded={isOpen}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setOpenFaq(isOpen ? null : index);
                      }
                    }}
                  >
                    <span>{faq.q}</span>
                    <span className="pricing-faq-plus" aria-hidden="true">
                      +
                    </span>
                  </div>
                  {isOpen && (
                    <div className="pricing-faq-answer">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* ===================== FINAL CALL TO ACTION ===================== */}
        <section className="pricing-final-card" aria-labelledby="final-title">
          <div className="skeuo-badge" style={{ margin: '0 auto 1rem' }}>
            <span className="amber-led" />
            <span>FLEET DEPLOYMENT DESK // ONBOARDING DESK</span>
          </div>

          <h2 id="final-title">Ready to Automate Your Collections?</h2>
          <p>Deploy RIA Collection Intelligence across your retailer network today.</p>

          <div className="pricing-final-pills">
            <span className="pricing-final-pill pricing-final-pill-hl">
              ₹4,999/month Launch Offer
            </span>
            <span className="pricing-final-pill">+ ₹3/min AI Calling</span>
            <span className="pricing-final-pill">Up to 200 AI minutes/working day</span>
          </div>

          <div className="pricing-hero-ctas">
            <a
              href="https://riaaiagent.cc/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-ria"
            >
              <span>Start with RIA</span>
              <ArrowRight size={18} />
            </a>
            <Link href="/contact" className="btn-ghost-ria">
              <span>Book a Demo</span>
            </Link>
          </div>

          <p className="pricing-tax-disclaimer" style={{ marginTop: '1.75rem' }}>
            Prices exclusive of 18% GST · Direct WhatsApp Desk: +91 8106668552
          </p>
        </section>
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Mobile Sticky Action Bar */}
      <div className={`pricing-mobile-sticky ${showSticky ? 'is-active' : ''}`} aria-hidden={!showSticky}>
        <div className="pricing-sticky-inner">
          <div className="pricing-sticky-cost">
            <b>₹{inrFormatter.format(PLATFORM_FEE)}</b>
            <span style={{ color: 'var(--white-muted)' }}>/mo</span>
            <small>+ ₹3/min AI calling · excl. GST</small>
          </div>
          <a
            href="https://riaaiagent.cc/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary-ria"
            style={{ minHeight: '44px', padding: '0 1.25rem', fontSize: '0.85rem' }}
          >
            <span>Start with RIA</span>
          </a>
        </div>
      </div>
    </div>
  );
}
