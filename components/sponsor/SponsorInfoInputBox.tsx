import React from 'react';
import { Controller } from 'react-hook-form';

import { styled } from 'stitches.config';
import Button from '@/components/common/Button';
import type { SponsorInputInfo } from '@/@types';
import SimpleInput from '@/components/SimpleInput';
import useSponsorInputEvent from '@/hooks/useSponsorInputEvent';
import { isCurrentTypeValid, isNotEmptyValue, validateChecker } from '@/utils';

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
  gap: 16,
});

function SponsorInfoBox() {
  const {
    fieldForms,
    onSubmitStoreData,
    handleValidForm,
    handleClickResetIcon,
  } = useSponsorInputEvent<SponsorInputInfo>();
  const {
    control,
    formState: { errors, dirtyFields, isDirty },
    getValues,
    handleSubmit,
  } = fieldForms;
  const values = getValues(['url', 'name', 'businessRegistrationNumber']);

  return (
    <SponsorInfoForm onSubmit={handleSubmit(onSubmitStoreData)}>
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
        <LinkButton
          type="submit"
          disabled={!isDirty || !isNotEmptyValue(values)}
        >
          다음으로
        </LinkButton>
      </ButtonWrapper>
    </SponsorInfoForm>
  );
}

export default SponsorInfoBox;
