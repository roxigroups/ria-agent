'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, ShieldCheck, Sparkles, MessageCircle, Phone, Globe } from 'lucide-react';

export default function Footer() {
  const socialSpaces = [
    {
      id: 'linkedin',
      category: 'ENTERPRISE NETWORK',
      title: 'LinkedIn',
      handle: 'Roxy Distributors LLP',
      description: 'Official corporate channel, enterprise fleet partnerships, and executive announcements.',
      url: 'https://www.linkedin.com/company/roxy-distributors-llp/',
      tag: 'B2B NETWORK',
      badgeColor: '#0077B5',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      ),
    },
    {
      id: 'instagram',
      category: 'MEDIA & VISUAL FEED',
      title: 'Instagram',
      handle: '@riaaiagent_roxy',
      description: 'Humanoid agent showcases, interactive voice reels, behind-the-scenes engineering, & demos.',
      url: 'https://www.instagram.com/riaaiagent_roxy?stkn=MXJvZzh1cGF2NzVmcQ==',
      tag: 'MEDIA HUB',
      badgeColor: '#E4405F',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      ),
    },
    {
      id: 'twitter',
      category: 'REAL-TIME TELEMETRY',
      title: 'X (Twitter)',
      handle: '@riaaiagent',
      description: 'Instant latency benchmarks, algorithmic model dispatch logs, and live ecosystem threads.',
      url: 'https://x.com/riaaiagent',
      tag: 'LIVE DISPATCH',
      badgeColor: '#FFFFFF',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
  ];

  return (
    <footer
      style={{
        width: '100%',
        marginTop: '3.5rem',
        paddingTop: '2.5rem',
        borderTop: '1px solid rgba(255, 255, 255, 0.12)',
        position: 'relative',
        zIndex: 20,
      }}
    >
      {/* Top Header Label */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
          marginBottom: '1.75rem',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <span className="amber-led" />
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.82rem',
              fontWeight: 700,
              letterSpacing: '0.12em',
              color: 'var(--white-muted)',
              textTransform: 'uppercase',
            }}
          >
            OFFICIAL PLATFORMS &amp; SOCIAL CHANNELS
          </span>
        </div>

        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.78rem',
            color: 'var(--white-subtle)',
          }}
        >
          <ShieldCheck size={14} color="#FFFFFF" />
          <span>VERIFIED ROXY / RIA PROFILES</span>
        </div>
      </div>

      {/* 3 Dedicated Social Spaces / Sections */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.25rem',
          marginBottom: '2.5rem',
        }}
      >
        {socialSpaces.map((space) => (
          <a
            key={space.id}
            href={space.url}
            target="_blank"
            rel="noopener noreferrer"
            className="skeuo-inset"
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: '1.4rem',
              textDecoration: 'none',
              color: '#FFFFFF',
              position: 'relative',
              borderRadius: '16px',
              border: '1px solid rgba(255, 255, 255, 0.14)',
              transition: 'all 0.22s cubic-bezier(0.16, 1, 0.3, 1)',
              cursor: 'pointer',
              overflow: 'hidden',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.45)';
              e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.8), 0 0 20px rgba(255, 255, 255, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.14)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            {/* Top Bar inside Card */}
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '1rem',
                }}
              >
                {/* Platform Icon with Circular Glow Box */}
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(255, 255, 255, 0.07)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FFFFFF',
                    boxShadow: 'inset 0 1px 2px rgba(255, 255, 255, 0.2)',
                  }}
                >
                  {space.icon}
                </div>

                {/* Section Badge */}
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    padding: '0.3rem 0.65rem',
                    borderRadius: '6px',
                    backgroundColor: 'rgba(255, 255, 255, 0.06)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    color: 'var(--white-dim)',
                    textTransform: 'uppercase',
                  }}
                >
                  {space.tag}
                </span>
              </div>

              {/* Title & Space Name */}
              <div style={{ marginBottom: '0.5rem' }}>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: 'var(--white-muted)',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    marginBottom: '0.2rem',
                  }}
                >
                  {space.category}
                </div>
                <h3
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 800,
                    color: '#FFFFFF',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {space.title}
                </h3>
              </div>

              {/* Handle / Account Info */}
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  color: '#FFFFFF',
                  marginBottom: '0.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                }}
              >
                <span>{space.handle}</span>
              </div>

              {/* Description */}
              <p
                style={{
                  fontSize: '0.84rem',
                  color: 'var(--white-muted)',
                  lineHeight: 1.5,
                  marginBottom: '1.25rem',
                }}
              >
                {space.description}
              </p>
            </div>

            {/* Bottom Action Button */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingTop: '0.85rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.82rem',
                fontWeight: 700,
                color: '#FFFFFF',
              }}
            >
              <span>OPEN PROFILE</span>
              <span
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.25rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.12)',
                  padding: '0.35rem 0.7rem',
                  borderRadius: '8px',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                }}
              >
                VISIT <ArrowUpRight size={14} />
              </span>
            </div>
          </a>
        ))}
      </div>

      {/* Bottom Legal & Telemetry Strip */}
      <div
        className="skeuo-chassis"
        style={{
          padding: '1.25rem 1.6rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1.25rem',
          borderRadius: '16px',
        }}
      >
        {/* Left: RIA / Roxy Distributors Copyright */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.82rem',
              fontWeight: 700,
              color: '#FFFFFF',
              letterSpacing: '0.04em',
            }}
          >
            © {new Date().getFullYear()} RIA INTELLIGENCE INC. • ROXY DISTRIBUTORS LLP
          </div>
          <div
            style={{
              fontSize: '0.75rem',
              color: 'var(--white-muted)',
              fontFamily: 'var(--font-mono)',
            }}
          >
            ALL RIGHTS RESERVED • ENTERPRISE AUTONOMOUS AGENT PLATFORM
          </div>
        </div>

        {/* Center: Live Telemetry Indicator */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.78rem',
            color: 'var(--white-dim)',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            padding: '0.45rem 0.9rem',
            borderRadius: '9999px',
            border: '1px solid rgba(255, 255, 255, 0.15)',
          }}
        >
          <span className="amber-led" />
          <span>CLUSTER: ALPHA-01 // LATENCY &lt;95MS // ONLINE</span>
        </div>

        {/* Right: Direct Desk & WhatsApp */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.82rem',
          }}
        >
          <a
            href="https://api.whatsapp.com/send?phone=918106668552"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              color: '#FFFFFF',
              textDecoration: 'none',
              fontWeight: 600,
            }}
          >
            <Phone size={14} color="#FFFFFF" />
            <span>+91 8106668552</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
