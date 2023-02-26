import SeoHeader from '@/components/layout/SeoHeader';
import { Main } from '@/components/sponsor/information/Main';
import { AboutPycon } from '@/components/sponsor/information/AboutPycon';
import { Guide } from '@/components/sponsor/information/Guide';

const SponsorInformation = () => {
  return (
    <>
      <SeoHeader title="파이콘 한국 2023 후원하기" />
      <Main />
      <AboutPycon />
      <Guide />
    </>
  );
};

export default SponsorInformation;
