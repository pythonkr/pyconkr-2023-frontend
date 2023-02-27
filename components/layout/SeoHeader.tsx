import { DefaultMetaTags } from '@/constants/metaTags';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { PropsWithChildren } from 'react';

type HeaderProps = {
  title?: string;
  description?: string;
  imageUrl?: string;
  siteUrl?: string;
};

const SeoHeader = ({
  title = DefaultMetaTags.title,
  description = DefaultMetaTags.description,
  imageUrl = DefaultMetaTags.imageUrl,
  siteUrl = DefaultMetaTags.siteUrl,
  children,
}: PropsWithChildren<HeaderProps>) => {
  const { pathname } = useRouter();

  const titleWithSubTitle = title
    ? `${title} | ${DefaultMetaTags.title}`
    : title;
  const fullUrl = siteUrl + pathname;
  const fullImageUrl = siteUrl + imageUrl;

  return (
    <Head>
      <title>{titleWithSubTitle}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" href="/favicon.svg" />
      <link rel="apple-touch-icon" href="/favicon.svg" />
      <link rel="mask-icon" href="/favicon.svg" color="#ffffff" />
      <meta name="theme-color" content="#ffffff" />

      {/* og tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:alt" content={title} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={titleWithSubTitle} />
      <meta property="og:locale" content="ko_KR" />

      {/* twitter tags */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@pyconkr" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:image:alt" content={title} />
      <meta name="twitter:url" content={fullUrl} />

      {children}
    </Head>
  );
};

export default SeoHeader;
