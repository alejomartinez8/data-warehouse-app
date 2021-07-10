import { useState, useEffect } from 'react';
import { Users } from 'components/templates';
import { getProfiles } from 'lib/services';
import { IUser } from 'lib/types';

function Page() {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await getProfiles();
      console.log(response);
    };
    fetchUsers();
  }, []);

  return <Users users={users} />;
}

Page.requireAuth = true;

export default Page;
