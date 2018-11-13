import { Component } from '@angular/core';
import { FirebaseApp } from '@angular/fire';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


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

import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable, Subject } from 'rxjs';
import * as firebase from 'firebase/app';

interface Pizza {
  name: string;
  addedAt: string;
}

@Component({
  
  styleUrls: [ './app.component.css' ],
  selector: 'my-app',
  template: ` 
  <mat-toolbar color="primary">
  <span>Angular Material Components</span>
</mat-toolbar>

<mat-toolbar>
  <span>Form Fields</span>
</mat-toolbar>
<br />

        <div *ngIf="afAuth.authState | async; let user; else showLogin">
      <h1>Hello {{ user.displayName }}!</h1>
    <input  matInput placeholder="Favorite food" #input (keydown.enter)="addPizza(input.value)" />
    <br>


    <h1>List of pizzas below</h1>
    <hr /> 
    <ul>
    <li *ngFor="let pizza of piazzas$ | async">
      {{pizza.name}}
    </li> 
    </ul>       
      <button (click)="logout()">Logout</button>
    </div>
    <ng-template #showLogin>
      <p>Please login.</p>
      <button  mat-raised-button color="primary" (click)="login()">Login with Google</button>
    </ng-template>


  `
})
export class AppComponent {
  piazzas$: Observable<Pizza[]>;
  piazzaRef: AngularFirestoreCollection<Pizza>;

  constructor(public app: FirebaseApp,
    private afs: AngularFirestore, public afAuth: AngularFireAuth) {
  }
  login() {
    //debugger;
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }
  logout() {
    this.afAuth.auth.signOut();
  }

  ngOnInit() {
      this.piazzaRef = this.afs.collection<Pizza>('pizzas')
    this.piazzas$ = this.piazzaRef.valueChanges();
  }

  addPizza(name: string) {
      this.piazzaRef.add({
      name,
      addedAt: new Date().toISOString()
    });
  }
}