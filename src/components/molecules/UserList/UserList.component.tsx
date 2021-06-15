import {
  StyledTableContet,
  StyledTable,
  StyledTHead,
  StyledTBody,
  StyledTR,
} from './UserList.styled';

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  role: string;
  avatar: string;
};

interface ITable {
  users: User[];
}

export const UserList = ({ users }: ITable) => (
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
        {users.length > 0 &&
          users.map((user) => (
            <StyledTR key={user.id}>
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
