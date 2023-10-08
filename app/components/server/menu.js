import { MenuItens } from "./menuItens";
async function Menu() {
  return (
    <nav>
      <ul className="flex flex-row h-10 bg-blue-600  justify-around items-center">
        <MenuItens></MenuItens>
      </ul>
    </nav>
  );
}

export default Menu;
