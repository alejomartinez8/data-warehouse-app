import { Contacts } from 'components/templates';

export default function Page() {
  return <Contacts />;
}

Page.requireAuth = true;
