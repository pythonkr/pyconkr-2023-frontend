import React from 'react';
import { Controller, Path, UseFormReturn } from 'react-hook-form';

import { Sponsor } from '@/@types';
import { styled } from 'stitches.config';
import Button from '@/components/common/Button';
import SimpleInput from '@/components/SimpleInput';
import SponsorJoinFormBase from './SponsorJoinFormBase';
import { SponsorFormState } from '@/reducers/sponsorFormReducer';
import { isCurrentTypeValid, isNotEmptyValue, validateChecker } from '@/utils';

const ButtonWrapper = styled('div', {
  display: 'flex',
  gap: 20,
  marginTop: 16,
  '@bp6': {
    marginTop: 126,
  },
});

const SponsorInfoBox = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
});

type Props = {
  form: UseFormReturn<Sponsor, object>;
  onClickPrev: () => void;
  onClickNext: () => void;
};

function SponsorInfoInputBox({ form, onClickNext, onClickPrev }: Props) {
  const {
    control,
    formState: { errors, dirtyFields, isDirty },
    trigger,
    setFocus,
    resetField,
    getValues,
  } = form;
  const values = getValues(['url', 'name', 'businessRegistrationNumber']);

  const handleValidForm = React.useCallback(
    (formKey: Path<Sponsor>) => {
      trigger(formKey);
    },
    [trigger]
  );

  const handleClickResetIcon = React.useCallback(
    (formKey: Path<Sponsor>) => {
      resetField(formKey);
      setFocus(formKey);
    },
    [resetField, setFocus]
  );

  return (
    <SponsorJoinFormBase
      title="후원사 정보를\n입력해주세요"
      state={SponsorFormState.SPONSOR_INFORM}
    >
      <SponsorInfoBox>
        <Controller
          name="name"
          defaultValue=""
          control={control}
          rules={validateChecker('name')}
          render={({ field }) => (
            <SimpleInput
              {...field}
              label="후원사 명"
              length="fullWidth"
              isValid={isCurrentTypeValid(dirtyFields.name, 'name', errors)}
              isDirty={dirtyFields.name}
              onReset={() => handleClickResetIcon('name')}
              onBlur={() => handleValidForm('name')}
              required
            />
          )}
        />
        <Controller
          name="businessRegistrationNumber"
          defaultValue=""
          control={control}
          rules={validateChecker('businessRegistrationNumber')}
          render={({ field }) => (
            <SimpleInput
              {...field}
              label="사업자 번호"
              length="fullWidth"
              isValid={isCurrentTypeValid(
                dirtyFields.businessRegistrationNumber,
                'businessRegistrationNumber',
                errors
              )}
              isDirty={dirtyFields.businessRegistrationNumber}
              onReset={() => handleClickResetIcon('businessRegistrationNumber')}
              onBlur={() => handleValidForm('businessRegistrationNumber')}
              required
            />
          )}
        />
        <Controller
          name="url"
          defaultValue=""
          control={control}
          rules={validateChecker('url')}
          render={({ field }) => (
            <SimpleInput
              {...field}
              label="대표 링크"
              length="fullWidth"
              isValid={isCurrentTypeValid(dirtyFields.url, 'url', errors)}
              isDirty={dirtyFields.url}
              onReset={() => handleClickResetIcon('url')}
              onBlur={() => handleValidForm('url')}
              required
            />
          )}
        />
        <ButtonWrapper>
          <Button size="flat" onClick={onClickPrev}>
            이전으로
          </Button>
          <Button
            size="flat"
            reversal
            disabled={!isDirty || !isNotEmptyValue(values)}
            onClick={onClickNext}
          >
            다음으로
          </Button>
        </ButtonWrapper>
      </SponsorInfoBox>
    </SponsorJoinFormBase>
  );
}

export default SponsorInfoInputBox;
