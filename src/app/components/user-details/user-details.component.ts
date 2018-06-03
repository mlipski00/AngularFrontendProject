import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { User } from '../../models/User';
import { UserService } from '../../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
 
  isUserDeleting: boolean = false;
  isUserEditing: boolean = false;
  userID: number;
  user: User = {
    username: '',
    email: '',
    password: '',
  }

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {

      this.userID = params['id']
    });
    this.getUsers(this.userID);
  }

  getUsers(userID: number) {
    this.userService.getUser(userID).subscribe(user => {
      this.user = user;
      console.log(this.user);
    });
  }

  onDeleteClick() {
    this.userService.deleteUser(this.user.id);
    this.isUserDeleting = true;
  }
  onEditClick() {
    this.isUserEditing = true;
  }
}
