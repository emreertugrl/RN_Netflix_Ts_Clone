import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {getTopRatedMovies} from '../actions/moviesActions';
import {Movie, MoviesTypes} from '../../model/data/moviesTypes';

const initialState: MoviesTypes = {
  topRatedMovies: [],
  pending: false,
  error: null,
};
const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getTopRatedMovies.pending, state => {
        state.pending = true;
      })
      .addCase(
        getTopRatedMovies.fulfilled,
        (state, action: PayloadAction<Movie[]>) => {
          state.pending = true;
          state.topRatedMovies = action.payload;
        },
      )
      .addCase(
        getTopRatedMovies.rejected,
        (state, action: PayloadAction<any>) => {
          state.pending = true;
          state.error = action.payload;
        },
      );
  },
});

export default moviesSlice.reducer;
