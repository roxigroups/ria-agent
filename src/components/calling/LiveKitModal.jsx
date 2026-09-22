'use client';

import { useState, useCallback, Component } from 'react';
import { LiveKitRoom, RoomAudioRenderer } from '@livekit/components-react';
import '@livekit/components-styles';
import SimpleVoiceAssistant from './SimpleVoiceAssistant';
import { CloseIcon } from './Icons';

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
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>⚠️</div>
          <h3 style={{ color: '#0f172a', marginBottom: '0.5rem' }}>
            Something went wrong in the voice session
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
              background: '#4f46e5',
              color: '#ffffff',
              border: 'none',
              borderRadius: '8px',
              fontWeight: '600',
              cursor: 'pointer',
            }}
          >
            Try Again
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

const BACKEND_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL || '';

const LIVEKIT_URL =
  process.env.NEXT_PUBLIC_LIVEKIT_URL ||
  process.env.LIVEKIT_URL ||
  process.env.VITE_LIVEKIT_URL ||
  'wss://ria-agent-7ux7medh.livekit.cloud';

const LiveKitModal = ({ setShowSupport }) => {
  const [isSubmittingName, setIsSubmittingName] = useState(true);
  const [name, setName] = useState('');
  const [token, setToken] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const getToken = useCallback(async (userName) => {
    try {
      setIsLoading(true);
      setErrorMsg('');

      // 1. Try native Next.js / Cloudflare /api/getToken route
      let response = await fetch(`/api/getToken?name=${encodeURIComponent(userName)}`, {
        method: 'GET',
        cache: 'no-store',
      });

      // 2. Fallback to external backend URL if configured and primary failed
      if (!response.ok && BACKEND_URL) {
        const backendBase = BACKEND_URL.replace(/\/$/, '');
        response = await fetch(`${backendBase}/getToken?name=${encodeURIComponent(userName)}`, {
          method: 'GET',
          cache: 'no-store',
        });
      }

      if (!response.ok) {
        let detail = response.statusText;
        try {
          const body = await response.json();
          detail = body.error || detail;
        } catch {
          // ignore json parse error
        }
        throw new Error(detail || 'Failed to retrieve access token');
      }

      const tokenText = await response.text();
      if (!tokenText) {
        throw new Error('Token server returned an empty token.');
      }

      setToken(tokenText);
      setIsSubmittingName(false);
    } catch (error) {
      console.error('RIA token error:', error);
      setErrorMsg(
        error?.message || 'Could not connect to the RIA voice token server.'
      );
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleNameSubmit = (event) => {
    event.preventDefault();
    const cleanName = name.trim();
    if (!cleanName) return;
    getToken(cleanName);
  };

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
              <div className="modal-robot-badge">
                <div className="robot-badge-icon">🤖</div>
                <div className="robot-badge-pulse" />
              </div>

              <form onSubmit={handleNameSubmit} className="name-form">
                <h2>Talk to RIA — AI Voice Demo</h2>
                <p className="form-subtext">
                  Experience RIA live. Enter your name to start talking.
                </p>

                {errorMsg && (
                  <div className="modal-error-banner">⚠️ {errorMsg}</div>
                )}

                <div className="input-group">
                  <input
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder="Enter your name..."
                    required
                    autoFocus
                    disabled={isLoading}
                    maxLength={100}
                  />
                </div>

                <div className="form-buttons-group">
                  <button
                    type="submit"
                    className="start-call-btn"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <span className="btn-spinner-text">Connecting...</span>
                    ) : (
                      <span>🎙️ Start Live Call</span>
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
                  <span>
                    ⚡ Low-latency voice powered by LiveKit + OpenAI Realtime
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
                audio={true}
                options={{
                  adaptiveStream: true,
                  dynacast: true,
                }}
                onDisconnected={() => {
                  setToken(null);
                  setShowSupport(false);
                  setIsSubmittingName(true);
                }}
              >
                <RoomAudioRenderer />
                <SimpleVoiceAssistant
                  onDisconnect={() => {
                    setToken(null);
                    setShowSupport(false);
                  }}
                />
              </LiveKitRoom>
            </LiveKitErrorBoundary>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default LiveKitModal;
