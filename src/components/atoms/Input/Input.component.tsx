import { HTMLAttributes } from 'react';
import { StyledInput } from './Input.styled';

export const Input = ({ ...props }: HTMLAttributes<HTMLInputElement>) => <StyledInput {...props} />;
