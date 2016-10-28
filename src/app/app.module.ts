import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';

// Must export the config
export const firebaseConfig = {
  apiKey: 'AIzaSyBtzMmq1zICAufZFHppp6jn0uD13sU659k',
  authDomain: 'testfirebase-75469.firebaseapp.com',
  databaseURL: 'https://testfirebase-75469.firebaseio.com/',
  storageBucket: 'testfirebase-75469.appspot.com'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
