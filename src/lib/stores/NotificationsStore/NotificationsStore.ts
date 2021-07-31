import { makeAutoObservable } from 'mobx';

export interface INotificacion {
  type: 'Success' | 'Error';
  message: string;
}

export class NotificationsStore {
  notifications: INotificacion[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  pushNotification = (value: INotificacion) => {
    this.notifications.push(value);
  };

  shiftNotification = () => this.notifications.shift();

  get notificationsLength() {
    return this.notifications.length;
  }
}
