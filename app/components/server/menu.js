import Link from "next/link";
import { authOptions } from "../../api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

async function Menu() {

  const session = await getServerSession(authOptions)
  
  let nav = [
    //TODO: alterar roda dinamida id
    {
      name: "Minha Carteira",
      path:`/dashboard/user/${session.user.id}/meu_portifolio`,
      
    },
    {
      name: "Recomendaçoes",
      path:`/dashboard/user/${session.user.id}/recomendacoes`,
      
    },
    {
      name: "Carteira Roberto",
      path:`/dashboard/user/${session.user.id}/roberto_portifolio`,
      
    },
   
  ];
  return (
    <nav>
      <ul className="flex flex-row h-10 bg-blue-600  justify-around items-center">
        {nav.map((item, index) => {
          return (
            <li key={index}>
              <Link href={item.path}>{item.name}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Menu;
