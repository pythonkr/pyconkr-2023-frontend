export const DefaultMetaTags = {
  title: '파이콘 한국 2023',
  description: '파이콘 한국 2023 홈페이지',
  imageUrl:
    'https://pyconkr-web-2023-static.s3.ap-northeast-2.amazonaws.com/pyconkr-2023-og.png',
  siteUrl:
    process.env.NODE_ENV === 'production'
      ? 'https://2023.pycon.kr'
      : 'http://localhost:3000',
};
