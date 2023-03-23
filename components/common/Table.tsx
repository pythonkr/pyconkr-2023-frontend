import { SponsorLevelRow } from '@/constants/sponsor/sponsorLevel';
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
          const { key, ...restHeaderGroupProps } = header.getHeaderGroupProps();
          return (
            <tr key={key} {...restHeaderGroupProps}>
              <StyledTh />
              {header.headers.map((col) => {
                const { key, ...restColumn } = col.getHeaderProps();
                return (
                  <StyledTh key={key} {...restColumn}>
                    {col.render('Header')}
                  </StyledTh>
                );
              })}
            </tr>
          );
        })}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row: any) => {
          prepareRow(row);
          const { key, ...restRow } = row.getRowProps();
          const i = rows.indexOf(row);
          return (
            <tr key={key} {...restRow}>
              <StyledTd key={i}>
                <TBodyText>{SponsorLevelRow[i]}</TBodyText>
              </StyledTd>
              {row.cells.map((cell: any) => {
                const { value } = cell;
                const { key: cellKey, ...restCell } = cell.getCellProps();
                return (
                  <StyledTd key={cellKey} {...restCell}>
                    {typeof value === 'boolean' && value && <CheckboxIcon />}
                    <TBodyText>{cell.render('Cell')}</TBodyText>
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
