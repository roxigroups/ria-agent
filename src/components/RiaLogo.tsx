import React from 'react';

interface RiaLogoProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'full' | 'mark';
  theme?: 'light' | 'dark' | 'transparent';
  size?: number | string;
}

export const RiaLogo: React.FC<RiaLogoProps> = ({
  variant = 'full',
  theme = 'transparent',
  size,
  width = size || (variant === 'full' ? 240 : 46),
  height = size || (variant === 'full' ? 240 : 46),
  className = '',
  style,
  ...props
}) => {
  const isDark = theme === 'dark';
  const showBg = theme === 'light';

  // Typography colors based on theme
  const textColor = isDark ? '#FFFFFF' : '#061B4A';
  const subtitleColor = isDark ? '#A3A3A3' : '#0A1E4A';

  if (variant === 'mark') {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="50 180 910 360"
        width={width}
        height={height}
        className={className}
        style={{ display: 'block', ...style }}
        {...props}
      >
        <defs>
          <linearGradient id="ria-mark-top-ribbon" x1="0%" y1="0%" x2="100%" y2="80%">
            <stop offset="0%" stop-color="#004AE6" />
            <stop offset="30%" stop-color="#0066FF" />
            <stop offset="65%" stop-color="#004AE0" />
            <stop offset="100%" stop-color="#002DB3" />
          </linearGradient>

          <linearGradient id="ria-mark-fold-crease" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#021445" />
            <stop offset="45%" stop-color="#051C5C" />
            <stop offset="100%" stop-color="#0035A0" />
          </linearGradient>

          <linearGradient id="ria-mark-lower-r" x1="0%" y1="80%" x2="100%" y2="20%">
            <stop offset="0%" stop-color="#002499" />
            <stop offset="30%" stop-color="#0047E0" />
            <stop offset="65%" stop-color="#005BFF" />
            <stop offset="100%" stop-color="#003BC4" />
          </linearGradient>

          <linearGradient id="ria-mark-infinity-loop" x1="10%" y1="35%" x2="100%" y2="55%">
            <stop offset="0%" stop-color="#0040D0" />
            <stop offset="22%" stop-color="#0062FF" />
            <stop offset="48%" stop-color="#0096FF" />
            <stop offset="75%" stop-color="#00C9E8" />
            <stop offset="100%" stop-color="#00EFFF" />
          </linearGradient>

          <linearGradient id="ria-mark-arrow-grad" x1="0%" y1="90%" x2="100%" y2="10%">
            <stop offset="0%" stop-color="#008EB8" />
            <stop offset="35%" stop-color="#00BCEB" />
            <stop offset="75%" stop-color="#00DBF2" />
            <stop offset="100%" stop-color="#00F4FF" />
          </linearGradient>

          <linearGradient id="ria-mark-circuit-grad" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stop-color="#007BFF" />
            <stop offset="60%" stop-color="#0050EB" />
            <stop offset="100%" stop-color="#002CB0" />
          </linearGradient>

          <filter id="ria-mark-depth" x="-5%" y="-5%" width="110%" height="110%">
            <feDropShadow dx="0" dy="2" stdDeviation="2.5" floodColor="#0033AA" floodOpacity="0.10" />
          </filter>
        </defs>

        {/* Left Circuit Network */}
        <g stroke="url(#ria-mark-circuit-grad)" strokeWidth="4.2" strokeLinecap="round" strokeLinejoin="round" fill="none">
          <path d="M 130 268 H 195 L 225 298 H 255" />
          <path d="M 95 302 H 258" />
          <path d="M 148 302 L 168 322 H 215" />
          <path d="M 80 351 H 165 L 190 326 H 242" />
          <path d="M 112 397 H 175 L 205 410 H 262" />
          <path d="M 155 370 H 235" />
          <path d="M 160 436 H 265" />
          <path d="M 220 462 H 272" />
        </g>

        {/* Circuit Nodes */}
        <g>
          <circle cx="130" cy="268" r="8" fill="#005CE6" />
          <circle cx="95" cy="302" r="9" fill="#0066FF" />
          <circle cx="148" cy="302" r="5.5" fill="#0099FF" />
          <circle cx="80" cy="351" r="9" fill="#005CE6" />
          <circle cx="125" cy="351" r="5" fill="#00C7FF" />
          <circle cx="155" cy="370" r="7.5" fill="#0077FF" />
          <circle cx="112" cy="397" r="9" fill="#0044CC" />
          <circle cx="178" cy="390" r="6.5" fill="#0066FF" />
          <circle cx="160" cy="436" r="8" fill="#0055EE" />
          <circle cx="220" cy="462" r="7.5" fill="#0039B3" />

          <circle cx="140" cy="235" r="5.5" fill="#0066FF" />
          <circle cx="175" cy="245" r="4.5" fill="#0080FF" />
          <circle cx="110" cy="325" r="5.5" fill="#0055EE" />
          <circle cx="145" cy="415" r="5" fill="#0077FF" />
          <circle cx="200" cy="478" r="4.5" fill="#0044CC" />
          <circle cx="224" cy="300" r="5" fill="#0077FF" />
          <circle cx="252" cy="301" r="5" fill="#0055FF" />
        </g>

        {/* Ribbon Infinity Mark */}
        <g filter="url(#ria-mark-depth)">
          <path
            d="M 526 365
               C 572 285, 630 220, 712 220
               C 806 220, 878 275, 878 360
               C 878 445, 806 506, 714 506
               C 630 506, 570 440, 526 365 Z
               M 558 365
               C 595 420, 645 456, 714 456
               C 775 456, 824 415, 824 360
               C 824 305, 775 270, 712 270
               C 645 270, 595 315, 558 365 Z"
            fill="url(#ria-mark-infinity-loop)"
            fillRule="evenodd"
          />

          <path
            d="M 176 219
               L 425 219
               C 475 219, 508 255, 508 300
               C 508 340, 475 365, 425 365
               L 260 365
               C 255 345, 270 330, 290 320
               L 415 315
               C 440 315, 452 305, 452 290
               C 452 270, 435 260, 410 260
               L 221 268
               L 176 219 Z"
            fill="url(#ria-mark-top-ribbon)"
          />

          <path
            d="M 425 365
               L 260 365
               C 285 385, 325 398, 375 398
               L 460 348
               C 445 360, 432 365, 425 365 Z"
            fill="url(#ria-mark-fold-crease)"
          />

          <path
            d="M 260 365
               C 265 410, 295 460, 350 492
               C 405 522, 475 480, 526 365
               C 495 330, 460 355, 428 392
               C 395 432, 352 445, 318 422
               C 292 402, 278 382, 260 365 Z"
            fill="url(#ria-mark-lower-r)"
          />
        </g>

        {/* Dynamic Arrow */}
        <g filter="url(#ria-mark-depth)">
          <path
            d="M 650 435
               C 680 428, 725 408, 762 376
               L 750 364
               L 810 348
               L 794 412
               L 778 396
               C 740 422, 695 440, 650 435 Z"
            fill="url(#ria-mark-arrow-grad)"
          />
        </g>

        {/* Orbiting Dots */}
        <g>
          <circle cx="887" cy="250.5" r="12" fill="#0172E1" />
          <circle cx="909.5" cy="287" r="11.5" fill="#008DCE" />
          <circle cx="920.5" cy="325" r="10" fill="#00A4CC" />
          <circle cx="923.5" cy="362" r="8.5" fill="#00B8C3" />
          <circle cx="920" cy="393.5" r="7" fill="#03C3BF" />
          <circle cx="913" cy="416.5" r="5.5" fill="#06C9C3" />
        </g>
      </svg>
    );
  }

  // Full Logo Variant
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1024 1024"
      width={width}
      height={height}
      className={className}
      style={{ display: 'block', ...style }}
      {...props}
    >
      <defs>
        {showBg && (
          <radialGradient id="ria-full-bg" cx="50%" cy="46%" r="62%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="70%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#F5F8FA" />
          </radialGradient>
        )}

        <linearGradient id="ria-top-ribbon" x1="0%" y1="0%" x2="100%" y2="80%">
          <stop offset="0%" stopColor="#004AE6" />
          <stop offset="30%" stopColor="#0066FF" />
          <stop offset="65%" stopColor="#004AE0" />
          <stop offset="100%" stopColor="#002DB3" />
        </linearGradient>

        <linearGradient id="ria-fold-crease" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#021445" />
          <stop offset="45%" stopColor="#051C5C" />
          <stop offset="100%" stopColor="#0035A0" />
        </linearGradient>

        <linearGradient id="ria-lower-r" x1="0%" y1="80%" x2="100%" y2="20%">
          <stop offset="0%" stopColor="#002499" />
          <stop offset="30%" stopColor="#0047E0" />
          <stop offset="65%" stopColor="#005BFF" />
          <stop offset="100%" stopColor="#003BC4" />
        </linearGradient>

        <linearGradient id="ria-infinity-loop" x1="10%" y1="35%" x2="100%" y2="55%">
          <stop offset="0%" stopColor="#0040D0" />
          <stop offset="22%" stopColor="#0062FF" />
          <stop offset="48%" stopColor="#0096FF" />
          <stop offset="75%" stopColor="#00C9E8" />
          <stop offset="100%" stopColor="#00EFFF" />
        </linearGradient>

        <linearGradient id="ria-arrow-grad" x1="0%" y1="90%" x2="100%" y2="10%">
          <stop offset="0%" stopColor="#008EB8" />
          <stop offset="35%" stopColor="#00BCEB" />
          <stop offset="75%" stopColor="#00DBF2" />
          <stop offset="100%" stopColor="#00F4FF" />
        </linearGradient>

        <linearGradient id="ria-circuit-grad" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="0%" stopColor="#007BFF" />
          <stop offset="60%" stopColor="#0050EB" />
          <stop offset="100%" stopColor="#002CB0" />
        </linearGradient>

        <radialGradient id="ria-cyan-sphere" cx="38%" cy="38%" r="62%">
          <stop offset="0%" stopColor="#4BF2FF" />
          <stop offset="28%" stopColor="#00B8F5" />
          <stop offset="72%" stopColor="#007AE6" />
          <stop offset="100%" stopColor="#0044B3" />
        </radialGradient>

        <linearGradient id="ria-rule-left" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0033A0" />
          <stop offset="100%" stopColor="#0055FF" />
        </linearGradient>
        <linearGradient id="ria-rule-right" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#00A0B5" />
          <stop offset="100%" stopColor="#00D8D9" />
        </linearGradient>

        <filter id="ria-depth" x="-5%" y="-5%" width="110%" height="110%">
          <feDropShadow dx="0" dy="2" stdDeviation="2.5" floodColor="#0033AA" floodOpacity="0.10" />
        </filter>
      </defs>

      {showBg && <rect width="1024" height="1024" fill="url(#ria-full-bg)" rx="32" />}

      {/* 1. Circuit Network */}
      <g stroke="url(#ria-circuit-grad)" strokeWidth="4.2" strokeLinecap="round" strokeLinejoin="round" fill="none">
        <path d="M 130 268 H 195 L 225 298 H 255" />
        <path d="M 95 302 H 258" />
        <path d="M 148 302 L 168 322 H 215" />
        <path d="M 80 351 H 165 L 190 326 H 242" />
        <path d="M 112 397 H 175 L 205 410 H 262" />
        <path d="M 155 370 H 235" />
        <path d="M 160 436 H 265" />
        <path d="M 220 462 H 272" />
      </g>

      <g>
        <circle cx="130" cy="268" r="8" fill="#005CE6" />
        <circle cx="95" cy="302" r="9" fill="#0066FF" />
        <circle cx="148" cy="302" r="5.5" fill="#0099FF" />
        <circle cx="80" cy="351" r="9" fill="#005CE6" />
        <circle cx="125" cy="351" r="5" fill="#00C7FF" />
        <circle cx="155" cy="370" r="7.5" fill="#0077FF" />
        <circle cx="112" cy="397" r="9" fill="#0044CC" />
        <circle cx="178" cy="390" r="6.5" fill="#0066FF" />
        <circle cx="160" cy="436" r="8" fill="#0055EE" />
        <circle cx="220" cy="462" r="7.5" fill="#0039B3" />

        <circle cx="140" cy="235" r="5.5" fill="#0066FF" />
        <circle cx="175" cy="245" r="4.5" fill="#0080FF" />
        <circle cx="110" cy="325" r="5.5" fill="#0055EE" />
        <circle cx="145" cy="415" r="5" fill="#0077FF" />
        <circle cx="200" cy="478" r="4.5" fill="#0044CC" />
        <circle cx="224" cy="300" r="5" fill="#0077FF" />
        <circle cx="252" cy="301" r="5" fill="#0055FF" />
      </g>

      {/* 2. Ribbon Emblem */}
      <g filter="url(#ria-depth)">
        <path
          d="M 526 365
             C 572 285, 630 220, 712 220
             C 806 220, 878 275, 878 360
             C 878 445, 806 506, 714 506
             C 630 506, 570 440, 526 365 Z
             M 558 365
             C 595 420, 645 456, 714 456
             C 775 456, 824 415, 824 360
             C 824 305, 775 270, 712 270
             C 645 270, 595 315, 558 365 Z"
          fill="url(#ria-infinity-loop)"
          fillRule="evenodd"
        />

        <path
          d="M 176 219
             L 425 219
             C 475 219, 508 255, 508 300
             C 508 340, 475 365, 425 365
             L 260 365
             C 255 345, 270 330, 290 320
             L 415 315
             C 440 315, 452 305, 452 290
             C 452 270, 435 260, 410 260
             L 221 268
             L 176 219 Z"
          fill="url(#ria-top-ribbon)"
        />

        <path
          d="M 425 365
             L 260 365
             C 285 385, 325 398, 375 398
             L 460 348
             C 445 360, 432 365, 425 365 Z"
          fill="url(#ria-fold-crease)"
        />

        <path
          d="M 260 365
             C 265 410, 295 460, 350 492
             C 405 522, 475 480, 526 365
             C 495 330, 460 355, 428 392
             C 395 432, 352 445, 318 422
             C 292 402, 278 382, 260 365 Z"
          fill="url(#ria-lower-r)"
        />
      </g>

      {/* 3. Arrow */}
      <g filter="url(#ria-depth)">
        <path
          d="M 650 435
             C 680 428, 725 408, 762 376
             L 750 364
             L 810 348
             L 794 412
             L 778 396
             C 740 422, 695 440, 650 435 Z"
          fill="url(#ria-arrow-grad)"
        />
      </g>

      {/* 4. Orbiting Dots */}
      <g>
        <circle cx="887" cy="250.5" r="12" fill="#0172E1" />
        <circle cx="909.5" cy="287" r="11.5" fill="#008DCE" />
        <circle cx="920.5" cy="325" r="10" fill="#00A4CC" />
        <circle cx="923.5" cy="362" r="8.5" fill="#00B8C3" />
        <circle cx="920" cy="393.5" r="7" fill="#03C3BF" />
        <circle cx="913" cy="416.5" r="5.5" fill="#06C9C3" />
      </g>

      {/* 5. Typography: RIA */}
      <g fill={textColor}>
        <path
          d="M 269 540
             H 382
             C 415 540, 432 560, 432 590
             C 432 620, 412 638, 380 638
             L 435 672
             H 392
             L 345 638
             H 308
             V 672
             H 269
             Z
             M 308 570
             V 608
             H 376
             C 392 608, 402 600, 402 589
             C 402 578, 392 570, 376 570
             Z"
        />
        <path d="M 518 540 H 550 V 672 H 518 Z" />
        <path
          d="M 696 540
             H 709
             L 795 672
             H 754
             L 702.5 596
             L 651 672
             H 610
             Z"
        />
        <circle cx="702.5" cy="647" r="17.5" fill="url(#ria-cyan-sphere)" filter="url(#ria-depth)" />
      </g>

      {/* 6. Subtitles */}
      <g>
        <line x1="130" y1="721" x2="190" y2="721" stroke="url(#ria-rule-left)" strokeWidth="4.2" strokeLinecap="round" />
        <text
          x="512"
          y="730"
          fontFamily="system-ui, -apple-system, 'Segoe UI', Roboto, Montserrat, sans-serif"
          fontSize="26.5"
          fontWeight="800"
          letterSpacing="0.22em"
          fill={textColor}
          textAnchor="middle"
        >
          AI-POWERED DISTRIBUTION
        </text>
        <line x1="870" y1="721" x2="930" y2="721" stroke="url(#ria-rule-right)" strokeWidth="4.2" strokeLinecap="round" />

        <text
          x="512"
          y="776"
          fontFamily="system-ui, -apple-system, 'Segoe UI', Roboto, Montserrat, sans-serif"
          fontSize="20"
          fontWeight="600"
          letterSpacing="0.36em"
          fill={subtitleColor}
          textAnchor="middle"
        >
          INTELLIGENCE PLATFORM
        </text>
      </g>
    </svg>
  );
};

export default RiaLogo;
