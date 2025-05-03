import {Movie} from '../data/moviesTypes';

interface SectionItemProps {
  section: {
    title: string;
  };
  data: Movie[];
}
interface SectionTitleProps {
  title: string;
}

export type {SectionItemProps, SectionTitleProps};
