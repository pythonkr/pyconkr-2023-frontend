import SeoHeader from '@/components/layout/SeoHeader';
import { Main } from '@/components/sponsor/information/Main';
import { AboutPycon } from '@/components/sponsor/information/AboutPycon';
import { Guide } from '@/components/sponsor/information/Guide';
import SponsorLevelTable from '@/components/sponsor/information/SponsorLevelTable';
import SponsorFAQToggle from '@/components/sponsor/information/SponsorFAQToggle';
import { Routes } from '@/constants/routes';

const SponsorInformation = () => {
  return (
    <>
      <SeoHeader
        title={Routes.SPONSOR_INFO.title}
        description="파이콘 한국 2023은 한국에서 열리는 10번째 파이콘이자, 2019년도 이후 3년만에 개최되는 전면 오프라인 파이콘입니다.
다시금 돌아온 국내 최대 파이써니스타들의 축제를 함께 만들어나가실 후원사분들을 기다립니다"
      />
      <Main />
      <AboutPycon />
      <Guide />
      <SponsorLevelTable />
      <SponsorFAQToggle />
    </>
  );
};

export default SponsorInformation;
