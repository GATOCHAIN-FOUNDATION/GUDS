import './globals.css';
import Providers from '../providers/providers';
import React from 'react';
import { Toaster } from 'react-hot-toast';

export const metadata = {
  title: 'GUDS',
  description: '',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
