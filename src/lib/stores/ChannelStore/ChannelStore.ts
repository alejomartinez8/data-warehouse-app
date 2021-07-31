import { makeAutoObservable } from 'mobx';
import { getChannels, createChannel, updateChannel, deleteChannel } from 'lib/services';
import { IChannel } from 'lib/types';
import { RootStore } from '..';

export class ChannelsStore {
  private rootStore: RootStore;

  channels: IChannel[] = [];

  loading = false;

  constructor(rootStore: RootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  fetchChannels = async () => {
    try {
      this.setLoading(true);
      this.setChannels(await getChannels());
      this.setLoading(false);
    } catch (error) {
      this.setLoading(false);
      this.setChannels([]);
    }
  };

  setChannels = (channels: IChannel[]) => {
    this.channels = channels;
  };

  setLoading = (state: boolean) => {
    this.loading = state;
  };

  fetchCreateChannel = async (channel: IChannel) => {
    try {
      await createChannel(channel);
      await this.fetchChannels();
      this.rootStore.notificationsStore.pushNotification({
        type: 'Success',
        message: 'Channel created successfully',
      });
    } catch (error) {
      this.rootStore.notificationsStore.pushNotification({
        type: 'Error',
        message: 'Error channel create',
      });
    }
  };

  fetchUpddateChannel = async (channel: IChannel) => {
    try {
      await updateChannel(channel.id, channel);
      this.rootStore.notificationsStore.pushNotification({
        type: 'Success',
        message: 'Channel updated successfully',
      });
      await this.fetchChannels();
    } catch (error) {
      this.rootStore.notificationsStore.pushNotification({
        type: 'Error',
        message: 'Error channel update',
      });
    }
  };

  fetchDeleteChannels = async (companies: IChannel[]) => {
    try {
      const promises = companies.map((channel) => deleteChannel(channel.id));
      await Promise.all(promises);
      this.rootStore.notificationsStore.pushNotification({
        type: 'Success',
        message: 'Channel deleted successfully',
      });
      await this.fetchChannels();
    } catch (error) {
      this.rootStore.notificationsStore.pushNotification({
        type: 'Error',
        message: 'Error channel delete',
      });
    }
  };
}
