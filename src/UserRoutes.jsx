import { Routes, Route } from 'react-router-dom';

import HomePage from 'Pages/HomePage/HomePage';
import SearchPage from 'Pages/SearchPage/SearchPage';
import WeekPage from 'Pages/WeekPage/WeekPage';
import MovieDetails from 'Pages/MovieDetails/MovieDetails';
import Error from 'Pages/Error/Error';

const UserRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/weekly-trending" element={<WeekPage />} />
      <Route path="/movies/:movieId" element={<MovieDetails />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default UserRoutes;
