import { Component, ViewChild } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NativeStorage } from '@ionic-native/native-storage';
import { TabsPage } from '../pages/tabs/tabs';
import { SendMessagePage } from '../pages/send-message/send-message';
import { UserPage } from '../pages/user/user';
import { LoginPage } from '../pages/login/login';
import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild('myNav') nav: NavController;
  rootPage:any = LoginPage;

  constructor(
    platform: Platform,
    public nativeStorage: NativeStorage,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen) {

    platform.ready().then(() => {

      this.nativeStorage.getItem('user')
        .then((data) => {
          // user is previously logged and we have his data
          // we will let him access the app
          this.nav.push(UserPage);
        }, (error) => {
          //we don't have the user data so we will ask him to log in
          this.nav.setRoot(LoginPage);
        });

      statusBar.styleDefault();
      splashScreen.hide();
    });

  }
}
