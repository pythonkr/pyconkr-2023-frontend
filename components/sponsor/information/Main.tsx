import Link from 'next/link';
import Button from '@/components/common/Button';
import { H1 } from '@/components/heading';
import { Routes } from '@/constants/routes';
import { GUIDE_FILE_DOWNLOAD } from '@/constants';
import * as S from './styles';

export const Main = () => (
  <S.Section id="application">
    <H1>SPONSORS</H1>
    <S.PeriodText>모집 기간: 2023.03.06 - 2023.04.21</S.PeriodText>
    <S.SponsorActionButtonWrapper>
      <Link href={Routes.SPONSOR_JOIN.route}>
        <Button reversal>파이콘 후원하기</Button>
      </Link>
      {/*  TODO: PDF 파일 aws에 올리기  */}
      <a href={GUIDE_FILE_DOWNLOAD} download>
        <Button reversal>후원사 가이드 다운로드</Button>
      </a>
    </S.SponsorActionButtonWrapper>
  </S.Section>
);
