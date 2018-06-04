import { Component, OnInit } from '@angular/core';
import { UsersComponent } from '../../components/users/users.component';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { UserService } from '../../services/user.service';
import { User } from '../../models/User';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  isSearching: boolean = false;
  users: User[];
  constructor(
    private usersComponent: UsersComponent,
    private userService: UserService
  ) { }

  toggleSearch() {
    this.isSearching = this.usersComponent.toggleSearchUserComponent();
  }

  ngOnInit() {
  }

  downloadPDF() {
    this.userService.getUsers().subscribe(users => {
      pdfMake.vfs = pdfFonts.pdfMake.vfs;
    var docDefinition = { content: 'Users in JSON Format: ' + `${JSON.stringify(users)}` };
    pdfMake.createPdf(docDefinition).download('generatedPDF.pdf');
      })
    }
}
