import { Inter } from 'next/font/google';
import { ReactNode } from 'react';

import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

const user = {
  title: 'Sahil Malviya',
  description: 'Sahil Malviya Portfolio'
};

export const metadata: Metadata = {
  title: user.title,
  description: user.description
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
