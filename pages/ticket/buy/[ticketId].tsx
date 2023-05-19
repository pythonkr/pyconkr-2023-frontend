import { TicketType } from '@/@types';
import { Routes } from '@/constants/routes';
import { userState } from '@/stores/login';
import { ticketState } from '@/stores/ticket';
import { useRouter } from 'next/router';
import React, { useEffect, useMemo } from 'react';
import { useRecoilValue } from 'recoil';
import * as S from '@/components/ticket/styles';
import Button from '@/components/common/Button';

const TicketBuyPage = () => {
  const router = useRouter();
  const loginUser = useRecoilValue(userState);
  const ticketStore = useRecoilValue(ticketState);
  const selectedTicketType = useMemo<TicketType | undefined>(() => {
    if (!('ticketId' in router.query)) return undefined;

    for (const type of ticketStore.ticketTypes) {
      if (type.id === router.query.ticketId) {
        return type;
      }
    }
    return undefined;
  }, [ticketStore, router.query]);

  useEffect(() => {
    if (loginUser.userid === null || selectedTicketType === undefined)
      router.push(Routes.HOME.route);
  }, [loginUser, router, selectedTicketType]);

  return (
    <S.TicketOrderContainer>
      <S.TicketOrderTitle>Order</S.TicketOrderTitle>
      <S.TicketTypeDetail>
        <S.TicketTypeDetailTitle>
          {selectedTicketType?.name}
        </S.TicketTypeDetailTitle>
        <S.TicketTypeDetailProgramType>
          {selectedTicketType?.program} TICKET
        </S.TicketTypeDetailProgramType>
        <S.TicketTypeDetailDesc>
          {selectedTicketType?.desc}
        </S.TicketTypeDetailDesc>
        <S.TicketTypeDetailPrice>
          <div>가격</div>
          <div>{selectedTicketType?.price.toLocaleString()}원</div>
        </S.TicketTypeDetailPrice>
      </S.TicketTypeDetail>
      <S.TicketOrderPrice>
        <div>결제 금액</div>
        <div>{selectedTicketType?.price.toLocaleString()}원</div>
      </S.TicketOrderPrice>
      <S.TicketOrderButton>
        <Button size="big" reversal>
          결제하기
        </Button>
      </S.TicketOrderButton>
    </S.TicketOrderContainer>
  );
};

export default TicketBuyPage;
