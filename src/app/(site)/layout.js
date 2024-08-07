import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Theme } from '@/utils/themes';
import { getThemeUrl } from '@/utils/sanity';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

const Scene = dynamic(() => import('@/components/canvas/Scene'), { ssr: false });

const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : 'http://localhost:3000';

export const metadata = {
  metadataBase: new URL(baseUrl),
  keywords: ['Ruben', 'Panzich', 'Rubeanie', 'Portfolio', 'About', 'Links', 'Contact', 'Artist', 'Developer'],
  authors: [{ name: 'Ruben Panzich', url: 'https://www.ruben-p.com' }],
  other: {
    "darkreader-lock": true,
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#121212',
  colorScheme: 'dark',
  viewportFit: 'cover',
  interactiveWidget: 'overlays-content'
}

export default async function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children
}) {
  const data = await getThemeUrl();
  return (
    <>
      <div className='background-image' />
      <Navbar />
      {children}
      <Scene
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          pointerEvents: 'none'
        }}
      />
      <Theme url={data} />
      <Analytics />
      <SpeedInsights />
      <Footer />
    </>
  );
}
