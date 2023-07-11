import { Program } from '@/@types';
import React from 'react';
import { H2 } from '@/components/heading';
import * as S from './styles';
import Button from '../common/Button';
import Image from 'next/image';
import { toFormatString } from '@/utils';

type Props = {
  programs: Program[];
  programTypeName: string;
  noticeContent?: string;
  ticketUrl?: string;
};

const SubprogramList = ({
  programs,
  programTypeName,
  noticeContent,
  ticketUrl,
}: Props) => {
  return (
    <S.Container>
      <S.H2Box>
        <H2>{programTypeName} 목록</H2>
      </S.H2Box>
      {noticeContent !== undefined && noticeContent.length !== 0 && (
        <p style={{ fontSize: '16px', marginTop: '1.5vh' }}>{noticeContent}</p>
      )}
      {ticketUrl !== undefined && ticketUrl.length !== 0 && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            marginTop: '1.5vh',
          }}
        >
          <Button
            reversal
            onClick={() => {
              window.open(ticketUrl);
            }}
          >
            지금 바로 구매하기!
          </Button>
        </div>
      )}
      {programs.map((program) => (
        <S.ItemContainer key={program.id}>
          <S.ImageBox>
            <Image
              src={'/images/Logo.png'}
              width={100}
              height={100}
              alt={'profile image'}
            />
          </S.ImageBox>
          <S.ContentBox>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
              }}
            >
              <S.Title>{program.title}</S.Title>
              {program.startAt !== null && program.endAt !== null && (
                <S.Text>
                  {`${toFormatString(
                    program.startAt,
                    'H:m'
                  )} ~ ${toFormatString(program.endAt, 'H:m')}`}
                </S.Text>
              )}
            </div>
            <S.Text>{program.host}</S.Text>
            <S.Text>{program.shortDesc}</S.Text>
          </S.ContentBox>
        </S.ItemContainer>
      ))}
    </S.Container>
  );
};

export default SubprogramList;
