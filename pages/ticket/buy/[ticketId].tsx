import { TicketType } from '@/@types';
import { Routes } from '@/constants/routes';
import { userState } from '@/stores/login';
import { ticketState } from '@/stores/ticket';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useRecoilValue } from 'recoil';
import * as S from '@/components/ticket/styles';
import Button from '@/components/common/Button';
import IMP from 'lib/portone';
import { PaymentAPI } from '@/api';
import { announcePaymentSucceeded } from '@/api/payment';

type State = {
  paymentStatus: 'READY' | 'PAYING' | 'SUCCESS' | 'FAILURE';
};

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

  const [paymentStatus, setPaymentStatus] =
    useState<State['paymentStatus']>('READY');

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
      <S.TicketOrderTitle>
        {paymentStatus === 'SUCCESS'
          ? '결제 완료'
          : paymentStatus === 'FAILURE'
          ? '결제 실패'
          : 'Order'}
      </S.TicketOrderTitle>
      <S.TicketTypeDetail>
        {paymentStatus !== 'FAILURE' ? (
          <>
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
              {paymentStatus === 'SUCCESS' && (
                <>
                  <div>구매자</div>
                  {/* TODO */}
                  <div>권혁민</div>
                </>
              )}
            </S.TicketTypeDetailPrice>
          </>
        ) : (
          <S.TicketPaymentFailureReason>
            오류로 인해 결제에 실패했습니다.
          </S.TicketPaymentFailureReason>
        )}
      </S.TicketTypeDetail>
      {paymentStatus === 'SUCCESS' && (
        <S.TicketFootnote>
          *마이 페이지에서 이름을 바꿀 수 있습니다.
        </S.TicketFootnote>
      )}
      {(['READY', 'PAYING'] as State['paymentStatus'][]).includes(
        paymentStatus
      ) && (
        <S.TicketOrderPrice>
          <div>결제 금액</div>
          <div>{selectedTicketType?.price.toLocaleString()}원</div>
        </S.TicketOrderPrice>
      )}
      {paymentStatus === 'READY' ? (
        <S.TicketOrderButton>
          <Button size="big" reversal onClick={buyTicket}>
            결제하기
          </Button>
        </S.TicketOrderButton>
      ) : paymentStatus === 'PAYING' ? (
        <S.TicketOrderButton>
          <Button size="big" reversal onClick={() => {}} disabled>
            결제 중...
          </Button>
        </S.TicketOrderButton>
      ) : paymentStatus === 'SUCCESS' ? (
        <S.TicketOrderButton>
          <Button
            size="big"
            reversal
            onClick={() => {
              router.push(Routes.MYPAGE.route);
            }}
          >
            마이 페이지로
          </Button>
        </S.TicketOrderButton>
      ) : paymentStatus === 'FAILURE' ? (
        <S.TicketOrderButton>
          <Button
            size="big"
            reversal
            onClick={() => {
              router.push(Routes.TICKET.route);
            }}
          >
            티켓 목록으로
          </Button>
        </S.TicketOrderButton>
      ) : (
        <S.TicketOrderButton />
      )}
    </S.TicketOrderContainer>
  );
};

export default TicketBuyPage;
