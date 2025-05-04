import {createSlice} from '@reduxjs/toolkit';
import {NotificationsTypes} from '../../model/data/notificationTypes';

const initialState: NotificationsTypes = {
  notifications: [],
  pending: false,
  error: null,
};
const notificationsSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    addNotification: (state, action) => {
      if (Array.isArray(action.payload)) {
        // Tüm liste olarak gelmişse
        state.notifications = action.payload;
      } else if (action.payload) {
        // Tek bir bildirim gelmişse en başa ekle
        state.notifications.unshift(action.payload);
      }
    },
    markAsRead: (state, action) => {
      const notificationId = action.payload;
      const notification = state.notifications.find(
        notify => notify?.id === notificationId,
      );
      if (notification) {
        notification.read = true;
      }
    },
  },
});

export const {addNotification, markAsRead} = notificationsSlice.actions;

export default notificationsSlice.reducer;
