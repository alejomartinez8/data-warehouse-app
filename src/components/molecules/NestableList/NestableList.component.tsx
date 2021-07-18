import { useState } from 'react';
import { Icon, Button } from 'components/atoms';
import { faPlus, faMinus, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import {
  StyledContainer,
  StyledList,
  StyledListItem,
  StyledItemContent,
  StyledItemLabel,
} from './NestableList.styled';

export interface IItem {
  id: string;
  name: string;
  items?: IItem[];
  type: string;
  labelItems?: string;
  icon: IconDefinition;
  parentId?: string;
}

interface INestableListProps {
  items?: IItem[];
  handleOnEdit: (item: IItem) => void;
  handleOnDelete: (item: IItem) => void;
  handleOnAddItem: (item: IItem) => void;
}

const RecursiveList = ({
  items,
  handleOnEdit,
  handleOnDelete,
  handleOnAddItem,
}: INestableListProps) => {
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
                    <Icon icon={item.collapsed ? faMinus : faPlus} />
                  </Button>
                )}
                <Icon icon={item.icon} />
                <StyledItemLabel>{item.name}</StyledItemLabel>
              </div>
              <div>
                <Button color="primary" size="extraSmall" onClick={() => handleOnEdit(item)}>
                  Edit
                </Button>
                <Button color="danger" size="extraSmall" onClick={() => handleOnDelete(item)}>
                  Delete
                </Button>
                {item.labelItems && (
                  <Button color="info" size="extraSmall" onClick={() => handleOnAddItem(item)}>
                    Add {item.labelItems}
                  </Button>
                )}
              </div>
            </StyledItemContent>
            {item.collapsed && item.items && (
              <RecursiveList
                items={item.items}
                handleOnEdit={handleOnEdit}
                handleOnDelete={handleOnDelete}
                handleOnAddItem={handleOnAddItem}
              />
            )}
          </StyledListItem>
        ))}
    </StyledList>
  );
};

export const NestableList = ({
  items,
  handleOnEdit,
  handleOnDelete,
  handleOnAddItem,
}: INestableListProps) => (
  <StyledContainer>
    <RecursiveList
      items={items}
      handleOnEdit={handleOnEdit}
      handleOnDelete={handleOnDelete}
      handleOnAddItem={handleOnAddItem}
    />
  </StyledContainer>
);
