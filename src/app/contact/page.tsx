'use client';

import React, { useState } from 'react';
import { MessageSquare, Phone, Mail, Building, User, CheckCircle, ArrowRight } from 'lucide-react';
import HeaderNav from '@/components/HeaderNav';
import ParticleCanvas from '@/components/ParticleCanvas';
import TiltCard from '@/components/TiltCard';

export default function ContactPage() {
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
      alert('Please provide your name and phone number.');
      return;
    }

    setSubmitted(true);

    // Format structured message for WhatsApp delivery to +918106668552
    const message = `*New Inquiry - RIA Intelligence Autonomous Fleet*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Gmail/Email:* ${formData.gmail || 'Not specified'}\n` +
      `*Company Name:* ${formData.company || 'Not specified'}\n\n` +
      `I would like to discuss deploying Autonomous AI Collection Agents.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=918106668552&text=${encodedMessage}`;

    // Open WhatsApp directly to +918106668552
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 600);
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
      {/* 3D Particle Canvas Overlay */}
      <ParticleCanvas />

      {/* Unified Top Navigation */}
      <HeaderNav />

      {/* Content Container */}
      <div
        className="responsive-page-container"
        style={{
          maxWidth: '920px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2.5rem',
        }}
      >
        {/* Header Title & Subtitle */}
        <div style={{ textAlign: 'center', maxWidth: '750px' }}>
          <div className="skeuo-badge" style={{ margin: '0 auto 1.25rem' }}>
            <span className="amber-led" />
            <span>CONTACT US // FLEET DEPLOYMENT DESK</span>
          </div>

          <h1
            style={{
              fontSize: 'clamp(1.85rem, 5.5vw, 4rem)',
              fontWeight: 800,
              lineHeight: 1.12,
              letterSpacing: '-0.02em',
              color: '#FFFFFF',
              marginBottom: '1rem',
            }}
          >
            Get In Touch & Deploy Your Fleet
          </h1>

          <p
            style={{
              fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)',
              color: 'var(--white-dim)',
              lineHeight: 1.6,
            }}
          >
            Fill out your details below. Your information will route directly to our fleet operations desk at{' '}
            <strong style={{ color: '#FFFFFF' }}>+91 8106668552</strong> via WhatsApp.
          </p>
        </div>

        {/* White Index Box */}
        <div style={{ width: '100%', maxWidth: '780px' }}>
          <TiltCard
            maxTilt={6}
            scale={1.01}
            glareOpacity={0.15}
            style={{ width: '100%' }}
          >
            {/* Index Tab on Top of Box */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.45rem 1.2rem',
                backgroundColor: '#FFFFFF',
                color: '#000000',
                fontFamily: 'var(--font-mono)',
                fontSize: 'clamp(0.7rem, 1.8vw, 0.78rem)',
                fontWeight: 800,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                borderTopLeftRadius: '12px',
                borderTopRightRadius: '12px',
                borderBottom: 'none',
                boxShadow: '0 -4px 12px rgba(255, 255, 255, 0.1)',
                marginLeft: 'clamp(0.5rem, 2vw, 1.5rem)',
              }}
            >
              <span>INDEX NO. 412 // DISPATCH INQUIRY</span>
            </div>

            {/* The Main White Index Box */}
            <div
              style={{
                backgroundColor: '#FFFFFF',
                color: '#111111',
                borderRadius: '20px',
                borderTopLeftRadius: '0px',
                padding: 'clamp(1.25rem, 4vw, 2.5rem)',
                boxShadow: '0 25px 60px rgba(0, 0, 0, 0.95), 0 0 30px rgba(255, 255, 255, 0.12)',
                border: '1px solid #E5E5E5',
                position: 'relative',
              }}
            >
              {/* Box Top Header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '0.75rem',
                  borderBottom: '2px dashed #D4D4D4',
                  paddingBottom: '1.25rem',
                  marginBottom: '2rem',
                }}
              >
                <div>
                  <h3
                    style={{
                      fontSize: '1.35rem',
                      fontWeight: 800,
                      color: '#000000',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    Enterprise Client Dispatch Form
                  </h3>
                  <p
                    style={{
                      fontSize: '0.85rem',
                      color: '#666666',
                      marginTop: '0.2rem',
                      fontFamily: 'var(--font-mono)',
                    }}
                  >
                    DIRECT ROUTING TO: +91 8106668552
                  </p>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    padding: '0.35rem 0.85rem',
                    borderRadius: '9999px',
                    backgroundColor: '#F0F0F0',
                    border: '1px solid #D4D4D4',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: '#000000',
                  }}
                >
                  <span
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      backgroundColor: '#27c93f',
                      boxShadow: '0 0 6px #27c93f',
                    }}
                  />
                  <span>WHATSAPP READY</span>
                </div>
              </div>

              {/* Form Elements */}
              <form onSubmit={handleSubmit}>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))',
                    gap: '1.25rem',
                    marginBottom: '2rem',
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
                        fontSize: '0.82rem',
                        fontWeight: 700,
                        color: '#222222',
                        marginBottom: '0.5rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.04em',
                      }}
                    >
                      <User size={15} color="#000000" />
                      <span>Full Name *</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.95rem 1.1rem',
                        borderRadius: '10px',
                        backgroundColor: '#F8F9FA',
                        border: '1.5px solid #D8D8D8',
                        color: '#000000',
                        fontSize: '0.95rem',
                        fontFamily: 'inherit',
                        outline: 'none',
                        transition: 'border-color 0.2s ease',
                      }}
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
                        fontSize: '0.82rem',
                        fontWeight: 700,
                        color: '#222222',
                        marginBottom: '0.5rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.04em',
                      }}
                    >
                      <Phone size={15} color="#000000" />
                      <span>Phone Number *</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 / International number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.95rem 1.1rem',
                        borderRadius: '10px',
                        backgroundColor: '#F8F9FA',
                        border: '1.5px solid #D8D8D8',
                        color: '#000000',
                        fontSize: '0.95rem',
                        fontFamily: 'inherit',
                        outline: 'none',
                        transition: 'border-color 0.2s ease',
                      }}
                    />
                  </div>

                  {/* Field 3: Gmail */}
                  <div>
                    <label
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.45rem',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.82rem',
                        fontWeight: 700,
                        color: '#222222',
                        marginBottom: '0.5rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.04em',
                      }}
                    >
                      <Mail size={15} color="#000000" />
                      <span>Gmail / Email Address</span>
                    </label>
                    <input
                      type="email"
                      placeholder="yourname@gmail.com"
                      value={formData.gmail}
                      onChange={(e) => setFormData({ ...formData, gmail: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.95rem 1.1rem',
                        borderRadius: '10px',
                        backgroundColor: '#F8F9FA',
                        border: '1.5px solid #D8D8D8',
                        color: '#000000',
                        fontSize: '0.95rem',
                        fontFamily: 'inherit',
                        outline: 'none',
                        transition: 'border-color 0.2s ease',
                      }}
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
                        fontSize: '0.82rem',
                        fontWeight: 700,
                        color: '#222222',
                        marginBottom: '0.5rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.04em',
                      }}
                    >
                      <Building size={15} color="#000000" />
                      <span>Company Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Acme Enterprises"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.95rem 1.1rem',
                        borderRadius: '10px',
                        backgroundColor: '#F8F9FA',
                        border: '1.5px solid #D8D8D8',
                        color: '#000000',
                        fontSize: '0.95rem',
                        fontFamily: 'inherit',
                        outline: 'none',
                        transition: 'border-color 0.2s ease',
                      }}
                    />
                  </div>
                </div>

                {/* Submission Confirmation Banner */}
                {submitted && (
                  <div
                    style={{
                      marginBottom: '1.5rem',
                      padding: '1rem 1.35rem',
                      backgroundColor: '#E8F5E9',
                      border: '1.5px solid #4CAF50',
                      borderRadius: '10px',
                      color: '#1B5E20',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.88rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      fontWeight: 600,
                    }}
                  >
                    <CheckCircle size={18} color="#4CAF50" />
                    <span>Inquiry logged! Opening direct WhatsApp chat with +91 8106668552...</span>
                  </div>
                )}

                {/* Submit Action: Tactile Solid Black Button inside the White Index Box */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem',
                    paddingTop: '0.5rem',
                    borderTop: '1px solid #EEEEEE',
                  }}
                >
                  <div style={{ color: '#666666', fontSize: '0.85rem' }}>
                    Instant dispatch to <strong>+91 8106668552</strong>
                  </div>

                  <button
                    type="submit"
                    className="responsive-btn-full"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.75rem',
                      padding: '1rem 2.25rem',
                      backgroundColor: '#000000',
                      color: '#FFFFFF',
                      borderRadius: '12px',
                      border: '1px solid #000000',
                      fontWeight: 800,
                      fontSize: '0.95rem',
                      letterSpacing: '0.04em',
                      cursor: 'pointer',
                      boxShadow: '0 6px 0 #333333, 0 12px 20px rgba(0, 0, 0, 0.25)',
                      transition: 'all 0.12s ease',
                    }}
                  >
                    <MessageSquare size={18} color="#FFFFFF" />
                    <span>Submit &amp; Chat on WhatsApp</span>
                  </button>
                </div>
              </form>
            </div>
          </TiltCard>
        </div>

        {/* Footer */}
        <footer
          style={{
            textAlign: 'center',
            color: 'var(--white-subtle)',
            fontSize: '0.82rem',
            fontFamily: 'var(--font-mono)',
            paddingTop: '1rem',
          }}
        >
          © {new Date().getFullYear()} RIA INTELLIGENCE INC. ALL RIGHTS RESERVED.
        </footer>
      </div>
    </main>
  );
}
