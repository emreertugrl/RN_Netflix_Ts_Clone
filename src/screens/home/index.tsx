import React, {useEffect} from 'react';
import {View, FlatList} from 'react-native';
import {defaultStyle} from '../../styles/defaultScreenStyle';
import {getTopRatedMovies} from '../../store/actions/moviesActions';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import SectionItem from '../../components/movies/sectionItem';
import {homeData} from '../../utils/homeSections';

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const {topRatedMovies} = useAppSelector(state => state.movies);
  useEffect(() => {
    dispatch(getTopRatedMovies());
  }, []);

  return (
    <View style={defaultStyle.container}>
      <FlatList
        data={homeData}
        renderItem={({item}) => (
          <SectionItem section={item} data={topRatedMovies} />
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default Home;
