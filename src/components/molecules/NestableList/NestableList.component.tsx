import { useState } from 'react';
import { Button, Icon } from 'components/atoms';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import {
  StyledContainer,
  StyledList,
  StyledListItem,
  StyledItemContent,
  StyledItemLabel,
  StyledButton,
} from './NestableList.styled';

export interface IItem {
  name: string;
  type: 'region' | 'country' | 'city';
  items?: IItem[];
}

interface INestableListProps {
  items?: IItem[];
}

const RecursiveList = ({ items }: INestableListProps) => {
  const [itemList, setItemList] = useState(
    items ? items.map((item) => ({ ...item, collapsed: true })) : [],
  );

  const handleOnClick = (itemSelected: IItem) => {
    setItemList(
      itemList.map((item) =>
        item.name === itemSelected.name ? { ...item, collapsed: !item.collapsed } : item,
      ),
    );
  };

  return (
    <StyledList>
      {itemList?.length > 0 &&
        itemList.map((item) => (
          <StyledListItem key={item.name}>
            <StyledItemContent>
              <div>
                {item.items?.length > 0 && (
                  <Button size="extraSmall" onClick={() => handleOnClick(item)}>
                    <Icon icon={item.collapsed ? faMinus : faPlus} color="primary" />
                  </Button>
                )}
                <StyledItemLabel>{item.name}</StyledItemLabel>
              </div>
              {item.items?.length > 0 && (
                <div>
                  <StyledButton color="info" size="extraSmall">
                    Edit
                  </StyledButton>
                  <StyledButton color="danger" size="extraSmall">
                    Delete
                  </StyledButton>
                  <StyledButton size="extraSmall">Add Item</StyledButton>
                </div>
              )}
            </StyledItemContent>
            {item.collapsed && <RecursiveList key={item.name} {...item} />}
          </StyledListItem>
        ))}
    </StyledList>
  );
};

export const NestableList = ({ items }: INestableListProps) => (
  <StyledContainer>
    <RecursiveList items={items} />
  </StyledContainer>
);
