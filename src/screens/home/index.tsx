import React, {useEffect} from 'react';
import {View, FlatList} from 'react-native';
import {defaultStyle} from '../../styles/defaultScreenStyle';
import {getTopRatedMovies} from '../../store/actions/moviesActions';
import MovieItem from '../../components/movies/movieItem';
import {useAppDispatch, useAppSelector} from '../../store/hooks';

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const {topRatedMovies} = useAppSelector(state => state.movies);
  console.log(topRatedMovies);
  useEffect(() => {
    dispatch(getTopRatedMovies());
  }, []);

  return (
    <View style={defaultStyle.container}>
      <FlatList
        data={topRatedMovies}
        renderItem={({item}) => <MovieItem item={item} />}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default Home;
