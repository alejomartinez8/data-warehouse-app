import styled, { css } from 'styled-components';

export const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  overflow-x: hidden;
`;

export const StyledPageWrapper = styled.div(
  ({ theme }) => css`
    transition: all 0.4s;
    flex-shrink: 1;
    background-color: ${theme.colors.gray};
    width: 100%;
    position: relative;

    @media (min-width: 768px) {
      min-height: 100vh;
    }
  `,
);

export const StyledNavContainer = styled.div(
  ({ theme }) => css`
    background-color: ${theme.colors.white};
    border-bottom: 1px solid ${theme.colors.border};
  `,
);

export const StyledContent = styled.div`
  padding: 40px;
`;
