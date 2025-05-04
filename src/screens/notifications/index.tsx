import React from 'react';
import {View, FlatList} from 'react-native';
import {defaultStyle} from '../../styles/defaultScreenStyle';
import {useAppSelector} from '../../store/hooks';
import NotificationItem from '../../components/notifications/notificationItem';

const Notifications: React.FC = () => {
  const {notifications} = useAppSelector(state => state.notifications);
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
