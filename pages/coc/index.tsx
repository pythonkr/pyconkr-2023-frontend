import { useEffect } from 'react';
import { useRouter } from 'next/router';

// TODO: CoC head og 추가
const CoCPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace('/coc/purpose');
  }, [router]);
};

export default CoCPage;
