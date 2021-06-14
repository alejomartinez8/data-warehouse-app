import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Icon } from 'components/atoms';
import { postLogout } from 'lib/services';
import { useRouter } from 'next/router';

import {
  StyledNav,
  StyledNavBrand,
  StyledLogo,
  StyledList,
  StyledItem,
  StyledNavItem,
  StyledListLogut,
} from './NavBar.styled';

export const NavBar = () => {
  const router = useRouter();

  const handleLogout = () => {
    postLogout();
    router.push('/login');
  };

  return (
    <StyledNav>
      <StyledNavBrand>
        <StyledLogo src="/images/Logo.png" alt="logo" />
      </StyledNavBrand>
      <StyledList>
        <StyledItem>
          <StyledNavItem href="/contacts">Contacts</StyledNavItem>
        </StyledItem>
        {/* <StyledItem>
          <StyledNavItem href="/companies">Companies</StyledNavItem>
        </StyledItem> */}
        <StyledItem>
          <StyledNavItem href="/users">Users</StyledNavItem>
        </StyledItem>
        {/* <StyledItem>
          <StyledNavItem href="/companies">Region/City</StyledNavItem>
        </StyledItem> */}
      </StyledList>
      <StyledListLogut>
        <StyledItem>
          <StyledNavItem href="/" onClick={handleLogout}>
            <Icon icon={faSignOutAlt} /> Logout
          </StyledNavItem>
        </StyledItem>
      </StyledListLogut>
    </StyledNav>
  );
};

export default NavBar;
