import UsersTable from "./components/server/UsersTable";
export default async function AdminPainel() {
  let allUsers = await fetch(`${process.env.BASE_URL}/api/users`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((val) => val.json());

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>NOME</th>
          <th>EMAIL</th>
          <th>EDIÇÃO</th>
        </tr>
      </thead>
      <tbody>
        {allUsers.map((user) => {
          return <UsersTable key={user.id} user={user} />;
        })}
      </tbody>
    </table>
  );
}
