import { CompaniesTemplate } from 'components/templates';

export default function Page() {
  return <CompaniesTemplate />;
}

Page.requireAuth = true;
