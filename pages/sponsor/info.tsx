import React from 'react';
import Head from 'next/head';
import { NextPage } from 'next';
import { styled } from 'stitches.config';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

import NavBar from '@/components/NavBar';
import { H3 } from '@/components/heading';
import type { SponsorInfo } from '@types';
import Button from '@/components/common/Button';
import SimpleInput from '@/components/SimpleInput';
import { isCurrentTypeValid, validateChecker } from 'utils';
import { Progressbar } from '@/components/common/Progressbar';

const ContentWrapper = styled('div', {
  width: '100%',
  marginTop: 68,
  marginInline: 'auto',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: 8,
});

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

const SponsorInfoPage: NextPage = () => {
  const {
    control,
    formState: { errors, dirtyFields, isValid },
    trigger,
    setFocus,
    resetField,
    handleSubmit,
  } = useForm<SponsorInfo>();

  const onSubmitSponsorInfo: SubmitHandler<SponsorInfo> = React.useCallback(
    (data) => {
      console.log(data);
    },
    []
  );

  const handleValidForm = React.useCallback(
    (formKey: keyof SponsorInfo) => {
      trigger(formKey);
    },
    [trigger]
  );

  const handleClickResetIcon = React.useCallback(
    (formKey: keyof SponsorInfo) => {
      resetField(formKey);
      setFocus(formKey);
    },
    [resetField, setFocus]
  );

  return (
    <main>
      <Head>
        <title>Sponsor | 정보 입력</title>
      </Head>
      <NavBar />
      <ContentWrapper>
        <Progressbar value={3} />
        <H3
          style={{ whiteSpace: 'pre-line', marginTop: 24, marginBottom: 16 }}
        >{`후원사 정보를\n입력해주세요`}</H3>
        <SponsorInfoForm onSubmit={handleSubmit(onSubmitSponsorInfo)}>
          <Controller
            name="organization"
            defaultValue=""
            control={control}
            rules={validateChecker('organization')}
            render={({ field }) => (
              <SimpleInput
                {...field}
                label="후원사 명"
                length="fullWidth"
                isValid={isCurrentTypeValid(
                  dirtyFields.organization,
                  'organization',
                  errors
                )}
                isDirty={dirtyFields.organization}
                onReset={() => handleClickResetIcon('organization')}
                onBlur={() => handleValidForm('organization')}
                required
              />
            )}
          />
          <Controller
            name="name"
            defaultValue=""
            control={control}
            rules={validateChecker('name')}
            render={({ field }) => (
              <SimpleInput
                {...field}
                label="담당자 이름"
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
            name="phone"
            defaultValue=""
            control={control}
            rules={validateChecker('phone')}
            render={({ field }) => (
              <SimpleInput
                {...field}
                label="담당자 연락처"
                length="fullWidth"
                isValid={isCurrentTypeValid(dirtyFields.phone, 'phone', errors)}
                isDirty={dirtyFields.phone}
                onReset={() => handleClickResetIcon('phone')}
                onBlur={() => handleValidForm('phone')}
                required
              />
            )}
          />
          <Controller
            name="email"
            defaultValue=""
            control={control}
            rules={validateChecker('email')}
            render={({ field }) => (
              <SimpleInput
                {...field}
                type="email"
                label="담당자 이메일"
                length="fullWidth"
                isValid={isCurrentTypeValid(dirtyFields.email, 'email', errors)}
                isDirty={dirtyFields.email}
                onReset={() => handleClickResetIcon('email')}
                onBlur={() => handleValidForm('email')}
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
      </ContentWrapper>
    </main>
  );
};

export default SponsorInfoPage;
