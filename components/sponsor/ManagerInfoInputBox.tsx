import React from 'react';
import { Controller, useForm } from 'react-hook-form';

import { styled } from 'stitches.config';
import Button from '@/components/common/Button';
import type { ManagerInputInfo } from '@/@types';
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

const ManagerInfoForm = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  gap: 24,
});

function ManagerInfoInputBox() {
  const {
    control,
    formState: { errors, dirtyFields, isValid },
    trigger,
    setFocus,
    getValues,
    resetField,
    handleSubmit,
  } = useForm<ManagerInputInfo>();
  const { onSubmitStoreData, handleValidForm, handleClickResetIcon } =
    useSponsorInputEvent<ManagerInputInfo>({
      trigger,
      setFocus,
      resetField,
    });
  const values = getValues(['managerName', 'managerTel', 'managerEmail']);

  return (
    <ManagerInfoForm onSubmit={handleSubmit(onSubmitStoreData)}>
      <Controller
        name="managerName"
        defaultValue=""
        control={control}
        rules={validateChecker('managerName')}
        render={({ field }) => (
          <SimpleInput
            {...field}
            label="담당자 이름"
            length="fullWidth"
            isValid={isCurrentTypeValid(
              dirtyFields.managerName,
              'managerName',
              errors
            )}
            isDirty={dirtyFields.managerName}
            onReset={() => handleClickResetIcon('managerName')}
            onBlur={() => handleValidForm('managerName')}
            required
          />
        )}
      />
      <Controller
        name="managerTel"
        defaultValue=""
        control={control}
        rules={validateChecker('phone')}
        render={({ field }) => (
          <SimpleInput
            {...field}
            label="담당자 연락처"
            length="fullWidth"
            isValid={isCurrentTypeValid(
              dirtyFields.managerTel,
              'managerTel',
              errors
            )}
            isDirty={dirtyFields.managerTel}
            onReset={() => handleClickResetIcon('managerTel')}
            onBlur={() => handleValidForm('managerTel')}
            required
          />
        )}
      />
      <Controller
        name="managerEmail"
        defaultValue=""
        control={control}
        rules={validateChecker('email')}
        render={({ field }) => (
          <SimpleInput
            {...field}
            type="email"
            label="담당자 이메일"
            length="fullWidth"
            isValid={isCurrentTypeValid(
              dirtyFields.managerEmail,
              'managerEmail',
              errors
            )}
            isDirty={dirtyFields.managerEmail}
            onReset={() => handleClickResetIcon('managerEmail')}
            onBlur={() => handleValidForm('managerEmail')}
            required
          />
        )}
      />
      {/* TODO: route에 따라 연동 */}
      <ButtonWrapper>
        <LinkButton type="button">이전으로</LinkButton>
        <LinkButton
          type="submit"
          disabled={!isValid || !isNotEmptyValue(values)}
        >
          다음으로
        </LinkButton>
      </ButtonWrapper>
    </ManagerInfoForm>
  );
}

export default ManagerInfoInputBox;
