import { sponsorState } from '@/stores';
import { styled } from '@stitches/react';
import { useRecoilState } from 'recoil';
import { FileUpload } from '../common';
import Button from '../common/Button';

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
});

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
  fontSize: 20, // bodyText가 적용되지 않아 임시 적용
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

type FileInputListType = {
  key: FileType;
  name: string;
  labelText: string;
  fileType: 'pdf' | 'image';
}[];

const fileInputList: FileInputListType = [
  {
    key: 'businessRegistrationFile',
    name: '사업자등록증',
    labelText: 'pdf 파일을 등록해주세요',
    fileType: 'pdf',
  },
  {
    key: 'bankBookFile',
    name: '통장사본',
    labelText: 'pdf 파일을 등록해주세요',
    fileType: 'pdf',
  },
  {
    key: 'logoImage',
    name: '후원사 로고',
    labelText: 'png 또는 jpg 파일을 등록해주세요',
    fileType: 'image',
  },
];

const FileInputBox = () => {
  const [sponsorData, setSponsorData] = useRecoilState(sponsorState);
  const handleFileUpload = (file: FileList, type: FileType) => {
    const oldData = { ...sponsorData };
    oldData[type] = file;
    setSponsorData((prev) => ({ ...prev, ...oldData }));
  };

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
        <StyledButton size="big" disabled={true}>
          다음으로
        </StyledButton>
      </ButtonContainer>
    </Container>
  );
};

export default FileInputBox;
