import { HTMLAttributes } from 'react';
import { StyledSelect } from './Select.styled';

export const Select = ({ ...props }: HTMLAttributes<HTMLSelectElement>) => (
  <StyledSelect {...props} />
);
