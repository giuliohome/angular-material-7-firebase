import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

import { AppComponent } from './app.component';


import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatToolbarModule,
  MatTabsModule,
  MatButtonModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCheckboxModule,
  MatRadioModule
} from '@angular/material';

const config = {
      apiKey: "AIzaSyBhdmU8Do2WYHULCwUx0Yp0fFiSS8yqGbc",
      authDomain: "firstfirebaseofgiulio.firebaseapp.com",
      databaseURL: "https://firstfirebaseofgiulio.firebaseio.com",
      projectId: "firstfirebaseofgiulio",
      storageBucket: "firstfirebaseofgiulio.appspot.com",
      messagingSenderId: "607301551300"
};

@NgModule({
  imports:      [ 
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,  BrowserModule, FormsModule, BrowserAnimationsModule, MatToolbarModule, MatTabsModule, MatButtonModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatCheckboxModule, MatRadioModule
  ],
  declarations: [ AppComponent ],
  providers: [AngularFirestore, AngularFireAuth],
  bootstrap: [ AppComponent ]
})
export class AppModule { }