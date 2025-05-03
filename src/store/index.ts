import {configureStore} from '@reduxjs/toolkit';
import moviesSlice from './slices/moviesSlice';

const store = configureStore({
  reducer: {
    movies: moviesSlice,
  },
});

// Bu 2 tipi **dışa aktar**
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
