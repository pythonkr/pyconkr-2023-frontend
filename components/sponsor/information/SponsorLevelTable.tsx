import { H1 } from '@/components/heading';
import {
  SponsorLevelColumn1,
  SponsorLevelColumn2,
  SponsorLevelData1,
  SponsorLevelData2,
} from '@/constants/sponsor/sponsorLevel';
import { styled } from '@/stitches.config';
import React, { useMemo } from 'react';
import Table from '../../common/Table';
import * as S from './styles';

const SponsorLevelTableWrapper = styled('div', {
  display: 'block',
  margin: '3.75rem 0 4.75rem 0',
  justifyContent: 'center',
  marginBottom: '1rem',
});

const Description = styled('div', {
  marginTop: '2rem',
  margin: 'auto',
  bodyText: 1,
  // width: '110rem',

  '@bp1': {},
  '@bp2': {},
  '@bp3': {},
  '@bp4': {
    // width: '80rem',
  },
  '@bp5': {
    // width: '110rem',
  },
});

const SponsorLevelTable = () => {
  const column1 = useMemo(() => SponsorLevelColumn1, []);
  const column2 = useMemo(() => SponsorLevelColumn2, []);
  const data1 = useMemo(() => SponsorLevelData1, []);
  const data2 = useMemo(() => SponsorLevelData2, []);

  return (
    <S.Section>
      <H1 id="sponsorship-options">후원사 등급 안내</H1>
      <SponsorLevelTableWrapper>
        <Table columns={column1} data={data1} />
        <Table columns={column2} data={data2} />
        <Description>
          표기된 금액은 부가세가 포함되지 않은 금액이며, 부가세는 10% 입니다.
          <br />
          <li>
            후원 가능 여부나 기타 문의사항은 언제든지 sponsor@pycon.kr로 문의
            주시기 바랍니다.
          </li>
          <li>커뮤니티 스폰서십은 비영리 단체에 한해 후원이 가능합니다.</li>
          <li>추후 일부 내용이 변경될 수 있습니다.</li>
          <li>출판사 후원의 경우, 파이썬 관련 도서 출판 기록이 필요합니다.</li>
          <li>
            스타트업 스폰서십은 사내에서 파이썬을 사용하고, 설립 3년 이하, 사내
            인원 30인 이하인 곳에 한합니다.
          </li>
        </Description>
      </SponsorLevelTableWrapper>
    </S.Section>
  );
};

export default SponsorLevelTable;
