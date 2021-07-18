import styled from 'styled-components';
import baseTheme from 'themes/baseTheme';

export const StyledFormGroup = styled.div`
  display: flex;
  justify-content: center;
  padding: 15px;
`;

export const StyledFormLabel = styled.label`
  padding: 0 15px;
  flex: 0 0 20%;
  max-width: 20%;
`;

export const StyledFormInput = styled.input`
  padding: 0 15px;
  flex: 0 0 80%;
  max-width: 80%;
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
    color: #495057;
    background-color: #fff;
    outline: 0;
  }
`;

export const StyledFormSelect = styled.select`
  max-width: 80%;
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