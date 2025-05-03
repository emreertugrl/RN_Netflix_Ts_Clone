import {createAsyncThunk} from '@reduxjs/toolkit';
import {getRequest} from './../../service/verbs';
import {
  MOVIE_URL,
  POPULAR_MOVIES_URL,
  TOP_RATED_MOVIES_URL,
} from '../../service/urls';
import {MovieDetailParams} from '../../model/data/moviesTypes';

export const getTopRatedMovies = createAsyncThunk(
  'movies/getTopRatedMovies',
  async () => {
    const response = await getRequest(TOP_RATED_MOVIES_URL, {});
    return response.data.results;
  },
);
export const getPopularMovies = createAsyncThunk(
  'movies/getPopularMovies',
  async () => {
    const response = await getRequest(POPULAR_MOVIES_URL, {});
    return response.data.results;
  },
);

export const getMovieDetail = createAsyncThunk(
  'movies/getMovieDetail',
  async ({movieId}: MovieDetailParams) => {
    const response = await getRequest(`${MOVIE_URL}${movieId}`, {});
    return response.data;
  },
);
