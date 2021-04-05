import { HTMLAttributes, ReactNode } from 'react';
import { StyledContainer, StyledDivider, StyledItem } from './DropdownMenu.styled';

interface IDropdownMenuProps extends HTMLAttributes<HTMLUListElement> {
  collapsed?: boolean;
}

interface IDropdownMenuItemProps {
  href?: string;
  children: ReactNode;
}

export const DropdownMenu = ({ collapsed = true, children }: IDropdownMenuProps) => (
  <StyledContainer collapsed={collapsed}>{children}</StyledContainer>
);

const DropdownMenuItem = ({ children, href, ...props }: IDropdownMenuItemProps) => (
  <StyledItem {...props}>
    <a href={href}>{children}</a>
  </StyledItem>
);

DropdownMenu.Item = DropdownMenuItem;
DropdownMenu.Divider = StyledDivider;
