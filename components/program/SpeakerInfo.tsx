import { User } from '@/@types/user';
import * as P from '@/components/program/styles';
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
          src={user.profile_img}
          fill
          style={{ objectFit: 'cover', borderRadius: '50%' }}
          alt={user.user}
        />
      </ImageContainer>
      {/* TODO user type 속성 확인 밎 적용해야합니다. */}
      <div>
        <H4>{user.user}</H4>
        <P.DescContainer>{user.bio}</P.DescContainer>
      </div>
    </SpeakerContainer>
  );
};
