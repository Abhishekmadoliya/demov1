"use client";

import React from "react";

interface CitySkylineProps {
  className?: string;
  opacity?: number;
}

export default function CitySkyline({
  className = "",
  opacity = 0.28,
}: CitySkylineProps) {
  return (
    <div className={`w-full overflow-hidden pointer-events-none ${className}`}>
      <svg
        viewBox="0 0 400 130"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMax meet"
        className="w-full h-auto block"
        style={{ opacity }}
      >
        {/* Sky glow layer behind buildings */}
        <defs>
          <linearGradient id="skylineGrad" x1="200" y1="0" x2="200" y2="130" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#93c5fd" stopOpacity="0.05" />
          </linearGradient>
          <linearGradient id="buildingFill" x1="0" y1="0" x2="0" y2="130" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#0f172a" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* Far background silhouettes (layer 1) */}
        <g stroke="#93c5fd" strokeWidth="0.75" strokeOpacity="0.4" fill="url(#buildingFill)">
          {/* Far left spire */}
          <path d="M 25 130 L 25 65 L 35 45 L 35 30 L 37 30 L 37 20 L 38 12 L 39 20 L 39 30 L 41 30 L 41 45 L 51 65 L 51 130 Z" />
          
          {/* Far mid-left building */}
          <path d="M 95 130 L 95 50 L 125 50 L 125 130 Z" />
          <path d="M 110 50 L 110 32 L 111 32 L 111 50" />
          
          {/* Far center-right tower */}
          <path d="M 235 130 L 235 40 L 270 40 L 270 130 Z" />
          <path d="M 252 40 L 252 22 L 253 22 L 253 40" />

          {/* Far right tower */}
          <path d="M 345 130 L 345 55 L 375 35 L 375 130 Z" />
        </g>

        {/* Main midground buildings (layer 2) with detailed windows */}
        <g stroke="#bae6fd" strokeWidth="1" strokeOpacity="0.75" fill="none">
          {/* Building 1: Left pointed spire building */}
          <path d="M 10 130 L 10 75 L 30 55 L 42 55 L 62 75 L 62 130" />
          <line x1="36" y1="55" x2="36" y2="35" strokeWidth="1.5" />
          {/* Building 1 windows */}
          <g fill="#bae6fd" fillOpacity="0.7" stroke="none">
            <rect x="20" y="80" width="3" height="3" rx="0.5" />
            <rect x="28" y="80" width="3" height="3" rx="0.5" />
            <rect x="36" y="80" width="3" height="3" rx="0.5" />
            <rect x="44" y="80" width="3" height="3" rx="0.5" />
            
            <rect x="20" y="90" width="3" height="3" rx="0.5" />
            <rect x="28" y="90" width="3" height="3" rx="0.5" />
            <rect x="36" y="90" width="3" height="3" rx="0.5" />
            <rect x="44" y="90" width="3" height="3" rx="0.5" />

            <rect x="20" y="100" width="3" height="3" rx="0.5" />
            <rect x="28" y="100" width="3" height="3" rx="0.5" />
            <rect x="36" y="100" width="3" height="3" rx="0.5" />
            <rect x="44" y="100" width="3" height="3" rx="0.5" />

            <rect x="20" y="110" width="3" height="3" rx="0.5" />
            <rect x="28" y="110" width="3" height="3" rx="0.5" />
            <rect x="36" y="110" width="3" height="3" rx="0.5" />
            <rect x="44" y="110" width="3" height="3" rx="0.5" />
          </g>

          {/* Building 2: Sloped commercial building */}
          <path d="M 66 130 L 66 70 L 105 70 L 105 130" />
          {/* Building 2 horizontal grooves & windows */}
          <line x1="66" y1="82" x2="105" y2="82" strokeOpacity="0.4" />
          <line x1="66" y1="94" x2="105" y2="94" strokeOpacity="0.4" />
          <line x1="66" y1="106" x2="105" y2="106" strokeOpacity="0.4" />
          <line x1="66" y1="118" x2="105" y2="118" strokeOpacity="0.4" />
          <g fill="#bae6fd" fillOpacity="0.75" stroke="none">
            <rect x="74" y="74" width="4" height="4" />
            <rect x="84" y="74" width="4" height="4" />
            <rect x="94" y="74" width="4" height="4" />

            <rect x="74" y="86" width="4" height="4" />
            <rect x="84" y="86" width="4" height="4" />
            <rect x="94" y="86" width="4" height="4" />

            <rect x="74" y="98" width="4" height="4" />
            <rect x="84" y="98" width="4" height="4" />
            <rect x="94" y="98" width="4" height="4" />

            <rect x="74" y="110" width="4" height="4" />
            <rect x="84" y="110" width="4" height="4" />
            <rect x="94" y="110" width="4" height="4" />
          </g>

          {/* Building 3: Center-left highrise with decorative crown */}
          <path d="M 112 130 L 112 48 L 118 44 L 148 44 L 154 48 L 154 130" />
          <line x1="133" y1="44" x2="133" y2="28" strokeWidth="1.2" />
          {/* Center building window matrix */}
          <g fill="#e0f2fe" fillOpacity="0.8" stroke="none">
            {[54, 64, 74, 84, 94, 104, 114].map((y) => (
              <React.Fragment key={y}>
                <rect x="120" y={y} width="5" height="4" rx="0.5" />
                <rect x="131" y={y} width="5" height="4" rx="0.5" />
                <rect x="142" y={y} width="5" height="4" rx="0.5" />
              </React.Fragment>
            ))}
          </g>

          {/* Building 4: Center prominent tower */}
          <path d="M 160 130 L 160 36 L 166 32 L 204 32 L 210 36 L 210 130" />
          <path d="M 180 32 L 185 18 L 186 18 L 190 32" strokeWidth="1" />
          <line x1="185.5" y1="18" x2="185.5" y2="8" strokeWidth="1.5" />
          {/* Center tower windows */}
          <g fill="#bae6fd" fillOpacity="0.85" stroke="none">
            {[40, 50, 60, 70, 80, 90, 100, 110, 120].map((y) => (
              <React.Fragment key={y}>
                <rect x="168" y={y} width="6" height="4" rx="0.5" />
                <rect x="182" y={y} width="6" height="4" rx="0.5" />
                <rect x="196" y={y} width="6" height="4" rx="0.5" />
              </React.Fragment>
            ))}
          </g>

          {/* Building 5: Modern stepped office */}
          <path d="M 216 130 L 216 62 L 222 62 L 222 52 L 254 52 L 254 62 L 260 62 L 260 130" />
          <g fill="#bae6fd" fillOpacity="0.75" stroke="none">
            {[66, 76, 86, 96, 106, 116].map((y) => (
              <React.Fragment key={y}>
                <rect x="224" y={y} width="4" height="4" />
                <rect x="234" y={y} width="4" height="4" />
                <rect x="244" y={y} width="4" height="4" />
              </React.Fragment>
            ))}
          </g>

          {/* Building 6: Prominent right skyscraper with spire */}
          <path d="M 268 130 L 268 45 L 290 26 L 312 45 L 312 130" />
          <line x1="290" y1="26" x2="290" y2="10" strokeWidth="1.5" />
          {/* Building 6 windows */}
          <g fill="#e0f2fe" fillOpacity="0.8" stroke="none">
            {[50, 60, 70, 80, 90, 100, 110, 120].map((y) => (
              <React.Fragment key={y}>
                <rect x="276" y={y} width="5" height="4" rx="0.5" />
                <rect x="287.5" y={y} width="5" height="4" rx="0.5" />
                <rect x="299" y={y} width="5" height="4" rx="0.5" />
              </React.Fragment>
            ))}
          </g>

          {/* Building 7: Far-right towers */}
          <path d="M 318 130 L 318 60 L 350 60 L 350 130" />
          <line x1="334" y1="60" x2="334" y2="44" strokeWidth="1" />
          <g fill="#bae6fd" fillOpacity="0.7" stroke="none">
            {[68, 80, 92, 104, 116].map((y) => (
              <React.Fragment key={y}>
                <rect x="325" y={y} width="4" height="4" />
                <rect x="339" y={y} width="4" height="4" />
              </React.Fragment>
            ))}
          </g>

          {/* Building 8: Edge right building */}
          <path d="M 356 130 L 356 72 L 372 58 L 388 58 L 395 64 L 395 130" />
          <g fill="#bae6fd" fillOpacity="0.65" stroke="none">
            {[76, 88, 100, 112].map((y) => (
              <React.Fragment key={y}>
                <rect x="365" y={y} width="5" height="4" />
                <rect x="378" y={y} width="5" height="4" />
              </React.Fragment>
            ))}
          </g>

          {/* Baseline grounding line */}
          <line x1="0" y1="129.5" x2="400" y2="129.5" stroke="#93c5fd" strokeWidth="1" strokeOpacity="0.5" />
        </g>
      </svg>
    </div>
  );
}
