import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/User';
import { GroupService } from '../../services/group.service';
import { Group } from '../../models/Group';
import { Observable } from 'rxjs';
import { FlashMessagesService } from 'angular2-flash-messages';
import { timeout } from 'q';
import { Router } from '@angular/router';
import { error } from '@angular/compiler/src/util';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  groups: Group[];
  user: User = {
    username: '',
    email: '',
    password: '',
    person_group_id: 1
  }
  isUserAdding: boolean = false;
  @ViewChild('userForm') form: any;

  constructor(
    private flashMessage: FlashMessagesService,
    private router: Router,
    private userService: UserService,
    private groupService: GroupService,
  ) { }
  ngOnInit() {
    this.getGroups();
    
  }
  onSubmit({ value, valid }: { value: User, valid: boolean }) {
    if (!valid) {
      this.flashMessage.show('Please fill out the form correctly', {
        cssClass: 'alert-danger', timeout: 4000
      });
    } else {
      this.userService.addUser(value);
      this.isUserAdding = true;
  }
  }
  getGroups() {
    this.groupService.getGroups()
    .subscribe(groups => {
       this.groups = groups;
       console.log(this.groups);
   });
  }
  resetForm() {
    this.form.reset();
  }

}
