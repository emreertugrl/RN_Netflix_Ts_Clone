import {createAsyncThunk} from '@reduxjs/toolkit';
import {TOP_RATED_MOVIES_URL} from '../../service/urls';
import {getRequest} from '../../service/verbs';

export const getNotifications = createAsyncThunk(
  'notifications/getNotifications',
  async () => {
    const response = await getRequest(TOP_RATED_MOVIES_URL, {});
    return response.data;
  },
);
