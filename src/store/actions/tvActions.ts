import {createAsyncThunk} from '@reduxjs/toolkit';
import {getRequest} from '../../service/verbs';
import {POPULAR_TV_URL, TOP_RATED_TV_URL} from '../../service/urls';

export const getTopRatedTv = createAsyncThunk('tv/getTopRatedTv', async () => {
  const response = await getRequest(TOP_RATED_TV_URL, {});
  return response.data.results;
});

export const getPopularTv = createAsyncThunk('tv/getPopularTv', async () => {
  const response = await getRequest(POPULAR_TV_URL, {});
  return response.data.results;
});
