import type { Metadata } from 'next';
import { unstable_cache } from 'next/cache';
import { Host_Grotesk } from 'next/font/google';
import Script from 'next/script';
import { type GlobalSlug, getPayload } from 'payload';

import { Navigation } from '@/components/navigation';
import { env } from '@/env/client';
import { cn } from '@/lib/utils/cn';
import config from '@payload-config';

import './globals.css';

const hostGrotesk = Host_Grotesk({
  subsets: ['latin'],
  weight: 'variable',
  display: 'swap',
  variable: '--font-host-grotesk',
});

export const metadata: Metadata = {
  title: 'Henry Bugajski',
  description: 'Software Engineer',
};

const fetchGlobal = async (slug: GlobalSlug) => {
  const payload = await getPayload({ config });

  return payload.findGlobal({ slug });
};

const fetchCachedGlobal = (slug: GlobalSlug) =>
  unstable_cache(fetchGlobal, [slug], { tags: [`global_${slug}`] })(slug);

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const navigation = await fetchCachedGlobal('navigation');

  return (
    <html
      lang="en"
      className={cn(
        hostGrotesk.variable,
        'font-optical-sizing-auto bg-neutral-100 font-sans font-normal text-neutral-600 dark:bg-neutral-900 dark:text-neutral-400',
      )}
    >
      <body>
        <Navigation {...navigation} />
        <main className="mx-auto w-full max-w-2xl px-4 pt-16 pb-8">{children}</main>
        <Script
          src={env.NEXT_PUBLIC_UMAMI_SRC}
          data-website-id={env.NEXT_PUBLIC_UMAMI_ID}
          data-domains={env.NEXT_PUBLIC_DOMAINS}
        />
      </body>
    </html>
  );
}
