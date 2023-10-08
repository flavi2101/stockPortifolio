import { MenuItens } from "./menuItens";
import LogoutSession from "../client/logout";
async function Menu() {
  return (
    <nav>
      <ul className="flex flex-row h-10 bg-blue-600  justify-around items-center">
        <MenuItens></MenuItens>
        <LogoutSession></LogoutSession>
      </ul>
    </nav>
  );
}

export default Menu;
