import { SessionList } from '@/@types/session';
import React from 'react';
import { styled } from 'stitches.config';
import Link from 'next/link';
import { H2, H4 } from '@/components/heading';
import Image from 'next/image';

const ItemContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  margin: '15px 0px 15px 0',
});
const ImageBox = styled('div', {
  width: '6rem',
  height: '6rem',
  borderRadius: 100,
  flexShrink: 0,
  marginRight: '1rem',
  overflow: 'hidden',
});
const ContentBox = styled('div', {
  width: 'calc(100% - 7rem)',
});
const Title = styled('div', {
  bodyText: 1,
  padding: '0.2rem',
});
const Text = styled('div', {
  bodyText: 2,
  padding: '0.2rem',
  whiteSpace: 'pre-wrap',
});
const Container = styled('div', {
  maxWidth: '600px',
  margin: '0 auto',
  paddingTop: '1rem',
  marginTop: '2rem',
});
const H2Box = styled('div', {
  borderBottom: '4px solid $textPrimary',
  paddingBottom: '20px',
});
const Category = styled('div', {
  margin: '30px 0px 30px 0px',
});
const Labels = styled('span', {
  paddingLeft: '0.2rem',
});
const Label = styled('span', {
  bodyText: 2,
  marginLeft: '0.5vw',
  padding: '0 0.5rem',
  borderRadius: '0.25rem',
  '&:first-of-type': {
    marginLeft: '0',
  },
});
const DayofWeek = styled(Label, {
  color: '#fff',
  variants: {
    day: {
      sat: {
        backgroundColor: '#5C8AF7',
      },
      sun: {
        backgroundColor: '#FA4E4A',
      },
    },
    language: {
      english: {
        backgroundColor: '#AE85FA',
      },
    },
    difficulty: {
      beginner: {
        backgroundColor: '#1FE53D',
      },
      intermediate: {
        backgroundColor: '#FAB91D',
      },
      experienced: {
        backgroundColor: '#FA5D53',
      },
    },
  },
});

const ListItem = (props: SessionList) => {
  return (
  <Link href={`/session/${props.id}`} passHref>
    <ItemContainer>
      <ImageBox>
        <Image
          src={props.user?.profile_img ?? '/images/Logo.png'}
          width={100}
          height={100}
          alt={'profile image'}
        />
      </ImageBox>
      <ContentBox>
        <Title>{props.title}</Title>
        <Labels>
          {props.day_of_week === 'Sat' && <DayofWeek day="sat">토</DayofWeek>}
          {props.day_of_week === 'Sun' && <DayofWeek day="sun">일</DayofWeek>}
          {props.difficulty === 'BEGINNER' && (
            <DayofWeek difficulty="beginner">초급</DayofWeek>
          )}
          {props.difficulty === 'INTERMEDIATE' && (
            <DayofWeek difficulty="intermediate">중급</DayofWeek>
          )}
          {props.difficulty === 'EXPERIENCED' && (
            <DayofWeek difficulty="experienced">고급</DayofWeek>
          )}
          {props.language === 'ENGLISH' && (
            <DayofWeek language="english">영어</DayofWeek>
          )}
        </Labels>
        {props.user?.nickname !== undefined && (
          <Text>{props.user?.nickname}</Text>
        )}
      </ContentBox>
    </ItemContainer>
  </Link>
  );
};

const SessionListComponent = (props: { data: SessionList[] }) => {
  const groupByCategory = (data: SessionList[]) => {
    const groupedData: { [key: number]: SessionList[] } = {};
    data.forEach((item) => {
      if (groupedData[item.category]) {
        groupedData[item.category].push(item);
      } else {
        groupedData[item.category] = [item];
      }
    });

    return groupedData;
  };

  const groupedData = groupByCategory(props.data);
  return (
    <Container>
      <H2Box>
        <H2>발표 목록</H2>
      </H2Box>
      <p style={{ fontSize: '19px', marginTop: '1.5vh' }}>
        * 발표 목록은 발표자 사정에 따라 변동될 수 있습니다.
      </p>
      {Object.entries(groupedData).map(([category, items]) => (
        <div key={category}>
          <Category>
            <H4>{items[0].category_name}</H4>
          </Category>
          {items.map((item, index) => (
            <ListItem key={index} {...item} />
          ))}
        </div>
      ))}
    </Container>
  );
};

export default SessionListComponent;
