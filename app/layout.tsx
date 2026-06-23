import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  title: '430 — Number, Wavelength, History & More | 430.me',
  description: 'Everything about 430: HTTP status codes, 430nm violet light, 430 BC history, the 4:30 AM habit, and more. Also: 430.me domain for sale.',
  metadataBase: new URL('https://430.me'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: '430 — Number, Wavelength, History & More | 430.me',
    description: 'Everything about 430: HTTP status codes, 430nm violet light, 430 BC history, the 4:30 AM habit, and more. Also: 430.me domain for sale.',
    url: 'https://430.me',
    siteName: '430.me - Encyclopedia & Registry',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '430 — Number, Wavelength, History & More | 430.me',
    description: 'Explore the infinite facets of the number 430 across technology, science, history, chronology, and geography. Domain for sale.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} scroll-smooth`}>
      <body suppressHydrationWarning className="bg-[#0A0A0F] text-white antialiased font-sans">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
