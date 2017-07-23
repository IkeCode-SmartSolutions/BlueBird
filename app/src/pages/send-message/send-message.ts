import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PrefixCategoryClient } from '../api-clients';

@Component({
  selector: 'page-send-message',
  templateUrl: 'send-message.html'
})
export class SendMessagePage {

  constructor(public navCtrl: NavController, private prefixClient: PrefixCategoryClient) {
    prefixClient.getAll().then(result => console.log('all prefixes', result));
  }

}
