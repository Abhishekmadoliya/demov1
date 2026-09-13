"use client";

import React from "react";

interface TaxLogoProps {
  variant?: "white" | "colored";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function TaxLogo({
  variant = "colored",
  size = "md",
  className = "",
}: TaxLogoProps) {
  // Dimension mappings
  const dimensions = {
    sm: { width: 140, height: 46, taxSize: 34, solutionsSize: 11, spacing: 5 },
    md: { width: 180, height: 60, taxSize: 44, solutionsSize: 14, spacing: 6.5 },
    lg: { width: 220, height: 74, taxSize: 54, solutionsSize: 17, spacing: 8 },
  };

  const current = dimensions[size];
  const isWhite = variant === "white";
  const primaryColor = isWhite ? "#ffffff" : "var(--brand-primary, #0747a6)";
  const checkColor = "var(--brand-accent-green, #22c55e)";

  return (
    <div className={`inline-flex flex-col items-center select-none ${className}`}>
      <svg
        width={current.width}
        height={current.height}
        viewBox="0 0 190 62"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible"
        role="img"
        aria-label="Tax Solutions Logo"
      >
        {/* T */}
        <path
          d="M 12 8 H 44 V 16 H 32 V 42 H 24 V 16 H 12 Z"
          fill={primaryColor}
        />

        {/* A */}
        <path
          d="M 64 8 L 47 42 H 56 L 60.5 33 H 73.5 L 78 42 H 87 L 70 8 H 64 Z M 67 19.5 L 70.8 27 H 63.2 L 67 19.5 Z"
          fill={primaryColor}
        />

        {/* X - Top-Left to Bottom-Right arm */}
        <path
          d="M 94 8 L 105 24 L 117 42 H 106.5 L 99 30.5 L 91.5 42 H 83 L 95 24 L 85 8 H 94 Z"
          fill={primaryColor}
        />

        {/* Green Checkmark integrated with X */}
        <path
          d="M 99 26 L 108 34.5 L 126 9 L 132 13.5 L 109 42 L 94 28 Z"
          fill={checkColor}
          stroke={isWhite ? "#073474" : "#ffffff"}
          strokeWidth="1.5"
          strokeLinejoin="round"
        />

        {/* SOLUTIONS text below */}
        <text
          x="95"
          y="58"
          textAnchor="middle"
          fill={primaryColor}
          fontSize="14"
          fontWeight="800"
          fontFamily="var(--font-sans), system-ui, -apple-system, sans-serif"
          letterSpacing="4.5"
        >
          SOLUTIONS
        </text>
      </svg>
    </div>
  );
}
