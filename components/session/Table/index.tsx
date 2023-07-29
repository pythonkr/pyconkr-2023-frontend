import { SessionCategory, CategoryLabelColor } from '@/constants/session';

import { H4 } from '../../heading';
import Link from 'next/link';
import { styled } from '@stitches/react';

export const TableWrapper = styled('div', {
  overflowX: 'scroll',
  overflowY: 'hidden',
});
export const Table = styled('table', {
  border: '1px solid',
  borderCoolor: '$backgroundPrimary',
  borderCollapse: 'collapse',
  width: 'auto',
});
export const Tr = styled('tr', {
  border: '1px solid',
  borderCoolor: '$backgroundPrimary',
  textAlign: 'center',
});
export const TdContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  padding: '2rem 3rem',
  gap: '10px',
  variants: {
    c: {
      host_name: { padding: '1rem 0' },
    },
  },
});
export const Td = styled('td', {
  border: '1px solid',
  borderCoolor: '$backgroundPrimary',
  textAlign: 'center',
  variants: {
    c: {
      head: { border: '2px solid', borderCoolor: '$backgroundPrimary' },
    },
  },
});
export const B1 = styled('span', {
  fontWeight: 500,
  fontSize: 20,
  whiteSpace: 'pre-wrap',
  textAlign: 'center',
});
export const B5 = styled('p', {
  fontSize: 16,
  fontWeight: 500,
  whiteSpace: 'pre-wrap',
  textAlign: 'center',
  variants: {
    c: {
      label: { fontWeight: 700 },
    },
  },
});
export const CategoryTag = styled('p', {
  fontSize: 13,
  fontWeight: 400,
  color: '#1c1c1c', // 다크모드 미적용
  whiteSpace: 'pre-wrap',
  textAlign: 'center',
  padding: '4px 8px',
  borderRadius: '3px',
  variants: {
    c: {
      label: { fontWeight: 700 },
    },
  },
});

export const Category = ({
  label,
}: {
  label: (typeof SessionCategory)[number];
}) => (
  <CategoryTag
    style={{
      background: CategoryLabelColor[label],
      display: 'inline-block',
      margin: 'auto',
    }}
  >
    {label}
  </CategoryTag>
);
export const Head = ({
  title,
  location,
}: {
  title: string;
  location: string;
}) => (
  <thead>
    <Tr>
      <Td c="head" colSpan={4}>
        <TdContent>
          <H4 style={{ fontWeight: 700 }}>{title}</H4>
        </TdContent>
      </Td>
    </Tr>
    <Tr>
      <Td rowSpan={2}>
        <B5 c="label">{'시간/장소\nTime/Location'}</B5>
      </Td>
      <Td colSpan={3}>
        <TdContent>
          <B1>{location}</B1>
        </TdContent>
      </Td>
    </Tr>
    <Tr>
      <Td>
        <TdContent c="host_name">
          <B5>101/102</B5>
        </TdContent>
      </Td>
      <Td>
        <TdContent c="host_name">
          <B5>103</B5>
        </TdContent>
      </Td>
      <Td>
        <TdContent c="host_name">
          <B5>104/105</B5>
        </TdContent>
      </Td>
    </Tr>
  </thead>
);
export const SessionTitle = ({
  title,
  category,
}: {
  title: string;
  category?: (typeof SessionCategory)[number];
}) => (
  <TdContent>
    <B5>{title}</B5>
    {category && <Category label={category} />}
  </TdContent>
);

export const SessionHostName = ({ hostName }: { hostName: string }) => (
  <TdContent c="host_name">
    <B5>{hostName}</B5>
  </TdContent>
);

export const LinkedContent = ({
  condition,
  href,
  children,
}: {
  condition: boolean;
  href: string;
  children: React.ReactNode;
}) => (condition ? <Link href={href}>{children}</Link> : <>{children}</>);
