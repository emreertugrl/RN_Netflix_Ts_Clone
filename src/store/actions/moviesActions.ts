import {createAsyncThunk} from '@reduxjs/toolkit';
import {getRequest} from './../../service/verbs';
import {POPULAR_MOVIES_URL, TOP_RATED_MOVIES_URL} from '../../service/urls';

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
