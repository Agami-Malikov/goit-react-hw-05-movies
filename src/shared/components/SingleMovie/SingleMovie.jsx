import { Link } from 'react-router-dom';

import s from './SingleMovie.module.css';

const SingleMovie = ({ id, title, src, state }) => {
  // console.log(state);
  return (
    <li className={s.item}>
      <Link state={state} to={`/movies/${id}`}>
        <img
          className={s.img}
          src={`https://image.tmdb.org/t/p/w500/${src}`}
          alt="movie img"
        />
        {title}
      </Link>
    </li>
  );
};

export default SingleMovie;
