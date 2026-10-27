'use client';

import React, { useState } from 'react';

const PHONE_NUMBER = '918106668552';
const MESSAGE = `Hello Team Ria,
we are looking for an voice Agent demo.`;

const WHATSAPP_URL = `https://api.whatsapp.com/send?phone=${PHONE_NUMBER}&text=${encodeURIComponent(MESSAGE)}`;

export default function WhatsAppWidget() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <style jsx global>{`
        .wa-floating-btn {
          position: fixed;
          bottom: 26px;
          right: 26px;
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: linear-gradient(145deg, #25D366 0%, #128C7E 100%);
          color: #FFFFFF;
          border: 1.5px solid rgba(255, 255, 255, 0.45);
          box-shadow: 
            0 10px 28px rgba(37, 211, 102, 0.45),
            0 2px 8px rgba(0, 0, 0, 0.85),
            inset 0 1px 2px rgba(255, 255, 255, 0.7);
          cursor: pointer;
          text-decoration: none;
          transition: all 0.28s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .wa-floating-btn:hover {
          transform: scale(1.08) translateY(-3px);
          box-shadow: 
            0 14px 36px rgba(37, 211, 102, 0.65),
            0 4px 12px rgba(0, 0, 0, 0.9),
            inset 0 1px 2px rgba(255, 255, 255, 0.9);
          border-color: #FFFFFF;
        }

        .wa-floating-btn:active {
          transform: scale(0.96) translateY(0);
        }

        /* Pulsing ambient ring */
        .wa-ambient-ring {
          position: absolute;
          inset: -6px;
          border-radius: 50%;
          border: 2px solid rgba(37, 211, 102, 0.55);
          pointer-events: none;
          animation: waPulseRing 2.4s cubic-bezier(0.25, 0.8, 0.25, 1) infinite;
        }

        @keyframes waPulseRing {
          0% {
            transform: scale(0.92);
            opacity: 0.85;
          }
          70% {
            transform: scale(1.35);
            opacity: 0;
          }
          100% {
            transform: scale(1.4);
            opacity: 0;
          }
        }

        /* Online indicator dot */
        .wa-status-dot {
          position: absolute;
          top: 2px;
          right: 2px;
          width: 13px;
          height: 13px;
          border-radius: 50%;
          background: #FFFFFF;
          border: 2.5px solid #128C7E;
          box-shadow: 0 0 8px rgba(255, 255, 255, 0.9);
        }

        /* Tooltip callout banner */
        .wa-tooltip-banner {
          position: absolute;
          right: calc(100% + 14px);
          bottom: 50%;
          transform: translateY(50%);
          background: linear-gradient(145deg, rgba(22, 22, 26, 0.95) 0%, rgba(10, 10, 12, 0.98) 100%);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 12px;
          padding: 0.6rem 0.95rem;
          color: #FFFFFF;
          font-family: var(--font-display, 'Outfit', sans-serif);
          font-size: 0.82rem;
          font-weight: 600;
          white-space: nowrap;
          pointer-events: none;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.8), inset 0 1px 1px rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          display: flex;
          align-items: center;
          gap: 0.5rem;
          animation: waTooltipFade 0.2s ease forwards;
        }

        .wa-tooltip-banner::after {
          content: '';
          position: absolute;
          right: -6px;
          top: 50%;
          transform: translateY(-50%) rotate(45deg);
          width: 10px;
          height: 10px;
          background: #141418;
          border-right: 1px solid rgba(255, 255, 255, 0.2);
          border-top: 1px solid rgba(255, 255, 255, 0.2);
        }

        @keyframes waTooltipFade {
          from {
            opacity: 0;
            transform: translateY(50%) translateX(6px);
          }
          to {
            opacity: 1;
            transform: translateY(50%) translateX(0);
          }
        }

        @media (max-width: 768px) {
          .wa-floating-btn {
            bottom: max(20px, env(safe-area-inset-bottom));
            right: 18px;
            width: 54px;
            height: 54px;
          }
          .wa-tooltip-banner {
            display: none;
          }
        }
      `}</style>

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="wa-floating-btn"
        aria-label="Chat with RIA team on WhatsApp for a voice agent demo"
        title="Chat on WhatsApp (+91 8106668552)"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span className="wa-ambient-ring" aria-hidden="true" />
        <span className="wa-status-dot" aria-hidden="true" />

        {/* WhatsApp Icon */}
        <svg
          viewBox="0 0 24 24"
          width="32"
          height="32"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 20.15C10.58 20.15 9.14 19.76 7.89 19.02L7.6 18.85L4.48 19.67L5.31 16.63L5.12 16.33C4.3 15.04 3.86 13.5 3.86 11.91C3.86 7.4 7.54 3.73 12.05 3.73C14.24 3.73 16.3 4.58 17.84 6.13C19.39 7.68 20.24 9.73 20.24 11.92C20.23 16.43 16.56 20.15 12.05 20.15ZM16.54 14.33C16.29 14.2 15.08 13.61 14.86 13.53C14.63 13.44 14.47 13.4 14.31 13.65C14.14 13.9 13.67 14.47 13.52 14.64C13.38 14.8 13.23 14.82 12.98 14.7C12.74 14.57 11.95 14.31 11.02 13.48C10.29 12.83 9.8 12.03 9.65 11.78C9.51 11.53 9.64 11.4 9.76 11.28C9.87 11.17 10.01 11 10.13 10.86C10.26 10.72 10.3 10.61 10.38 10.45C10.46 10.28 10.42 10.14 10.36 10.02C10.3 9.9 9.8 8.68 9.59 8.18C9.39 7.69 9.18 7.76 9.03 7.75C8.88 7.74 8.72 7.74 8.55 7.74C8.39 7.74 8.12 7.8 7.89 8.05C7.66 8.3 7.02 8.9 7.02 10.12C7.02 11.34 7.91 12.52 8.03 12.68C8.16 12.85 9.77 15.33 12.24 16.39C12.83 16.64 13.28 16.79 13.64 16.91C14.23 17.09 14.76 17.07 15.19 17C15.67 16.93 16.67 16.4 16.88 15.82C17.08 15.25 17.08 14.76 17.02 14.65C16.96 14.55 16.79 14.46 16.54 14.33Z" />
        </svg>

        {/* Hover Tooltip */}
        {isHovered && (
          <div className="wa-tooltip-banner" role="tooltip">
            <span style={{ color: '#25D366' }}>●</span>
            <span>Request Voice Agent Demo</span>
          </div>
        )}
      </a>
    </>
  );
}
