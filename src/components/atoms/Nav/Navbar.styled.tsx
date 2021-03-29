import styled, { css } from 'styled-components';

export const StyledNav = styled.nav(
  ({ theme }) => css`
    background: ${theme.colors.white};
    margin-bottom: 0;
    padding: 0;
    width: 100%;
    border: 0;

    & {
      ul,
      li {
        margin: 0;
      }
    }
  `,
);

export const StyledNavBrand = styled.a(
  ({ theme }) => css`
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
    padding: 15px 25px;
    font-size: 18px;
    line-height: 20px;
    cursor: pointer;

    &:hover {
      color: ${theme.colors.white};
    }
  `,
);

export const StyledList = styled.li`
  margin-bottom: 0px;
`;

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
