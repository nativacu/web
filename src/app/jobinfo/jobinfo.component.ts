import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { DatabaseService } from '../database.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-jobinfo',
  templateUrl: './jobinfo.component.html',
  styleUrls: ['./jobinfo.component.css'],
  providers: [DatabaseService]
})


export class JobinfoComponent implements OnInit {
  job_id: string;
  job: any;
  private sub:any;
 
  constructor( public db:DatabaseService,private route: ActivatedRoute, private router:Router  ) { 

  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.job_id = params['id']; 
   });

   this.db.getJobs().subscribe(list=>{
  
      for(let doc of list ){
        console.log(doc);
        if(doc.payload.doc.id === this.job_id){
          this.job = doc.payload.doc.data();
        }
      }
     
    //this.job = wii.payload.doc.data().category;
    console.log(this.job);
   });

  }

  toHome(){
    this.router.navigateByUrl('home');
  }

 

}
