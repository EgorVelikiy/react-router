import { NavLink } from "react-router-dom";

const activeClassName = ({ isActive }: {isActive: boolean}) => 
  ['menu__item', isActive ? 'menu__item-active' : null]
  .filter(Boolean)
  .join(' ');

export default function Menu() {
  console.log(activeClassName)
  return (
    <nav className="menu">
      <NavLink className={activeClassName} to="/react-router" end>Главная</NavLink>
      <NavLink className={activeClassName} to="/drift" end>Дрифт-такси</NavLink>
      <NavLink className={activeClassName} to="/timeattack" end>Time Attack</NavLink>
      <NavLink className={activeClassName} to="/forza">Forza Karting</NavLink>
    </nav>
  );
}