import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from 'components/atoms';
import { DropdownMenu } from './DropdownMenu.component';

export default {
  title: 'Atoms/DropDown',
  component: DropdownMenu,
};

const StyledContainer = styled.div`
  margin: 1rem;
  position: relative;
`;

const Template = ({ collapsed, ...props }) => (
  <StyledContainer>
    <DropdownMenu {...props} collapsed={collapsed}>
      <DropdownMenu.Item>Item 1</DropdownMenu.Item>
      <DropdownMenu.Item>Item 2</DropdownMenu.Item>
      <DropdownMenu.Divider />
      <DropdownMenu.Item>Item 3</DropdownMenu.Item>
    </DropdownMenu>
  </StyledContainer>
);

export const Default = Template.bind({});

export const Expanded = Template.bind({});
Expanded.args = {
  collapsed: false,
};

export const ButtonDropDown = () => {
  const [collapsed, setCollapsed] = useState(false);

  const handleOnClick = () => {
    setCollapsed(!collapsed);
  };
  return (
    <StyledContainer>
      <Button dropdown onClick={handleOnClick} color="primary" outline>
        Action
      </Button>
      <DropdownMenu collapsed={collapsed}>
        <DropdownMenu.Item>Item 1</DropdownMenu.Item>
        <DropdownMenu.Item>Item 2</DropdownMenu.Item>
        <DropdownMenu.Divider />
        <DropdownMenu.Item>Item 3</DropdownMenu.Item>
      </DropdownMenu>
    </StyledContainer>
  );
};
