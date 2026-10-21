export interface Country {
  name: string;
  code: string;
  dialCode: string;
  flag: string;
  placeholder: string;
  sampleDigits: string;
}

export const COUNTRIES: Country[] = [
  { name: 'India', code: 'IN', dialCode: '+91', flag: '🇮🇳', placeholder: '98765 43210', sampleDigits: '9876543210' },
  { name: 'United States', code: 'US', dialCode: '+1', flag: '🇺🇸', placeholder: '(555) 000-0000', sampleDigits: '2025550123' },
  { name: 'United Kingdom', code: 'GB', dialCode: '+44', flag: '🇬🇧', placeholder: '7911 123456', sampleDigits: '7911123456' },
  { name: 'United Arab Emirates', code: 'AE', dialCode: '+971', flag: '🇦🇪', placeholder: '50 123 4567', sampleDigits: '501234567' },
  { name: 'Singapore', code: 'SG', dialCode: '+65', flag: '🇸🇬', placeholder: '8123 4567', sampleDigits: '81234567' },
  { name: 'Canada', code: 'CA', dialCode: '+1', flag: '🇨🇦', placeholder: '(555) 000-0000', sampleDigits: '4165550123' },
  { name: 'Australia', code: 'AU', dialCode: '+61', flag: '🇦🇺', placeholder: '412 345 678', sampleDigits: '412345678' },
  { name: 'Germany', code: 'DE', dialCode: '+49', flag: '🇩🇪', placeholder: '151 23456789', sampleDigits: '15123456789' },
  { name: 'France', code: 'FR', dialCode: '+33', flag: '🇫🇷', placeholder: '6 12 34 56 78', sampleDigits: '612345678' },
  { name: 'Saudi Arabia', code: 'SA', dialCode: '+966', flag: '🇸🇦', placeholder: '50 123 4567', sampleDigits: '501234567' },
  { name: 'Qatar', code: 'QA', dialCode: '+974', flag: '🇶🇦', placeholder: '3312 3456', sampleDigits: '33123456' },
  { name: 'Kuwait', code: 'KW', dialCode: '+965', flag: '🇰🇼', placeholder: '5123 4567', sampleDigits: '51234567' },
  { name: 'Oman', code: 'OM', dialCode: '+968', flag: '🇴🇲', placeholder: '9123 4567', sampleDigits: '91234567' },
  { name: 'Bahrain', code: 'BH', dialCode: '+973', flag: '🇧🇭', placeholder: '3612 3456', sampleDigits: '36123456' },
  { name: 'Japan', code: 'JP', dialCode: '+81', flag: '🇯🇵', placeholder: '90 1234 5678', sampleDigits: '9012345678' },
  { name: 'Malaysia', code: 'MY', dialCode: '+60', flag: '🇲🇾', placeholder: '12-345 6789', sampleDigits: '123456789' },
  { name: 'Indonesia', code: 'ID', dialCode: '+62', flag: '🇮🇩', placeholder: '812-3456-789', sampleDigits: '8123456789' },
  { name: 'Philippines', code: 'PH', dialCode: '+63', flag: '🇵🇭', placeholder: '917 123 4567', sampleDigits: '9171234567' },
  { name: 'Vietnam', code: 'VN', dialCode: '+84', flag: '🇻🇳', placeholder: '91 234 5678', sampleDigits: '912345678' },
  { name: 'Thailand', code: 'TH', dialCode: '+66', flag: '🇹🇭', placeholder: '81 234 5678', sampleDigits: '812345678' },
  { name: 'South Africa', code: 'ZA', dialCode: '+27', flag: '🇿🇦', placeholder: '71 123 4567', sampleDigits: '711234567' },
  { name: 'Nigeria', code: 'NG', dialCode: '+234', flag: '🇳🇬', placeholder: '802 123 4567', sampleDigits: '8021234567' },
  { name: 'Kenya', code: 'KE', dialCode: '+254', flag: '🇰🇪', placeholder: '712 345678', sampleDigits: '712345678' },
  { name: 'Brazil', code: 'BR', dialCode: '+55', flag: '🇧🇷', placeholder: '11 91234-5678', sampleDigits: '11912345678' },
  { name: 'Mexico', code: 'MX', dialCode: '+52', flag: '🇲🇽', placeholder: '55 1234 5678', sampleDigits: '5512345678' },
  { name: 'Netherlands', code: 'NL', dialCode: '+31', flag: '🇳🇱', placeholder: '6 12345678', sampleDigits: '612345678' },
  { name: 'Switzerland', code: 'CH', dialCode: '+41', flag: '🇨🇭', placeholder: '78 123 45 67', sampleDigits: '781234567' },
  { name: 'New Zealand', code: 'NZ', dialCode: '+64', flag: '🇳🇿', placeholder: '21 123 4567', sampleDigits: '211234567' },
];

export const DEFAULT_COUNTRY = COUNTRIES[0]; // India (+91)

export function findCountryByCodeOrDial(val?: string): Country {
  if (!val) return DEFAULT_COUNTRY;
  const match = COUNTRIES.find(
    (c) => c.code.toLowerCase() === val.toLowerCase() || c.dialCode === val || c.dialCode === `+${val.replace(/\D/g, '')}`
  );
  return match || DEFAULT_COUNTRY;
}
