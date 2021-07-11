import { getContacts } from 'lib/services';
import { checkboxEnum } from 'constans';
import { makeAutoObservable } from 'mobx';
import { IContact } from 'lib/types';

const { UNCHECKED } = checkboxEnum;

export class ContactsStore {
  contacts: IContact[] = [];

  loading = false;

  checkedAll: checkboxEnum = UNCHECKED;

  constructor() {
    makeAutoObservable(this);
  }

  fetchContacts = async () => {
    try {
      this.setLoading(true);
      this.setContacts(await getContacts());
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
}
