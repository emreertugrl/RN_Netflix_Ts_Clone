import React, {useEffect} from 'react';
import {View, FlatList, Platform} from 'react-native';
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
import {addNotification} from '../../store/slices/notificationSlice';
import Routes from '../../utils/routes';
import firestore from '@react-native-firebase/firestore';

const Home: React.FC = ({navigation}) => {
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
        const token = await messaging().getToken();
      }
    }
  };
  // Get device token for notification
  const getToken = () => {
    messaging()
      .getToken()
      .then(token => console.log(token))
      .catch(err => {
        console.log('❌ Token alma hatası:', err);
      });
  };
  const subscribeToTopic = async () => {
    try {
      await messaging().subscribeToTopic('Haberler');
    } catch (error) {
      console.log(error);
    }
  };

  const addNotifications = async notification => {
    firestore()
      .collection('Notifications')
      .add(notification)
      .then(() => console.log('addd'))
      .catch(err => {});
  };
  useEffect(() => {
    requestUserPermission();
    getToken();
    subscribeToTopic();
    // Uygulama ön planda iken bildirim almak için
    const unsubscribeOnMessage = messaging().onMessage(async response => {
      // console.log('📩 Ön planda mesaj alındı:', response);
      const read = response?.data?.read == 'false' ? false : true;
      dispatch(
        addNotification({
          title: response.notification?.title,
          description: response.notification?.body,
          time: response.data?.time,
          id: response?.data?.id,
          read: read,
        }),
      );
      addNotifications({
        title: response.notification?.title,
        description: response.notification?.body,
        time: response.data?.time,
        id: response?.data?.id,
        read: read,
      });
    });

    // Uygulama arka planda iken tıklanarak açıldığında
    const unsubscribeOnNotificationOpenedApp =
      messaging().onNotificationOpenedApp(async response => {
        // console.log('📩 Arka planda mesaj alındı:', response);
      });
    messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage) {
          navigation.navigate(Routes.MOVIEDETAIL, {
            id: remoteMessage?.data?.id,
          });
        }
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
