import Head from 'next/head';
import { PropsWithChildren } from 'react';

type HeaderProps = {
  title?: string;
  description?: string;
};

const SeoHeader = ({
  title,
  description,
  children,
}: PropsWithChildren<HeaderProps>) => {
  return (
    <Head>
      <title>{title || '파이콘 한국 2023'}</title>
      <meta
        name="description"
        content={description || '파이콘 한국 2023 홈페이지'}
      />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      {/* TODO:추후 dg 태그 추가하기 */}
      <link rel="icon" href="/favicon.ico" />
      {children}
    </Head>
  );
};

export default SeoHeader;
