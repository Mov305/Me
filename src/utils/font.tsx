import { Lobster, Dosis, Teko } from 'next/font/google';

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

export const teko = Teko({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-teko',
});
