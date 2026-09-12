'use client';

import React, { useRef, useEffect } from 'react';
import { Headphones, Activity } from 'lucide-react';

interface CapabilitiesSectionProps {
  isMuted: boolean;
  isActive?: boolean;
}

export default function CapabilitiesSection({ isMuted, isActive = false }: CapabilitiesSectionProps) {
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

  return (
    <section id="section-1" className="page-section">
      {/* 2nd Video Background */}
      <div className="video-bg-layer">
        <video
          ref={videoRef}
          src="/videos/2nd-video.mp4"
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
      </div>

      <div className="section-content">
        <div
          style={{
            maxWidth: '920px',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.75rem',
          }}
        >
          {/* Main Title */}
          <h2
            style={{
              fontSize: 'clamp(1.9rem, 6vw, 4.2rem)',
              fontWeight: 800,
              lineHeight: 1.12,
              letterSpacing: '-0.02em',
              color: '#FFFFFF',
            }}
          >
            Real-Time Humanoid Voice & Multimodal Interaction
          </h2>

          {/* Description */}
          <p
            style={{
              fontSize: 'clamp(0.98rem, 1.6vw, 1.3rem)',
              color: 'var(--white-dim)',
              lineHeight: 1.65,
              maxWidth: '780px',
              fontWeight: 400,
            }}
          >
            Transform high-volume call centers and support desks into tactile, high-concurrency autonomous hubs. Our voice models actively interpret intent, tone, and sentiment to deliver instant, empathetic solutions.
          </p>

          {/* Feature List */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
              marginTop: '0.75rem',
              maxWidth: '780px',
            }}
          >
            {/* Feature 1 */}
            <div
              className="skeuo-inset"
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1.25rem',
                padding: '1.35rem 1.5rem',
              }}
            >
              <div
                style={{
                  padding: '0.65rem',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, #FFFFFF 0%, #CCCCCC 60%, #555555 100%)',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.8), inset 0 1px 1px #FFFFFF',
                  color: '#000000',
                  marginTop: '0.15rem',
                  flexShrink: 0,
                }}
              >
                <Headphones size={20} />
              </div>
              <div>
                <h4 style={{ color: '#FFFFFF', fontSize: '1.15rem', fontWeight: 700 }}>
                  Zero-Latency Natural Voice Dialect
                </h4>
                <p style={{ color: 'var(--white-muted)', fontSize: '0.92rem', marginTop: '0.35rem', lineHeight: 1.5 }}>
                  Seamless interruption handling, breath modeling, and natural conversational cadence.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div
              className="skeuo-inset"
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1.25rem',
                padding: '1.35rem 1.5rem',
              }}
            >
              <div
                style={{
                  padding: '0.65rem',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, #2A2A30 0%, #121215 100%)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.8), inset 0 1px 1px rgba(255, 255, 255, 0.2)',
                  color: '#FFFFFF',
                  marginTop: '0.15rem',
                  flexShrink: 0,
                }}
              >
                <Activity size={20} />
              </div>
              <div>
                <h4 style={{ color: '#FFFFFF', fontSize: '1.15rem', fontWeight: 700 }}>
                  Instant Omnichannel Context
                </h4>
                <p style={{ color: 'var(--white-muted)', fontSize: '0.92rem', marginTop: '0.35rem', lineHeight: 1.5 }}>
                  Real-time CRM retrieval, customer history tracking, and adaptive knowledge base
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
