import { AvatarPreview } from 'components/atoms';
import { useState } from 'react';
import { StyledAvatarContainer, StyledUploader } from './AvatarUploader.styled';

interface IAvatarUploader {
  fileType?: string;
  size?: number;
  avatar?: string;
  onFileSelect: (file: File) => void;
}

const defaultAvatar = 'images/avatar_default.jpeg';

export const AvatarUploader = ({
  fileType,
  size = 150,
  avatar,
  onFileSelect,
  ...props
}: IAvatarUploader) => {
  const [currentImage, setCurrentImage] = useState(null);

  const handleOnImageChange = (e) => {
    const file = (e.target as HTMLInputElement).files[0];
    const reader = new FileReader();
    reader.onload = (image) => setCurrentImage(image.target.result);
    reader.readAsDataURL(file);
    onFileSelect(file);
  };

  return (
    <StyledAvatarContainer size={size}>
      {currentImage || avatar || defaultAvatar ? (
        <AvatarPreview src={currentImage || avatar || defaultAvatar} />
      ) : null}
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
