import { SponsorLevelRow } from '@/constants/sponsorLevel';
import React from 'react';
import { Controller } from 'react-hook-form';
import { TableOptions, useTable } from 'react-table';

const Table = ({ columns, data }: TableOptions<object>) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((header) => {
          const { key, ...restHeaderGroupProps } = header.getHeaderGroupProps();
          return (
            <tr key={key} {...restHeaderGroupProps}>
              {header.headers.map((col) => {
                const { key, ...restColumn } = col.getHeaderProps();
                return (
                  <th key={key} {...restColumn}>
                    {col.render('Header')}
                  </th>
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
              <td key={i}>{SponsorLevelRow[i]}</td>
              {row.cells.map((cell: any) => {
                const { key, ...restCell } = cell.getCellProps();
                return (
                  <td key={key} {...restCell}>
                    {cell == 'true' || cell == 'false'
                      ? 'v'
                      : cell.render('Cell')}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
