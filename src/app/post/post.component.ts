import { Component, OnInit } from '@angular/core';
import { Job } from '../job.model';
import {DatabaseService} from '../database.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(public db: DatabaseService) { }

  ngOnInit() {
  }

  onSubmit(cat:string,radio:string,type:string,desc:string,add:string,position:string,url:string){

    let job = new Job(cat,radio,type,desc,add,position,url);
  
    console.log(cat,radio,type,desc,add,position,url);
    this.db.addJob(job);

  }
}
