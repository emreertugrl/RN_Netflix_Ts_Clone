import Routes from '../../utils/routes';
import {Movie} from '../data/moviesTypes';

export type RootStackParamList = {
  Home: undefined;
  [Routes.MOVIEDETAIL]: {movie: Movie; type: number; mId: string};
  // diğer route'lar buraya
};
