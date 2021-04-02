/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/control-has-associated-label */
import { CardBox } from 'components/atoms';
import { StyledFormGroup, StyledLabel, StyledInput, StyledSelect } from './FilteSearch.styled';

export const FilterSearch = ({ ...props }) => (
  <CardBox.Content {...props}>
    <form>
      <StyledFormGroup>
        <StyledLabel>Name</StyledLabel>
        <StyledInput type="text" />
      </StyledFormGroup>
      <StyledFormGroup>
        <StyledLabel>Rol</StyledLabel>
        <StyledInput type="text" />
      </StyledFormGroup>
      <StyledFormGroup>
        <StyledLabel>Country/Region</StyledLabel>
        <StyledSelect>
          <option value=""></option>
          <option>Argentina / Latam</option>
          <option>Colombia / Latam</option>
          <option>Mexico / Latam</option>
        </StyledSelect>
      </StyledFormGroup>
      <StyledFormGroup>
        <StyledLabel>Company</StyledLabel>
        <StyledSelect>
          <option value=""></option>
        </StyledSelect>
      </StyledFormGroup>
      <StyledFormGroup>
        <StyledLabel>Favorite Channel</StyledLabel>
        <StyledSelect>
          <option value=""></option>
          <option>Whatsapp</option>
          <option>Facebook</option>
          <option>Email</option>
        </StyledSelect>
      </StyledFormGroup>
      <StyledFormGroup>
        <StyledLabel>Interest</StyledLabel>
        <StyledSelect>
          <option value=""></option>
          <option>Colombia / Latam</option>
          <option>Mexico / Latam</option>
        </StyledSelect>
      </StyledFormGroup>
    </form>
  </CardBox.Content>
);
