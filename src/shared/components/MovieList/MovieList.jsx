import s from './movieList.module.css';
import { useLocation } from 'react-router-dom';

import SingleMovie from '../SingleMovie/SingleMovie';

const MovieList = ({ items }) => {
  const location = useLocation();

  const elements = items.map(({ id, name, poster_path, title }) => (
    <SingleMovie
      state={{ from: location }}
      key={id}
      src={poster_path}
      title={title || name}
      id={id}
    />
  ));
  return <ul className={s.list}>{elements}</ul>;
};

export default MovieList;
