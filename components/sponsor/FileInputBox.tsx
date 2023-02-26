import { fileInputList } from '@/constants/sponsor/sponsorData';
import { sponsorState } from '@/stores';
import { styled } from 'stitches.config';
import { useRecoilState } from 'recoil';
import { FileUpload } from '../common';
import Button from '../common/Button';
import React, { useEffect, useState } from 'react';
import {
  Control,
  Controller,
  FieldValues,
  UseFormWatch,
} from 'react-hook-form';
import SponsorJoinFormBase from './SponsorJoinFormBase';
import { SponsorFormState } from '@/reducers/sponsorFormReducer';

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

interface FileInputBoxProps {
  onClickPrev: () => void;
  onClickNext: () => void;
  control: Control;
  watch: UseFormWatch<FieldValues>;
}

const FileInputBox = ({
  onClickPrev,
  onClickNext,
  control,
  watch,
}: FileInputBoxProps) => {
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
    <SponsorJoinFormBase
      title="후원에 필요한 파일을\n업로드해주세요"
      state={SponsorFormState.FILE_UPLOAD}
    >
      <FileInputContainer>
        {fileInputList.map((fileInput) => (
          <FileInputWrapper key={fileInput.key}>
            <FileLabel>{fileInput.name}</FileLabel>
            <Controller
              control={control}
              name={fileInput.key}
              render={({ field: { onChange, value } }) => (
                <FileUpload
                  id={fileInput.key}
                  labelText={fileInput.labelText}
                  fileType={fileInput.fileType}
                  onFileUpload={(file) => handleFileUpload(file, fileInput.key)}
                />
              )}
            />
          </FileInputWrapper>
        ))}
      </FileInputContainer>
      <ButtonContainer>
        <StyledButton size="big" onClick={onClickPrev}>
          이전으로
        </StyledButton>
        <StyledButton
          size="big"
          reversal={true}
          disabled={!isValid}
          onClick={onClickNext}
        >
          다음으로
        </StyledButton>
      </ButtonContainer>
    </SponsorJoinFormBase>
  );
};

export default FileInputBox;
