import Head from 'next/head';
import { Button, CardBox } from 'components/atoms';
import { UserList } from 'components/molecules';
import { Layout } from 'components/organisms';
import { useModal } from 'lib/hooks/useModal';
import { HeaderUsersForm, BodyUsersForm, FooterUsersForm } from './Users.modal';
import { StyledTitleContainer } from './Users.styled';

export const Users = ({ users }) => {
  const { setModal } = useModal();

  const handleAddUser = () => {
    setModal({
      header: <HeaderUsersForm />,
      body: <BodyUsersForm />,
      footer: <FooterUsersForm />,
    });
  };

  return (
    <>
      <Head>
        <title>Data Warehouse - Users</title>
      </Head>
      <Layout>
        <CardBox>
          <CardBox.Title>
            <StyledTitleContainer>
              <CardBox.Heading>Users</CardBox.Heading>
              <Button color="primary" onClick={handleAddUser}>
                Add User
              </Button>
            </StyledTitleContainer>
          </CardBox.Title>
          <CardBox.Content>
            <UserList users={users} />
          </CardBox.Content>
        </CardBox>
      </Layout>
    </>
  );
};
