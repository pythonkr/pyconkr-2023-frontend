import React from 'react';
import { useSetRecoilState } from 'recoil';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

import { sponsorState } from '@/stores';
import { styled } from 'stitches.config';
import Button from '@/components/common/Button';
import type { SponsorInputInfo } from '@/@types';
import SimpleInput from '@/components/SimpleInput';
import { isCurrentTypeValid, validateChecker } from '@/utils';

const ButtonWrapper = styled('div', {
  display: 'flex',
  gap: 20,
  marginTop: 50,
  marginBottom: 40,
});

const LinkButton = styled(Button, {
  flex: 1,
});

const SponsorInfoForm = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
});

function SponsorInfoBox() {
  const {
    control,
    formState: { errors, dirtyFields, isValid },
    trigger,
    setFocus,
    resetField,
    handleSubmit,
  } = useForm<SponsorInputInfo>();
  const setSponsorState = useSetRecoilState(sponsorState);

  const onSubmitSponsorInfo: SubmitHandler<SponsorInputInfo> =
    React.useCallback(
      (data) => {
        setSponsorState((prev) => ({ ...prev, ...data }));
      },
      [setSponsorState]
    );

  const handleValidForm = React.useCallback(
    (formKey: keyof SponsorInputInfo) => {
      trigger(formKey);
    },
    [trigger]
  );

  const handleClickResetIcon = React.useCallback(
    (formKey: keyof SponsorInputInfo) => {
      resetField(formKey);
      setFocus(formKey);
    },
    [resetField, setFocus]
  );

  return (
    <SponsorInfoForm onSubmit={handleSubmit(onSubmitSponsorInfo)}>
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
      {/* TODO: route에 따라 연동 */}
      <ButtonWrapper>
        <LinkButton type="button">이전으로</LinkButton>
        <LinkButton type="submit" disabled={!isValid}>
          다음으로
        </LinkButton>
      </ButtonWrapper>
    </SponsorInfoForm>
  );
}

export default SponsorInfoBox;
