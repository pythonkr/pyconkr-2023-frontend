import { User } from '@/@types/session';
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

export const SpeakerInfo = ({ user }: { user: User }) => {
  return (
    <SpeakerContainer>
      <ImageContainer>
        <Image
          src={user.profile_img || '/images/Logo.png'}
          fill
          style={{ objectFit: 'cover', borderRadius: '50%' }}
          alt={user.nickname}
        />
      </ImageContainer>
      <div>
        <H4>{user.nickname}</H4>
        <P.DescContainer>{user.bio}</P.DescContainer>
      </div>
    </SpeakerContainer>
  );
};
