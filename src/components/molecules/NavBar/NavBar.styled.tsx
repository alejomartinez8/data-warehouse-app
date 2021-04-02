import styled, { css } from 'styled-components';

export const StyledNav = styled.nav(
  ({ theme }) => css`
    background-color: ${theme.colors.white};
    margin-bottom: 0;
    padding: 0;
    width: 100%;
    border: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    @media (min-width: 992px) {
      flex-flow: row nowrap;
      justify-content: flex-start;
    }
  `,
);

export const StyledNavMenu = styled.div`
  flex-grow: 1;
  align-items: center;

  @media (min-width: 992px) {
    display: flex;
    flex-basis: auto;
  }
`;

export const StyledNavBrand = styled.a(
  ({ theme }) => css`
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
    padding: 0 0.5rem;
    font-size: 18px;
    line-height: 20px;
    cursor: pointer;
    display: inline-block;
    margin-right: 1rem;
    white-space: nowrap;
    text-decoration: none;

    &:hover {
      color: ${theme.colors.white};
    }
  `,
);

export const StyledLogo = styled.img`
  height: 51px;
`;

export const StyledList = styled.ul`
  margin-right: auto;
  display: flex;
  padding-left: 0;
  margin-top: 0;
  margin-bottom: 0;
  list-style: none;
`;

export const StyledItem = styled.li``;

export const StyledNavItem = styled.a(
  ({ theme }) => css`
    padding: 15px 20px;
    color: ${theme.colors.secondary};
    font-weight: 600;
    display: block;

    &:focus,
    &:hover {
      color: ${theme.colors.primary};
      text-decoration: none;
    }
  `,
);

export const StyledListLogut = styled.ul`
  margin: 0;
  padding: 0;
  text-align: right;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
`;

export const StyledNavLogout = styled.a(
  ({ theme }) => css`
    padding: 15px 20px;
    color: ${theme.colors.secondary};
    font-size: 14px;
    min-height: 50px;
    font-weight: 600;
    display: block;

    &:focus,
    &:hover {
      color: ${theme.colors.primary};
      text-decoration: none;
    }

    & > svg {
      margin-right: 6px;
      width: 14px;
    }
  `,
);
