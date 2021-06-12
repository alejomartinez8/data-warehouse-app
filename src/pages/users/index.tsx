import { Users } from 'components/templates';
import { getUsers } from 'lib/services';
import { GetServerSideProps } from 'next';

export default function Page({ users }) {
  return <Users users={users} />;
}

Page.requrireAuth = true;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  let users;

  try {
    users = await getUsers(ctx);
  } catch (error) {
    console.log(error.response);
  }

  return {
    props: {
      users,
    },
  };
};
