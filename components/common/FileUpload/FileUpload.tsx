import React, { useCallback, useState } from 'react';
import { ImageFileIcon, PdfFileIcon } from '@/public/icons';
import { FileItem } from '@/components/common/FileUpload/FileItem';
import { styled } from '@/stitches.config';

const StyledFileUpload = styled('div', {
  width: '100%',
  height: '100px',
  backgroundColor: '$backgroundPrimary',
  border: '2px solid $textPrimary',
});

const StyledFileUploadInput = styled('input', {
  display: 'none',
});

const FileUploadLabel = styled('label', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  bodyText: 2,
  color: '$textPrimary',
  gap: 10,
  cursor: 'pointer',
});

const FileItemLabel = styled('label', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  height: '100%',
  overflowY: 'scroll',
  padding: 24,
});

const StyledPdfFileIcon = styled(PdfFileIcon, {
  width: '24px',
  height: '24px',

  '& path': {
    fill: '$textPrimary',
  },
});

const StyledImageFileIcon = styled(ImageFileIcon, {
  width: '24px',
  height: '24px',

  '& path': {
    fill: '$textPrimary',
  },
});

interface FileUploadProps {
  labelText: string;
  fileType: 'pdf' | 'image';
  onFileUpload: (file: FileList) => void;
}

type FileUploadType = React.InputHTMLAttributes<HTMLInputElement> &
  FileUploadProps;

const fileTypeList = {
  pdf: { icon: <StyledPdfFileIcon />, accept: '.pdf' },
  image: { icon: <StyledImageFileIcon />, accept: 'image/png, image/jpg' },
};

export const FileUpload = ({
  labelText,
  fileType,
  onFileUpload,
  onChange,
  ...props
}: FileUploadType) => {
  const [uploadedFiles, setUploadedFiles] = useState<FileList | null>(null);

  const stopSyntheticEvent = useCallback((e: React.BaseSyntheticEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleFileUpload = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      stopSyntheticEvent(e);
      const files = e.target.files;
      if (files) {
        setUploadedFiles(files);
        onFileUpload(files);
      }
    },
    [onFileUpload, stopSyntheticEvent]
  );

  const handleFileRemove = useCallback(
    (e: React.BaseSyntheticEvent<object, unknown, unknown>, index: number) => {
      stopSyntheticEvent(e);

      if (uploadedFiles) {
        const newFiles = Array.from(uploadedFiles).filter(
          (_, fileIndex) => fileIndex !== index
        );

        const newFileList = new DataTransfer();

        newFiles.forEach((file) => newFileList.items.add(file));

        setUploadedFiles(newFileList.files);
        onFileUpload(newFileList.files);
      }

      return;
    },
    [onFileUpload, stopSyntheticEvent, uploadedFiles]
  );

  const handleDrop = useCallback(
    (e: React.DragEvent<HTMLLabelElement>) => {
      stopSyntheticEvent(e);

      const files = e.dataTransfer.files;

      if (files) {
        setUploadedFiles(files);
        onFileUpload(files);
      }
    },
    [onFileUpload, stopSyntheticEvent]
  );

  const fileInputId = props.id ?? 'file-upload';

  return (
    <StyledFileUpload>
      <StyledFileUploadInput
        id={fileInputId}
        type="file"
        onChange={handleFileUpload}
        multiple
        accept={fileTypeList[fileType].accept}
        required
        {...props}
      />
      {uploadedFiles?.length ? (
        <FileItemLabel htmlFor={fileInputId}>
          {Array.from(uploadedFiles).map((file, index) => (
            <FileItem
              key={file.name}
              file={file}
              fileType={fileType}
              onRemove={(e) => handleFileRemove(e, index)}
            />
          ))}
        </FileItemLabel>
      ) : (
        <FileUploadLabel
          htmlFor={fileInputId}
          onDragOver={stopSyntheticEvent}
          onDrop={handleDrop}
        >
          {fileTypeList[fileType].icon}
          {labelText}
        </FileUploadLabel>
      )}
    </StyledFileUpload>
  );
};
