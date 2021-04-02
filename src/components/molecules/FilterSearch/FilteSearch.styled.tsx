import styled from 'styled-components';
import { Input, Select } from 'components/atoms';

export const StyledFormGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 1rem;
`;

export const StyledLabel = styled.label`
  flex: 0 0 20%;
  max-width: 20%;
`;

export const StyledInput = styled(Input)`
  flex: 0 0 80%;
  max-width: 80%;
`;

export const StyledSelect = styled(Select)`
  flex: 0 0 80%;
  max-width: 80%;
`;
