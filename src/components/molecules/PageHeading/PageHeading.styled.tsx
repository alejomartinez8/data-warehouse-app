import styled, { css } from 'styled-components';

export const StyledContainer = styled.div(
  ({ theme }) => css`
    background-color: ${theme.colors.white};
    border-top: 0;
    padding: 0 10px 20px 10px;
    border-bottom: 1px solid #e7eaec;
  `,
);

export const StyledHeading = styled.h2`
  font-size: 24px;
  font-weight: 100;
  line-height: 1.2;
  margin-top: 20px;
  margin-bottom: 10px;
`;
