import { fileInputList } from '@/constants/sponsor/sponsorData';
import { styled } from 'stitches.config';
import { FileUpload } from '../common';
import Button from '../common/Button';
import React, { useCallback } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import SponsorJoinFormBase from './SponsorJoinFormBase';
import { SponsorFormState } from '@/reducers/sponsorFormReducer';

const FileInputContainer = styled('div', {
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
}

const FileInputBox = ({ onClickPrev, onClickNext }: FileInputBoxProps) => {
  const { control, watch } = useFormContext();
  const checkValidation = useCallback(() => {
    const fileList = ['businessRegistrationFile', 'bankBookFile', 'logoImage'];
    return fileList.every((file) => {
      if (watch(file) === undefined) return false;
      return watch(file).length;
    });
  }, [watch]);

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
              render={({ field: { value, onChange } }) => (
                <FileUpload
                  id={fileInput.key}
                  labelText={fileInput.labelText}
                  fileType={fileInput.fileType}
                  fileList={value}
                  onFileUpload={(file) => onChange(file)}
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
          disabled={!checkValidation()}
          onClick={onClickNext}
        >
          다음으로
        </StyledButton>
      </ButtonContainer>
    </SponsorJoinFormBase>
  );
};

export default FileInputBox;
