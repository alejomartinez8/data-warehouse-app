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
    background-color: #ffffff;
    border-color: #e7eaec;
    border-image: none;
    border-style: solid solid none;
    border-width: 1px;
    color: inherit;
    margin-bottom: 0;
    padding: 15px 90px 8px 15px;
    min-height: 48px;
    position: relative;
    clear: both;
    border-radius: 2px 2px 0 0;
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
    color: inherit;
    padding: 15px 20px 20px 20px;
    border-color: #e7eaec;
    border-image: none;
    border-style: solid;
    border-width: 1px;
  `,
);
