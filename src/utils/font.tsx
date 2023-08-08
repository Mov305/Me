import { Lobster, Dosis } from 'next/font/google';

export const lobster = Lobster({
  subsets: ['latin', 'latin-ext'],
  weight: ['400'],
  variable: '--font-lobster',
});

export const dosis = Dosis({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '700'],
  variable: '--font-dosis',
});
