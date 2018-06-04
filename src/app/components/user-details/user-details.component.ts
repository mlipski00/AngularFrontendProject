import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { User } from '../../models/User';
import { UserService } from '../../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Solution } from '../../models/Solution';
import { SolutionService } from '../../services/solution.service';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  isSolutionsLoaded: boolean = false;
  solutionsCount: number = -1;
  solutions: Solution[];
  isUserDeleting: boolean = false;
  isUserEditing: boolean = false;
  userID: number;
  user: User = {
    username: '',
    email: '',
    password: '',
  };
  order: string = 'id';
  reverse: boolean = false;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private solutionService: SolutionService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {

      this.userID = params['id']
    });
    this.getUsers(this.userID);
    this.getSolutions(this.userID);
  }

  getUsers(userID: number) {
    this.userService.getUser(userID).subscribe(user => {
      this.user = user;
    });
  }
  getSolutions(userID) {
    this.solutionService.getSolution(userID).subscribe(solutions => {
       this.solutions = solutions;
       console.log(this.solutions);
       this.solutionsCount = solutions.length;
       this.isSolutionsLoaded = true;
   });
  }
  onDeleteClick() {
    this.userService.deleteUser(this.user.id);
    this.isUserDeleting = true;
  }
  onEditClick() {
    this.isUserEditing = true;
  }
  filterBy(filterBy: any) {
    if (filterBy === this.order) {
      if (this.reverse) {
        this.reverse = false 
      } else {
        this.reverse = true
      }
    }
    this.order = filterBy;
  }
}
