import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router'; 
import { UsersComponent } from './components/users/users.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { SolutionsComponent } from './components/solutions/solutions.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ExercisesComponent } from './components/exercises/exercises.component';
import { GroupsComponent } from './components/groups/groups.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  { path: '', component: UsersComponent, canActivate:[LoginGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: AddUserComponent },
  { path: 'user/add', component: AddUserComponent, canActivate:[LoginGuard] },
  { path: 'user/edit/:id', component: EditUserComponent, canActivate:[LoginGuard] },
  { path: 'user/:id', component: UserDetailsComponent, canActivate:[LoginGuard] },
  { path: 'exercises', component: ExercisesComponent, canActivate:[LoginGuard] },
  { path: 'groups', component: GroupsComponent, canActivate:[LoginGuard] },
  { path: 'solutions', component: SolutionsComponent, canActivate:[LoginGuard] },
  { path: '**', component: NotFoundComponent },

];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ],
  providers: [LoginGuard]
})
export class AppRoutingModule { }
