import {configureStore} from '@reduxjs/toolkit';
import moviesSlice from './slices/moviesSlice';
import tvSlice from './slices/tvSlice';

const store = configureStore({
  reducer: {
    movies: moviesSlice,
    tv: tvSlice,
  },
});

// Bu 2 tipi **dışa aktar**
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
