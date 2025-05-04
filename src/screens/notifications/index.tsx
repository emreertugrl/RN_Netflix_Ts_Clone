import React, {useEffect} from 'react';
import {View, FlatList} from 'react-native';
import {defaultStyle} from '../../styles/defaultScreenStyle';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import NotificationItem from '../../components/notifications/notificationItem';
import firestore from '@react-native-firebase/firestore';
import {Notificationss} from '../../model/data/notificationTypes';
import {addNotification} from '../../store/slices/notificationSlice';

const Notifications: React.FC = () => {
  const {notifications} = useAppSelector(state => state.notifications);
  const dispatch = useAppDispatch();
  const getNotifications = () => {
    firestore()
      .collection('Notifications')
      .get()
      .then(querySnapShot => {
        const savedNotifications: Notificationss[] = [];
        querySnapShot.forEach(documentSnapshot => {
          savedNotifications.push({
            id: documentSnapshot.data().id,
            description: documentSnapshot.data().descriptipn,
            read: documentSnapshot.data().read,
            time: documentSnapshot.data().time,
            title: documentSnapshot.data().title,
            doc: documentSnapshot.id,
          });
        });
        dispatch(addNotification(savedNotifications)); // ← Doğru kullanım
      })
      .catch(err => {
        console.log('📛 Bildirim verisi çekilemedi:', err);
      });
  };

  useEffect(() => {
    getNotifications();
  }, []);

  return (
    <View style={defaultStyle.container}>
      <FlatList
        data={notifications}
        renderItem={({item}) => <NotificationItem item={item} />}
        keyExtractor={item => item?.title}
      />
    </View>
  );
};

export default Notifications;
