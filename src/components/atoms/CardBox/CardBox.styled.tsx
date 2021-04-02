import styled, { css } from 'styled-components';

export const StyledContainer = styled.div`
  margin-bottom: 25px;
  margin-top: 0;
  padding: 0;
  clear: both;
`;

export const StyledTitle = styled.div(
  ({ theme }) => css`
    background-color: ${theme.colors.white};
    border-color: ${theme.colors.border};
    border-style: solid solid none;
    border-width: 1px;
    padding: 0.5rem 1rem;
    min-height: 48px;
    position: relative;
    border-radius: 2px 2px 0 0;
    display: flex;
    align-items: center;
  `,
);

export const StyledHeading = styled.h5`
  display: inline-block;
  font-size: 14px;
  margin: 0 0 7px;
  padding: 0;
  text-overflow: ellipsis;
  float: none;
  font-weight: 600;
`;

export const StyledContent = styled.div(
  ({ theme }) => css`
    background-color: ${theme.colors.white};
    padding: 20px;
    border-color: ${theme.colors.border};
    border-image: none;
    border-style: solid;
    border-width: 1px;
    clear: both;
  `,
);
