import Link from 'next/link';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Icon } from 'components/atoms';
import { useStore } from 'lib/hooks';
import { observer } from 'mobx-react-lite';
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

export const NavBar = observer(() => {
  const { user, logout } = useStore('userStore');
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  return (
    <StyledNav>
      <StyledNavBrand>
        <StyledLogo src="/images/Logo.png" alt="logo" />
      </StyledNavBrand>
      <StyledList>
        <StyledItem>
          <Link href="/contacts">
            <StyledNavItem>Contacts</StyledNavItem>
          </Link>
        </StyledItem>
        <StyledItem>
          <Link href="/companies">
            <StyledNavItem>Companies</StyledNavItem>
          </Link>
        </StyledItem>
        {user?.role === 'ADMIN' && (
          <StyledItem>
            <Link href="/users">
              <StyledNavItem>Users</StyledNavItem>
            </Link>
          </StyledItem>
        )}
        <StyledItem>
          <Link href="/regions">
            <StyledNavItem>Region/City</StyledNavItem>
          </Link>
        </StyledItem>
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
});
