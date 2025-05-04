import {createSlice} from '@reduxjs/toolkit';
import {NotificationsTypes} from '../../model/data/notificationTypes';

const initialState: NotificationsTypes = {
  notifications: [
    {
      title: 'Bildirim-1',
      description: 'açıklama kısmı buraya gelecek',
      path: 'path-1',
      time: '21 Ocak 2026',
      read: false,
    },
    {
      title: 'Bildirim-2',
      description: 'açıklama kısmı buraya gelecek',
      path: 'path-2',
      time: '23 Ocak 2026',
      read: false,
    },
    {
      title: 'Bildirim-3',
      description: 'açıklama kısmı buraya gelecek',
      path: 'path-3',
      time: '25 Ocak 2026',
      read: false,
    },
  ],
  pending: false,
  error: null,
  notificationCount: 1,
};
const notificationsSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {},
});

export const {} = notificationsSlice.actions;

export default notificationsSlice.reducer;
