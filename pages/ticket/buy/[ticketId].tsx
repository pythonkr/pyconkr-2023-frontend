import { TicketType } from '@/@types';
import { Routes } from '@/constants/routes';
import { userState } from '@/stores/login';
import { ticketState } from '@/stores/ticket';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useMemo } from 'react';
import { useRecoilValue } from 'recoil';
import * as S from '@/components/ticket/styles';
import Button from '@/components/common/Button';
import IMP from 'lib/portone';
import { PaymentAPI } from '@/api';
import { announcePaymentSucceeded } from '@/api/payment';

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

  /**
   * 1. 결제하기를 누르면 payment_key 생성하는 API 호출
   * 2. payment_key 생성되면 PG 모듈 띄우기
   * 3. 결제 완료되면 결제 성공 여부를 서버에 보내줌
   */

  /** PG 모듈 띄우기 */
  const requestPay = useCallback(
    (paymentKey: string) => {
      if (selectedTicketType === undefined) return;

      IMP.request_pay(
        {
          pg: 'html5_inicis.INIpayTest',
          pay_method: 'card',
          merchant_uid: paymentKey,
          name: selectedTicketType.name,
          amount: selectedTicketType.price,
          buyer_name: '권혁민', // TODO
          buyer_email: '',
          buyer_tel: '01000000000',
          buyer_addr: '',
          buyer_postcode: '',
        },
        async (response) => {
          console.log(response);
          // 결제 성공 여부 전송
          if (response.success === true)
            await announcePaymentSucceeded(paymentKey);
        }
      );
    },
    [selectedTicketType]
  );

  const buyTicket = useCallback(async () => {
    if (selectedTicketType === undefined) return;

    /////////////////////////////////////////////////////
    // payment_key 생성
    /////////////////////////////////////////////////////
    let paymentKey: Awaited<ReturnType<(typeof PaymentAPI)['getPaymentKey']>>;
    try {
      paymentKey = await PaymentAPI.getPaymentKey(selectedTicketType);
    } catch (e) {
      alert(`결제 준비 실패 (${e})`);
      router.push(Routes.TICKET.route);
      return;
    }
    /////////////////////////////////////////////////////
    // PG 모듈 띄우기
    /////////////////////////////////////////////////////
    requestPay(paymentKey);
    /////////////////////////////////////////////////////
  }, [router, requestPay, selectedTicketType]);

  return (
    <S.TicketOrderContainer>
      <S.TicketOrderTitle>Order</S.TicketOrderTitle>
      <S.TicketTypeDetail>
        <S.TicketTypeDetailTitle>
          {selectedTicketType?.name}
        </S.TicketTypeDetailTitle>
        <S.TicketTypeDetailProgramType>
          {selectedTicketType?.program.programType} TICKET
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
        <Button size="big" reversal onClick={buyTicket}>
          결제하기
        </Button>
      </S.TicketOrderButton>
    </S.TicketOrderContainer>
  );
};

export default TicketBuyPage;
