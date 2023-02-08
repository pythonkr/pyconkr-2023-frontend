import { CloseIcon, FileUploadIcon } from 'public/icons';
import { styled } from 'stitches.config';

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

interface FileItemProps {
  file: File;
  onRemove: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const FileItem = ({ file, onRemove }: FileItemProps) => {
  return (
    <FileItemWrapper>
      <FileItemLeftGroup>
        <FileUploadIcon />
        <FileItemName>{file.name}</FileItemName>
      </FileItemLeftGroup>
      <CloseButton onClick={onRemove}>
        <CloseIcon width={16} height={16} />
      </CloseButton>
    </FileItemWrapper>
  );
};
