import { Users } from 'components/templates';

export default function Page() {
  return <Users />;
}

Page.requireAuth = true;
