import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';

import s from './movieDetails.module.css';

import { getMovieDedails } from 'shared/api/FetchMovieApi';
import Loader from 'shared/components/Loader/Loader';
import Error from 'Pages/Error/Error';

const MovieDetails = () => {
  const { movieId } = useParams();

  const [state, setState] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const goBack = () => navigate('/');

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        setLoading(true);
        setError(null);
        const result = await getMovieDedails(movieId);
        setState(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [movieId]);

  const { name, title, vote_average, overview, genres, poster_path } = state;

  const generList =
    genres &&
    genres.map(({ name }, idx) => (
      <li className={s.item} key={idx}>
        {name}
      </li>
    ));

  return (
    <div className={s.details}>
      <div className="container">
        {loading && <Loader />}
        {error && <Error />}
        <button onClick={goBack}>Go Back</button>
        {state && (
          <div className={s.info}>
            <div>
              <img
                className={s.img}
                src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                alt="img"
              />
            </div>

            <div className={s.about}>
              <h1 className={s.title}>{name || title}</h1>
              <p className={s.score}>User Score: {vote_average}</p>
              <p className={s.overview}>Overview</p>
              <p className={s.overviewText}>{overview}</p>
              <p className={s.genres}>Genres</p>
              <ul className={s.generList}>{generList}</ul>
              <div>
                <p>Additional Information</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieDetails;
