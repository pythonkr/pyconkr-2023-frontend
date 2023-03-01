import {
  CloseIcon,
  ImageFileSubmitIcon,
  PdfFileSubmitIcon,
} from '@/public/icons';
import { styled } from '@/stitches.config';

const FileItemWrapper = styled('li', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  '&:not(:last-child)': {
    marginBottom: 8,
  },
});

const FileItemLeftGroup = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: 8,
});

const FileItemName = styled('p', {
  bodyText: 2,
  color: '$textPrimary',
});

const CloseButton = styled('button', {
  height: 16,
  backgroundColor: 'transparent',
  outline: 'none',
  border: 'none',
  cursor: 'pointer',
});

const StyledPdfFileSubmitIcon = styled(PdfFileSubmitIcon, {
  '& path': {
    fill: '$textPrimary',
  },
});

const StyledImageFileSubmitIcon = styled(ImageFileSubmitIcon, {
  '& path': {
    fill: '$textPrimary',
  },
});

const StyledCloseIcon = styled(CloseIcon, {
  width: '16px',
  height: '16px',
  '& path': {
    fill: '$textPrimary',
  },
});

interface FileItemProps {
  file: File;
  fileType: 'pdf' | 'image';
  onRemove: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const fileTypeIcon = {
  pdf: <StyledPdfFileSubmitIcon />,
  image: <StyledImageFileSubmitIcon />,
};

export const FileItem = ({ file, fileType, onRemove }: FileItemProps) => {
  return (
    <FileItemWrapper>
      <FileItemLeftGroup>
        {fileTypeIcon[fileType]}
        <FileItemName>{file.name}</FileItemName>
      </FileItemLeftGroup>
      <CloseButton onClick={onRemove}>
        <StyledCloseIcon />
      </CloseButton>
    </FileItemWrapper>
  );
};
