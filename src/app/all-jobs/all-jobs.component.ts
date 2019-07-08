import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-all-jobs',
  templateUrl: './all-jobs.component.html',
  styleUrls: ['./all-jobs.component.css']
})
export class AllJobsComponent implements OnInit {

  jobs: Array<any>;
  info: Array<any>;
  cat: string;
  sub:any;

  constructor(db:DatabaseService, private route: ActivatedRoute, private router:Router) {

    this.info = new Array<any>();

    db.getJobs().subscribe((list)=>{
        this.info = list;
      }
      
    );
   }

   getCategoryList(cat:string): any[] {
    return this.info.filter(job => job.payload.doc.data().category === cat);
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.cat = params['cat']; 
      console.log(params);
   });
  }

  toInfo(job){
    let id = job.payload.doc.id;
    console.log("ID" + id);

    this.router.navigate(['/jobinfo', id]);
  }

  toHome(){
    this.router.navigateByUrl('home');
  }

}
