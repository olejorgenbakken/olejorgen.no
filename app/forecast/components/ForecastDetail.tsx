'use client';
import Image from 'next/image';
import type React from 'react';

import './ForecastDetail.css';
import { useState } from 'react';

interface ForecastDetailProps {
  icon: string;
  value: string;
  label: string;
  color?: 'red' | 'blue' | 'green' | 'yellow' | 'purple' | 'pink' | 'orange';
}

export const ForecastDetail: React.FC<ForecastDetailProps> = ({
  icon,
  label = '',
  value,
  color,
}) => {
  const [showLabel, setShowLabel] = useState(false);
  return (
    <button
      className="forecast-detail"
      onClick={() => setShowLabel(!showLabel)}
      style={
        color
          ? {
              background: `var(--color-${color})`,
              color: 'var(--color-text-light)',
            }
          : {}
      }>
      <Image
        src={`/icons/${icon}.png`}
        alt=""
        width={24}
        height={24}
      />
      {showLabel && <span className="explained">{label}: </span>}
      <span>{value}</span>
    </button>
  );
};
