import { CompaniesTemplate } from 'components/templates/Companies/Companies.template';

export default function Page() {
  return <CompaniesTemplate />;
}

Page.requireAuth = true;
