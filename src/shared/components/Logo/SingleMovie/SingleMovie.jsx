import { Link } from 'react-router-dom';

import s from './SingleMovie.module.css';

const SingleMovie = ({id, title, src }) => {
  return (
    <li className={s.item}>
      <Link to={`/movies/${id}`}>
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
