import { StyledImagePreview } from './AvatarPreview.styled';

const DEFAULT_AVATAR = 'images/avatar_default.jpeg';

interface IAvatarPreview {
  src?: string;
  size?: number;
}

export const AvatarPreview = ({ src, size, ...props }: IAvatarPreview) => (
  <StyledImagePreview src={src || DEFAULT_AVATAR} size={size} {...props} />
);
