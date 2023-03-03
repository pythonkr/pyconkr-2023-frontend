import React from 'react';
import { Controller, Path, useFormContext } from 'react-hook-form';

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

const ManagerInfoBox = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
});

type Props = {
  onClickPrev: () => void;
  onClickNext: () => void;
};

function ManagerInfoInputBox({ onClickNext, onClickPrev }: Props) {
  const {
    control,
    formState: { errors, dirtyFields, isValid },
    trigger,
    setFocus,
    resetField,
    getValues,
  } = useFormContext();
  const values = getValues(['managerName', 'managerTel', 'managerEmail']);

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
      title="담당자 정보를\n입력해주세요"
      state={SponsorFormState.MANAGER_INFORM}
    >
      <ManagerInfoBox>
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
              isError={typeof errors.managerTel?.message !== 'undefined'}
              errorMessage={String(errors.managerTel?.message)}
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
              isError={typeof errors.managerEmail?.message !== 'undefined'}
              errorMessage={String(errors.managerEmail?.message)}
              onReset={() => handleClickResetIcon('managerEmail')}
              onBlur={() => handleValidForm('managerEmail')}
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
            disabled={!isValid || !isNotEmptyValue(values)}
            onClick={onClickNext}
          >
            다음으로
          </Button>
        </ButtonWrapper>
      </ManagerInfoBox>
    </SponsorJoinFormBase>
  );
}

export default ManagerInfoInputBox;
