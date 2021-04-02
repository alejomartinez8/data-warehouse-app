import {
  StyledTableContet,
  StyledTable,
  StyledTHead,
  StyledTBody,
  StyledTR,
} from './ContactList.styled';

interface ITable {
  contacts: any;
}

export const ContactList = ({ contacts }: ITable) => (
  <StyledTableContet>
    <StyledTable>
      <StyledTHead>
        <tr>
          <th>
            <input type="checkbox" />
          </th>
          <th>Contact</th>
          <th>Country/Region</th>
          <th>Company</th>
          <th>Position</th>
          <th>Favorite Channel</th>
          <th>Interest</th>
          <th>Actions</th>
        </tr>
      </StyledTHead>
      <StyledTBody>
        {contacts.map((contact) => (
          <StyledTR key={contact.id}>
            <td>
              <input type="checkbox" />
            </td>
            <td>
              <div>{contact.name}</div>
              <div>{contact.email}</div>
            </td>
            <td>
              <div>{contact.country}</div>
              <div>{contact.region}</div>
            </td>
            <td>{contact.company}</td>
            <td>{contact.position}</td>
            <td>
              {contact.channels.map((channel) => (
                <span className="badge badge-info m-1" key={channel}>
                  {channel}
                </span>
              ))}
            </td>
            <td>{contact.interest}</td>
            <td />
          </StyledTR>
        ))}
      </StyledTBody>
    </StyledTable>
  </StyledTableContet>
);
