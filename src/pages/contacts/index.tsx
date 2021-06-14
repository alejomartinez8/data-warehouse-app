import { Contacts } from 'components/templates';
import { getContacts } from 'lib/services/contacts/contacts.service';
import { GetServerSideProps } from 'next';

export default function Page({ contacts }) {
  return <Contacts contacts={contacts} />;
}

Page.requrireAuth = true;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const contacts = await getContacts(ctx);

  return {
    props: {
      contacts,
    },
  };
};
