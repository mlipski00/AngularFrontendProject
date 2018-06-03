import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/User';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  order: string = 'id';
  isSearching: boolean = false;
  
  constructor(private userService: UserService) { }
  
  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe(users => {
       this.users = users;
   });
  }
  toggleSearchUserComponent() {
    if (this.isSearching) {
      this.isSearching = false 
    } else {
      this.isSearching = true
    } return this.isSearching;
  }  
}
