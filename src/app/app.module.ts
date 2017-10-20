import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { ChartsModule } from 'ng2-charts';


import { SMS } from '@ionic-native/sms';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { UpdatePage } from '../pages/update/update';
import { ViewPage } from '../pages/view/view';
import { LoginPage } from '../pages/login/login';
import { ChatPage } from '../pages/chat/chat';
import { ProfilePage } from '../pages/profile/profile';




import { HttpModule } from '@angular/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Geolocation } from '@ionic-native/geolocation';
import { ConversationProvider } from '../providers/conversation/conversation';
import { AudioProvider } from '../providers/audio/audio';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    UpdatePage,
    ViewPage,
    LoginPage,
    ChatPage,
    ProfilePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    ChartsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    UpdatePage,
    ViewPage,
    LoginPage,
    ChatPage,
    ProfilePage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    SMS,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ConversationProvider,
    AudioProvider
  ]
})
export class AppModule {}
