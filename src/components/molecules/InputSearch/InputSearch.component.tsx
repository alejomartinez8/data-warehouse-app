import React, { useState } from 'react';
import { Button, Icon } from 'components/atoms';
import { faCaretDown, faSearch } from '@fortawesome/free-solid-svg-icons';
import { StyledContainer, StyledInput, StyledFilterSearch } from './InputSearch.styled';

interface IInputSearch {
  filterSearch?: boolean;
  handleOnSearch?: (searchQuery: string) => void;
}

export const InputSearch = ({ filterSearch = false, handleOnSearch }: IInputSearch) => {
  const [collapsed, setCollapsed] = useState(true);

  const handleOnClickFilter = () => {
    setCollapsed(!collapsed);
  };

  const handleOnChange = (e) => {
    handleOnSearch?.(e.target.value);
  };

  return (
    <StyledContainer>
      <StyledInput type="text" onChange={handleOnChange} placeholder="Search" />
      {filterSearch && (
        <>
          <Button color="default" type="button" onClick={handleOnClickFilter}>
            <Icon icon={faCaretDown} />
          </Button>
          <Button color="primary" type="submit">
            <Icon icon={faSearch} color="white" />
          </Button>
          <StyledFilterSearch collapsed={collapsed} />
        </>
      )}
    </StyledContainer>
  );
};
