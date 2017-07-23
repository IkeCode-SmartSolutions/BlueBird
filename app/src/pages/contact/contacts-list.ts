import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Contacts, Contact } from '@ionic-native/contacts';

@Component({
  selector: 'page-contacts-list',
  templateUrl: 'contacts-list.html'
})
export class ContactsListPage {

  public contacts: Contact[];

  constructor(
    public navCtrl: NavController,
    private phoneContacts: Contacts) {

    this
      .phoneContacts
      .find(["*"], { hasPhoneNumber: true })
      .then(ctts => {
        this.contacts = ctts;
      });

  }

}
