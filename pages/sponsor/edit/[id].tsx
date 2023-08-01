import SeoHeader from '@/components/layout/SeoHeader';
import { Routes } from '@/constants/routes';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';
import { userState } from '@/stores/login';
import * as SponsorAPI from '@/api/sponsor';
import { styled } from 'stitches.config';
import { H2, H4 } from '@/components/heading';
import { Loader } from '@/components/common/Loader';
import Button from '@/components/common/Button';

const PageWrapper = styled('div', {
  width: '100%',
  height: '100%',
  maxWidth: '1280px',
  margin: '0 auto',
  paddingLeft: '1rem',
  paddingRight: '1rem',

  '@bp2': {
    paddingLeft: '2rem',
    paddingRight: '2rem',
  },

  '& > h4': {
    marginTop: '2vh',
  },
  '& > textarea': {
    width: '85%',
    height: '50vh',
    resize: 'none',
    margin: '1vh 7.5%',
  },
});

const Buttons = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  width: '15%',
  margin: '0 42.5%',
});

type State = {
  sponsorDetail?: {
    name: string;
    desc: string;
  };
  isLoading: boolean;
  newDesc?: string;
};

const SponsorEdit = () => {
  const router = useRouter();
  const loginUser = useRecoilValue(userState);
  const [sponsorDetail, setSponsorDetail] = useState<State['sponsorDetail']>();
  const [isLoading, setIsLoading] = useState<State['isLoading']>(false);
  const [newDesc, setNewDesc] = useState<State['newDesc']>(undefined);
  const sponsorId = useMemo<number>(() => {
    if (typeof router.query.id !== 'string') return 0;

    return parseInt(router.query.id);
  }, [router]);

  const loadSponsorDetail = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await SponsorAPI.getSponsorDetail(sponsorId.toString());
      setSponsorDetail({ name: response.name, desc: response.desc });
    } catch (e) {
      alert(`후원사 상세 불러오기 실패\n(${e})`);
      router.push(Routes.HOME.route);
    } finally {
      setIsLoading(false);
    }
  }, [router, sponsorId]);
  const saveSponsorDesc = useCallback(async () => {
    if (newDesc === undefined) {
      router.push(`/sponsor/list/${sponsorId}`);
      return;
    }

    setIsLoading(true);
    await SponsorAPI.updateSponsorDesc(sponsorId, newDesc)
      .then(() => {
        router.push(`/sponsor/list/${sponsorId}`);
      })
      .catch((e) => {
        alert(`후원사 정보 수정 실패\n(${e})`);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [newDesc, router, sponsorId]);
  const restoreChange = useCallback(() => {
    setNewDesc(undefined);
  }, []);

  useEffect(() => {
    if (typeof router.query.id !== 'string' || loginUser.userid === null) {
      router.push(Routes.HOME.route);
    }
  }, [loginUser, router]);
  useEffect(() => {
    loadSponsorDetail();
  }, [loadSponsorDetail]);

  if (isLoading === true || sponsorDetail?.name === undefined)
    return <Loader />;

  return (
    <>
      <SeoHeader
        title={Routes.SPONSOR_EDIT.title}
        description="파이콘 한국 2023: 8월 11~13일 코엑스"
      />
      <PageWrapper>
        <H2>{sponsorDetail.name}</H2>
        <H4>후원사 설명</H4>
        <textarea
          value={newDesc ?? sponsorDetail.desc}
          onChange={(e) => {
            setNewDesc(e.currentTarget.value);
          }}
        />
        <Buttons>
          <Button reversal onClick={saveSponsorDesc}>
            저장
          </Button>
          <Button reversal onClick={restoreChange}>
            취소
          </Button>
        </Buttons>
      </PageWrapper>
    </>
  );
};

export default SponsorEdit;
