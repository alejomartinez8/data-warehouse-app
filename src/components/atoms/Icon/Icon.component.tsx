import { StyledIcon } from './Icon.styled';

interface IIcon {
  icon?: 'sign-out-alt' | 'caret-down' | 'search' | 'upload';
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
