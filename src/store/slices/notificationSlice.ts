import {createSlice} from '@reduxjs/toolkit';
import {NotificationsTypes} from '../../model/data/notificationTypes';

const initialState: NotificationsTypes = {
  notifications: [],
  pending: false,
  error: null,
  notificationCount: 0,
};
const notificationsSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    addNotification: (state, action) => {
      state.notifications.push(action.payload);
      state.notificationCount += 1;
    },
    markAsRead: (state, action) => {
      const notificationId = action.payload;
      const notification = state.notifications.find(
        notify => notify?.id === notificationId,
      );
      if (notification) {
        notification.read = true;
        state.notificationCount -= 1;
      }
    },
  },
});

export const {addNotification, markAsRead} = notificationsSlice.actions;

export default notificationsSlice.reducer;
