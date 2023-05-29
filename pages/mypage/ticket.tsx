import { H1 } from '@/components/heading';
import SubNavBar from '@/components/layout/SubNavBar';
import type { NextPage } from 'next';
import { styled } from 'stitches.config';
import mypageIndex from '@/constants/mypageIndex';
import { useCallback, useEffect, useState } from 'react';
import { Loader } from '@/components/common/Loader';
import { useRouter } from 'next/router';
import { Routes } from '@/constants/routes';
import Button from '@/components/common/Button';
import { MyTicketType } from '@/@types/mypage';
import Link from 'next/link';
import { StyledH4 } from '@/components/common/Markdown';
import { BodyText } from '@/components/sponsor/information/styles';
import { MyPageAPI } from '@/api';

const Layout = styled('div', {
  width: '100%',
  height: '100%',
  maxWidth: '1280px',
  margin: '0 auto',
  paddingLeft: '2rem',
  paddingRight: '2rem',
});

const StyledH1 = styled(H1, {
  marginTop: '70px',
});

const SubText = styled('div', {
  fontSize: '32px',
  marginTop: '16px',
  color: '$textSecondary',
  fontWeight: 'bold',
});

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  marginTop: 40,
  paddingBottom: 40,
  '@bp2': {
    marginTop: '90px',
    flexDirection: 'row',
  },
});

const TicketBox = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  margin: '10% 0',
  borderBottom: '4px solid $textPrimary',
  '@bp2': {
    margin: '0 5%',
  },
});

const TicketItem = styled('div', {
  display: 'flex',
  alignItems: 'center',
  borderTop: '4px solid $textPrimary',
  padding: '14px 10px',
});

const TicketInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  '& > h4': {
    padding: '0px',
  },
});

const MyTicketPage: NextPage = () => {
  const [myTicket, setMyTicket] = useState<MyTicketType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const loadMyTicket = useCallback(async () => {
    setIsLoading(true);
    try {
      setMyTicket(await MyPageAPI.listMyPageTickets());
    } catch (e) {
      alert(`나의 티켓 목록 불러오기 실패\n(${e})`);
      router.push(Routes.HOME.route);
    } finally {
      setIsLoading(false);
    }
  }, [router]);

  useEffect(() => {
    loadMyTicket();
  }, [loadMyTicket]);

  if (isLoading === true)
    return (
      <>
        <Loader />
      </>
    );
  return (
    <Layout>
      <StyledH1>마이페이지</StyledH1>
      <SubText>Mypage</SubText>
      <Container>
        <SubNavBar routes={mypageIndex} />
        <TicketBox>
          {myTicket.map((ticket) => (
            <TicketItem key={ticket.name}>
              <TicketInfo>
                <StyledH4>{ticket.name}</StyledH4>
                <BodyText>{`${ticket.price.toLocaleString()}원`}</BodyText>
              </TicketInfo>
              <Link
                href={Routes.MYPAGE_REFUND.route + `/${ticket.paymentKey}`}
                passHref
              >
                <Button size="small" reversal>
                  환불하기
                </Button>
              </Link>
            </TicketItem>
          ))}
        </TicketBox>
      </Container>
    </Layout>
  );
};

export default MyTicketPage;
