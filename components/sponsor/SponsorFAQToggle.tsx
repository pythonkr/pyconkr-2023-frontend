import { styled } from '@/stitches.config';
import React from 'react';
import Toggle from '@/components/Toggle';
import {
  SponsorItemFAQ,
  SponsorTicketFAQ,
} from '@/constants/sponsor/sponsorFAQ';
import { H3 } from '../heading';

const Section = styled('section', {
  display: 'flex',
  justifyContent: 'space-between',
  padding: 0,
  borderBottom: '2px solid $textPrimary',

  '&:last-child': {
    borderBottom: '2px solid transparent',
  },
  '@bp1': {
    flexDirection: 'column',
  },
  '@bp2': {
    flexDirection: 'row',
  },
});

const FAQTitleWrapper = styled('div', {
  width: '16.5rem',
  marginRight: '0',

  '@bp1': {
    display: 'flex',
    flexDirection: 'row',
    width: '30rem',
  },
  '@bp2': {
    display: 'block',
    flexDirection: 'column',
    marginRight: '0',
    width: '13rem',
  },
  '@bp4': {
    marginRight: '2.875rem',
  },

  '@bp5': {
    marginRight: '2.875rem',
  },
});

const FAQTitle = styled('div', {
  padding: '1rem',
  wordWrap: 'normal',
  wordBreak: 'keep-all',
  variants: {
    active: {
      true: {
        color: '$textPrimary',
      },
      false: {
        color: '$gray500',
      },
    },
  },
});

const ToggleWrapper = styled('div', {
  display: 'block',
  padding: '1rem',

  '@bp1': {
    width: '36.5rem',
  },

  '@bp2': {
    width: '50rem',
  },

  '@bp4': {
    width: '66.5rem',
  },

  '@bp5': {
    width: '91.3rem',
  },
});

const SponsorFAQToggle = () => {
  const [sponsorFAQType, setSponsorFAQType] = React.useState<1 | 2>(1);
  const handleSponsorFAQType = (type: 1 | 2) => {
    setSponsorFAQType(type);
  };

  return (
    <Section>
      <FAQTitleWrapper>
        <FAQTitle
          active={sponsorFAQType === 1}
          onClick={() => {
            handleSponsorFAQType(1);
          }}
        >
          <H3>후원사 티켓</H3>
        </FAQTitle>
        <FAQTitle
          active={sponsorFAQType === 2}
          onClick={() => {
            handleSponsorFAQType(2);
          }}
        >
          <H3>증정 물품</H3>
        </FAQTitle>
      </FAQTitleWrapper>
      <ToggleWrapper>
        {sponsorFAQType === 1
          ? SponsorTicketFAQ.map((question) => (
              <>
                <Toggle
                  title={question.title}
                  content={question.content}
                  titleSize="big"
                  key={SponsorTicketFAQ.indexOf(question)}
                />
              </>
            ))
          : SponsorItemFAQ.map((question) => (
              <>
                <Toggle
                  title={question.title}
                  content={question.content}
                  titleSize="big"
                  key={SponsorItemFAQ.indexOf(question)}
                />
              </>
            ))}
      </ToggleWrapper>
    </Section>
  );
};

export default SponsorFAQToggle;
