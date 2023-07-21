import { SessionList, TimeTableInfoByDays } from '@/@types/session';
import { getSessionList } from '@/api/session';
import { H1, H4 } from '@/components/heading';
import { TimeTable } from '@/components/session/TimeTable';
import { Day, TimeTables } from '@/constants/session';
import { setIdAtDayTimeTable } from '@/utils/timeTable';
import { styled } from '@stitches/react';
import { GetStaticProps } from 'next';

import { useState } from 'react';
const TitleBox = styled('div', {
  marginBottom: '50px',
});
const ContentBox = styled('div', {
  maxWidth: '1180px',
  margin: '0 auto',
  paddingTop: '1rem 0',
  marginTop: '2rem',
});

const TableTitle = styled('div', {
  background: '#000',
  color: '#fff',
  whiteSpace: 'pre-wrap',
  textAlign: 'center',
  padding: '1rem 0',
});
const SelectorBox = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  gap: '20%',
  padding: '30px 0',
});
const DaySelector = styled('a', {
  color: '#000',
  fontWeight: 700,
  display: 'inline-block',
  '&:hover': {
    textDecoration: 'underline',
  },
  variants: {
    'area-selected': {
      true: {
        color: '#E50042',
        textDecoration: 'underline',
      },
    },
  },
});

const Schedule = ({ table }: { table: TimeTableInfoByDays }) => {
  const [day, setDay] = useState<(typeof Day)[number]>('Day1');

  return (
    <ContentBox>
      <TitleBox>
        <H1>발표 시간표</H1>
      </TitleBox>
      <TableTitle>
        <H4>
          파이콘 한국 2023 세션 시간표{'\n'}Pycon KR 2023 Session Timetable
        </H4>
      </TableTitle>
      <SelectorBox>
        {Day.map((d) => (
          <DaySelector
            key={d}
            href="#"
            area-selected={day === d}
            onClick={() => {
              setDay(d);
            }}
          >
            {/*  Day1 => Day 1 */}
            <H4>{d.slice(0, 3) + ' ' + d.slice(3)}</H4>
          </DaySelector>
        ))}
      </SelectorBox>
      <TimeTable timeTableInfo={table[day]} />
    </ContentBox>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const sessionList = await getSessionList();
  const { Day1: day1, Day2: day2 } = TimeTables;
  const idByNickName: { [hostName: string]: number } = sessionList.reduce(
    (prev, session: SessionList) => {
      if (session.user?.nickname) {
        return {
          ...prev,
          [session.user?.nickname]: session.id,
        };
      }
      return prev;
    },
    {}
  );

  const table: TimeTableInfoByDays = {
    Day1: {
      ...day1,
      TimeTable: [...setIdAtDayTimeTable(idByNickName, day1.TimeTable)],
    },
    Day2: {
      ...day2,
      TimeTable: [...setIdAtDayTimeTable(idByNickName, day2.TimeTable)],
    },
  };

  return {
    props: { table },
  };
};

export default Schedule;
