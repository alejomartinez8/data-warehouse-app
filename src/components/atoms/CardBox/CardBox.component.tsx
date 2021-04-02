import { HTMLAttributes, ReactNode } from 'react';
import { StyledContainer, StyledTitle, StyledContent } from './CardBox.styled';

interface ICardBox extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const CardBoxTitle = ({ children, ...props }: ICardBox) => (
  <StyledTitle {...props}>{children}</StyledTitle>
);

const CardBoxContent = ({ children, ...props }: ICardBox) => (
  <StyledContent {...props}>{children}</StyledContent>
);

const CardBox = ({ children, ...props }: ICardBox) => (
  <StyledContainer {...props}>{children}</StyledContainer>
);

CardBox.Title = CardBoxTitle;
CardBox.Content = CardBoxContent;

export { CardBox };
