import React from 'react';
import { useSetRecoilState } from 'recoil';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

import { sponsorState } from '@/stores';
import { styled } from 'stitches.config';
import Button from '@/components/common/Button';
import type { ManagerInputInfo } from '@/@types';
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
  const values = getValues(['managerName', 'managerTel', 'managerEmail']);
  const setSponsorState = useSetRecoilState(sponsorState);

  const isNotEmptyValue = React.useCallback((array: string[]): boolean => {
    return array.every((content) => content !== '');
  }, []);

  const onSubmitManagerInfo: SubmitHandler<ManagerInputInfo> =
    React.useCallback(
      (data) => {
        setSponsorState((prev) => ({ ...prev, ...data }));
      },
      [setSponsorState]
    );

  const handleValidForm = React.useCallback(
    (formKey: keyof ManagerInputInfo) => {
      trigger(formKey);
    },
    [trigger]
  );

  const handleClickResetIcon = React.useCallback(
    (formKey: keyof ManagerInputInfo) => {
      resetField(formKey);
      setFocus(formKey);
    },
    [resetField, setFocus]
  );

  return (
    <SponsorInfoForm onSubmit={handleSubmit(onSubmitManagerInfo)}>
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
    </SponsorInfoForm>
  );
}

export default ManagerInfoInputBox;
