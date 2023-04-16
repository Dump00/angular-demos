import { Component } from '@angular/core';
import {Student} from "../../model/Student";

@Component({
  selector: 'app-student-form-data',
  templateUrl: './student-form-data.component.html',
  styleUrls: ['./student-form-data.component.css']
})
export class StudentFormDataComponent {
  students: Student[] = []

  constructor() {
    this.students.push(new Student('S001', 'Luffy', "Maths"))
    this.students.push(new Student('S002', 'Zoro', "Science"))
    this.students.push(new Student('S003', 'Nami', "Geography"))
  }
}
