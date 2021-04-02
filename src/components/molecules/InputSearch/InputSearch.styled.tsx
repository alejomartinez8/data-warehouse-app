import styled, { css } from 'styled-components';

export const StyledContainer = styled.div(
  ({ theme }) => css`
    border: 1px solid ${theme.colors.border};
    border-radius: 3px;
    display: flex;
  `,
);

export const StyledInput = styled.input(
  ({ theme }) => css`
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.border};
    border-radius: 1px;
    color: ${theme.colors.text};
    outline: 0;
    display: block;
    padding: 0.5rem 1rem;
    width: 100%;
    transition: border-color 0.15s ease-in-out 0s;

    &:focus {
      box-shadow: none;
      border-color: ${theme.colors.primary};
    }
  `,
);
