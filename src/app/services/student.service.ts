import { Injectable } from '@angular/core';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private students: Student[];

  constructor() {
    this.students = [
      {
        controlNumber: '18401121',
        name: 'Bradley Addiel González Flores',
        curp: 'GOFB000121HNENLR',
        age: 22,
        nip: 804,
        email: 'bradgonzalezfl@ittepic.edu.mx',
        career: 'ISC',
        photo: 'https://picsum.photos/300/300',
      },
      {
        controlNumber: '18407382',
        name: 'Juan Axel Jacobo Covarrubias',
        curp: 'JAJC000241HNENLR',
        age: 22,
        nip: 124,
        email: 'juanaxel25@ittepic.edu.mx',
        career: 'ISC',
        photo: 'https://picsum.photos/300/300',
      },
      {
        controlNumber: '18402492',
        name: 'Pedro Avila Bermudez',
        curp: 'PAB000359HNENLR',
        age: 22,
        nip: 359,
        email: 'pedrol359@ittepic.edu.mx',
        career: 'ISC',
        photo: 'https://picsum.photos/300/300',
      },
    ];
  }

  public getStudents(): Student[] {
    return this.students;
  }

  public removeStudent(index: number): Student[] {
    this.students.splice(index, 1);
    return this.students;
  }

  public newStudent(student: Student): Student[] {
    this.students.push(student);
    this.getStudents();
    return this.students;
  }

  public updateStudent(updatedStudent: Student): Student[] {
    this.students = this.students.map((student) =>
      student.controlNumber !== updatedStudent.controlNumber
        ? student
        : updatedStudent
    );
    return this.students;
  }

  public getStudentByControlNumber(cn: String): Student {
    let item: Student;
    item = this.students.find((student) => {
      return student.controlNumber === cn;
    });
    return item;
  }
}
