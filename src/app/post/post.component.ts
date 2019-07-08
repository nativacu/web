import { Component, OnInit } from '@angular/core';
import { Job } from '../job.model';
import {DatabaseService} from '../database.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  categories = ['Design','Programming'];
  selectedFile: File;
  successfull = false;

  constructor(public db: DatabaseService, private router: Router) { }

  ngOnInit() {
  }


  onSubmit(cat:string, company:string, description:string, location:string, position:string, type:string, url:string, image){
    let job = new Job(cat,company,description,location,position,type);
    console.log(type);
    if(cat && company && type && description && location && position){
     // <!-- category, company, description, location, position, type, url?, logo? -->
      if(image){
       
        this.db.pushUpload(image[0].name, image[0]);
        //this.db.imgObs.subscribe((src)=>{
         job.setImage( this.db.imgObs);
        //});

      }
  
      if(url){
        job.setURL(url);
      }

      this.db.addJob(job);
      this.successfull = true;

      let rout = this.router;
      let form = document.getElementById("Post");
      form.reset();
    
      setTimeout( function () {
        rout.navigateByUrl('home');
      }, 2000);
    }

    else{
      window.alert("Please fill all required fields");
    }

   
  }

  
  processFile(file){
    console.log(file[0]);
  

   
  }

  

}
