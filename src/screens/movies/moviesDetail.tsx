import React, {useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {RootStackParamList} from '../../model/navigation/types';
import Routes from '../../utils/routes';
import {RouteProp} from '@react-navigation/native';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {getMovieDetail} from '../../store/actions/moviesActions';
import {getTvDetail} from '../../store/actions/tvActions';
import CustomImage from '../../components/ui/customImage';
type MoviesDetailRouteProp = RouteProp<
  RootStackParamList,
  typeof Routes.MOVIEDETAIL
>;
interface Props {
  route: MoviesDetailRouteProp;
}
const MoviesDetail: React.FC<Props> = ({route}) => {
  const {movie, type} = route.params || {};

  const dispatch = useAppDispatch();
  const {movieDetail} = useAppSelector(state => state.movies);
  const {tvDetail} = useAppSelector(state => state.tv);
  useEffect(() => {
    if (movie?.id) {
      type == 'tv'
        ? dispatch(getTvDetail({movieId: movie.id}))
        : dispatch(getMovieDetail({movieId: movie.id}));
    }
  }, [movie?.id, type]);
  let detail;
  type === 'tv' ? (detail = tvDetail) : (detail = movieDetail);

  console.log(detail);
  return (
    <View style={styles.container}>
      <ScrollView>
        <CustomImage
          path={detail.backdrop_path}
          style={{width: '100%', height: 350, resizeMode: 'contain'}}
        />
        <Text
          style={{
            fontSize: 20,
            color: 'white',
            fontWeight: '700',
            marginVertical: 10,
          }}>
          {detail?.original_title || detail?.original_name}
        </Text>

        <Text style={{fontSize: 16, color: 'white'}}>{detail?.overview}</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});

export default MoviesDetail;
