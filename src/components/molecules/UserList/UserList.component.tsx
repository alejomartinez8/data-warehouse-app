import { Checkbox } from 'components/atoms';
import { checkboxEnum } from 'constans';
import { useStore } from 'lib/hooks';
import { IUser } from 'lib/types';
import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import {
  StyledTableContet,
  StyledTable,
  StyledTHead,
  StyledTBody,
  StyledTR,
} from './UserList.styled';

const { CHECKED, UNCHECKED, INDETERMINATE } = checkboxEnum;

interface ITableProps {
  users: IUser[];
  handleEditUser: (user: IUser) => void;
}

export const UserList = observer(({ users, handleEditUser }: ITableProps) => {
  const [userList, setUserList] = useState(users?.map((user) => ({ ...user, checked: false })));
  const [checkedAll, setCheckedAll] = useState(UNCHECKED);
  const { setUsersSelected } = useStore('usersStore');

  const handleOnChange = (id: string) => {
    setUserList(
      userList.map((user) => (user.id === id ? { ...user, checked: !user.checked } : user)),
    );
  };

  const handleOnChangeAll = () => {
    if (checkedAll === UNCHECKED) {
      setUserList(userList.map((user) => ({ ...user, checked: true })));
    } else {
      setUserList(userList.map((user) => ({ ...user, checked: false })));
    }
  };

  useEffect(() => {
    const usersSelected = userList.filter((user) => user.checked);

    if (usersSelected.length === userList.length) {
      setCheckedAll(CHECKED);
    } else if (usersSelected.length > 0) {
      setCheckedAll(INDETERMINATE);
    } else {
      setCheckedAll(UNCHECKED);
    }

    setUsersSelected(usersSelected);
  }, [setCheckedAll, setUsersSelected, userList]);

  return (
    <StyledTableContet>
      <StyledTable>
        <StyledTHead>
          <tr>
            <th>
              <Checkbox onChange={handleOnChangeAll} value={checkedAll} />
            </th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </StyledTHead>
        <StyledTBody>
          {userList?.length > 0 &&
            userList.map((user) => (
              <StyledTR key={user.id} onClick={() => handleEditUser(user)} checked={user.checked}>
                <td>
                  <input
                    type="checkbox"
                    onChange={() => handleOnChange(user.id)}
                    onClick={(e) => e.stopPropagation()}
                    checked={user.checked}
                  />
                </td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
              </StyledTR>
            ))}
        </StyledTBody>
      </StyledTable>
    </StyledTableContet>
  );
});
