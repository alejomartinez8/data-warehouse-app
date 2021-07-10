import { Contacts } from 'components/templates';
import { getContacts } from 'lib/services/contacts/contacts.service';

export default function Page() {
  const contacts = [];
  return <Contacts contacts={contacts} />;
}

Page.requireAuth = true;
