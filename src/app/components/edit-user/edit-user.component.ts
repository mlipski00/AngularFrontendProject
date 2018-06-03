import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/User';
import { GroupService } from '../../services/group.service';
import { Group } from '../../models/Group';
import { Observable } from 'rxjs';
import { FlashMessagesService } from 'angular2-flash-messages';
import { timeout } from 'q';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  groups: Group[];
  @Input() user: User;
  @Input() userID: number;

  isUserAdding: boolean = false;
  @ViewChild('userForm') form: any;
  constructor(
    private flashMessage: FlashMessagesService,
    private router: Router,
    private userService: UserService,
    private groupService: GroupService,
  ) { }

  ngOnInit() {
    this.user.password = '';
    this.getGroups();
    console.log(this.user.id)
  }

  onSubmit({ value, valid }: { value: User, valid: boolean }) {
    if (!valid) {
      this.flashMessage.show('Please fill out the form correctly', {
        cssClass: 'alert-danger', timeout: 4000
      });
    } else {
      this.userService.updateUser(value);
      this.isUserAdding = true;
  }
  }
  getGroups() {
    this.groupService.getGroups().subscribe(groups => {
       this.groups = groups;
       console.log(this.groups);
   });
  }
  resetForm() {
    this.form.reset();
  }
}
