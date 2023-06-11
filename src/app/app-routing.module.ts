import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/pages/admin/admin.component';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/pages/home/home.component';
import { JobsComponent } from './components/pages/jobs/jobs.component';
import { LoginModule } from './components/pages/login/login.module';
import { LoginComponent } from './components/pages/login/login/login.component';

const routes: Routes = [
  {path:'',redirectTo : '/home', pathMatch : 'full'},
  {path: 'home', component: HomeComponent},
  { path: 'admin', component: AdminComponent },
  { path: 'jobs', component: JobsComponent },
  { path: 'login', component: LoginComponent },
  {path: 'logout',component: HomeComponent}
];

@NgModule({
  declarations:[],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
