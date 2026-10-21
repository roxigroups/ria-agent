'use client';

import React, { useState, useRef, useEffect } from 'react';
import { COUNTRIES, Country, DEFAULT_COUNTRY } from '@/data/countries';
import { ChevronDown, Search, Check } from 'lucide-react';

interface CountrySelectProps {
  selectedCountry: Country;
  onSelect: (country: Country) => void;
  disabled?: boolean;
  className?: string;
}

export default function CountrySelect({
  selectedCountry = DEFAULT_COUNTRY,
  onSelect,
  disabled = false,
  className = '',
}: CountrySelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Focus search input on open
  useEffect(() => {
    if (isOpen) {
      setSearch('');
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 50);
    }
  }, [isOpen]);

  // Filter countries
  const filteredCountries = COUNTRIES.filter((country) => {
    const q = search.trim().toLowerCase();
    if (!q) return true;
    return (
      country.name.toLowerCase().includes(q) ||
      country.dialCode.toLowerCase().includes(q) ||
      country.code.toLowerCase().includes(q)
    );
  });

  return (
    <div
      ref={containerRef}
      className={`country-select-container ${className}`}
      style={{ position: 'relative', display: 'inline-block' }}
    >
      <button
        type="button"
        className="country-select-trigger"
        onClick={() => !disabled && setIsOpen((prev) => !prev)}
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        title={`Selected: ${selectedCountry.name} (${selectedCountry.dialCode})`}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.45rem',
          height: '100%',
          padding: '0 0.85rem',
          background: 'linear-gradient(180deg, #131317 0%, #09090b 100%)',
          border: '1px solid rgba(255, 255, 255, 0.22)',
          borderRadius: '14px',
          color: '#FFFFFF',
          fontFamily: 'var(--font-mono, monospace)',
          fontSize: '0.95rem',
          cursor: disabled ? 'not-allowed' : 'pointer',
          outline: 'none',
          boxShadow: 'inset 0 2px 5px rgba(0, 0, 0, 0.8), 0 1px 0 rgba(255, 255, 255, 0.1)',
          transition: 'all 0.15s ease',
          userSelect: 'none',
          whiteSpace: 'nowrap',
        }}
      >
        <span style={{ fontSize: '1.25rem', lineHeight: 1 }}>{selectedCountry.flag}</span>
        <span style={{ fontWeight: 600, color: '#E2E8F0', letterSpacing: '-0.01em' }}>
          {selectedCountry.dialCode}
        </span>
        <ChevronDown
          size={14}
          style={{
            color: 'var(--white-muted, #A3A3A3)',
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.2s ease',
            marginLeft: '0.1rem',
          }}
        />
      </button>

      {isOpen && (
        <div
          className="country-select-dropdown"
          style={{
            position: 'absolute',
            top: 'calc(100% + 6px)',
            left: 0,
            zIndex: 9999,
            width: '290px',
            maxHeight: '340px',
            backgroundColor: '#0d0d11',
            borderRadius: '16px',
            border: '1px solid rgba(255, 255, 255, 0.22)',
            boxShadow:
              '0 18px 45px rgba(0, 0, 0, 0.95), 0 0 25px rgba(255, 255, 255, 0.08), inset 0 1px 1px rgba(255, 255, 255, 0.25)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            backdropFilter: 'blur(20px)',
            animation: 'countryDropdownFadeIn 0.15s ease-out',
          }}
          role="listbox"
        >
          {/* Search Bar */}
          <div
            style={{
              padding: '0.65rem 0.75rem',
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              backgroundColor: 'rgba(255, 255, 255, 0.03)',
            }}
          >
            <Search size={14} color="#A3A3A3" />
            <input
              ref={searchInputRef}
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search 28 countries or code..."
              style={{
                width: '100%',
                background: 'transparent',
                border: 'none',
                outline: 'none',
                color: '#FFFFFF',
                fontFamily: 'var(--font-mono, monospace)',
                fontSize: '0.82rem',
              }}
            />
          </div>

          {/* List of 28 Countries */}
          <div
            style={{
              overflowY: 'auto',
              flex: 1,
              padding: '0.35rem',
              maxHeight: '260px',
            }}
          >
            {filteredCountries.length === 0 ? (
              <div
                style={{
                  padding: '1.25rem',
                  textAlign: 'center',
                  fontSize: '0.85rem',
                  color: 'var(--white-muted, #737373)',
                }}
              >
                No country found
              </div>
            ) : (
              filteredCountries.map((c) => {
                const isSelected = c.code === selectedCountry.code;
                return (
                  <button
                    key={c.code}
                    type="button"
                    onClick={() => {
                      onSelect(c);
                      setIsOpen(false);
                    }}
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0.55rem 0.75rem',
                      borderRadius: '10px',
                      background: isSelected
                        ? 'rgba(255, 255, 255, 0.12)'
                        : 'transparent',
                      border: 'none',
                      color: isSelected ? '#FFFFFF' : '#D4D4D8',
                      cursor: 'pointer',
                      textAlign: 'left',
                      fontFamily: 'var(--font-sans, inherit)',
                      fontSize: '0.88rem',
                      transition: 'background 0.12s ease',
                    }}
                    onMouseEnter={(e) => {
                      if (!isSelected) {
                        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.07)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isSelected) {
                        e.currentTarget.style.backgroundColor = 'transparent';
                      }
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                      <span style={{ fontSize: '1.25rem', lineHeight: 1 }}>{c.flag}</span>
                      <span
                        style={{
                          fontWeight: isSelected ? 600 : 400,
                          color: isSelected ? '#FFFFFF' : '#E2E8F0',
                        }}
                      >
                        {c.name}
                      </span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span
                        style={{
                          fontFamily: 'var(--font-mono, monospace)',
                          fontSize: '0.82rem',
                          color: isSelected ? '#FFFFFF' : 'var(--white-muted, #94A3B8)',
                          fontWeight: 500,
                        }}
                      >
                        {c.dialCode}
                      </span>
                      {isSelected && <Check size={14} color="#FFFFFF" />}
                    </div>
                  </button>
                );
              })
            )}
          </div>
        </div>
      )}
    </div>
  );
}
