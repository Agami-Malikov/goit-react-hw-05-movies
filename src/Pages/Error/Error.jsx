import s from './error.module.css';
import { Link, useNavigate } from 'react-router-dom';

const Error = () => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);
  return (
    <div className={s.body}>
      <div className={s.main}>
        <div className={s.links}>
          <button className={s.link} onClick={goBack}>
            Go Back
          </button>
          <Link className={s.link} to="/">
            Home
          </Link>
          <Link className={s.link} to="/search">
            Search
          </Link>
          <Link className={s.link} to="/weekly-trending">
            WeekPage
          </Link>
        </div>
        <h1 className={s.title}>
          4
          <span className={s.span}>
            <span className={s.eye}></span>
            <span className={s.eye}></span>
          </span>
          4
        </h1>
        <h2 className={s.subtitle}>Error: 404 page not found</h2>
        <p className={s.p}>
          Sorry, the page you're looking for cannot be accessed
        </p>
      </div>
    </div>
  );
};

export default Error;
