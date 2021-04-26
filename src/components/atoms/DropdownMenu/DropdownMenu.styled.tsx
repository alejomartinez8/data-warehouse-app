import styled, { css } from 'styled-components';

interface IStyledContainer {
  collapsed?: boolean;
}

export const StyledContainer = styled.ul<IStyledContainer>(
  ({ theme, collapsed }) => css`
    display: ${collapsed ? 'none' : 'block'};
    position: absolute;
    top: 33px; // TODO
    left: 0px;
    will-change: top, left;
    border: medium none;
    border-radius: 0.25rem;
    box-shadow: 0 0 3px rgb(86 96 117 / 70%);
    float: left; // TODO
    font-size: 0.85rem;
    list-style: none outside none;
    padding: 0;
    z-index: 100;
    min-width: 10rem;
    margin: 0.125rem 0 0;
    background-color: ${theme.colors.white};
  `,
);

export const StyledItem = styled.li(
  ({ theme }) => css`
    > a {
      border-radius: 3px;
      color: inherit;
      line-height: 1.785rem;
      margin: 0.285rem;
      text-align: left;
      font-weight: normal;
      display: block;
      padding: 3px 20px;
      width: auto;
      cursor: pointer;

      &:hover {
        color: ${theme.colors.black};
        background-color: ${theme.colors.gray};
      }
    }
  `,
);

export const StyledDivider = styled.li(
  ({ theme }) => css`
    height: 0;
    margin: 0.5rem 0;
    overflow: hidden;
    border-top: 1px solid ${theme.colors.border};
  `,
);
