import type { NextPage } from 'next';
import Head from 'next/head';
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
        fileType="pdf"
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
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PreviewDiv>
        <ComponentPreview />
      </PreviewDiv>
      <PreviewDiv className={darkTheme}>
        <ComponentPreview prefix="dark" />
      </PreviewDiv>
    </div>
  );
};

export default Home;
