import { getTrend } from 'shared/api/FetchMovieApi';
import { useState, useEffect } from 'react';
import MovieList from 'shared/components/Logo/MovieList/MovieList';
import Loader from 'shared/components/Loader/Loader';
import Error from 'Pages/Error/Error';

const HomePage = () => {
  const [movies, setMovies] = useState({
    items: [],
    loading: false,
    error: null,
  });

  const [page] = useState(1);

  useEffect(() => {
    const fetchTrend = async () => {
      setMovies(prevMovies => ({
        ...prevMovies,
        loading: true,
        error: null,
      }));
      try {
        const data = await getTrend();
        setMovies(prevMovies => ({
          ...prevMovies,
          items: [...prevMovies.items, ...data],
          loading: false,
        }));
      } catch (error) {
        setMovies(prevMovies => ({
          ...prevMovies,
          error,
        }));
      } finally {
        setMovies(prevMovies => ({
          ...prevMovies,
          loading: false,
        }));
      }
    };
    fetchTrend();
  }, [page]);

  const { items, loading ,error} = movies;
  
  return (
    <div className="container">
      {loading && <Loader />}
      {error && <Error/>}
      <MovieList items={items} />
    </div>
  );
};

export default HomePage;
