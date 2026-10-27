'use client';

import { useState, useCallback, useEffect, useRef, Component } from 'react';
import { LiveKitRoom, RoomAudioRenderer } from '@livekit/components-react';
import { LiveCall } from '@/components/livedemo/LiveDemoCard';
import '@/components/livedemo/LiveDemoCard.css';
import {
  CloseIcon,
  AlertCircleIcon,
  AlertTriangleIcon,
  RadioWaveIcon,
  PhoneCallIcon,
  LanguagesIcon,
} from './Icons';
import CountrySelect from './CountrySelect';
import { DEFAULT_COUNTRY, findCountryByCodeOrDial } from '@/data/countries';
import {
  DAILY_LIMIT,
  LIVEKIT_URL,
  MIC_OPTIONS,
  callsLeftToday,
  fetchDemoToken,
  loadVisitor,
  roomErrorHandlers,
  saveVisitor,
  validateVisitor,
} from './demoSession';

class LiveKitErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('LiveKit UI Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            padding: '2rem',
            textAlign: 'center',
            background: '#ffffff',
          }}
        >
          <div style={{ marginBottom: '1rem' }}>
            <AlertTriangleIcon size={42} color="#ef4444" />
          </div>
          <h3 style={{ color: '#0f172a', marginBottom: '0.5rem' }}>
            Voice Session Stream Interrupted
          </h3>
          <p
            style={{
              color: '#64748b',
              fontSize: '0.9rem',
              maxWidth: '400px',
              marginBottom: '1.5rem',
            }}
          >
            {this.state.error?.message ||
              'An unexpected error occurred while connecting audio.'}
          </p>
          <button
            onClick={() => {
              this.setState({ hasError: false, error: null });
              if (this.props.onReset) this.props.onReset();
            }}
            style={{
              padding: '0.75rem 1.5rem',
              background: '#0f172a',
              color: '#ffffff',
              border: 'none',
              borderRadius: '8px',
              fontWeight: '600',
              cursor: 'pointer',
            }}
          >
            Reconnect Terminal
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

const LiveKitModal = ({ setShowSupport, initialVisitor = null, autoConnect = false }) => {
  const [isSubmittingName, setIsSubmittingName] = useState(!autoConnect);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(DEFAULT_COUNTRY);
  const [token, setToken] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [callsLeft, setCallsLeft] = useState(Infinity);
  const connectedAt = useRef(0);
  const endReason = useRef('');

  const startCall = useCallback(async (visitor) => {
    if (callsLeftToday() === 0) {
      setCallsLeft(0);
      setErrorMsg("Daily test session limit reached. Resets at midnight IST.");
      return;
    }
    try {
      setIsLoading(true);
      setErrorMsg('');
      connectedAt.current = 0;
      endReason.current = '';
      const { token: jwt } = await fetchDemoToken(visitor);
      setCallsLeft(callsLeftToday());
      setToken(jwt);
      setIsSubmittingName(false);
    } catch (error) {
      console.error('RIA token error:', error);
      setErrorMsg(error?.message || 'Could not connect to the RIA voice token server.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Same visitor + daily limit as the homepage live demo card
  useEffect(() => {
    setCallsLeft(callsLeftToday());
    const saved = initialVisitor || loadVisitor();
    if (saved) {
      setName(saved.name || '');
      setPhone(saved.nationalPhone || saved.rawDigits || saved.phone || '');
      if (saved.dialCode) {
        setSelectedCountry(findCountryByCodeOrDial(saved.dialCode));
      }
      if (autoConnect && saved.name && saved.phone) {
        startCall(saved);
      }
    }
  }, [initialVisitor, autoConnect, startCall]);

  const handleNameSubmit = (event) => {
    event.preventDefault();
    const { visitor, error } = validateVisitor(name, phone, selectedCountry.dialCode);
    if (error) {
      setErrorMsg(error);
      return;
    }
    saveVisitor(visitor);
    startCall(visitor);
  };

  // Normal hang-up closes the modal; a failure (mic blocked, RIA didn't pick up,
  // time cap) returns to the form with the reason instead of vanishing
  const endCall = useCallback(
    (message = '') => {
      if (message) endReason.current = message;
      setToken(null);
      setIsSubmittingName(true);
      if (endReason.current) setErrorMsg(endReason.current);
      else setShowSupport(false);
    },
    [setShowSupport]
  );

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true">
      <div className="modal-content">
        <button
          type="button"
          className="modal-corner-close-btn"
          onClick={() => setShowSupport(false)}
          title="Close"
          aria-label="Close modal"
        >
          <CloseIcon size={20} />
        </button>

        <div className="support-room">
          {isSubmittingName ? (
            <div className="modal-form-container">
              <div className="modal-telecom-badge">
                <div className="telecom-badge-chassis">
                  <RadioWaveIcon size={22} className="telecom-badge-icon" />
                  <span className="telecom-live-indicator" />
                </div>
                <div className="telecom-badge-meta">
                  <span className="telecom-protocol">WEBRTC VOICE STREAM</span>
                  <span className="telecom-channel">CH-01 // LOW LATENCY</span>
                </div>
              </div>

              <form onSubmit={handleNameSubmit} className="name-form" noValidate>
                <h2>Direct Voice Terminal</h2>
                <p className="form-subtext">
                  Experience real-time interactive recovery calls in Telugu, Hindi, Tamil, English, and 25+ global dialects. Sub-95ms conversational response with automated payment tracking.
                  {DAILY_LIMIT > 0 && ` ${callsLeft} free ${callsLeft === 1 ? 'session' : 'sessions'} available today.`}
                </p>

                {errorMsg && (
                  <div className="modal-error-banner">
                    <AlertCircleIcon size={16} />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div className="input-group">
                  <input
                    type="text"
                    value={name}
                    onChange={(event) => {
                      setName(event.target.value);
                      setErrorMsg('');
                    }}
                    placeholder="Enter your name..."
                    required
                    autoFocus
                    autoComplete="name"
                    disabled={isLoading}
                    maxLength={60}
                  />
                </div>

                <div className="input-group modal-phone-group">
                  <CountrySelect
                    selectedCountry={selectedCountry}
                    onSelect={(country) => {
                      setSelectedCountry(country);
                      setErrorMsg('');
                    }}
                    disabled={isLoading}
                  />
                  <input
                    type="tel"
                    inputMode="numeric"
                    value={phone}
                    onChange={(event) => {
                      setPhone(event.target.value);
                      setErrorMsg('');
                    }}
                    placeholder={selectedCountry.placeholder || 'Mobile number'}
                    required
                    autoComplete="tel-national"
                    disabled={isLoading}
                    maxLength={16}
                  />
                </div>

                <div className="form-buttons-group">
                  <button
                    type="submit"
                    className="start-call-btn"
                    disabled={isLoading || callsLeft === 0}
                  >
                    {isLoading ? (
                      <span className="btn-spinner-text">Connecting Audio Channel...</span>
                    ) : (
                      <>
                        <PhoneCallIcon size={18} />
                        <span>Initialize Voice Session</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    className="cancel-button"
                    onClick={() => setShowSupport(false)}
                    disabled={isLoading}
                  >
                    Cancel
                  </button>
                </div>

                <div className="modal-form-footer">
                  <LanguagesIcon size={14} />
                  <span>
                    29 Languages Supported · Opus 48kHz HD Audio · 5m Session Cap
                  </span>
                </div>
              </form>
            </div>
          ) : token ? (
            <LiveKitErrorBoundary
              onReset={() => {
                setToken(null);
                setIsSubmittingName(true);
              }}

            >
              <LiveKitRoom
                className="livekit-room-wrapper"
                serverUrl={LIVEKIT_URL}
                token={token}
                connect={true}
                video={false}
                audio={MIC_OPTIONS}
                onDisconnected={() => endCall()}
                {...roomErrorHandlers(connectedAt, endCall)}
              >
                <RoomAudioRenderer />
                <div className="ld-modal-live-wrapper">
                  <LiveCall visitorName={name} onEnd={endCall} />
                </div>
              </LiveKitRoom>
            </LiveKitErrorBoundary>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default LiveKitModal;
