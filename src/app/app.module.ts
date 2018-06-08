import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/Forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AppRoutingModule } from './/app-routing.module';
import { UserService } from './services/user.service';
import { GroupService } from './services/group.service';
import { SolutionService } from './services/solution.service';
import { ExerciseService } from './services/exercise.service'; 
import { UsersComponent } from './components/users/users.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { OrderModule } from 'ngx-order-pipe';
import { FlashMessagesService } from 'angular2-flash-messages';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { FilterPipe } from './utilities/filter.pipe';
import { SolutionsComponent } from './components/solutions/solutions.component';
import { GroupsComponent } from './components/groups/groups.component';
import { ExercisesComponent } from './components/exercises/exercises.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginService } from './services/login.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    AddUserComponent,
    EditUserComponent,
    UserDetailsComponent,
    LoginComponent,
    RegisterComponent,
    NotFoundComponent,
    UsersComponent,
    FilterPipe,
    SolutionsComponent,
    GroupsComponent,
    ExercisesComponent,
    FooterComponent
  ],
  imports: [
    OrderModule,
    FlashMessagesModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    UserService, 
    FlashMessagesService, 
    GroupService, 
    SolutionService,
    ExerciseService,
    LoginService,
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: LoginService,
    //   multi: true
    // }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
