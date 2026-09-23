'use client';

import React, { useState, useMemo } from 'react';
import {
  FAQ_DATA,
  FAQ_SECTIONS,
  FAQItem,
} from '@/data/demoFaqs';
import {
  Search,
  ChevronDown,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Zap,
  ArrowRight,
  Layers,
  HelpCircle,
  Copy,
  Check,
  RotateCcw,
  BookOpen,
} from 'lucide-react';

interface DemoFaqSectionProps {
  onClose?: () => void;
}

export default function DemoFaqSection({ onClose }: DemoFaqSectionProps) {
  const [selectedSection, setSelectedSection] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openItems, setOpenItems] = useState<Record<number, boolean>>({
    1: true,
    10: true,
    16: true,
    51: true,
  });
  const [copiedId, setCopiedId] = useState<number | null>(null);

  // Toggle single FAQ accordion
  const toggleItem = (id: number) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Expand all or collapse all visible
  const handleExpandAll = (expand: boolean) => {
    if (!expand) {
      setOpenItems({});
      return;
    }
    const allOpen: Record<number, boolean> = {};
    filteredItems.forEach((item) => {
      allOpen[item.id] = true;
    });
    setOpenItems(allOpen);
  };

  // Filter items based on active section and search query
  const filteredItems = useMemo(() => {
    return FAQ_DATA.filter((item) => {
      // Section filter
      if (selectedSection === 'live') {
        if (item.status !== 'live') return false;
      } else if (selectedSection !== 'all') {
        if (item.section !== selectedSection) return false;
      }

      // Search query
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      const matchQuestion = item.question.toLowerCase().includes(q);
      const matchAnswer = item.answer.toLowerCase().includes(q);
      const matchSection = item.sectionTitle.toLowerCase().includes(q);
      const matchId = `q${item.id}`.includes(q) || `${item.id}` === q;

      return matchQuestion || matchAnswer || matchSection || matchId;
    });
  }, [selectedSection, searchQuery]);

  const handleCopy = (item: FAQItem) => {
    const text = `Q${item.id}: ${item.question}\n\nA: ${item.answer}`;
    navigator.clipboard.writeText(text);
    setCopiedId(item.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div
      id="demo-faq-section"
      style={{
        marginTop: '2.5rem',
        marginBottom: '4rem',
        width: '100%',
        maxWidth: '1000px',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    >
      <div
        className="skeuo-chassis"
        style={{
          background: 'linear-gradient(180deg, #121215 0%, #09090b 100%)',
          borderRadius: '24px',
          border: '1px solid rgba(255, 255, 255, 0.14)',
          padding: 'clamp(1.5rem, 3.5vw, 2.5rem)',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.85), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
          position: 'relative',
        }}
      >
        {/* Top Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.25rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            paddingBottom: '1.5rem',
            marginBottom: '1.75rem',
          }}
        >
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: '100px',
                padding: '0.35rem 0.85rem',
                fontSize: '0.78rem',
                fontFamily: 'var(--font-mono)',
                color: '#E5E5E5',
                marginBottom: '0.75rem',
              }}
            >
              <BookOpen size={14} color="#FFFFFF" />
              <span>DISTRIBUTION INTELLIGENCE KNOWLEDGE BASE</span>
            </div>
            <h2
              style={{
                fontSize: 'clamp(1.4rem, 2.8vw, 2rem)',
                fontWeight: 800,
                color: '#FFFFFF',
                letterSpacing: '-0.02em',
                lineHeight: 1.2,
                margin: 0,
              }}
            >
              Frequently Asked Questions (Q&A)
            </h2>
            <p
              style={{
                color: 'var(--white-dim)',
                fontSize: '0.92rem',
                marginTop: '0.4rem',
                marginBottom: 0,
                lineHeight: 1.5,
              }}
            >
              From retailer conversations to distribution intelligence. Complete reference across all 60 capabilities, guardrails &amp; workflows.
            </p>
          </div>

          {/* Status Legend Pills */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
              background: 'rgba(0, 0, 0, 0.4)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '12px',
              padding: '0.75rem 1rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem' }}>
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: '#22c55e',
                  boxShadow: '0 0 8px #22c55e',
                  display: 'inline-block',
                }}
              />
              <span style={{ color: '#FFFFFF', fontWeight: 600 }}>Live Today</span>
              <span style={{ color: 'var(--white-muted)', fontSize: '0.75rem' }}>— Fully operational</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem' }}>
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: '#f59e0b',
                  boxShadow: '0 0 8px #f59e0b',
                  display: 'inline-block',
                }}
              />
              <span style={{ color: '#FFFFFF', fontWeight: 600 }}>Platform / Phased</span>
              <span style={{ color: 'var(--white-muted)', fontSize: '0.75rem' }}>— Roadmap rollout</span>
            </div>
          </div>
        </div>

        {/* Search & Actions Bar */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            marginBottom: '1.5rem',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              flexWrap: 'wrap',
            }}
          >
            {/* Search Input */}
            <div
              style={{
                position: 'relative',
                flex: '1 1 280px',
                minWidth: '240px',
              }}
            >
              <Search
                size={17}
                style={{
                  position: 'absolute',
                  left: '1rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: 'var(--white-muted)',
                }}
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search questions, keywords (e.g. ERP, Telugu, Tally, collection, guardrails)..."
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem 0.75rem 2.75rem',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  borderRadius: '12px',
                  color: '#FFFFFF',
                  fontSize: '0.9rem',
                  outline: 'none',
                  transition: 'border-color 0.2s ease',
                }}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  style={{
                    position: 'absolute',
                    right: '0.85rem',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'transparent',
                    border: 'none',
                    color: 'var(--white-muted)',
                    cursor: 'pointer',
                    fontSize: '0.8rem',
                  }}
                >
                  Clear
                </button>
              )}
            </div>

            {/* Expand / Collapse All */}
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button
                onClick={() => handleExpandAll(true)}
                style={{
                  background: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '10px',
                  padding: '0.65rem 0.95rem',
                  color: '#E5E5E5',
                  fontSize: '0.82rem',
                  cursor: 'pointer',
                  fontWeight: 500,
                  transition: 'background 0.2s ease',
                }}
              >
                Expand All
              </button>
              <button
                onClick={() => handleExpandAll(false)}
                style={{
                  background: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '10px',
                  padding: '0.65rem 0.95rem',
                  color: '#E5E5E5',
                  fontSize: '0.82rem',
                  cursor: 'pointer',
                  fontWeight: 500,
                  transition: 'background 0.2s ease',
                }}
              >
                Collapse All
              </button>
            </div>
          </div>

          {/* Section Filter Pills */}
          <div
            style={{
              display: 'flex',
              gap: '0.5rem',
              overflowX: 'auto',
              paddingBottom: '0.35rem',
              scrollbarWidth: 'none',
            }}
          >
            {FAQ_SECTIONS.map((sec) => {
              const isActive = selectedSection === sec.id;
              return (
                <button
                  key={sec.id}
                  onClick={() => setSelectedSection(sec.id)}
                  style={{
                    padding: '0.45rem 0.85rem',
                    borderRadius: '100px',
                    fontSize: '0.8rem',
                    fontWeight: isActive ? 600 : 400,
                    whiteSpace: 'nowrap',
                    cursor: 'pointer',
                    border: isActive
                      ? '1px solid rgba(255, 255, 255, 0.4)'
                      : '1px solid rgba(255, 255, 255, 0.08)',
                    background: isActive
                      ? 'rgba(255, 255, 255, 0.18)'
                      : 'rgba(255, 255, 255, 0.04)',
                    color: isActive ? '#FFFFFF' : 'var(--white-dim)',
                    transition: 'all 0.15s ease',
                  }}
                >
                  {sec.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Count */}
        <div
          style={{
            fontSize: '0.82rem',
            color: 'var(--white-muted)',
            fontFamily: 'var(--font-mono)',
            marginBottom: '1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <span>Showing {filteredItems.length} of 60 questions</span>
          {selectedSection !== 'all' && (
            <button
              onClick={() => {
                setSelectedSection('all');
                setSearchQuery('');
              }}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#FFFFFF',
                cursor: 'pointer',
                fontSize: '0.78rem',
                textDecoration: 'underline',
              }}
            >
              Reset filters
            </button>
          )}
        </div>

        {/* FAQ Accordion List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {filteredItems.length === 0 ? (
            <div
              style={{
                textAlign: 'center',
                padding: '3rem 1.5rem',
                background: 'rgba(255, 255, 255, 0.02)',
                borderRadius: '16px',
                border: '1px dashed rgba(255, 255, 255, 0.1)',
              }}
            >
              <HelpCircle size={32} color="var(--white-muted)" style={{ margin: '0 auto 0.75rem' }} />
              <h4 style={{ color: '#FFFFFF', marginBottom: '0.35rem' }}>No matching questions found</h4>
              <p style={{ color: 'var(--white-dim)', fontSize: '0.88rem', margin: 0 }}>
                Try searching with different terms or reset your active category filter.
              </p>
            </div>
          ) : (
            filteredItems.map((item) => {
              const isOpen = !!openItems[item.id];
              return (
                <div
                  key={item.id}
                  style={{
                    background: isOpen ? 'rgba(255, 255, 255, 0.04)' : 'rgba(255, 255, 255, 0.02)',
                    border: isOpen
                      ? '1px solid rgba(255, 255, 255, 0.2)'
                      : '1px solid rgba(255, 255, 255, 0.07)',
                    borderRadius: '14px',
                    transition: 'all 0.2s ease',
                    overflow: 'hidden',
                  }}
                >
                  {/* Accordion Question Header */}
                  <button
                    onClick={() => toggleItem(item.id)}
                    style={{
                      width: '100%',
                      padding: '1.1rem 1.25rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      background: 'transparent',
                      border: 'none',
                      color: '#FFFFFF',
                      textAlign: 'left',
                      cursor: 'pointer',
                      gap: '1rem',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', flex: 1 }}>
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.82rem',
                          fontWeight: 700,
                          color: 'var(--white-muted)',
                          minWidth: '2.2rem',
                        }}
                      >
                        Q{item.id}.
                      </span>
                      <span
                        style={{
                          fontSize: '0.98rem',
                          fontWeight: 600,
                          color: '#FFFFFF',
                          lineHeight: 1.4,
                        }}
                      >
                        {item.question}
                      </span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0 }}>
                      {/* Status Badges */}
                      {item.status === 'live' && (
                        <span
                          style={{
                            background: 'rgba(34, 197, 94, 0.15)',
                            color: '#4ade80',
                            border: '1px solid rgba(34, 197, 94, 0.3)',
                            borderRadius: '100px',
                            padding: '0.2rem 0.6rem',
                            fontSize: '0.72rem',
                            fontWeight: 600,
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.3rem',
                          }}
                        >
                          <span
                            style={{
                              width: '5px',
                              height: '5px',
                              borderRadius: '50%',
                              background: '#4ade80',
                            }}
                          />
                          Live Today
                        </span>
                      )}

                      {item.status === 'roadmap' && (
                        <span
                          style={{
                            background: 'rgba(245, 158, 11, 0.12)',
                            color: '#fbbf24',
                            border: '1px solid rgba(245, 158, 11, 0.25)',
                            borderRadius: '100px',
                            padding: '0.2rem 0.6rem',
                            fontSize: '0.72rem',
                            fontWeight: 500,
                          }}
                        >
                          Platform
                        </span>
                      )}

                      <ChevronDown
                        size={18}
                        style={{
                          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.25s ease',
                          color: 'var(--white-muted)',
                        }}
                      />
                    </div>
                  </button>

                  {/* Accordion Answer Body */}
                  {isOpen && (
                    <div
                      style={{
                        padding: '0 1.25rem 1.25rem 3.4rem',
                        borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                        paddingTop: '0.9rem',
                      }}
                    >
                      <p
                        style={{
                          color: 'var(--white-dim)',
                          fontSize: '0.94rem',
                          lineHeight: 1.65,
                          margin: 0,
                        }}
                      >
                        {item.answer}
                      </p>

                      {/* Extra Rich Callout / Guardrails / Workflow */}
                      {item.extraContent && (
                        <div style={{ marginTop: '1rem' }}>
                          {item.extraContent.type === 'workflow' && (
                            <div
                              style={{
                                background: 'rgba(0, 0, 0, 0.4)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                borderRadius: '10px',
                                padding: '0.85rem 1rem',
                              }}
                            >
                              <div
                                style={{
                                  fontSize: '0.78rem',
                                  fontFamily: 'var(--font-mono)',
                                  color: '#FFFFFF',
                                  fontWeight: 600,
                                  marginBottom: '0.5rem',
                                }}
                              >
                                {item.extraContent.title}
                              </div>
                              <div
                                style={{
                                  display: 'flex',
                                  alignItems: 'center',
                                  gap: '0.4rem',
                                  flexWrap: 'wrap',
                                }}
                              >
                                {item.extraContent.items?.map((step, idx, arr) => (
                                  <React.Fragment key={step}>
                                    <span
                                      style={{
                                        background: 'rgba(255, 255, 255, 0.08)',
                                        borderRadius: '6px',
                                        padding: '0.25rem 0.55rem',
                                        fontSize: '0.78rem',
                                        color: '#E5E5E5',
                                        fontWeight: 500,
                                      }}
                                    >
                                      {step}
                                    </span>
                                    {idx < arr.length - 1 && (
                                      <span style={{ color: 'var(--white-muted)', fontSize: '0.75rem' }}>➔</span>
                                    )}
                                  </React.Fragment>
                                ))}
                              </div>
                            </div>
                          )}

                          {item.extraContent.type === 'guardrails' && (
                            <div
                              style={{
                                background: 'rgba(0, 0, 0, 0.45)',
                                border: '1px solid rgba(255, 255, 255, 0.12)',
                                borderRadius: '12px',
                                padding: '1rem',
                              }}
                            >
                              <div
                                style={{
                                  fontSize: '0.85rem',
                                  fontFamily: 'var(--font-mono)',
                                  color: '#FFFFFF',
                                  fontWeight: 700,
                                  marginBottom: '0.75rem',
                                  display: 'flex',
                                  alignItems: 'center',
                                  gap: '0.5rem',
                                }}
                              >
                                <ShieldCheck size={16} color="#4ade80" />
                                <span>{item.extraContent.title}</span>
                              </div>
                              <div
                                style={{
                                  display: 'grid',
                                  gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
                                  gap: '0.5rem',
                                }}
                              >
                                {item.extraContent.items?.map((rule) => (
                                  <div
                                    key={rule}
                                    style={{
                                      display: 'flex',
                                      alignItems: 'center',
                                      gap: '0.5rem',
                                      fontSize: '0.82rem',
                                      color: 'var(--white-dim)',
                                      background: 'rgba(255, 255, 255, 0.03)',
                                      padding: '0.4rem 0.6rem',
                                      borderRadius: '6px',
                                    }}
                                  >
                                    <CheckCircle2 size={13} color="#22c55e" style={{ flexShrink: 0 }} />
                                    <span>{rule}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {item.extraContent.type === 'callout' && (
                            <div
                              style={{
                                background: 'rgba(255, 255, 255, 0.03)',
                                borderLeft: '3px solid #FFFFFF',
                                padding: '0.75rem 1rem',
                                borderRadius: '0 8px 8px 0',
                                fontSize: '0.86rem',
                                color: 'var(--white-dim)',
                              }}
                            >
                              <strong style={{ color: '#FFFFFF', display: 'block', marginBottom: '0.25rem' }}>
                                {item.extraContent.title}:
                              </strong>
                              {item.extraContent.text}
                            </div>
                          )}
                        </div>
                      )}

                      {/* Footer Actions */}
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          marginTop: '0.85rem',
                          paddingTop: '0.65rem',
                          borderTop: '1px solid rgba(255, 255, 255, 0.04)',
                        }}
                      >
                        <span
                          style={{
                            fontSize: '0.74rem',
                            color: 'var(--white-muted)',
                            fontFamily: 'var(--font-mono)',
                          }}
                        >
                          Section {item.sectionTitle}
                        </span>

                        <button
                          onClick={() => handleCopy(item)}
                          style={{
                            background: 'transparent',
                            border: 'none',
                            color: copiedId === item.id ? '#4ade80' : 'var(--white-muted)',
                            cursor: 'pointer',
                            fontSize: '0.75rem',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.35rem',
                            padding: '0.25rem 0.5rem',
                            borderRadius: '4px',
                            transition: 'color 0.15s ease',
                          }}
                        >
                          {copiedId === item.id ? (
                            <>
                              <Check size={12} />
                              <span>Copied Q&amp;A</span>
                            </>
                          ) : (
                            <>
                              <Copy size={12} />
                              <span>Copy text</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
