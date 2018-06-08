import { Component, OnInit } from '@angular/core';
import { ExerciseService } from './../../services/exercise.service';
import { Exercise } from './../../models/Exercise';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.css']
})
export class ExercisesComponent implements OnInit {
  private exercises: Exercise[];
  private order: string = 'id';

  constructor(private exerciseService: ExerciseService) { }

  ngOnInit() {
    this.getExercises(); 
  }

  getExercises() {
    this.exerciseService.getExercises().subscribe(exercises => {
      this.exercises = exercises;
    });
  }

}
