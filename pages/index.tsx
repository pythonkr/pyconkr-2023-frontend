import type { NextPage } from 'next';
import Link from 'next/link';

import Button from '@/components/common/Button';
import UserFilled from 'public/icons/User/Filled.svg';

import SampleRadio from '@/components/SampleRadio';
import { darkTheme, styled } from 'stitches.config';
import Checkbox from '@/components/common/Checkbox';
import { ComponentProps, useState } from 'react';
import Toggle from '@/components/Toggle';
import { Progressbar } from '@/components/common/Progressbar';
import { FileUpload } from '@/components/common';
import Container from '@/components/layout/Container';
import SponsorInformation from '@/pages/sponsor/information';

const Home: NextPage = () => {
  const [checked, setChecked] = useState<boolean>(false);

  const ComponentPreview = ({ prefix }: { prefix?: string }) => (
    <>
      <div>
        {Array(7)
          .fill(null)
          .map((_, i) => (
            <Progressbar
              key={i}
              value={i as ComponentProps<typeof Progressbar>['value']}
            />
          ))}
        <Button disabled>Disabled</Button>
        <Button icon={<UserFilled />}>Icon Small</Button>
        <Button size="big" icon={<UserFilled />}>
          Icon Big
        </Button>
        <Button size="flat" icon={<UserFilled />}>
          Icon Flat
        </Button>
        <Link href="/donate">
          <Button>후원하기</Button>
        </Link>
      </div>
      {/* !SECTION */}

      <Toggle title="Toggle 제목" content="Toggle 내용" />

      <Checkbox
        id="demochk1"
        checked={checked}
        onChange={() => setChecked((prev) => !prev)}
        label="데모 체크박스"
      />

      {/* sample radio 컴포넌트*/}
      <SampleRadio prefix={prefix} />

      <FileUpload
        id={`file-upload-${prefix}`}
        labelText="pdf 파일을 등록해주세요"
        onFileUpload={(file) => {
          console.log(file);
        }}
      />
    </>
  );

  const PreviewDiv = styled('div', {
    flex: 1,
    backgroundColor: '$backgroundPrimary',
  });

  return (
    <div>
      {/* FIXME: 임시로 스폰서 페이지 메인에 넣어두기 */}
      <SponsorInformation />
    </div>
  );
};

export default Home;
