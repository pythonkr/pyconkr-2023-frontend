import { SessionDetail } from '@/@types/session';
import { DIFFICULTY, DURATION, LANGUAGE } from '@/constants/session';
import { styled } from '@/stitches.config';

const Wrapper = styled('div', {
  marginTop: '8px',
});

interface Props {
  info: Pick<
    SessionDetail,
    'category_name' | 'difficulty' | 'duration' | 'language' | 'room_num'
  >;
}

export const SessionBasicInfo = ({ info }: Props) => {
  return (
    <Wrapper>
      카테고리 : {info.category_name}
      <br />
      난이도 : {DIFFICULTY[info.difficulty]}
      <br />
      발표 시간 : {DURATION[info.duration]}
      <br />
      언어 : {LANGUAGE[info.language]}
      <br />
      발표 장소 : {`${info.room_num}호`}
    </Wrapper>
  );
};
