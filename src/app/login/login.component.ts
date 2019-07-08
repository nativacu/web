import { Component, OnInit, NgZone, ViewChild, ElementRef } from '@angular/core';
import {AuthService} from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  user : any;
  @ViewChild('email') email: ElementRef;
  @ViewChild('type') type: ElementRef;
  @ViewChild('password') password: ElementRef;
  @ViewChild('f_name') f_name: ElementRef;
  @ViewChild('l_name') l_name: ElementRef;
  @ViewChild('log_mail') log_mail:ElementRef;
  @ViewChild('log_pass') log_pass: ElementRef;
  
  constructor(private router:Router, public auth: AuthService) { }

  ngOnInit() {
    
  }

  gLogin(){
    this.auth.googleLogin();
    this.router.navigate(['/']);
  }

  eLogin(){
    
  }

  onSubmit(){
  
    let email = this.email.nativeElement.value;
    let type = this.type.nativeElement.value;
    let password = this.password.nativeElement.value;
    let f_name = this.f_name.nativeElement.value;
    let l_name = this.l_name.nativeElement.value;
  
  
    const data: any = {
      email: email,
      firstName: f_name,
      lastName: l_name,
      accountType: type
    }
    
    this.auth.emailLogin(email,password,data).then(() => {
        this.router.navigateByUrl('/home');
    }).catch((err)=>{
      window.alert(err);  
    });
    
  }

  onSubmitLogin(){
    let email = this.log_mail.nativeElement.value;
    let password = this.log_pass.nativeElement.value;

    this.auth.loginMail(email,password).then(() => {
      this.router.navigateByUrl('/home');
    }).catch((err)=>{
      window.alert(err);  
    });
  }
}
