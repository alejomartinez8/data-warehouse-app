import { IUser } from 'lib/types';
import {
  StyledTableContet,
  StyledTable,
  StyledTHead,
  StyledTBody,
  StyledTR,
} from './UserList.styled';

interface ITable {
  users: IUser[];
  handleEditUser: (user: IUser) => void;
}

export const UserList = ({ users, handleEditUser }: ITable) => (
  <StyledTableContet>
    <StyledTable>
      <StyledTHead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Role</th>
        </tr>
      </StyledTHead>
      <StyledTBody>
        {users?.length > 0 &&
          users.map((user) => (
            <StyledTR key={user.id} onClick={() => handleEditUser(user)}>
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
