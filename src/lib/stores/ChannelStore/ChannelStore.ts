import { makeAutoObservable } from 'mobx';
import { getChannels, createChannel, updateChannel, deleteChannel } from 'lib/services';
import { IChannel } from 'lib/types';
import { RootStore } from '..';

export class ChannelsStore {
  private rootStore: RootStore;

  channels: IChannel[] = [];

  loading = false;

  constructor() {
    makeAutoObservable(this);
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
      this.setLoading(true);
      await updateChannel(channel.id, channel);
      await this.fetchChannels();
      this.setLoading(false);
    } catch (error) {
      this.setLoading(false);
    }
  };

  fetchDeleteChannels = async (companies: IChannel[]) => {
    try {
      this.setLoading(true);
      const promises = companies.map((channel) => deleteChannel(channel.id));
      await Promise.all(promises);
      await this.fetchChannels();
      this.setLoading(false);
    } catch (error) {
      this.setLoading(false);
    }
  };
}
