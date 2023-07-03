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
const Title = styled('div', {
  bodyText: 1,
  padding: '0.2rem',
});
const Text = styled('div', {
  bodyText: 2,
  padding: '0.2rem',
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

const ListItem = (props: SessionList) => {
  return (
    <Link href={`/session/${props.id}`} passHref>
      <ItemContainer>
        <ImageBox>
          <Image
            src={props.user.profile_img}
            width={100}
            height={100}
            alt={'profile image'}
          />
        </ImageBox>
        <div>
          <Title>{props.title}</Title>
          <Text>{props.user.nickname}</Text>
        </div>
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
        <H2>발표</H2>
      </H2Box>
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
