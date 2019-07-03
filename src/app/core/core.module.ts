import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthService} from '../auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[AuthService, AngularFireAuth, AngularFirestore]
})

export class CoreModule { }
