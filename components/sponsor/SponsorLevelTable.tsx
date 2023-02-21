import {
  SponsorLevelColumn1,
  SponsorLevelColumn2,
  SponsorLevelData1,
  SponsorLevelData2,
} from '@/constants/sponsorLevel';
import React, { useMemo } from 'react';
import { Controller } from 'react-hook-form';
import { TableOptions, useTable } from 'react-table';
import Table from '../common/Table';

const SponsorLevelTable = () => {
  const column1 = useMemo(() => SponsorLevelColumn1, []);
  const data1 = useMemo(() => SponsorLevelData1, []);
  // const column2 = useMemo(() => SponsorLevelColumn2, []);
  // const data2 = useMemo(() => SponsorLevelData2, []);

  return (
    <>
      <Table columns={column1} data={data1} />
    </>
  );
};

export default SponsorLevelTable;
