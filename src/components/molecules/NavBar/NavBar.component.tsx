import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import {
  StyledNav,
  StyledNavBrand,
  StyledList,
  StyledNavItem,
  StyledNavLogout,
} from './NavBar.styled';

interface INavbarProps {
  name: string;
}

export const NavBar = ({ name }: INavbarProps) => {
  return (
    <StyledNav className="nav navbar-expand-lg border-bottom">
      <StyledNavBrand className="navbar-brand">{name}</StyledNavBrand>
      <ul className="nav navbar-nav mr-auto">
        <StyledList>
          <StyledNavItem href="/contacts">Contacts</StyledNavItem>
        </StyledList>
        <StyledList>
          <StyledNavItem href="/companies">Companies</StyledNavItem>
        </StyledList>
        <StyledList>
          <StyledNavItem href="/users">Users</StyledNavItem>
        </StyledList>
        <StyledList>
          <StyledNavItem href="/companies">Region/City</StyledNavItem>
        </StyledList>
      </ul>
      <ul className="nav">
        <li>
          <StyledNavLogout href="/login">
            <FontAwesomeIcon icon={faSignOutAlt}></FontAwesomeIcon> Logout
          </StyledNavLogout>
        </li>
      </ul>
    </StyledNav>
  );
};

export default NavBar;
