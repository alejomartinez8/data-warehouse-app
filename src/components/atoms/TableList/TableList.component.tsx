import { faSort, faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons';
import { Checkbox } from 'components/atoms';
import { IField } from 'components/molecules';
import { checkboxEnum } from 'constans';
import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import { Icon } from '../Icon/Icon.component';
import {
  StyledTableContet,
  StyledTable,
  StyledTHead,
  StyledTBody,
  StyledTR,
  StyledTD,
  StyledTH,
} from './TableList.styled';

const { CHECKED, UNCHECKED, INDETERMINATE } = checkboxEnum;

export interface IOrderBy {
  orderBy: string;
  order: 'asc' | 'desc';
}
interface ITableProps {
  fields: IField[];
  items: any[];
  orderBy: IOrderBy;
  setItemsSelected: (items: any[]) => void;
  handleEditItem: (item: any) => void;
  handleOnSortBy: (orderBy: IOrderBy) => void;
}

export const TableList = observer(
  ({ fields, items, orderBy, setItemsSelected, handleEditItem, handleOnSortBy }: ITableProps) => {
    const [itemList, setItemList] = useState(items?.map((item) => ({ ...item, checked: false })));
    const [checkedAll, setCheckedAll] = useState(UNCHECKED);

    const handleOnChange = (id: string) => {
      setItemList(
        itemList.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item)),
      );
    };

    const handleOnChangeAll = () => {
      if (checkedAll === UNCHECKED) {
        setItemList(itemList.map((item) => ({ ...item, checked: true })));
      } else {
        setItemList(itemList.map((item) => ({ ...item, checked: false })));
      }
    };

    const handleOnClickTH = (key: string) => {
      if (orderBy?.orderBy === key) {
        handleOnSortBy?.({ orderBy: key, order: orderBy.order === 'asc' ? 'desc' : 'asc' });
      } else {
        handleOnSortBy?.({ orderBy: key, order: 'asc' });
      }
    };

    const getSortIcon = (key: string) => {
      if (orderBy?.orderBy === key) {
        return orderBy.order === 'asc' ? faSortDown : faSortUp;
      }
      return faSort;
    };

    useEffect(() => {
      const itemsSelected = itemList?.filter((item) => item.checked);

      if (itemsSelected?.length > 0) {
        setCheckedAll(CHECKED);
      } else if (itemsSelected?.length > 0) {
        setCheckedAll(INDETERMINATE);
      } else {
        setCheckedAll(UNCHECKED);
      }

      setItemsSelected(itemsSelected);
    }, [itemList]);

    return (
      <StyledTableContet>
        <StyledTable>
          <StyledTHead>
            <tr>
              <th>
                <Checkbox onChange={handleOnChangeAll} value={checkedAll} />
              </th>
              {fields.map((field) => (
                <StyledTH key={field.key} onClick={() => handleOnClickTH(field.key)}>
                  {field.label} <Icon icon={getSortIcon(field.key)} />
                </StyledTH>
              ))}
            </tr>
          </StyledTHead>
          <StyledTBody>
            {items?.length > 0 &&
              items.map((item) => (
                <StyledTR key={item.id} onClick={() => handleEditItem(item)} checked={item.checked}>
                  <StyledTD>
                    <input
                      type="checkbox"
                      onChange={() => handleOnChange(item.id)}
                      onClick={(e) => e.stopPropagation()}
                      checked={item.checked}
                    />
                  </StyledTD>
                  {fields.map((field) => (
                    <StyledTD key={field.key}>{item[field.key]}</StyledTD>
                  ))}
                </StyledTR>
              ))}
          </StyledTBody>
        </StyledTable>
      </StyledTableContet>
    );
  },
);
