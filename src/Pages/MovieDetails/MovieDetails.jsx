import { useEffect, useState } from 'react';
import { useParams, useNavigate, Outlet, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

import s from './movieDetails.module.css';

import { getMovieDedails } from 'shared/api/FetchMovieApi';
import Loader from 'shared/components/Loader/Loader';
import Error from 'Pages/Error/Error';

const MovieDetails = () => {
  const { movieId } = useParams();

  const [state, setState] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const location = useLocation();

  const from = location.state.from || '/';

  const navigate = useNavigate();

  const goBack = () => navigate(from);

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
    <>
      <div className={s.details}>
        <div className="container">
          {loading && <Loader />}
          {error && <Error />}
          <button onClick={goBack}>Go Back</button>
          {state && (
            <div className={s.info}>
              <div className={s.imgBox}>
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

                <p className={s.add}>Additional Information</p>

                <div className={s.links}>
                  <Link
                    state={from}
                    className={s.link}
                    to={`/movies/${movieId}/cast`}
                  >
                    Cast
                  </Link>
                  <Link
                    state={from}
                    className={s.link}
                    to={`/movies/${movieId}/reviews`}
                  >
                    Reviews
                  </Link>
                </div>
              </div>
            </div>
          )}
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
