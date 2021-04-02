import { Icon } from 'components/atoms';

import {
  StyledNav,
  StyledNavBrand,
  StyledLogo,
  StyledList,
  StyledItem,
  StyledNavMenu,
  StyledNavItem,
  StyledListLogut,
  StyledNavLogout,
} from './NavBar.styled';

interface INavbarProps {
  name: string;
}

export const NavBar = ({ name }: INavbarProps) => {
  return (
    <StyledNav>
      <StyledNavMenu>
        <StyledNavBrand>
          <StyledLogo src="/images/Logo Data Warehouse.png" alt="logo" />
        </StyledNavBrand>
        <StyledList>
          <StyledItem>
            <StyledNavItem href="/contacts">Contacts</StyledNavItem>
          </StyledItem>
          <StyledItem>
            <StyledNavItem href="/companies">Companies</StyledNavItem>
          </StyledItem>
          <StyledItem>
            <StyledNavItem href="/users">Users</StyledNavItem>
          </StyledItem>
          <StyledItem>
            <StyledNavItem href="/companies">Region/City</StyledNavItem>
          </StyledItem>
        </StyledList>
        <StyledListLogut>
          <StyledList>
            <StyledNavLogout href="/login">
              <Icon icon="sign-out-alt" /> Logout
            </StyledNavLogout>
          </StyledList>
        </StyledListLogut>
      </StyledNavMenu>
    </StyledNav>
  );
};

export default NavBar;
