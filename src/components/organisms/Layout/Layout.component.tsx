import React from 'react';
import { NavBar } from 'components/molecules';
import { StyledWrapper } from './Layout.styled';

interface ILayout {
  children: React.ReactNode;
}

export const Layout = ({ children }: ILayout) => {
  return (
    <StyledWrapper>
      <header>
        <NavBar name="Data Warehouse" />
      </header>

      <main>{children}</main>

      <footer></footer>
    </StyledWrapper>
  );
};

export default Layout;
