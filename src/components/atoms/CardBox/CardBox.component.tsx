import { ReactNode } from 'react';
import { StyledContainer, StyledTitle, StyledHeading, StyledContent } from './CardBox.styled';

interface ICardBox {
  title?: string;
  children: ReactNode;
}

export const CardBox = ({ title, children, ...props }: ICardBox) => {
  return (
    <StyledContainer {...props}>
      {title && (
        <StyledTitle>
          <StyledHeading>{title}</StyledHeading>
        </StyledTitle>
      )}
      <StyledContent>{children}</StyledContent>
    </StyledContainer>
  );
};
