import { Component, OnInit } from '@angular/core';
import { Solution } from '../../models/Solution';
import { SolutionService } from '../../services/solution.service';

@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.css']
})
export class SolutionsComponent implements OnInit {
  isSolutionsLoaded: boolean = false;
  solutions: Solution[];

  constructor(    
    private solutionService: SolutionService
  ) { }

  ngOnInit() {
    this.getSolutions();
  }

  getSolutions() {
    this.solutionService.getAllSolution().subscribe(solutions => {
       this.solutions = solutions;
       console.log(this.solutions);
       this.isSolutionsLoaded = true;
   });
  }
}
