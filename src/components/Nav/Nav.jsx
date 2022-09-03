import s from './nav.module.css';

import Logo from 'shared/components/Logo/Logo';
import NavMenu from './NavMenu/NavMenu';

const Nav = () => {
  return (
    <nav className={s.nav}>
      <Logo />
      <NavMenu />
    </nav>
  );
};

export default Nav;
