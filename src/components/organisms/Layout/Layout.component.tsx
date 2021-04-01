import React from 'react';
import { NavBar } from 'components/molecules';
import { Footer } from 'components/atoms';
import {
  StyledWrapper,
  StyledPageWrapper,
  StyledContent,
  StyledNavContainer,
} from './Layout.styled';

interface ILayout {
  children?: React.ReactNode;
}

export const Layout = ({ children }: ILayout) => {
  return (
    <StyledWrapper>
      <StyledPageWrapper>
        <StyledNavContainer>
          <NavBar name="Data Warehouse" />
        </StyledNavContainer>
        <StyledContent>{children}</StyledContent>
        <Footer />
      </StyledPageWrapper>
    </StyledWrapper>
  );
};

export default Layout;
