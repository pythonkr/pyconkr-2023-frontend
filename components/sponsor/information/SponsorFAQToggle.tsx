import { styled } from '@/stitches.config';
import React from 'react';
import Toggle from '@/components/Toggle';
import { SponsorTicketFAQ } from '@/constants/sponsor/sponsorFAQ';
import { H1, H3 } from '../../heading';
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

const SponsorFAQToggle = () => {
  return (
    <S.Section>
      <H1>후원사 등급 안내</H1>
      <ToggleSection>
        <ToggleWrapper>
          {SponsorTicketFAQ.map((question) => (
            <>
              <Toggle
                title={question.title}
                content={question.content}
                titleSize="big"
                key={SponsorTicketFAQ.indexOf(question)}
              />
            </>
          ))}
        </ToggleWrapper>
      </ToggleSection>
    </S.Section>
  );
};

export default SponsorFAQToggle;
