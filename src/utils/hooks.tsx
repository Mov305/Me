'use client';

import { useState, useLayoutEffect } from 'react';

// helpers
const clamp = (value: number) => Math.max(0, value);
const isBetween = (value: number, min: number, max: number) => value >= min && value <= max;

// scroll hook
export const useScrolly = (ids: string[], offset: number = 0) => {
  if (typeof window === 'undefined') return null;
  const [activeId, setActiveId] = useState<string | null>('');

  useLayoutEffect(() => {
    const listener = () => {
      const scroll = window.scrollY + offset;

      const position = ids
        .map((id) => {
          const ele = document.getElementById(id);
          if (!ele) return { id, top: -1, bottom: -1 };

          const rectangle = ele.getBoundingClientRect();
          const top = clamp(rectangle.top + scroll - offset);
          const bottom = clamp(rectangle.bottom + scroll - offset);

          return { id, top, bottom };
        })
        .find(({ top, bottom }) => isBetween(scroll, top, bottom));
      setActiveId(position?.id ?? '');
    };

    listener();

    window.addEventListener('resize', listener);
    window.addEventListener('scroll', listener);

    return () => {
      window.removeEventListener('resize', listener);
      window.removeEventListener('scroll', listener);
    };
  }, [ids, offset]);

  return activeId;
};
