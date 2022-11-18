import { Component, OnInit } from '@angular/core';
import { Student } from '../models/student';
import { StudentService } from '../services/student.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.page.html',
  styleUrls: ['./view-student.page.scss'],
})
export class ViewStudentPage implements OnInit {
  public student: Student;

  constructor(
    private studentService: StudentService,
    private activatedRouteService: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRouteService.queryParams.subscribe((params) => {
      this.student = this.studentService.getStudentByControlNumber(
        params.controlNumber
      );
    });
  }
}
