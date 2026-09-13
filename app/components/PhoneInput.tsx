"use client";

import React, { useState } from "react";

interface PhoneInputProps {
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  placeholder?: string;
  autoFocus?: boolean;
}

export default function PhoneInput({
  value,
  onChange,
  disabled = false,
  placeholder = "98765 43210",
  autoFocus = false,
}: PhoneInputProps) {
  const [isFocused, setIsFocused] = useState(false);

  // Format raw digits to "XXXXX XXXXX" (standard Indian 10-digit mobile layout)
  const formatPhoneNumber = (input: string) => {
    const digits = input.replace(/\D/g, "").slice(0, 10);
    if (digits.length <= 5) {
      return digits;
    }
    return `${digits.slice(0, 5)} ${digits.slice(5)}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    onChange(formatted);
  };

  return (
    <div
      className={`w-full flex items-center bg-white rounded-xl border transition-all duration-200 px-3.5 py-2.5 sm:py-3 ${
        isFocused
          ? "border-[var(--brand-primary)] ring-2 ring-[var(--brand-primary-light)] shadow-sm"
          : "border-[#e2e8f0] hover:border-[#cbd5e1] shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
      } ${disabled ? "opacity-60 cursor-not-allowed bg-slate-50" : ""}`}
    >
      {/* Country Flag & Dial Code Group */}
      <div className="flex items-center gap-2 pr-3 select-none flex-shrink-0">
        {/* Indian Flag SVG */}
        <div className="w-6 h-4.5 rounded-[3px] overflow-hidden shadow-xs border border-slate-200/80 flex flex-col justify-between flex-shrink-0">
          <div className="h-1.5 bg-[#FF9933] w-full" />
          <div className="h-1.5 bg-white w-full flex items-center justify-center relative">
            {/* Ashoka Chakra */}
            <div className="w-1.5 h-1.5 rounded-full border-[0.8px] border-[#000080] flex items-center justify-center">
              <div className="w-0.5 h-0.5 rounded-full bg-[#000080]" />
            </div>
          </div>
          <div className="h-1.5 bg-[#128807] w-full" />
        </div>

        {/* Dial code */}
        <span className="text-[15px] font-semibold text-slate-700 tracking-tight">
          +91
        </span>
      </div>

      {/* Vertical Divider */}
      <div className="w-[1px] h-6 bg-slate-200 mr-3 flex-shrink-0" />

      {/* Phone input field */}
      <input
        type="tel"
        inputMode="numeric"
        autoComplete="tel"
        autoFocus={autoFocus}
        disabled={disabled}
        value={value}
        onChange={handleChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={placeholder}
        className="w-full bg-transparent text-[15px] sm:text-[16px] font-medium text-slate-800 placeholder:text-slate-400 placeholder:font-normal outline-none focus:outline-none tracking-wider"
      />
    </div>
  );
}
