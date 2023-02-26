import { useRouter } from 'next/router';
import type { NextPage } from 'next';

// TODO: CoC head og 추가
const CoCPage: NextPage = () => {
  const router = useRouter();
  router.replace('/coc/purpose');

  return <></>;
};

export default CoCPage;
