import { Checkbox } from 'components/atoms';
import { IField } from 'components/molecules';
import { checkboxEnum } from 'constans';
import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import {
  StyledTableContet,
  StyledTable,
  StyledTHead,
  StyledTBody,
  StyledTR,
} from './TableList.styled';

const { CHECKED, UNCHECKED, INDETERMINATE } = checkboxEnum;

interface ITableProps {
  fields: IField[];
  items: any[];
  setItemsSelected: (items: any[]) => void;
  handleEditItem: (item: any) => void;
}

export const TableList = observer(
  ({ fields, items, setItemsSelected, handleEditItem }: ITableProps) => {
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

    useEffect(() => {
      const itemsSelected = itemList?.filter((item) => item.checked);

      if (itemsSelected?.length === itemList?.length) {
        setCheckedAll(CHECKED);
      } else if (itemsSelected.length > 0) {
        setCheckedAll(INDETERMINATE);
      } else {
        setCheckedAll(UNCHECKED);
      }

      setItemsSelected(itemsSelected);
    }, [setCheckedAll, setItemsSelected, itemList]);

    return (
      <StyledTableContet>
        <StyledTable>
          <StyledTHead>
            <tr>
              <th>
                <Checkbox onChange={handleOnChangeAll} value={checkedAll} />
              </th>
              {fields.map((field) => (
                <th key={field.key}>{field.label}</th>
              ))}
            </tr>
          </StyledTHead>
          <StyledTBody>
            {items?.length > 0 &&
              items.map((item) => (
                <StyledTR key={item.id} onClick={() => handleEditItem(item)} checked={item.checked}>
                  <td>
                    <input
                      type="checkbox"
                      onChange={() => handleOnChange(item.id)}
                      onClick={(e) => e.stopPropagation()}
                      checked={item.checked}
                    />
                  </td>
                  {fields.map((field) => (
                    <td key={field.key}>{item[field.key]}</td>
                  ))}
                </StyledTR>
              ))}
          </StyledTBody>
        </StyledTable>
      </StyledTableContet>
    );
  },
);
