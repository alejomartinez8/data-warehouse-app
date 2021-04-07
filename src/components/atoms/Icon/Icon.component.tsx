import { StyledIcon } from './Icon.styled';

export interface IIcon {
  icon?: string;
  color?: string;
}

export const Icon = ({ icon, color }: IIcon) => <StyledIcon color={color} className={icon} />;
