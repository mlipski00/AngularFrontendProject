import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/User';
import { Observable } from 'rxjs';
import { FlashMessagesService } from 'angular2-flash-messages';
import { timeout } from 'q';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  user: User = {
    username: '',
    email: '',
    password: '',
    person_group_id: 1
  }

  constructor(
    private flashMessage: FlashMessagesService,
    private router: Router,
    private userService: UserService,
  ) { }
  ngOnInit() {
  }
  onSubmit({ value, valid }: { value: User, valid: boolean }) {
    if (!valid) {
      this.flashMessage.show('Please fill out the form correctly', {
        cssClass: 'alert-danger', timeout: 4000
      });
    } else {
      value.person_group_id = 1;
      this.userService.addUser(value);
      this.flashMessage.show('New client added', {
        cssClass: 'alert-success', timeout: 4000
      });
      this.router.navigate(['/'])
    }
  }
}
