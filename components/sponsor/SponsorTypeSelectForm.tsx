import { useEffect, useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { SponsorFormState } from '@/reducers/sponsorFormReducer';
import { styled } from 'stitches.config';
import Button from '../common/Button';
import SponsorJoinFormBase from './SponsorJoinFormBase';
import Radio from '../common/Radio';
import { formatted } from '@/utils/helperNumber';
import { useQuery } from 'react-query';
import axios from '@/lib/axios';
import { SposnorLevelType } from '@/@types';
import { Loader } from '../common/Loader';

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
  variants: {
    isLoading: {
      true: {
        justifyContent: 'center',
      },
    },
  },
});

const ButtonWrapper = styled('div', {
  display: 'flex',
  flex: 1,
  flexDirection: 'row',
  gap: 20,
  placeItems: 'flex-end',
  marginTop: 18,
});

type Props = {
  onClickPrev: () => void;
  onClickNext: () => void;
};

const InitialSponsorLevelData: Array<SposnorLevelType> = Array(10)
  .fill(null)
  .map((_, i) => ({
    name: '',
    price: 0,
    id: i + 1,
    limit: 0,
    available: true,
  }));

const SponsorTypeSelectForm: React.FC<Props> = ({
  onClickPrev,
  onClickNext,
}) => {
  const { control, watch, setValue } = useFormContext();
  const sponsorType = watch('sponsorType');
  const [isLoading, setIsLoading] = useState(false);

  const {
    error,
    data: sponsorLevels,
    isFetching,
  } = useQuery(
    'sponsorLevels',
    async () => {
      setIsLoading(true);
      const res = await axios.get<Array<SposnorLevelType>>(
        '/sponsors/remaining/'
      );
      setIsLoading(false);
      const remainingSponsors = await res.data;
      return remainingSponsors;
    },
    {
      staleTime: 1000 * 60, // 1분간 데이터 캐싱
    }
  );

  if (error != null) {
    console.error(error);
  }

  useEffect(() => {
    const firstAvailableSponsorLevelId =
      (sponsorLevels ?? []).find((level) => level.available)?.id ?? 1;
    setValue('sponsorType', firstAvailableSponsorLevelId);
  }, [setValue, sponsorLevels]);

  return (
    <SponsorJoinFormBase
      title="후원 구좌를\n선택해주세요"
      state={SponsorFormState.SPONSOR_TYPE}
    >
      <Wrapper>
        <RadioGroup>
          {(sponsorLevels ?? InitialSponsorLevelData).map((data) => {
            const isNotDummy = data.name !== '';
            let price: string | number = '';

            if (!data.available) {
              price = '마감';
            } else if (data.name === '출판사') {
              price = '도서 후원';
            } else if (isNotDummy) {
              price = `${formatted(data.price / 10000)}만원`;
            }

            return (
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
                    checked={data.available && isNotDummy && value == data.id}
                    disabled={isFetching || !data.available}
                  >
                    <InfoText isLoading={isLoading}>
                      {isLoading ? (
                        <Loader reversal={true} />
                      ) : (
                        <>
                          <span>{data.name}</span>
                          <span>{price}</span>
                        </>
                      )}
                    </InfoText>
                  </Radio>
                )}
              />
            );
          })}
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
