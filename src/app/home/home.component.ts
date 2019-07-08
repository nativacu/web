import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';
import { DatabaseService } from '../database.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

  @ViewChild('test') test: ElementRef;

  canPost: boolean;
  jobs: Array<any>;
  info: Array<any>;
  cats: Array<any>;
  canAdd = true;
  filteredJobs: any[];
  infoJob: any;

  constructor(private router: Router, public auth: AuthService, public db:DatabaseService) { 
    this.jobs = new Array<any>();
    this.cats = new Array<any>();
    this.info = new Array<any>();

    db.getJobs().subscribe((list)=>{

        this.info = list;
        for(let job of list){
          let info = job.payload.doc.data();
          this.jobs.push(info);
        
          let ts = job.payload.doc._document.version.timestamp;
          console.log(ts);

          if(!this.cats.includes(info.category)){
            this.cats.push(info.category);
          }
        } 
        console.log(this.cats.length);
      }
      
    );
   
    
  }

  getCategoryList(cat:string): any[] {
    return this.info.filter(job => job.payload.doc.data().category === cat);
  }

  toInfo(job){
    let id = job.payload.doc.id;
    console.log("ID" + id);

    this.router.navigate(['/jobinfo', id]);
  }
  

  ngOnInit() {
   
  }


  update(){
    
    const firstName = this.test.nativeElement.value;
   
    const data: any = {
      firstName: firstName
    }

    this.auth.addInfo(data);
  }


  toLogin(){
    this.router.navigateByUrl('login');
  }

  toPost(){
    this.router.navigateByUrl('post');
  }

  signOut(){
    this.auth.signOut();
  }
}
