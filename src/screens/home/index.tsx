import React, {useEffect} from 'react';
import {View, FlatList, Alert} from 'react-native';
import {defaultStyle} from '../../styles/defaultScreenStyle';
import {
  getPopularMovies,
  getTopRatedMovies,
} from '../../store/actions/moviesActions';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import SectionItem from '../../components/movies/sectionItem';
import {homeData} from '../../utils/homeSections';
import {getPopularTv, getTopRatedTv} from '../../store/actions/tvActions';
import {PermissionsAndroid} from 'react-native'; //android
import messaging from '@react-native-firebase/messaging'; //ios

const Home: React.FC = () => {
  // android permission
  PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
  // ios permission
  const requestUserPermission = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('Authorization status:', authStatus);
    }
  };
  useEffect(() => {
    requestUserPermission();
  }, []);

  const dispatch = useAppDispatch();
  const {topRatedMovies, popularMovies} = useAppSelector(state => state.movies);
  const {topRatedTv, popularTv} = useAppSelector(state => state.tv);
  useEffect(() => {
    dispatch(getTopRatedMovies());
    dispatch(getTopRatedTv());
    dispatch(getPopularMovies());
    dispatch(getPopularTv());
  }, []);

  const getDataByType = (type: number) => {
    switch (type) {
      case 1:
        return topRatedTv;
      case 2:
        return popularTv;
      case 3:
        return topRatedMovies;
      case 4:
        return popularMovies;
      default:
        return []; // veya null, ya da hata
    }
  };

  return (
    <View style={defaultStyle.container}>
      <FlatList
        data={homeData}
        renderItem={({item}) => (
          <SectionItem section={item} data={getDataByType(item.id)} />
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default Home;
