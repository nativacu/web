import { Injectable } from '@angular/core';
import { Job } from './job.model';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import * as firebase from 'firebase';

import { Observable, BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private uploadTask: firebase.storage.UploadTask;
  jobCollectionRef: AngularFirestoreCollection<Job>;
  jobObservable: Observable<Job[]>;
  imgObs:string;
  currentJob:BehaviorSubject<any>;

  constructor(private afs: AngularFirestore) {
  
   this.currentJob = new BehaviorSubject(null);
    //afs.firestore.doc

    

   }

  setCurrentJob(job){
    this.currentJob.next(job);

    console.log(this.currentJob.value);

  }

  pushUpload(name: string, file){

    this.imgObs = "n/a";
    let storageRef =  firebase.storage().ref();  
    this.uploadTask = storageRef.child(`${name}`).put(file);

   
    
    this.uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot)=>{

      },
      (error)=>{
        console.log(error);
         }),
      ()=>{
        console.log();
        storageRef.getDownloadURL().then((url)=>{
          this.imgObs = url;
        });
      }
    
  }

  getJob(id: string){


    return this.afs.collection("posts").doc(id).snapshotChanges();
  }  

  addJob(job:Job){

    const data: any = {
      category: job.category,
      type: job.type,
      logo: job.logo,
      company: job.company, 
      description: job.description,
      location: job.location,
      position: job.position,
      url: job.url
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

  getJobs(){
      return this.afs.collection("posts").snapshotChanges();
  }
}
