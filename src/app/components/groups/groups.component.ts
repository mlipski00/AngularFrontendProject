import { Component, OnInit } from '@angular/core';
import { Group } from '../../models/Group';
import { GroupService } from '../../services/group.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {
  private groups: Group[];
  private order: string = 'id';


  constructor(private groupService: GroupService) { }

  ngOnInit() {
    this.getAllGroups();
  }
  getAllGroups() {
    this.groupService.getGroups().subscribe(groups => {
      this.groups = groups;
    });

  }
}
