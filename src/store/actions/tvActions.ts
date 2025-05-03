import {createAsyncThunk} from '@reduxjs/toolkit';
import {getRequest} from '../../service/verbs';
import {POPULAR_TV_URL, TOP_RATED_TV_URL, TV_URL} from '../../service/urls';
import {MovieDetailParams} from '../../model/data/moviesTypes';

export const getTopRatedTv = createAsyncThunk('tv/getTopRatedTv', async () => {
  const response = await getRequest(TOP_RATED_TV_URL, {});
  return response.data.results;
});

export const getPopularTv = createAsyncThunk('tv/getPopularTv', async () => {
  const response = await getRequest(POPULAR_TV_URL, {});
  return response.data.results;
});

export const getTvDetail = createAsyncThunk(
  'movies/getTvDetail',
  async ({movieId}: MovieDetailParams) => {
    const response = await getRequest(`${TV_URL}${movieId}`, {});
    return response.data;
  },
);
