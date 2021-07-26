import { makeAutoObservable } from 'mobx';
import { getContacts, createContact, updateContact, deleteContact } from 'lib/services';
import { IContact } from 'lib/types';

export class ContactsStore {
  contacts: IContact[] = [];

  loading = false;

  constructor() {
    makeAutoObservable(this);
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
      this.setLoading(true);
      await createContact(contact);
      await this.fetchContacts();
      this.setLoading(false);
    } catch (error) {
      this.setLoading(false);
    }
  };

  fetchUpddateContact = async (contact: IContact) => {
    try {
      this.setLoading(true);
      await updateContact(contact.id, contact);
      await this.fetchContacts();
      this.setLoading(false);
    } catch (error) {
      this.setLoading(false);
    }
  };

  fetchDeleteContacts = async (companies: IContact[]) => {
    try {
      this.setLoading(true);
      const promises = companies.map((contact) => deleteContact(contact.id));
      await Promise.all(promises);
      await this.fetchContacts();
      this.setLoading(false);
    } catch (error) {
      this.setLoading(false);
    }
  };
}
