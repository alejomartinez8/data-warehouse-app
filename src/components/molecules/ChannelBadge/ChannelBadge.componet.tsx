import { StyledBadge } from './ChannelBadeg.styled';

export const ChannelBadge = ({ label, preference }) => {
  const getColor = () => {
    switch (preference) {
      case 'DONT_DISTURB':
        return 'danger';

      case 'FAVORITE':
        return 'success';

      default:
        return 'default';
    }
  };
  return <StyledBadge color={getColor()}>{label}</StyledBadge>;
};
