import {Link} from 'react-router-dom'

import s from './logo.module.css';
const Logo = () => {
  return (
    <Link className={s.logo} to='/'>
      Mo<span className={s.span}>vies</span>.
    </Link>
  );
};

export default Logo;
