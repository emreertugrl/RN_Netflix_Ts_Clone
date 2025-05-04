interface Notificationss {
  id: number;
  title: string;
  description: string;
  time: string;
  read: boolean;
  path?: string;
  doc: string;
}
interface NotificationItemProps {
  item: Notificationss;
}
interface NotificationsTypes {
  notifications: Notificationss[];
  pending: boolean;
  error: any;
}

export type {Notificationss, NotificationsTypes, NotificationItemProps};
