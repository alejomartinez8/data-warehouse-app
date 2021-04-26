import React, { useState } from 'react';
import { Button, Icon } from 'components/atoms';
import { faCaretDown, faSearch } from '@fortawesome/free-solid-svg-icons';
import { StyledContainer, StyledInput, StyledFilterSearch } from './InputSearch.styled';

export const InputSearch = () => {
  const [collapsed, setCollapsed] = useState(true);

  const handleOnClickFilter = () => {
    setCollapsed(!collapsed);
  };

  return (
    <StyledContainer>
      <StyledInput type="text" />
      <Button color="default" type="button" onClick={handleOnClickFilter}>
        <Icon icon={faCaretDown} />
      </Button>
      <Button color="primary" type="submit">
        <Icon icon={faSearch} color="white" />
      </Button>
      <StyledFilterSearch collapsed={collapsed} />
    </StyledContainer>
  );
};
