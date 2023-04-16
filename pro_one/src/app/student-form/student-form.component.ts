import { Component } from '@angular/core';
import {Student} from "../../model/Student";

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent {
  id = ''
  name = ''
  course = ''
  students: Student[] = []

  onAddStudent() {
    this.students.push(new Student(this.id, this.name, this.course))
    this.id = ''
    this.name = ''
    this.course= ''
  }
}
