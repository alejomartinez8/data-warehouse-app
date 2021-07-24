import { StyledProgressBar, StyledContainer } from './ProgressBar.styled';

interface IProgressBar {
  value: number;
}

export const ProgressBar = ({ value }: IProgressBar) => (
  <StyledContainer>
    <StyledProgressBar color="primary" width={value} />
  </StyledContainer>
);
