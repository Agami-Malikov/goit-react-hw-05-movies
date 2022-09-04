import { useState, useEffect } from 'react';
// import { useSearchParams } from 'react-router-dom';

// import Error from 'Pages/Error/Error';
// import Loader from 'shared/components/Loader/Loader';

import { getSearchMovies } from 'shared/api/FetchMovieApi';
import MovieList from 'shared/components/Logo/MovieList/MovieList';
import SearchPageForm from './SearchPageForm/SearchPageForm';

const SearchPage = () => {
  const [page, setPage] = useState(1);
  const [images, setImages] = useState({
    items: [],
    loading: false,
    error: null,
  });
  const [value, setValue] = useState('');

  useEffect(() => {
    const fetchImages = async () => {
      setImages(prevImages => ({
        ...prevImages,
        loading: true,
        error: null,
      }));
      try {
        const data = await getSearchMovies(page, value);

        setImages(prevImages => ({
          ...prevImages,
          items: [...prevImages.items, ...data.results],
          loading: false,
        }));
      } catch (error) {
        setImages(prevImages => ({
          ...prevImages,
          error,
        }));
      } finally {
        setImages(prevImages => ({
          ...prevImages,
          loading: false,
        }));
      }
    };
    if (value) {
      fetchImages();
    }
  }, [page, value]);
 
  const handleFormSubmit = (value) => {
    console.log(value);
    setValue(value);
    setImages({
      ...images,
      items: [],
    });
    setPage(1);
  };

  const { items } = images;

  return (
    <>
      <SearchPageForm onSubmit={handleFormSubmit}/>
      <MovieList items={items} />
    </>
  );
};

export default SearchPage;
