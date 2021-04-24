import React, { useState } from 'react';
import { Button, Icon } from 'components/atoms';
import { faCaretDown, faSearch } from '@fortawesome/free-solid-svg-icons';
import { StyledContainer, StyledInput, StyledFilterSearch } from './InputSearch.styled';
import baseTheme from 'themes/baseTheme';

export const InputSearch = () => {
  const [collapsed, setCollapsed] = useState(true);

  const handleOnClickFilter = () => {
    setCollapsed(!collapsed);
  };

  return (
    <StyledContainer>
      <StyledInput type="text" />
      <Button color="white" type="button" onClick={handleOnClickFilter}>
        <Icon icon={faCaretDown} color={baseTheme.colors.primary} />
      </Button>
      <Button color="primary" type="submit">
        <Icon icon={faSearch} color="white" />
      </Button>
      <StyledFilterSearch collapsed={collapsed} />
    </StyledContainer>
  );
};
