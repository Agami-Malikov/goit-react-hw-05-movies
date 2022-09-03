import s from './movieList.module.css';

import SingleMovie from '../SingleMovie/SingleMovie';

const MovieList = ({ items }) => {
  
  const elements = items.map(({ id, name, poster_path, title }) => (
    <SingleMovie key={id} src={poster_path} title={title || name} id={id}/>
  ));
  return <ul className={s.list}>{elements}</ul>;
};

export default MovieList;
