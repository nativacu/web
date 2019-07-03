import { Injectable } from '@angular/core';
import { Job } from './job.model';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  jobCollectionRef: AngularFirestoreCollection<Job>;
  jobObservable: Observable<Job[]>;

  constructor(private afs: AngularFirestore) {
    
    //afs.firestore.doc

   }

  addJob(job){

    const data: any = {
      category: job.category,
      type: job.type,
      position: job.position,
      location: job.location
    }
    //category, company, description, location, position, type, url?, logo?

    return new Promise<any>((resolve, reject) =>{
      this.afs
          .collection("posts")
          .add(data)
          .then(res => {
          }, err => reject(err));
    });
  }
}
