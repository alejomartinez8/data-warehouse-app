import styled, { css } from 'styled-components';
import baseTheme from 'themes/baseTheme';

interface IStyledFormGroup {
  widthCol?: number;
}

export const StyledFormGroup = styled.div<IStyledFormGroup>(
  ({ widthCol = 1 }) => css`
    margin-bottom: 1rem;
    padding: 0.5rem;
    flex: 0 0 ${widthCol * 100}%;
    max-width: ${widthCol * 100}%;
  `,
);

export const StyledFormRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const StyledFormLabel = styled.label`
  display: inline-block;
  margin-bottom: 0.5rem;
`;

export const StyledFormInput = styled.input`
  padding: 0 15px;
  background-color: #ffffff;
  background-image: none;
  border: 1px solid #e5e6e7;
  border-radius: 0.25rem;
  color: inherit;
  display: block;
  padding: 6px 12px;
  transition: border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s;
  width: 100%;

  &:focus {
    border-color: ${baseTheme.colors.primary};
    box-shadow: none;
    color: #495057;
    background-color: #fff;
    outline: 0;
  }
`;

export const StyledFormSelect = styled.select`
  background-color: #ffffff;
  background-image: none;
  border: 1px solid #e5e6e7;
  border-radius: 1px;
  color: inherit;
  display: block;
  padding: 6px 12px;
  transition: border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s;
  width: 100%;

  &:focus {
    border-color: ${baseTheme.colors.primary};
    box-shadow: none;
  }
`;
