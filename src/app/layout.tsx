import type { Metadata, Viewport } from 'next';
import './globals.css';
import WhatsAppWidget from '@/components/WhatsAppWidget';

export const metadata: Metadata = {
  title: 'RIA ai Agent',
  description: 'Next-generation autonomous AI collection agent fleet with real-time voice, multimodal context reasoning, and high-concurrency enterprise support.',
  keywords: ['RIA ai Agent', 'AI collection agent', 'autonomous voice agent', 'multimodal AI', 'call center AI', 'RIA Intelligence'],
  authors: [{ name: 'RIA ai Agent' }],
  icons: {
    icon: '/images/ria-logo.jpg',
    shortcut: '/images/ria-logo.jpg',
    apple: '/images/ria-logo.jpg',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#000000',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        {children}
        <WhatsAppWidget />
      </body>
    </html>
  );
}
