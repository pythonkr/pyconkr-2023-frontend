import { useEffect } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { SponsorFormState } from '@/reducers/sponsorFormReducer';
import { styled } from 'stitches.config';
import Button from '../common/Button';
import SponsorJoinFormBase from './SponsorJoinFormBase';
import Radio from '../common/Radio';
import { formatted } from '@/utils/helperNumber';

const Wrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
});

const RadioGroup = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: '1rem',
  margin: '2rem',

  '& > *': {
    flex: '1 1 calc(50% - 1rem)',
  },
});

const InfoText = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
});

const ButtonWrapper = styled('div', {
  display: 'flex',
  flex: 1,
  flexDirection: 'row',
  gap: 20,
  placeItems: 'flex-end',
  marginTop: 18,
});

// TODO: API 연동되면 제거
const DummySponsorTypesData = [
  {
    name: '키스톤',
    price: 4000,
    limit: 0,
    id: 1,
  },
  {
    name: '다이아몬드',
    price: 2500,
    limit: 0,
    id: 2,
  },
  {
    name: '사파이어',
    price: 2000,
    limit: 0,
    id: 3,
  },
  {
    name: '플래티넘',
    price: 1500,
    limit: 0,
    id: 4,
  },
  {
    name: '루비',
    price: 800,
    limit: 0,
    id: 5,
  },
  {
    name: '골드',
    price: 600,
    limit: 0,
    id: 6,
  },
  {
    name: '실버',
    price: 200,
    limit: 0,
    id: 7,
  },
  {
    name: '스타트업',
    price: 100,
    limit: 0,
    id: 8,
  },
  {
    name: '커뮤니티',
    price: 30,
    limit: 0,
    id: 9,
  },
  {
    name: '출판',
    price: 0,
    limit: 0,
    id: 10,
  },
];

type Props = {
  onClickPrev: () => void;
  onClickNext: () => void;
};

const SponsorTypeSelectForm: React.FC<Props> = ({
  onClickPrev,
  onClickNext,
}) => {
  const { control, watch, setValue } = useFormContext();
  const sponsorType = watch('sponsorType');

  useEffect(() => {
    // TODO: API를 통해 구좌 정보 받아올 때 기본값 설정하기
    setValue('sponsorType', 1);
  }, [setValue]);

  return (
    <SponsorJoinFormBase
      title="후원 구좌를\n선택해주세요"
      state={SponsorFormState.SPONSOR_TYPE}
    >
      <Wrapper>
        <RadioGroup>
          {DummySponsorTypesData.map((data) => (
            <Controller
              key={`level-${data.id}`}
              control={control}
              name={'sponsorType'}
              render={({ field: { name, onChange, value } }) => (
                <Radio
                  id={data.id.toString()}
                  value={data.id}
                  name={name}
                  onChange={onChange}
                  checked={value == data.id}
                >
                  <InfoText>
                    <span>{data.name}</span>
                    <span>
                      {data.name === '출판'
                        ? '도서 후원'
                        : `${formatted(data.price)}만원`}
                    </span>
                  </InfoText>
                </Radio>
              )}
            />
          ))}
        </RadioGroup>
        <ButtonWrapper>
          <Button size="flat" onClick={onClickPrev}>
            이전으로
          </Button>
          <Button
            size="flat"
            onClick={onClickNext}
            disabled={sponsorType == null}
          >
            다음으로
          </Button>
        </ButtonWrapper>
      </Wrapper>
    </SponsorJoinFormBase>
  );
};

export default SponsorTypeSelectForm;
