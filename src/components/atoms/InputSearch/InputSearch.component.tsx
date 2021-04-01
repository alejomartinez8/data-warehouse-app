import React from 'react';
import { Button, Icon } from 'components/atoms';
import { StyledContainer, StyledInput } from './InputSearch.styled';

export const InputSearch = () => {
  return (
    <StyledContainer>
      <StyledInput type="text" />
      <Button color="white" type="button">
        <Icon icon="caret-down" />
      </Button>
      <Button color="primary" type="submit">
        <Icon icon="search" color="white" />
      </Button>
    </StyledContainer>
  );
};
