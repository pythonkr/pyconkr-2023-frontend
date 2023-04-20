import {
  SponsorLevelRow,
  SponsorLevelStatus,
} from '@/constants/sponsor/sponsorLevel';
import { styled } from 'stitches.config';
import React from 'react';
import { TableOptions, useTable } from 'react-table';
import CheckIconDark from '@/public/icons/CheckIconDark.svg';

const StyledTable = styled('table', {
  display: 'block',
  overflowX: 'auto',
  borderCollapse: 'collapse',
  border: '1px solid $textSecondary',
  margin: '1rem auto',
});

const StyledTd = styled('td', {
  padding: '1rem 0.5rem',
  border: '1px solid $textSecondary',
  borderWidth: '1px 0',
  textAlign: 'center',
  // wordBreak: 'keep-all',
  whiteSpace: 'pre-wrap',
  height: '3rem',
  width: '18.3rem',

  '@bp4': {
    width: '13.3rem',
  },
  '@bp5': {
    width: '18.3rem',
  },
});

const StyledTh = styled('th', {
  padding: '1rem',
  border: '1px solid $textSecondary',
  borderWidth: '1px 0',
  textAlign: 'center',
  backgroundColor: '$backgroundSecondary',
  color: '$backgroundPrimary',
  fontSize: '1.5rem',
  fontWeight: '700',

  variants: {
    expired: {
      true: {
        textDecoration: 'line-through',
      },
    },
  },
});

const TBodyText = styled('span', {
  bodyText: 1,
});

const CheckboxIcon = styled(CheckIconDark, {
  '& path': {
    stroke: '$textPrimary',
    fill: '$textPrimary',
  },
});

const Table = ({ columns, data }: TableOptions<object>) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <StyledTable {...getTableProps()}>
      <thead>
        {headerGroups.map((header) => {
          const { key: headerKey, ...restHeaderGroupProps } =
            header.getHeaderGroupProps();

          return (
            <tr key={headerKey} {...restHeaderGroupProps}>
              <StyledTh />
              {header.headers.map((col) => {
                const { key: colKey, ...restColumn } = col.getHeaderProps();
                return (
                  <StyledTh
                    key={colKey}
                    expired={
                      col.render('status') === SponsorLevelStatus.Expired
                    }
                    {...restColumn}
                  >
                    {col.render('Header')}
                  </StyledTh>
                );
              })}
            </tr>
          );
        })}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          const { key, ...restRow } = row.getRowProps();
          // REVIEW - map 에서 받아오는 두 번째 매개 변수인 index로는 안 되는 걸까?
          const i = rows.indexOf(row);

          return (
            <tr key={key} {...restRow}>
              <StyledTd key={i}>
                <TBodyText>{SponsorLevelRow[i]}</TBodyText>
              </StyledTd>

              {row.cells.map((cell) => {
                const { value } = cell;
                const { key: cellKey, ...restCell } = cell.getCellProps();

                const cellText =
                  cell.column.render('status') === SponsorLevelStatus.Expired &&
                  SponsorLevelRow[i] === '후원금'
                    ? '마감'
                    : cell.render('Cell');

                return (
                  <StyledTd key={cellKey} {...restCell}>
                    {typeof value === 'boolean' && value && <CheckboxIcon />}
                    <TBodyText>{cellText}</TBodyText>
                  </StyledTd>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </StyledTable>
  );
};

export default Table;
