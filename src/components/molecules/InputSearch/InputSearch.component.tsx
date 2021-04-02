import React, { useState } from 'react';
import { Button, Icon } from 'components/atoms';
import { StyledContainer, StyledInput, StyledFilterSearch } from './InputSearch.styled';

export const InputSearch = () => {
  const [collapsed, setCollapsed] = useState(true);

  const handleOnClickFilter = () => {
    setCollapsed(!collapsed);
  };

  return (
    <StyledContainer>
      <StyledInput type="text" />
      <Button color="white" type="button" onClick={handleOnClickFilter}>
        <Icon icon="caret-down" />
      </Button>
      <Button color="primary" type="submit">
        <Icon icon="search" color="white" />
      </Button>
      <StyledFilterSearch collapsed={collapsed} />
    </StyledContainer>
  );
};
