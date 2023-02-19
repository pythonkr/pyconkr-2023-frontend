import { sponsorState } from '@/stores';
import React from 'react';
import { FieldValues, Path, SubmitHandler, useForm } from 'react-hook-form';
import { useSetRecoilState } from 'recoil';

const useSponsorInputEvent = <T extends FieldValues>() => {
  const fieldForms = useForm<T, object>();
  const { trigger, resetField, setFocus } = fieldForms;
  const setSponsorState = useSetRecoilState(sponsorState);

  const onSubmitStoreData: SubmitHandler<T> = React.useCallback(
    (data) => {
      setSponsorState((prev) => ({ ...prev, ...data }));
    },
    [setSponsorState]
  );

  const handleValidForm = React.useCallback(
    (formKey: Path<T>) => {
      trigger(formKey);
    },
    [trigger]
  );

  const handleClickResetIcon = React.useCallback(
    (formKey: Path<T>) => {
      resetField(formKey);
      setFocus(formKey);
    },
    [resetField, setFocus]
  );

  return {
    fieldForms,
    handleValidForm,
    onSubmitStoreData,
    handleClickResetIcon,
  };
};

export default useSponsorInputEvent;
