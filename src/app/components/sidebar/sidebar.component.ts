import { Component, OnInit } from '@angular/core';
import { UsersComponent } from '../../components/users/users.component';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  isSearching: boolean = false;

  constructor(private usersComponent: UsersComponent) { }

  toggleSearch () {
  this.isSearching = this.usersComponent.toggleSearchUserComponent();
  }

  ngOnInit() {
  }

 downloadPDF() {

 } 
}
