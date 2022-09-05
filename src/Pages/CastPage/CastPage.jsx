import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import s from './castPage.module.css';
import { getMovieCast } from 'shared/api/FetchMovieApi';

const CastPage = () => {
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const { cast } = await getMovieCast(movieId);
        setCast(cast);
      } catch (error) {
        setError(error);
      }
    };
    fetchCast();
  }, []);

  const items = cast.map(({ cast_id, character, name, profile_path }) => {

    const imgSrc = `https://image.tmdb.org/t/p/w200${profile_path}`;
    const imgPlug = 'http://via.placeholder.com/120x180';
    const src = profile_path ? imgSrc : imgPlug;
    return (
    <li className={s.item} key={cast_id}>
      <img className={s.img} src={src} alt={name} />
      <p className={s.name}>{name}</p>
      <p className={s.char}>character: {character}</p>
    </li>);
  });

  return <ul className={s.list}>{items}</ul>;
};

export default CastPage;
