import { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useStore, useModal } from 'lib/hooks';
import { IField, PageLayout } from 'components/molecules';
import { HeaderContactForm, BodyContactForm, FooterContactForm } from 'components/organisms';
import {
  HeaderConfirmation,
  BodyConfirmation,
  FooterConfirmation,
  TableList,
  TableData,
  ProgressBar,
  IOrderBy,
} from 'components/atoms';
import { IContact } from 'lib/types';
import { ChannelBadge } from 'components/molecules/ChannelBadge/ChannelBadge.componet';
import { downloadFile } from 'utils';

const EnumLabelContact = {
  name: 'firstName',
  cityData: 'city',
  companyName: 'company',
  position: 'position',
  interestBar: 'interest',
};

export const ContactsTemplate = observer(() => {
  const { setModal, closeModal } = useModal();

  const { contacts, loading, fetchContacts, downloadContacts, fetchDeleteContacts } = useStore(
    'contactsStore',
  );

  const [searchQuery, setSearchQuery] = useState('');
  const [orderBy, setOrderBy] = useState<IOrderBy>({ orderBy: 'name', order: 'asc' });
  const [itemsSelected, setItemsSelected] = useState([]);

  const fields: IField[] = [
    { key: 'name', label: 'Contact' },
    { key: 'cityData', label: 'City/Country' },
    { key: 'companyName', label: 'Company' },
    { key: 'position', label: 'Position' },
    { key: 'channelLabel', label: 'Channel' },
    { key: 'interestBar', label: 'Interest' },
  ];

  const mapItems = () =>
    contacts?.map((contact) => ({
      ...contact,
      name: (
        <TableData
          firstLine={`${contact.firstName} ${contact.lastName}`}
          secondLine={contact.email}
        />
      ),
      companyName: contact.company?.name,
      cityData: (
        <TableData firstLine={contact.city?.name} secondLine={contact.city?.country?.name} />
      ),
      channelLabel: contact.channels?.map((channel) => (
        <ChannelBadge
          key={channel.channelId}
          label={channel.channel.name}
          preference={channel.preference}
        />
      )),
      interestBar: (
        <span>
          {contact.interest}% <ProgressBar value={Number(contact.interest)} />
        </span>
      ),
    }));

  const handleOnCreate = () => {
    setModal({
      header: <HeaderContactForm title="Add Contact" />,
      body: <BodyContactForm />,
      footer: <FooterContactForm />,
      size: 'large',
    });
  };

  const handleOnEdit = (item: IContact) => {
    setModal({
      header: <HeaderContactForm title="Edit Contact" />,
      body: <BodyContactForm contact={item as IContact} />,
      footer: <FooterContactForm contact={item} />,
      size: 'large',
    });
  };

  const handleOnDelete = () => {
    const handleOnConfirmation = async () => {
      await fetchDeleteContacts(itemsSelected);
      closeModal();
    };

    setModal({
      header: (
        <HeaderConfirmation
          title={itemsSelected.length === 1 ? 'Delete Contact' : 'Delete Companies'}
        />
      ),
      body: (
        <BodyConfirmation>Are you sure you want to delete the selected contacts?</BodyConfirmation>
      ),
      footer: <FooterConfirmation onConfirm={handleOnConfirmation} onClose={closeModal} />,
    });
  };

  const getParams = () => {
    const mapOrderBy = () => ({
      orderBy: EnumLabelContact[orderBy.orderBy] || '',
      order: orderBy.order,
    });

    let params: { searchQuery?: string; orderBy?: string; order?: string } = {};
    if (searchQuery) params.searchQuery = searchQuery;
    if (orderBy) params = { ...params, ...mapOrderBy() };

    return params;
  };

  const handleOnExport = async () => {
    const params = getParams();
    const data = await downloadContacts(params);
    downloadFile(data, 'contacts', '.csv');
  };

  useEffect(() => {
    const params = getParams();
    fetchContacts(params);
  }, [searchQuery, orderBy]);

  return (
    <PageLayout
      singularItem="Contact"
      pluralItem="Contacts"
      deleteButton={itemsSelected?.length > 0}
      handleOnExport={handleOnExport}
      handleOnCreate={handleOnCreate}
      handleOnDelete={handleOnDelete}
      querySearch={setSearchQuery}
    >
      <TableList
        fields={fields}
        items={mapItems()}
        orderBy={orderBy}
        loading={loading}
        handleEditItem={handleOnEdit}
        setItemsSelected={setItemsSelected}
        handleOnSortBy={setOrderBy}
      />
    </PageLayout>
  );
});
