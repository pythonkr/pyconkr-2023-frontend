import { ProgramDetail } from '@/@types/program';
import { DIFFICULTY, DURATION, LANGUAGE } from '@/constants/program';
import { styled } from '@/stitches.config';

const Wrapper = styled('div', {
  marginTop: '8px',
});

interface Props {
  info: Pick<
    ProgramDetail,
    'category' | 'difficulty' | 'duration' | 'language' | 'room_num'
  >;
}

export const ProgramBasicInfo = ({ info }: Props) => {
  return (
    <Wrapper>
      {/* TODO : 카테고리 번호별로 매핑이 필요합니다. */}
      카테고리 : {info.category}
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
