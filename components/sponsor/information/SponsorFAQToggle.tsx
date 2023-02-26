import { styled } from '@/stitches.config';
import React from 'react';
import Toggle from '@/components/Toggle';
import { SponsorFAQ } from '@/constants/sponsor/sponsorFAQ';
import { H1 } from '../../heading';
import * as S from './styles';

const ToggleSection = styled(S.SectionWithoutPadding, {
  '@bp1': {
    flexDirection: 'column',
  },
  '@bp2': {
    flexDirection: 'row',
  },
});

const ToggleWrapper = styled('div', {
  display: 'block',
  padding: '1rem',
  width: '100%',
});
const PaddingBox = styled('div', {
  padding: '1rem',
});

const SponsorFAQToggle = () => {
  return (
    <S.Section>
      <H1 id="faq">자주 묻는 질문</H1>
      <ToggleSection>
        <ToggleWrapper>
          {SponsorFAQ.map((question, index) => (
            <PaddingBox key={index}>
              <Toggle
                title={question.title}
                content={question.content}
                titleSize="big"
              />
            </PaddingBox>
          ))}
        </ToggleWrapper>
      </ToggleSection>
    </S.Section>
  );
};

export default SponsorFAQToggle;
