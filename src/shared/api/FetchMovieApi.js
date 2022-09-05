import axios from 'axios';
import { data } from './baseApi.js';

const { BaseUrl, ApiKey } = data;

export const getTrend = async () => {
  const { data } = await axios.get(
    `${BaseUrl}trending/all/day?api_key=${ApiKey}`
  );
  return data.results;
};

export const getMovieDedails = async id => {
  const { data } = await axios.get(`${BaseUrl}movie/${id}?api_key=${ApiKey}`);
  return data;
};

export const getSearchMovies = async (q, page = 1) => {
  const { data } = await axios.get(
    `${BaseUrl}search/movie?api_key=${ApiKey}&query=${q}&page=${page}`
  );
  return data;
};

export const getMovieCast = async id => {
  const { data } = await axios.get(
    `${BaseUrl}movie/${id}/credits?api_key=${ApiKey}`
  );
  return data;
};

export const getMovieReview = async id => {
  const { data } = await axios.get(
    `${BaseUrl}movie/${id}/reviews?api_key=${ApiKey}`
  );
  return data;
};
