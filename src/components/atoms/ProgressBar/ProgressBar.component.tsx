import { ColorType } from 'themes/baseTheme';
import { StyledProgressBar, StyledContainer } from './ProgressBar.styled';

interface IProgressBar {
  value: number;
}

export const ProgressBar = ({ value }: IProgressBar) => {
  const getColor = (): ColorType => {
    switch (value) {
      case 25:
        return 'danger';

      case 50:
        return 'warning';

      case 75:
        return 'primary';

      case 100:
        return 'success';

      default:
        return 'default';
    }
  };

  return (
    <StyledContainer>
      <StyledProgressBar color={getColor()} width={value} />
    </StyledContainer>
  );
};
