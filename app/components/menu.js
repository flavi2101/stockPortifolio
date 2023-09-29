import Link from "next/link";

function Menu() {
  let nav = [
    {
      name: "Minha Carteira",
      path: "/dashboard/meu_portifolio",
    },
    {
      name: "Recomendaçoes",
      path: "/dashboard/recomendacoes",
    },
    {
      name: "Carteira Roberto",
      path: "/dashboard/roberto_portifolio",
    },
    {
      name: "Analise",
      path: "/dashboard/analise",
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
