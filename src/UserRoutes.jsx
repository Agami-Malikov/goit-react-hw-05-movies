import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Loader from 'shared/components/Loader/Loader';

const HomePage = lazy(() => import('Pages/HomePage/HomePage'));
const SearchPage = lazy(() => import('Pages/SearchPage/SearchPage'));
const MovieDetails = lazy(() => import('Pages/MovieDetails/MovieDetails'));
const Error = lazy(() => import('Pages/Error/Error'));
const CastPage = lazy(() => import('Pages/CastPage/CastPage'));
const ReviewsPage = lazy(() => import('Pages/ReviewsPage/ReviewsPage'));

const UserRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<CastPage />} />
          <Route path="reviews" element={<ReviewsPage />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
