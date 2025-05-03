import {createAsyncThunk} from '@reduxjs/toolkit';
import {getRequest} from './../../service/verbs';
import {TOP_RATED_MOVIES_URL} from '../../service/urls';

export const getTopRatedMovies = createAsyncThunk(
  'movies/getTopRatedMovies',
  async () => {
    const response = await getRequest(TOP_RATED_MOVIES_URL, {});
    return response.data.results;
  },
);
