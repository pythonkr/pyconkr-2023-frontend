import { APITicketType, ProgramTypes, TicketType } from '@/@types';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import axios from '@/lib/axios';
import { AxiosResponse } from 'axios';
import { Loader } from '@/components/common/Loader';
import { useRouter } from 'next/router';
import { Routes } from '@/constants/routes';
import * as S from '@/components/ticket/styles';
import Button from '@/components/common/Button';
import { useSetRecoilState } from 'recoil';
import { ticketState } from '@/stores/ticket';
import Link from 'next/link';
import { TicketAPI } from '@/api';

const TicketPage = () => {
  const router = useRouter();

  const [ticketTypes, setTicketTypes] = useState<
    Record<(typeof ProgramTypes)[number], TicketType[]>
  >({
    CONFERENCE: [],
    TUTORIAL: [],
    SPRINT: [],
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const programTypeContent = useMemo<
    Record<
      (typeof ProgramTypes)[number],
      {
        name: string;
        desc: string;
      }
    >
  >(() => {
    return {
      CONFERENCE: {
        name: '컨퍼런스 티켓',
        desc: '8월 12일, 13일 파이콘 한국 2023 컨퍼런스에 참가할 수 있는 티켓입니다.',
      },
      TUTORIAL: {
        name: '튜토리얼',
        desc: '8월 11일 금요일 튜토리얼에 참가할 수 있는 티켓입니다.',
      },
      SPRINT: {
        name: '스프린트',
        desc: '8월 11일 금요일 스프린트에 참가할 수 있는 티켓입니다.',
      },
    };
  }, []);
  const setTicketState = useSetRecoilState(ticketState);

  const loadTicketTypes = useCallback(async () => {
    setIsLoading(true);
    try {
      // const response = await TicketAPI.listTicketTypes();
      // setTicketTypes(response);
      setTicketTypes({
        CONFERENCE: TicketType.fromAPIs([
          {
            id: 'pycon_korea_day_1',
            name: 'PyCon Korea Day 1 (SAT)',
            price: 70000,
            min_price: null,
            desc: '컨퍼런스 1일차 티켓',
            day: '토요일',
            program: 'CONFERENCE',
            is_refundable: true,
          },
          {
            id: 'pycon_korea_day_2',
            name: 'PyCon Korea Day 2 (SUN)',
            price: 70000,
            min_price: null,
            desc: '컨퍼런스 2일차 티켓',
            day: '일요일',
            program: 'CONFERENCE',
            is_refundable: true,
          },
          {
            id: 'pycon_korea_day_1_2',
            name: 'PyCon Korea Day 1, 2 (SAT, SUN)',
            price: 70000,
            min_price: null,
            desc: '컨퍼런스 양일 티켓',
            day: '토요일,일요일',
            program: 'CONFERENCE',
            is_refundable: true,
          },
          {
            id: 'pycon_korea_day_1_2_patron',
            name: 'PyCon Korea Day 1, 2 개인 후원 (SAT, SUN)',
            price: 150000,
            min_price: 150000,
            desc: '컨퍼런스 양일 티켓 (개인 후원)',
            day: '토요일,일요일',
            program: 'CONFERENCE',
            is_refundable: false,
          },
        ]),
        TUTORIAL: TicketType.fromAPIs([
          {
            id: 'pycon_korea_tutorial_1',
            name: '쉽게 배우는 파이썬',
            price: 5000,
            min_price: null,
            desc: '쉽게 배우는 파이썬 튜토리얼',
            day: '금요일',
            program: 'TUTORIAL',
            is_refundable: true,
          },
        ]),
        SPRINT: TicketType.fromAPIs([
          {
            id: 'pycon_korea_sprint_1',
            name: 'asyncio',
            price: 0,
            min_price: null,
            desc: 'asyncio 스프린트',
            day: '금요일',
            program: 'SPRINT',
            is_refundable: true,
          },
        ]),
      });
    } catch (e) {
      alert(`티켓 목록 불러오기 실패\n(${e})`);
      router.push(Routes.HOME.route);
    } finally {
      setIsLoading(false);
    }
  }, [router]);

  useEffect(() => {
    loadTicketTypes();
  }, [loadTicketTypes]);
  useEffect(() => {
    setTicketState((prevState) => ({
      ...prevState,
      ticketTypes: Object.values(ticketTypes).flat(2),
    }));
  }, [ticketTypes, setTicketState]);

  if (isLoading === true)
    return (
      <>
        <Loader />
      </>
    );

  return (
    <>
      {ProgramTypes.map((programType) => (
        <S.ProgramTypeSection key={programType}>
          <S.ProgramTypeTitle>
            {programTypeContent[programType].name}
          </S.ProgramTypeTitle>
          <S.ProgramTypeDesc>
            {programTypeContent[programType].desc}
          </S.ProgramTypeDesc>
          {ticketTypes[programType].map((ticketType) => (
            <S.TicketTypeItem key={ticketType.name}>
              <S.TicketTypeItemFrame>
                <div>{ticketType.name}</div>
                <div>
                  {ticketType.price === 0
                    ? '무료'
                    : ticketType.minPrice === null
                    ? `${ticketType.price.toLocaleString()}원`
                    : `${ticketType.minPrice.toLocaleString()}원~`}
                </div>
              </S.TicketTypeItemFrame>
              <S.TicketTypeItemButton>
                <Link
                  href={Routes.TICKET_DETAIL.route + `/${ticketType.id}`}
                  passHref
                >
                  <Button size="small" reversal>
                    선택하기
                  </Button>
                </Link>
              </S.TicketTypeItemButton>
            </S.TicketTypeItem>
          ))}
        </S.ProgramTypeSection>
      ))}
    </>
  );
};

export default TicketPage;
