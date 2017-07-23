import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-message',
  templateUrl: 'message.html'
})
export class MessagePage {
  public show: string;
  constructor(public navCtrl: NavController) {
    this.show = "received";
  }

}
