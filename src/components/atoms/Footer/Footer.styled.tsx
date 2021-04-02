import styled, { css } from 'styled-components';

export const StyledFooter = styled.footer(
  ({ theme }) => css`
    background: ${theme.colors.white};
    border-top: 1px solid ${theme.colors.grey};
    bottom: 0;
    left: 0;
    padding: 10px 20px;
    position: absolute;
    right: 0;
  `,
);
