import { AvatarPreview } from 'components/atoms';
import { useState } from 'react';
import { StyledAvatarContainer, StyledUploader } from './AvatarUploader.styled';

interface IAvatarUploader {
  fileType?: string;
  size?: number;
  onFileSelect: (file: File) => void;
}

const defaultAvatar = 'images/avatar_default.jpeg';

export const AvatarUploader = ({
  fileType,
  size = 150,
  onFileSelect,
  ...props
}: IAvatarUploader) => {
  const [currentImage, setCurrentImage] = useState(null);

  const handleOnImageChange = (e) => {
    const image = (e.target as HTMLInputElement).files[0];
    const reader = new FileReader();
    reader.onload = (avatar) => setCurrentImage(avatar.target.result);
    reader.readAsDataURL(image);
    onFileSelect(image);
  };

  return (
    <StyledAvatarContainer size={size}>
      {currentImage || defaultAvatar ? <AvatarPreview src={currentImage || defaultAvatar} /> : null}
      <StyledUploader
        type="file"
        accept={fileType || 'image/*'}
        onChange={handleOnImageChange}
        size={size}
        {...props}
      />
    </StyledAvatarContainer>
  );
};
