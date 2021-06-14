import { GetServerSideProps } from 'next';
import { Users } from 'components/templates';
import { getUsers } from 'lib/services';

export default function Page({ users }) {
  return <Users users={users} />;
}

Page.requrireAuth = true;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const users = await getUsers(ctx);

  return {
    props: {
      users,
    },
  };
};
