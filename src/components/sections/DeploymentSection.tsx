'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Send, CheckCircle, Phone, Mail, Building, User, MessageSquare } from 'lucide-react';
import TiltCard from '../TiltCard';

interface DeploymentSectionProps {
  isMuted: boolean;
  isActive?: boolean;
}

export default function DeploymentSection({ isMuted, isActive = false }: DeploymentSectionProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = isMuted;
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isActive) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          video.muted = true;
          video.play().catch(() => {});
        });
      }
    }
  }, [isActive]);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    gmail: '',
    company: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.phone) {
      alert('Please enter your name and phone number.');
      return;
    }

    setSubmitted(true);

    // Format message for WhatsApp delivery to +918106668552
    const message = `*New Inquiry - RIA Intelligence Autonomous Fleet*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Gmail/Email:* ${formData.gmail || 'Not provided'}\n` +
      `*Company Name:* ${formData.company || 'Not provided'}\n\n` +
      `I would like to discuss deploying Autonomous AI Collection Agents.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=918106668552&text=${encodedMessage}`;

    // Open WhatsApp directly
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 600);
  };

  return (
    <section id="section-3" className="page-section">
      {/* 4th Video Background */}
      <div className="video-bg-layer">
        <video
          ref={videoRef}
          src="/videos/4th-video.mp4"
          autoPlay
          loop
          muted={isMuted}
          playsInline
          preload="auto"
          controls={false}
          aria-hidden="true"
          onLoadedData={() => {
            if (videoRef.current && isActive) {
              videoRef.current.play().catch(() => {});
            }
          }}
        />
        <div className="video-overlay-tint" />
        <div className="video-overlay-vignette" />
        <div className="video-overlay-grid" />
        <div className="scanline" />
      </div>

      <div className="section-content">
        <div
          style={{
            maxWidth: '840px',
            margin: '0 auto',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem',
            alignItems: 'center',
          }}
        >
          {/* Section Header */}
          <div style={{ textAlign: 'center', maxWidth: '720px' }}>
            <div className="skeuo-badge" style={{ margin: '0 auto 1.25rem' }}>
              <span className="amber-led" />
              <span>CONTACT US // FLEET DEPLOYMENT DESK</span>
            </div>

            <h2
              style={{
                fontSize: 'clamp(1.85rem, 5.5vw, 3.8rem)',
                fontWeight: 800,
                lineHeight: 1.12,
                letterSpacing: '-0.02em',
                color: '#FFFFFF',
                marginBottom: '0.85rem',
              }}
            >
              Get In Touch & Deploy Your Fleet
            </h2>

            <p
              style={{
                fontSize: 'clamp(0.95rem, 1.5vw, 1.08rem)',
                color: 'var(--white-dim)',
                lineHeight: 1.6,
              }}
            >
              Fill out your details below. Your information and chat request will be routed directly to our fleet desk at{' '}
              <strong style={{ color: '#FFFFFF' }}>+91 8106668552</strong>.
            </p>
          </div>

          {/* Skeuomorphic Contact Form Card */}
          <TiltCard
            maxTilt={8}
            scale={1.01}
            glareOpacity={0.2}
            className="skeuo-chassis"
            style={{ width: '100%' }}
          >
            <div
              style={{
                padding: 'clamp(1.25rem, 3.5vw, 2.4rem)',
                borderRadius: '20px',
                background: 'linear-gradient(180deg, #151518 0%, #0a0a0c 100%)',
              }}
            >
              {/* Card Top Screws & Header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '0.75rem',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
                  paddingBottom: '1rem',
                  marginBottom: '1.75rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <div className="skeuo-screw" />
                  <div className="skeuo-screw" />
                  <span
                    style={{
                      marginLeft: '0.25rem',
                      fontFamily: 'var(--font-mono)',
                      fontSize: 'clamp(0.74rem, 1.8vw, 0.85rem)',
                      fontWeight: 700,
                      color: '#FFFFFF',
                      letterSpacing: '0.04em',
                    }}
                  >
                    DISPATCH TERMINAL // ROUTING: +91 8106668552
                  </span>
                </div>

                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: 'var(--white-muted)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                  }}
                >
                  <span className="amber-led" />
                  <span style={{ color: '#FFFFFF' }}>WHATSAPP: ONLINE</span>
                </div>
              </div>

              {/* Form Fields: name, phone, gmail, company name */}
              <form onSubmit={handleSubmit}>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))',
                    gap: '1.25rem',
                    marginBottom: '1.75rem',
                  }}
                >
                  {/* Field 1: Name */}
                  <div>
                    <label
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.45rem',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.8rem',
                        color: 'var(--white-muted)',
                        marginBottom: '0.5rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.06em',
                        fontWeight: 700,
                      }}
                    >
                      <User size={14} />
                      <span>Full Name *</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="skeuo-input-field"
                    />
                  </div>

                  {/* Field 2: Phone */}
                  <div>
                    <label
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.45rem',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.8rem',
                        color: 'var(--white-muted)',
                        marginBottom: '0.5rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.06em',
                        fontWeight: 700,
                      }}
                    >
                      <Phone size={14} />
                      <span>Phone Number *</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 / International number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="skeuo-input-field"
                    />
                  </div>

                  {/* Field 3: Gmail / Email */}
                  <div>
                    <label
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.45rem',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.8rem',
                        color: 'var(--white-muted)',
                        marginBottom: '0.5rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.06em',
                        fontWeight: 700,
                      }}
                    >
                      <Mail size={14} />
                      <span>Gmail / Email Address</span>
                    </label>
                    <input
                      type="email"
                      placeholder="yourname@gmail.com"
                      value={formData.gmail}
                      onChange={(e) => setFormData({ ...formData, gmail: e.target.value })}
                      className="skeuo-input-field"
                    />
                  </div>

                  {/* Field 4: Company Name */}
                  <div>
                    <label
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.45rem',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.8rem',
                        color: 'var(--white-muted)',
                        marginBottom: '0.5rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.06em',
                        fontWeight: 700,
                      }}
                    >
                      <Building size={14} />
                      <span>Company Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Acme Enterprises"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="skeuo-input-field"
                    />
                  </div>
                </div>

                {/* Submission Confirmation Banner */}
                {submitted && (
                  <div
                    className="skeuo-inset"
                    style={{
                      marginBottom: '1.5rem',
                      padding: '1rem 1.35rem',
                      color: '#FFFFFF',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.88rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      fontWeight: 600,
                      border: '1px solid #FFFFFF',
                    }}
                  >
                    <CheckCircle size={18} color="#FFFFFF" />
                    <span>Inquiry prepared! Opening direct WhatsApp chat with +91 8106668552...</span>
                  </div>
                )}

                {/* Submit Action */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem',
                  }}
                >
                  <div style={{ color: 'var(--white-muted)', fontSize: '0.85rem' }}>
                    Instant dispatch to +91 8106668552 via WhatsApp
                  </div>

                  <button
                    type="submit"
                    className="btn-skeuo-primary responsive-btn-full"
                    id="submit-contact-btn"
                  >
                    <MessageSquare size={18} color="#000000" />
                    <span>Submit &amp; Connect to +91 8106668552</span>
                  </button>
                </div>
              </form>

              {/* Bottom Screws */}
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1.25rem' }}>
                <div className="skeuo-screw" />
                <div className="skeuo-screw" />
              </div>
            </div>
          </TiltCard>

          {/* Footer Info */}
          <footer
            style={{
              textAlign: 'center',
              color: 'var(--white-subtle)',
              fontSize: '0.82rem',
              fontFamily: 'var(--font-mono)',
            }}
          >
            © {new Date().getFullYear()} RIA INTELLIGENCE INC. ALL RIGHTS RESERVED.
          </footer>
        </div>
      </div>
    </section>
  );
}
