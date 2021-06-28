import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared/guard/auth.guard';
 
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';
import { CreateCarpoolComponent } from './register/create-carpool/create-carpool.component';
import { CreateUserComponent } from './register/create-user/create-user.component';
 
const routes: Routes =[
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'newCarpool',
    component: CreateCarpoolComponent,
  }
  
  , 
  {
    path: 'newUser',
    component: CreateUserComponent,
  }
  
  , {
    path: '',
    canActivate:[AuthGuard],
    component: AdminLayoutComponent,
    children: [
        {
      path: '',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
  }]},
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];
 
@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
 
 
 
 
 

