import { Sponsor } from '@/@types';
import { sponsorState } from '@/stores';
import React from 'react';
import {
  Path,
  FieldValues,
  SubmitHandler,
  UseFormTrigger,
  UseFormSetFocus,
  UseFormResetField,
} from 'react-hook-form';
import { useSetRecoilState } from 'recoil';

interface Props<T extends FieldValues> {
  trigger: UseFormTrigger<T>;
  setFocus: UseFormSetFocus<T>;
  resetField: UseFormResetField<T>;
}

const useSponsorInputEvent = <T extends Partial<Sponsor>>({
  trigger,
  setFocus,
  resetField,
}: Props<T>) => {
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
    handleValidForm,
    onSubmitStoreData,
    handleClickResetIcon,
  };
};

export default useSponsorInputEvent;
