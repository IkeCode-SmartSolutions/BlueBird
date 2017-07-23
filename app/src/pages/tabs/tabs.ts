import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { SendMessagePage } from '../send-message/send-message';
import { MessagePage } from '../message/message';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  sendMessagePage = SendMessagePage;
  aboutPage = AboutPage;
  contactPage = ContactPage;
  messagePage = MessagePage;

  constructor() {

  }
}
