import styled, { css } from 'styled-components';

export const StyledTR = styled.tr(
  ({ theme }) => css`
    &:hover {
      cursor: pointer;
      background-color: ${theme.colors.grey};
    }
  `,
);
