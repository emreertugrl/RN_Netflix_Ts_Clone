import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {getPopularTv, getTopRatedTv, getTvDetail} from '../actions/tvActions';
import {Tv, TvTypes} from '../../model/data/tvTypes';

const initialState: TvTypes = {
  topRatedTv: [],
  popularTv: [],
  tvDetail: {},
  pending: false,
  error: null,
};
const tvSlice = createSlice({
  name: 'tv',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getTopRatedTv.pending, state => {
        state.pending = true;
      })
      .addCase(
        getTopRatedTv.fulfilled,
        (state, action: PayloadAction<Tv[]>) => {
          state.pending = true;
          state.topRatedTv = action.payload;
        },
      )
      .addCase(getTopRatedTv.rejected, (state, action: PayloadAction<any>) => {
        state.pending = true;
        state.error = action.payload;
      });
    builder
      .addCase(getPopularTv.pending, state => {
        state.pending = true;
      })
      .addCase(getPopularTv.fulfilled, (state, action: PayloadAction<Tv[]>) => {
        state.pending = true;
        state.popularTv = action.payload;
      })
      .addCase(getPopularTv.rejected, (state, action: PayloadAction<any>) => {
        state.pending = true;
        state.error = action.payload;
      })
      .addCase(getTvDetail.pending, state => {
        state.pending = true;
        state.tvDetail = {};
      })
      .addCase(getTvDetail.fulfilled, (state, action: PayloadAction<Tv>) => {
        state.pending = true;
        state.tvDetail = action.payload;
      })
      .addCase(getTvDetail.rejected, (state, action: PayloadAction<any>) => {
        state.pending = true;
        state.error = action.payload;
      });
  },
});

export default tvSlice.reducer;
