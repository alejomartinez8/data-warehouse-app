import { ContactsTemplate } from 'components/templates';

export default function Page() {
  return <ContactsTemplate />;
}

Page.requireAuth = true;
