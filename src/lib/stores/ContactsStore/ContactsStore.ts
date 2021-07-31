import { RootStore } from 'lib/stores';
import { makeAutoObservable } from 'mobx';
import { getContacts, createContact, updateContact, deleteContact } from 'lib/services';
import { IContact } from 'lib/types';

export class ContactsStore {
  private rootStore: RootStore;

  contacts: IContact[] = [];

  loading = false;

  constructor(rootStore: RootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  fetchContacts = async (data?) => {
    try {
      this.setLoading(true);
      this.setContacts(await getContacts(data));
      this.setLoading(false);
    } catch (error) {
      this.setLoading(false);
      this.setContacts([]);
    }
  };

  setContacts = (contacts: IContact[]) => {
    this.contacts = contacts;
  };

  setLoading = (state: boolean) => {
    this.loading = state;
  };

  fetchCreateContact = async (contact: IContact) => {
    try {
      await createContact(contact);
      this.rootStore.notificationsStore.pushNotification({
        type: 'Success',
        message: 'Contact created successfully',
      });
      await this.fetchContacts();
    } catch (error) {
      this.rootStore.notificationsStore.pushNotification({
        type: 'Error',
        message: 'Error contact create',
      });
    }
  };

  fetchUpddateContact = async (contact: IContact) => {
    try {
      await updateContact(contact.id, contact);
      this.rootStore.notificationsStore.pushNotification({
        type: 'Success',
        message: 'Contact updated successfully',
      });
      await this.fetchContacts();
    } catch (error) {
      this.rootStore.notificationsStore.pushNotification({
        type: 'Error',
        message: 'Error contact update',
      });
    }
  };

  fetchDeleteContacts = async (companies: IContact[]) => {
    try {
      const promises = companies.map((contact) => deleteContact(contact.id));
      await Promise.all(promises);
      this.rootStore.notificationsStore.pushNotification({
        type: 'Success',
        message: 'Contact(s) deleted successfully',
      });
      await this.fetchContacts();
    } catch (error) {
      this.rootStore.notificationsStore.pushNotification({
        type: 'Error',
        message: 'Error contact(s) delete',
      });
    }
  };
}
