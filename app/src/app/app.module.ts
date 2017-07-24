import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  IonicApp,
  IonicModule,
  IonicErrorHandler
} from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { NativeStorage } from '@ionic-native/native-storage';

import { Facebook } from '@ionic-native/facebook';

import { Contacts } from '@ionic-native/contacts';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { ContactsListPage } from '../pages/contact/contacts-list';
import { SendMessagePage } from '../pages/send-message/send-message';
import { TabsPage } from '../pages/tabs/tabs';
import { MessagePage } from '../pages/message/message';

import { LoginPage } from '../pages/login/login';
import { UserPage } from '../pages/user/user';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PrefixCategoryClient } from '../providers/api-client/prefix-category-client';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    ContactsListPage,
    SendMessagePage,
    TabsPage,
    MessagePage,
    LoginPage,
    UserPage
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    SendMessagePage,
    TabsPage,
    MessagePage,
    LoginPage,
    UserPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    PrefixCategoryClient,
    Contacts,
    NativeStorage,
    Facebook,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
