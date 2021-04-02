import styled, { css } from 'styled-components';

export const StyledInput = styled.input(
  ({ theme }) => css`
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.border};
    font-size: 0.9rem;
    border-radius: 1px;
    color: inherit;
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
