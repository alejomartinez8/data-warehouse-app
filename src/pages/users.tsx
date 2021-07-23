import { UsersTemplate } from 'components/templates';

export default function Page() {
  return <UsersTemplate />;
}

Page.requireAuth = true;
