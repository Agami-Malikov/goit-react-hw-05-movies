import { Routes, Route } from 'react-router-dom';

import HomePage from 'Pages/HomePage/HomePage';
import SearchPage from 'Pages/SearchPage/SearchPage';
import MovieDetails from 'Pages/MovieDetails/MovieDetails';
import Error from 'Pages/Error/Error';
import CastPage from 'Pages/CastPage/CastPage';
import ReviewsPage from 'Pages/ReviewsPage/ReviewsPage';

const UserRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/movies/:movieId" element={<MovieDetails />}>
        <Route path="cast" element={<CastPage />} />
        <Route path="reviews" element={<ReviewsPage />} />
      </Route>
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default UserRoutes;
