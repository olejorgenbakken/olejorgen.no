'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';

import './SlideIn.css';

interface SlideInFromBottomProps {
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
  children: React.ReactNode;
}
export const SlideIn: React.FC<SlideInFromBottomProps> = ({
  children,
  direction = 'up',
}) => {
  return (
    <div
      className="slide-in"
      data-direction={direction}>
      {children}
    </div>
  );
};
