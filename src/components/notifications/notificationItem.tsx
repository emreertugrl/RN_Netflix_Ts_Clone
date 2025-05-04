import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {Colors} from '../../theme';
import {NotificationItemProps} from '../../model/data/notificationTypes';
import {Notification} from 'iconsax-react-nativejs';
import {useAppDispatch} from '../../store/hooks';
import {markAsRead} from '../../store/slices/notificationSlice';
import {useNavigation} from '@react-navigation/native';
import Routes from '../../utils/routes';
import firestore from '@react-native-firebase/firestore';

const NotificationItem: React.FC<NotificationItemProps> = ({item}) => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();

  const updateNotification = async () => {
    firestore()
      .collection('Notifications')
      .doc(item.doc)
      .update({
        read: true,
      })
      .then(() => console.log('Güncellendi'))
      .catch(err => {});
  };
  return (
    <Pressable
      onPress={() => {
        dispatch(markAsRead(item?.id));
        updateNotification();
        navigation.navigate(Routes.MOVIEDETAIL, {movie: item});
      }}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 0.5,
        borderColor: Colors.LIGHTGRAY,
        marginVertical: 15,
      }}>
      <View>
        <Notification size={28} color={Colors.WHITE} />
        {!item.read && (
          <View
            style={{
              backgroundColor: Colors.RED,
              position: 'absolute',
              borderRadius: 12,
              height: 12,
              width: 12,
              right: 0,
              top: -5,
            }}
          />
        )}
      </View>
      <View style={{flex: 1}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{color: Colors.WHITE, fontSize: 18}}>{item.title}</Text>
          <Text style={{color: Colors.GRAY, fontSize: 16}}>{item.time}</Text>
        </View>
        <Text style={{color: Colors.GRAY, fontSize: 16}}>
          {item.description}
        </Text>
      </View>
    </Pressable>
  );
};

export default NotificationItem;
