import Nav from 'components/Nav/Nav';
import s from './header.module.css';

const Header = () => {
  return (
    <header className={s.header}>
      <div className="container">
        <Nav />
      </div>
    </header>
  );
};

export default Header;
