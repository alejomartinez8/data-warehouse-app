import React from 'react';
import { NavBar } from 'components/molecules';
import { Footer } from 'components/atoms';

import {
  StyledWrapper,
  StyledPageWrapper,
  StyledContent,
  StyledNavContainer,
} from './Layout.styled';

export const Layout = ({ children }) => (
  <StyledWrapper>
    <StyledPageWrapper>
      <StyledNavContainer>
        <NavBar />
      </StyledNavContainer>
      <StyledContent>{children}</StyledContent>
      <Footer />
    </StyledPageWrapper>
  </StyledWrapper>
);

export default Layout;
