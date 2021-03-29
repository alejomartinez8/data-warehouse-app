import React from 'react';
import { NavBar } from 'components/molecules';
import { StyledWrapper, StyledContent } from './Layout.styled';

interface ILayout {
  children: React.ReactNode;
}

export const Layout = ({ children }: ILayout) => {
  return (
    <StyledWrapper>
      <header>
        <NavBar name="Data Warehouse" />
      </header>

      <main>
        <StyledContent>{children}</StyledContent>
      </main>

      <footer></footer>
    </StyledWrapper>
  );
};

export default Layout;
