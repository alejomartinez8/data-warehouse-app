import React from 'react';
import { NavBar } from 'components/molecules';
import { StyledWrapper, StyledContent } from './Layout.styled';

interface ILayout {
  children?: React.ReactNode;
}

export const Layout = ({ children }: ILayout) => {
  return (
    <StyledWrapper>
      <NavBar name="Data Warehouse" />
      <StyledContent>{children}</StyledContent>
      <footer></footer>
    </StyledWrapper>
  );
};

export default Layout;
