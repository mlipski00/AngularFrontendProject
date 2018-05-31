import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router'; 

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';

import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: DashboardComponent,  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent, },
  { path: 'user/add', component: AddUserComponent, },
  { path: 'user/edit/:id', component: EditUserComponent, },
  { path: 'user/:id', component: UserDetailsComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
