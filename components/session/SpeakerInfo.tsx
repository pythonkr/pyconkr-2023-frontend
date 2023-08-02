import * as P from '@/components/session/styles';
import Image from 'next/image';
import { H4 } from '../heading';
import { styled } from '@/stitches.config';

export const SpeakerContainer = styled('div', {
  display: 'block',
  marginTop: '16px',
  '@bp2': {
    display: 'flex',
    gap: '20px',
  },
});

export const ImageContainer = styled('div', {
  position: 'relative',
  aspectRatio: '1/1',
  '@bp2': {
    height: '200px',
  },
});

export const SpeakerInfo = ({
  user,
}: {
  user: {
    hostName: string;
    hostIntroduction: string;
    hostProfileImage: string | null;
  };
}) => {
  return (
    <SpeakerContainer>
      <ImageContainer>
        <Image
          src={user.hostProfileImage || '/images/Logo.png'}
          fill
          style={{ objectFit: 'cover', borderRadius: '50%' }}
          alt={user.hostName}
        />
      </ImageContainer>
      <div>
        <H4>{user.hostName}</H4>
        <P.DescContainer>{user.hostIntroduction}</P.DescContainer>
      </div>
    </SpeakerContainer>
  );
};
