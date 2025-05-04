interface Notificationss {
  title: string;
  description: string;
  time: string;
  read: boolean;
  path?: string;
}
interface NotificationItemProps {
  item: Notificationss;
}
interface NotificationsTypes {
  notificationCount: number;
  notifications: Notificationss[];
  pending: boolean;
  error: any;
}

export type {Notificationss, NotificationsTypes, NotificationItemProps};
