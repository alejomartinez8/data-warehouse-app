import { useState, useEffect } from 'react';
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
  editItem?: boolean;
  items?: IItem[];
  handleOnEdit: (item: IItem) => void;
  handleOnDelete: (item: IItem) => void;
  handleOnAddItem: (item: IItem) => void;
}

export const NestableList = ({
  items,
  editItem,
  handleOnEdit,
  handleOnDelete,
  handleOnAddItem,
}: INestableListProps) => (
  <StyledContainer>
    <RecursiveList
      editItem={editItem}
      items={items}
      handleOnEdit={handleOnEdit}
      handleOnDelete={handleOnDelete}
      handleOnAddItem={handleOnAddItem}
    />
  </StyledContainer>
);

function RecursiveList({
  items,
  editItem,
  handleOnEdit,
  handleOnDelete,
  handleOnAddItem,
}: INestableListProps) {
  const [itemList, setItemList] = useState([]);

  const handleOnClick = (itemSelected: IItem) => {
    setItemList(
      itemList.map((item) =>
        item.name === itemSelected.name ? { ...item, collapsed: !item.collapsed } : item,
      ),
    );
  };

  useEffect(() => {
    setItemList(items ? items.map((item) => ({ ...item, collapsed: true })) : []);
  }, [items]);

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
              {editItem && (
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
              )}
            </StyledItemContent>
            {item.collapsed && item.items && (
              <RecursiveList
                editItem={editItem}
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
}
