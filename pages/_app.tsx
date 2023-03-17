import type { AppProps } from 'next/app';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot, useRecoilSnapshot } from 'recoil';
import { ReactQueryDevtools } from 'react-query/devtools';
import Container from '@/components/layout/Container';
import { darkTheme } from '@/stitches.config';
import { ThemeProvider } from 'next-themes';

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

function MyApp({ Component, pageProps }: AppProps) {
  return (
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
        {process.env.NODE_ENV === 'development' && <RecoilDebugObserver />}
        <QueryClientProvider client={queryClient}>
          <Container>
            <Component {...pageProps} />
          </Container>
          <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
        </QueryClientProvider>
      </RecoilRoot>
    </ThemeProvider>
  );
}

export default MyApp;
