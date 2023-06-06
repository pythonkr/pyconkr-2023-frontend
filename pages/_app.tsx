import type { AppProps } from 'next/app';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useRouter } from 'next/router';
import * as gtag from '@/lib/gtag';
import { RecoilRoot, useRecoilSnapshot } from 'recoil';
import { ReactQueryDevtools } from 'react-query/devtools';
import Container from '@/components/layout/Container';
import Head from 'next/head';
import Script from 'next/script';
import { darkTheme } from '@/stitches.config';
import { ThemeProvider } from 'next-themes';
import RecoilNexus from 'recoil-nexus';
import { getSponsorList } from '@/api/sponsor';
import { ISponsorListItem } from '@/@types/sponsor';

function RecoilDebugObserver() {
  const snapshot = useRecoilSnapshot();

  React.useEffect(() => {
    console.debug('The following atoms were modified:');
    for (const node of snapshot.getNodes_UNSTABLE({ isModified: true })) {
      console.debug(node.key, snapshot.getLoadable(node));
    }
  }, [snapshot]);

  return null;
}

const queryClient = new QueryClient();

function App({
  Component,
  pageProps,
  sponsorList,
}: AppProps & { sponsorList: ISponsorListItem[] }) {
  const router = useRouter();
  React.useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    router.events.on('hashChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
      router.events.off('hashChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gtag.GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </Head>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem={true}
        value={{
          light: 'light',
          dark: darkTheme.className,
        }}
      >
        <RecoilRoot>
          <RecoilNexus />
          {process.env.NODE_ENV === 'development' && <RecoilDebugObserver />}
          <QueryClientProvider client={queryClient}>
            <Container sponsorList={sponsorList}>
              <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
              />
              <Component {...pageProps} />
            </Container>
            <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
          </QueryClientProvider>
        </RecoilRoot>
      </ThemeProvider>
    </>
  );
}

App.getInitialProps = async () => {
  try {
    const sponsorList = await getSponsorList();
    return {
      sponsorList,
    };
  } catch (e) {
    console.error(e);
    return [];
  }
};

export default App;
