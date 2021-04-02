import { StyledIcon } from './Icon.styled';

export enum IconName {
  'sign-out-alt',
  'caret-down',
  'search',
  'upload',
}

declare type IconType = keyof typeof IconName;
export interface IIcon {
  icon?: IconType;
  color?: string;
}

export const Icon = ({ icon, color }: IIcon) => {
  function getIcon() {
    switch (icon) {
      case 'sign-out-alt':
        return 'fas fa-sign-out-alt';

      case 'caret-down':
        return 'fas fa-caret-down';

      case 'search':
        return 'fas fa-search';

      case 'upload':
        return 'fas fa-upload';

      default:
        return '';
    }
  }

  return <StyledIcon color={color} className={getIcon()}></StyledIcon>;
};
