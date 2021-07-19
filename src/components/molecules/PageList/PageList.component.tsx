import { useEffect, useState } from 'react';
import Head from 'next/head';
import { Button, CardBox, TableList } from 'components/atoms';
import { useModal } from 'lib/hooks';
import { observer } from 'mobx-react-lite';
import { HeaderForm, BodyForm, FooterForm } from './Form.modal';
import { HeaderDelete, BodyDelete, FooterDelete } from './Delete.modal';
import { StyledTitleContainer, StyledButtonContainer } from './PageList.styled';

export interface IField {
  key: string;
  label: string;
  type: 'email' | 'text' | 'password' | 'selectable';
  required: boolean;
  options?: string[];
}

interface ITableListProps {
  pluralItem: string;
  singularItem: string;
  fields: IField[];
  items: any[];
  loading: boolean;
  fetchItems: () => void;
  fetchCreateItems: (data) => void;
  fetchUpdateItems: (id, data) => void;
  fetchDeleteItems: (items: any[]) => void;
}

export const PageList = observer(
  ({
    pluralItem,
    singularItem,
    items,
    loading,
    fields,
    fetchItems,
    fetchCreateItems,
    fetchUpdateItems,
    fetchDeleteItems,
  }: ITableListProps) => {
    const [selected, setSelected] = useState([]);
    const { setModal } = useModal();

    const handleAdd = () => {
      setModal({
        header: <HeaderForm title={`Add ${singularItem}`} />,
        body: (
          <BodyForm
            fetchItems={fetchItems}
            fields={fields}
            fetchCreateItems={fetchCreateItems}
            fetchUpdateItems={fetchUpdateItems}
          />
        ),
        footer: <FooterForm fetchDeleteItems={fetchDeleteItems} />,
      });
    };

    const handleEdit = (editItem) => {
      setModal({
        header: <HeaderForm title={`Edit ${singularItem}`} />,
        body: (
          <BodyForm
            item={editItem}
            fields={fields}
            fetchItems={fetchItems}
            fetchCreateItems={fetchCreateItems}
            fetchUpdateItems={fetchUpdateItems}
          />
        ),
        footer: <FooterForm item={editItem} fetchDeleteItems={fetchDeleteItems} />,
      });
    };

    const handleDelete = () => {
      setModal({
        header: <HeaderDelete title={`Delete ${singularItem}`} />,
        body: <BodyDelete />,
        footer: <FooterDelete items={selected} fetchDeleteItems={fetchDeleteItems} />,
      });
    };

    useEffect(() => {
      fetchItems();
    }, [fetchItems]);

    return (
      <>
        <Head>
          <title>Data Warehouse - {pluralItem}</title>
        </Head>
        <h1>{pluralItem}</h1>
        <CardBox>
          <CardBox.Title>
            <StyledTitleContainer>
              <StyledButtonContainer>
                <Button color="primary" onClick={handleAdd}>
                  Add {singularItem}
                </Button>
                {selected.length > 0 && (
                  <Button color="danger" onClick={handleDelete}>
                    Delete
                  </Button>
                )}
              </StyledButtonContainer>
            </StyledTitleContainer>
          </CardBox.Title>
          <CardBox.Content>
            {loading ? (
              'Loading...'
            ) : (
              <TableList
                fields={fields}
                items={items}
                handleEditItem={handleEdit}
                setItemsSelected={setSelected}
              />
            )}
          </CardBox.Content>
        </CardBox>
      </>
    );
  },
);
