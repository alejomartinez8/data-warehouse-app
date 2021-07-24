import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useStore, useModal } from 'lib/hooks';
import { IField, PageList } from 'components/molecules';
import { HeaderContactForm, BodyContactForm, FooterContactForm } from 'components/organisms';
import {
  HeaderConfirmation,
  BodyConfirmation,
  FooterConfirmation,
  TableData,
} from 'components/atoms';
import { IContact } from 'lib/types';
import { ChannelBadge } from 'components/molecules/ChannelBadge/ChannelBadge.componet';

export const ContactsTemplate = observer(() => {
  const { setModal, closeModal } = useModal();

  const { contacts, loading, fetchContacts, fetchDeleteContacts } = useStore('contactsStore');

  const fields: IField[] = [
    { key: 'name', label: 'Contact' },
    { key: 'regionData', label: 'Country/Region' },
    { key: 'companyName', label: 'Company' },
    { key: 'position', label: 'Position' },
    { key: 'channelsLabels', label: 'Channels' },
    { key: 'interest', label: 'Interest' },
  ];

  const mapItems = () =>
    contacts.map((contact) => ({
      ...contact,
      name: (
        <TableData
          firstLine={`${contact.firstName} ${contact.lastName}`}
          secondLine={contact.email}
        />
      ),
      companyName: contact.company.name,
      regionData: (
        <TableData
          firstLine={contact.city?.country?.name}
          secondLine={contact.city?.country?.region?.name}
        />
      ),
      channelsLabels: contact.channels.map((item) => (
        <ChannelBadge key={item.channel.id} channel={item.channel.name} />
      )),
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

  const handleOnDelete = (items: IContact[]) => {
    const handleOnConfirmation = async () => {
      await fetchDeleteContacts(items);
      closeModal();
    };

    setModal({
      header: (
        <HeaderConfirmation title={items.length === 1 ? 'Delete Contact' : 'Delete Companies'} />
      ),
      body: (
        <BodyConfirmation>Are you sure you want to delete the selected contacts?</BodyConfirmation>
      ),
      footer: <FooterConfirmation onConfirm={handleOnConfirmation} onClose={closeModal} />,
    });
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <PageList
      singularItem="Contact"
      pluralItem="Contacts"
      fields={fields}
      items={mapItems()}
      loading={loading}
      handleOnCreate={handleOnCreate}
      handleOnEdit={handleOnEdit}
      handleOnDelete={handleOnDelete}
    />
  );
});

// export const Contacts = () => {
//   const { contacts, loading, fetchContacts } = useStore('contactsStore');

//   useEffect(() => {
//     fetchContacts();
//   }, [fetchContacts]);

//   return (
//     <>
//       <Head>
//         <title>Data Warehouse - Contacts</title>
//       </Head>
//       <CardBox>
//         <h1>Contacts</h1>
//         <CardBox.Title>
//           <StyledTitleContainer>
//             <InputSearch />
//             <StyledButtonContainer>
//               <Button color="primary" outline>
//                 <Icon icon={faUpload} color="primary" />
//               </Button>
//               <Button color="primary" outline dropdown>
//                 Export Contacts
//               </Button>
//               <Button color="primary" disabled>
//                 Add Contact
//               </Button>
//             </StyledButtonContainer>
//           </StyledTitleContainer>
//         </CardBox.Title>
//         <CardBox.Content>
//           {loading ? 'Loading...' : <ContactList contacts={contacts} />}
//         </CardBox.Content>
//       </CardBox>
//     </>
//   );
// };
