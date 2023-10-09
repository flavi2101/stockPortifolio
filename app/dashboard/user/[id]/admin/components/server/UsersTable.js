import EditUser from "../client/EditUser";

export default function UserTable({ user }) {
  return (
    <tr >
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.role}</td>
      <td>
        <EditUser />
      </td>
    </tr>
  );
}
