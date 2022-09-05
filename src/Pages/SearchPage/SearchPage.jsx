import { useState, useEffect } from 'react';
import fields from './fields';
import { useSearchParams } from 'react-router-dom';
import s from './searchPage.module.css';
import TextField from 'shared/components/TextField/TextField';
import Error from 'Pages/Error/Error';
import Loader from 'shared/components/Loader/Loader';

import { getSearchMovies } from 'shared/api/FetchMovieApi';
import MovieList from 'shared/components/MovieList/MovieList';

const SearchPage = () => {
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query');

  useEffect(() => {
    const searchOfName = async () => {
      setError(null);
      setLoading(true);
      try {
        const { results } = await getSearchMovies(query);
        setState(results);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    if (query) {
      searchOfName();
    }
  }, [setState, query]);

  const onSubmit = e => {
    e.preventDefault();
    const query = e.target[1].value;
    const params = Object.fromEntries([...searchParams]);
    setSearchParams({ ...params, query });
  };

  const handleChange = ({ target }) => {
    const { value, name } = target;
    setSearchParams(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const isMovies = Boolean(state.length);

  return (
    <>
      <div className={s.box}>
        <form className={s.searchForm} onSubmit={onSubmit}>
          <button type="submit" className={s.button}>
            <span className={s.label}>Search</span>
          </button>
          <TextField value={query || ''} handleChange={handleChange} {...fields.search} />
        </form>
      </div>
      {loading && <Loader />}
      {error && <Error />}
      {isMovies && <MovieList items={state} />}
    </>
  );
};

export default SearchPage;
