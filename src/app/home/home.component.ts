import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';
import { FormControl, FormGroup } from "@angular/forms";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

  @ViewChild('test') test: ElementRef;

  formGroup: FormGroup;

  constructor(private router: Router, public auth: AuthService) { }

  ngOnInit() {
  }

  update(){
    
    const firstName = this.test.nativeElement.value;
    console.log(firstName);
   
    const data: any = {
      firstName: firstName,
     
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
