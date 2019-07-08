import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PostComponent } from './post/post.component';
import { JobinfoComponent } from './jobinfo/jobinfo.component';
import { AllJobsComponent } from './all-jobs/all-jobs.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path:  'home',  component: HomeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'post', component: PostComponent},
  { path: 'jobinfo/:id', component: JobinfoComponent},
  { path:  'alljobs/:cat',  component: AllJobsComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
