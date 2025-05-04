import React, {useEffect} from 'react';
import {View, FlatList, Alert, Platform} from 'react-native';
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
  const requestUserPermission = async () => {
    if (Platform.OS === 'android') {
      PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
      );
    } else {
      const authStatus = await messaging().requestPermission();
      const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

      if (enabled) {
        console.log('Authorization status:', authStatus);
        const token = await messaging().getToken();
        console.log('FCM token:', token);
      }
    }
  };
  // Get device token for notification
  const getToken = () => {
    messaging()
      .getToken()
      .then(token => {
        console.log('🔥 TOKEN:', token);
      })
      .catch(err => {
        console.log('❌ Token alma hatası:', err);
      });
  };

  useEffect(() => {
    requestUserPermission();
    getToken();
    // Uygulama ön planda iken bildirim almak için
    const unsubscribeOnMessage = messaging().onMessage(async remoteMessage => {
      console.log('📩 Ön planda mesaj alındı:', remoteMessage);
    });

    // Uygulama arka planda iken tıklanarak açıldığında
    const unsubscribeOnNotificationOpenedApp =
      messaging().onNotificationOpenedApp(async remoteMessage => {
        console.log('📩 Arka planda mesaj alındı:', remoteMessage);
      });

    // Cleanup fonksiyonu ile abonelikleri temizle
    return () => {
      unsubscribeOnMessage();
      unsubscribeOnNotificationOpenedApp();
    };
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
