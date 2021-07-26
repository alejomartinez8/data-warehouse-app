import styled, { css } from 'styled-components';
import { Input } from 'components/atoms';
import { FilterSearch } from '../FilterSearch/FilterSearch.component';

interface IFilter {
  collapsed: boolean;
}

export const StyledContainer = styled.div(
  ({ theme }) => css`
    border: 1px solid ${theme.colors.border};
    border-radius: 3px;
    display: flex;
    position: relative;
    flex: 0 0 50%;

    > * {
      margin: 0;
    }
  `,
);

export const StyledInput = styled(Input)`
  width: 100%;
`;

export const StyledFilterSearch = styled(FilterSearch)<IFilter>(
  ({ collapsed }) => css`
    position: absolute;
    top: 34px;
    width: 100%;
    display: ${collapsed ? 'none' : 'block'};
  `,
);
