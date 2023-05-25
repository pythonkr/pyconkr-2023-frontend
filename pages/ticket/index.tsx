import { ProgramTypes, TicketType } from '@/@types';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
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
      const response = await TicketAPI.listTicketTypes();
      setTicketTypes(response);
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
