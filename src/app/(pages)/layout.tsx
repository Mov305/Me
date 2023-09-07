import './globals.css';
import type { Metadata } from 'next';
// Components

import { teko } from '@/utils/font';

export const metadata: Metadata = {
  title: 'ABDELRHMAN (MOV)',
  description: 'Abdelrhman (MOV) is a full-stack developer and a UI/UX designer.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={teko.className}>
        {/* space gradient background */}
        {children}
      </body>
    </html>
  );
}
