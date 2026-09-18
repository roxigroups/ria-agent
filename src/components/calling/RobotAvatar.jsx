'use client';

import { useState, useEffect } from 'react';
import './RobotAvatar.css';

/**
 * RobotAvatar Component
 * 
 * Interactive white-themed robot avatar designed with 3D ceramic aesthetic,
 * glossy visor, expressive LED eyes, talking audio waveform mouth, and
 * soundwave ripples reacting to voice assistant states:
 * - 'speaking': Agent is talking -> talking mouth wave animates, head bobs, ripples radiate.
 * - 'listening': Agent is listening to user -> attentive eyes, antenna green, ear rings pulse.
 * - 'thinking': Agent processing -> amber eyes, thinking pulse.
 * - 'idle': Waiting -> gentle floating, eye blinks, calm breathing.
 */
const RobotAvatar = ({ state = 'idle' }) => {
  const [clickReaction, setClickReaction] = useState(false);
  const [clickMessage, setClickMessage] = useState('');

  const messages = [
    '✨ Hi! I am RIA',
    '🎙️ I am listening...',
    '⚡ How can I help with your collection?',
    '🤖 Ready for your command!'
  ];

  const handleRobotClick = () => {
    const randomMsg = messages[Math.floor(Math.random() * messages.length)];
    setClickMessage(randomMsg);
    setClickReaction(true);
  };

  useEffect(() => {
    if (clickReaction) {
      const timer = setTimeout(() => {
        setClickReaction(false);
      }, 2600);
      return () => clearTimeout(timer);
    }
  }, [clickReaction]);

  // Derived state flags
  const isSpeaking = state === 'speaking';
  const isListening = state === 'listening';
  const isThinking = state === 'thinking';

  return (
    <div className={`robot-stage ${state}`}>
      {/* Sound Wave Ripple Effect */}
      <div className="robot-ripple-container" aria-hidden="true">
        <div className="ripple-ring ripple-ring-1" />
        <div className="ripple-ring ripple-ring-2" />
        <div className="ripple-ring ripple-ring-3" />
      </div>

      {/* Interactive Speech Bubble */}
      {clickReaction && (
        <div className="robot-speech-bubble">
          {clickMessage}
        </div>
      )}

      {/* Floating White Robot Figure */}
      <div 
        className="robot-wrapper" 
        onClick={handleRobotClick}
        title="Tap me to interact with RIA!"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleRobotClick(); }}
      >
        <svg
          width="200"
          height="220"
          viewBox="0 0 200 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* White Ceramic Gradients */}
            <linearGradient id="whiteChassis" x1="20" y1="20" x2="180" y2="200" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="60%" stopColor="#F8FAFC" />
              <stop offset="100%" stopColor="#E2E8F0" />
            </linearGradient>

            <linearGradient id="whiteHead" x1="40" y1="25" x2="160" y2="130" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="70%" stopColor="#F1F5F9" />
              <stop offset="100%" stopColor="#CBD5E1" />
            </linearGradient>

            <linearGradient id="visorGlass" x1="50" y1="55" x2="150" y2="105" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#0F172A" />
              <stop offset="70%" stopColor="#1E293B" />
              <stop offset="100%" stopColor="#0B0F19" />
            </linearGradient>

            <linearGradient id="visorGlint" x1="50" y1="55" x2="150" y2="65" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.0" />
            </linearGradient>

            {/* Glowing Eye Colors */}
            <linearGradient id="eyeCyan" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="100%" stopColor="#0284C7" />
            </linearGradient>

            <linearGradient id="eyeViolet" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#C084FC" />
              <stop offset="100%" stopColor="#7C3AED" />
            </linearGradient>

            <linearGradient id="earPlate" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#E2E8F0" />
            </linearGradient>

            {/* Drop Shadows */}
            <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* === ANTENNA === */}
          <g className="robot-antenna">
            {/* Antenna Stem */}
            <path
              d="M100 24 L100 42"
              stroke="#CBD5E1"
              strokeWidth="4"
              strokeLinecap="round"
            />
            {/* Base collar */}
            <ellipse cx="100" cy="42" rx="7" ry="2.5" fill="#94A3B8" />
            {/* Glowing Orb */}
            <circle
              className="antenna-orb"
              cx="100"
              cy="20"
              r="8"
              fill={isSpeaking ? '#8B5CF6' : isListening ? '#10B981' : isThinking ? '#F59E0B' : '#06B6D4'}
              filter="url(#softGlow)"
            />
            <circle cx="98" cy="18" r="2.5" fill="#FFFFFF" opacity="0.8" />
          </g>

          {/* === TORSO & ARMS (BODY) === */}
          <g className="robot-body">
            {/* Left Arm */}
            <rect
              x="38"
              y="142"
              width="18"
              height="38"
              rx="9"
              fill="url(#whiteChassis)"
              stroke="#E2E8F0"
              strokeWidth="1.5"
              transform="rotate(12 47 161)"
            />
            {/* Right Arm */}
            <rect
              x="144"
              y="142"
              width="18"
              height="38"
              rx="9"
              fill="url(#whiteChassis)"
              stroke="#E2E8F0"
              strokeWidth="1.5"
              transform="rotate(-12 153 161)"
            />

            {/* Main Body Torso */}
            <rect
              x="58"
              y="134"
              width="84"
              height="60"
              rx="24"
              fill="url(#whiteChassis)"
              stroke="#E2E8F0"
              strokeWidth="2"
            />

            {/* Glossy Body Highlight */}
            <ellipse cx="100" cy="142" rx="28" ry="4" fill="#FFFFFF" opacity="0.9" />

            {/* Chest Core Reactor Ring */}
            <circle cx="100" cy="164" r="14" fill="#F1F5F9" stroke="#E2E8F0" strokeWidth="1.5" />
            <circle
              className="chest-core"
              cx="100"
              cy="164"
              r="8"
              fill={isSpeaking ? '#6366F1' : isListening ? '#10B981' : '#0EA5E9'}
              opacity="0.85"
            />
            <circle cx="100" cy="164" r="3.5" fill="#FFFFFF" />
          </g>

          {/* === HEAD & VISOR === */}
          <g className="robot-head">
            {/* Left Ear / Headphone Cup */}
            <g className="ear-cup left">
              <rect x="28" y="66" width="16" height="34" rx="8" fill="url(#earPlate)" stroke="#CBD5E1" strokeWidth="1.5" />
              <circle
                className="ear-ring"
                cx="36"
                cy="83"
                r="5"
                fill="none"
                stroke={isSpeaking ? '#8B5CF6' : isListening ? '#10B981' : '#06B6D4'}
                strokeWidth="2"
              />
            </g>

            {/* Right Ear / Headphone Cup */}
            <g className="ear-cup right">
              <rect x="156" y="66" width="16" height="34" rx="8" fill="url(#earPlate)" stroke="#CBD5E1" strokeWidth="1.5" />
              <circle
                className="ear-ring"
                cx="164"
                cy="83"
                r="5"
                fill="none"
                stroke={isSpeaking ? '#8B5CF6' : isListening ? '#10B981' : '#06B6D4'}
                strokeWidth="2"
              />
            </g>

            {/* Head Capsule Shape */}
            <rect
              x="42"
              y="38"
              width="116"
              height="90"
              rx="42"
              fill="url(#whiteHead)"
              stroke="#E2E8F0"
              strokeWidth="2"
            />

            {/* Head Top Specular Highlight */}
            <path
              d="M72 44 Q100 40 128 44"
              stroke="#FFFFFF"
              strokeWidth="4"
              strokeLinecap="round"
              opacity="0.9"
            />

            {/* Glossy Black Visor */}
            <rect
              x="52"
              y="52"
              width="96"
              height="62"
              rx="28"
              fill="url(#visorGlass)"
              stroke="#1E293B"
              strokeWidth="1.5"
            />

            {/* Visor Specular Glint */}
            <path
              d="M58 64 Q100 56 142 64"
              stroke="url(#visorGlint)"
              strokeWidth="5"
              strokeLinecap="round"
            />

            {/* === VISOR CONTENT (EYES & TALKING MOUTH) === */}
            {/* Left Eye */}
            <g className="eye-left">
              {isSpeaking ? (
                // Happy curved eye when speaking
                <path
                  d="M70 79 Q80 69 90 79"
                  stroke="#38BDF8"
                  strokeWidth="4"
                  strokeLinecap="round"
                  filter="url(#softGlow)"
                />
              ) : isThinking ? (
                // Thinking scanning circle
                <circle cx="80" cy="76" r="6" fill="#F59E0B" filter="url(#softGlow)" />
              ) : (
                // Normal / Listening round eye
                <ellipse
                  className="eye-pupil"
                  cx="80"
                  cy="76"
                  rx="7"
                  ry={isListening ? 9 : 8}
                  fill="url(#eyeCyan)"
                  filter="url(#softGlow)"
                />
              )}
              {/* Eye Catchlight */}
              {!isSpeaking && !isThinking && (
                <circle cx="78" cy="73" r="2.5" fill="#FFFFFF" />
              )}
            </g>

            {/* Right Eye */}
            <g className="eye-right">
              {isSpeaking ? (
                // Happy curved eye when speaking
                <path
                  d="M110 79 Q120 69 130 79"
                  stroke="#38BDF8"
                  strokeWidth="4"
                  strokeLinecap="round"
                  filter="url(#softGlow)"
                />
              ) : isThinking ? (
                // Thinking scanning circle
                <circle cx="120" cy="76" r="6" fill="#F59E0B" filter="url(#softGlow)" />
              ) : (
                // Normal / Listening round eye
                <ellipse
                  className="eye-pupil"
                  cx="120"
                  cy="76"
                  rx="7"
                  ry={isListening ? 9 : 8}
                  fill="url(#eyeCyan)"
                  filter="url(#softGlow)"
                />
              )}
              {/* Eye Catchlight */}
              {!isSpeaking && !isThinking && (
                <circle cx="118" cy="73" r="2.5" fill="#FFFFFF" />
              )}
            </g>

            {/* VISOR MOUTH / SOUND FREQUENCY BARS */}
            {isSpeaking ? (
              // Dynamic Talking Waveform Mouth
              <g className="mouth-waveform" transform="translate(100, 97)">
                <line className="mouth-bar mouth-bar-1" x1="-16" y1="-2" x2="-16" y2="4" stroke="#38BDF8" strokeWidth="2.5" strokeLinecap="round" />
                <line className="mouth-bar mouth-bar-2" x1="-8" y1="-5" x2="-8" y2="7" stroke="#67E8F9" strokeWidth="3" strokeLinecap="round" />
                <line className="mouth-bar mouth-bar-3" x1="0" y1="-8" x2="0" y2="10" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" />
                <line className="mouth-bar mouth-bar-4" x1="8" y1="-5" x2="8" y2="7" stroke="#67E8F9" strokeWidth="3" strokeLinecap="round" />
                <line className="mouth-bar mouth-bar-5" x1="16" y1="-2" x2="16" y2="4" stroke="#38BDF8" strokeWidth="2.5" strokeLinecap="round" />
              </g>
            ) : isListening ? (
              // Attentive sound pulse dot
              <g transform="translate(100, 97)">
                <ellipse cx="0" cy="0" rx="8" ry="3" fill="#10B981" opacity="0.8" />
              </g>
            ) : (
              // Idle cute gentle smile
              <path
                d="M93 96 Q100 101 107 96"
                stroke="#0EA5E9"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
                opacity="0.85"
              />
            )}
          </g>
        </svg>
      </div>

      {/* Soft Ground Shadow */}
      <div className="robot-shadow" aria-hidden="true" />

      {/* Dynamic Status Pill Under Robot */}
      <div className="robot-status-pill">
        <span className="status-indicator-dot" />
        <span className="status-label-text">
          {isSpeaking
            ? 'RIA is speaking...'
            : isListening
            ? 'RIA is listening...'
            : isThinking
            ? 'RIA is thinking...'
            : 'RIA is ready & connected'}
        </span>
      </div>
    </div>
  );
};

export default RobotAvatar;
