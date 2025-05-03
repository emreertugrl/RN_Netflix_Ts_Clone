interface Movie {
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

interface MoviesTypes {
  topRatedMovies: Movie[];
  pending: boolean;
  error: string | null;
}

export type {MoviesTypes, Movie};
