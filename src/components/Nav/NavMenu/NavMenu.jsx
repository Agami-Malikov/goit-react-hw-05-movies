import s from './navMenu.module.css';

import { NavLink } from 'react-router-dom';
import NavItems from './NavItems';

const activeLinkClass = ({ isActive }) => {
  return isActive ? `${s.link} ${s.active}` : s.link;
};

const NavMenu = () => {
  const navLinks = NavItems.map(({ to, text }, idx) => (
    <li key={idx} className={s.item}>
      <NavLink className={activeLinkClass} to={to}>
        {text}
      </NavLink>
    </li>
  ));
  return (
    <ul className={s.list}>
      {navLinks}
    </ul>
  );
};

export default NavMenu;
