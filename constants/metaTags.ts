export const DefaultMetaTags = {
  title: '파이콘 한국 2023',
  description: '파이콘 한국 2023 홈페이지',
  imageUrl: '/images/og.webp',
  siteUrl:
    process.env.NODE_ENV === 'production'
      ? 'https://2023.pycon.kr'
      : 'http://localhost:3000',
};
