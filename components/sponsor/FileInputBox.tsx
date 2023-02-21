import { fileInputList } from '@/constants/sponsorData';
import { sponsorState } from '@/stores';
import { styled } from 'stitches.config';
import { useRecoilState } from 'recoil';
import { FileUpload } from '../common';
import Button from '../common/Button';
import React, { useEffect, useState } from 'react';

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
});

const FileInputContainer = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
});

const FileInputWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
});

const FileLabel = styled('span', {
  bodyText: 1,
});

const ButtonContainer = styled('div', {
  display: 'flex',
  gap: 20,
  marginTop: 28,
  bodyText: 1,
});

const StyledButton = styled(Button, {
  flex: 1,
});

type FileType = 'businessRegistrationFile' | 'bankBookFile' | 'logoImage';

export type FileInputListType = {
  key: FileType;
  name: string;
  labelText: string;
  fileType: 'pdf' | 'image';
}[];

const FileInputBox = () => {
  const [sponsorData, setSponsorData] = useRecoilState(sponsorState);
  const [isValid, setIsValid] = useState<boolean>(false);

  const handleFileUpload = (file: FileList, type: FileType) => {
    const oldData = { ...sponsorData };
    oldData[type] = file;
    setSponsorData((prev) => ({ ...prev, ...oldData }));
  };

  useEffect(() => {
    const fileTypes: FileType[] = [
      'businessRegistrationFile',
      'bankBookFile',
      'logoImage',
    ];
    setIsValid(fileTypes.every((type) => sponsorData[type]?.length));
  }, [sponsorData]);

  return (
    <Container>
      <FileInputContainer>
        {fileInputList.map((fileInput) => (
          <FileInputWrapper key={fileInput.key}>
            <FileLabel>{fileInput.name}</FileLabel>
            <FileUpload
              id={fileInput.key}
              labelText={fileInput.labelText}
              fileType={fileInput.fileType}
              onFileUpload={(file) => handleFileUpload(file, fileInput.key)}
            />
          </FileInputWrapper>
        ))}
      </FileInputContainer>
      <ButtonContainer>
        <StyledButton size="big">이전으로</StyledButton>
        <StyledButton size="big" reversal={true} disabled={!isValid}>
          다음으로
        </StyledButton>
      </ButtonContainer>
    </Container>
  );
};

export default FileInputBox;
