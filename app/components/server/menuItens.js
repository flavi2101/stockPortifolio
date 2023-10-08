import Link from "next/link";
import { authOptions } from "../../api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

export async function MenuItens() {
 const session = await getServerSession(authOptions);
  const itens = [
    {
      name: "Minha Carteira",
      path: `/dashboard/user/${session.user.id}/meu_portifolio`,
    },
    {
      name: "Analises",
      path: `/dashboard/user/${session.user.id}/analise`,
    },
    {
      name: "Recomendaçoes",
      path: `/dashboard/user/${session.user.id}/recomendacoes`,
    },
    {
      name: "Carteira Roberto",
      path: `/dashboard/user/${session.user.id}/roberto_portifolio`,
    },
    {
      name: "Blog",
      path: `/dashboard/user/${session.user.id}/blog`,
    },
    {
      name: "Mentoria",
      path: `https://escoladafortuna.com/valueinvesting/`,
    },
    {
      name: "Sobre",
      path: `/dashboard/user/${session.user.id}/about`,
    },
    {
      name: "Mentores",
      path: `/dashboard/user/${session.user.id}/mentor`,
    },
    {
      name: "admin",
      path: `/dashboard/user/${session.user.id}/admin`,
    },
  ];
  if (session.user.role === "VISITANTE") {
    let menuVisitante = itens.filter((item) => {
      if (
        item.name !== "Analises" &&
        item.name !== "Recomendaçoes" &&
        item.name !== "Carteira Roberto" &&
        item.name !== "Mentores" &&
        item.name !== "admin"
      ) {
        return item;
      }
    });
    return menuVisitante.map((item, index) => {
      return (
        <li key={index}>
          <Link href={item.path}>{item.name}</Link>
        </li>
      );
    });
  } else if (session.user.role === "MENTORADO") {
    let menuMentorado = itens.filter((item) => {
      if (
        item.name !== "Mentores" &&
        item.name !== "admin" &&
        item.name !== "Mentoria"
      ) {
        return item;
      }
    });
    return menuMentorado.map((item, index) => {
      return (
        <li key={index}>
          <Link href={item.path}>{item.name}</Link>
        </li>
      );
    });
  } else if (session.user.role === "MENTOR") {
    let menuMentor = itens.filter((item) => {
      if (item.name !== "admin") {
        return item;
      }
    });
    return menuMentor.map((item, index) => {
      return (
        <li key={index}>
          <Link href={item.path}>{item.name}</Link>
        </li>
      );
    });
  } else {
    return itens.map((item, index) => {
      return (
        <li key={index}>
          <Link href={item.path}>{item.name}</Link>
        </li>
      );
    });
  }
}
