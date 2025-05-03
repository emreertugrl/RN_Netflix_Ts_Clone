import {TVDetail} from './tvDetailTypes';

interface Tv {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string; // ISO tarih formatı
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface TvTypes {
  topRatedTv: Tv[];
  popularTv: Tv[];
  tvDetail: TVDetail;
  pending: boolean;
  error: string | null;
}

export type {TvTypes, Tv};
