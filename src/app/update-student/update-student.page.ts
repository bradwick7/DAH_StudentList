import { Component, OnInit } from '@angular/core';
import { Student } from '../models/student';
import { StudentService } from '../services/student.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.page.html',
  styleUrls: ['./update-student.page.scss'],
})
export class UpdateStudentPage implements OnInit {
  public student: Student;
  public updatedStudent: Student;
  public myForm: FormGroup;
  public validationMessages: Object;
  public careers = ['ISC', 'IC', 'IBQ', 'IGE', 'ARQ', 'IM', 'IE'];

  constructor(
    private studentService: StudentService,
    private activatedRouteService: ActivatedRoute,
    private formBuilder: FormBuilder,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.activatedRouteService.queryParams.subscribe((params) => {
      this.student = this.studentService.getStudentByControlNumber(
        params.controlNumber
      );
    });

    this.myForm = this.formBuilder.group({
      controlNumber: [
        this.student.controlNumber,
        Validators.compose([
          Validators.required,
          Validators.minLength(7),
          Validators.maxLength(8),
          Validators.pattern('^[0-9]+$'),
        ]),
      ],
      name: [this.student.name, Validators.compose([Validators.required])],
      curp: [
        this.student.curp,
        Validators.compose([
          Validators.required,
          Validators.pattern(
            '[A-Z]{4}[0-9]{6}[HM]{1}[A-Z]{2}[BCDFGHJKLMNPQRSTVWXYZ]{3}([A-Z]{2})?([0-9]{2})?'
          ),
        ]),
      ],
      age: [
        this.student.age,
        Validators.compose([
          Validators.required,
          Validators.pattern('^(1[8-9]|[2-9][0-9]|100)$'),
        ]),
      ],
      nip: [
        this.student.nip,
        Validators.compose([
          Validators.required,
          Validators.pattern('^(1[0-9]|[2-9][0-9]|[1-9][0-9]{2,3})$'),
        ]),
      ],
      email: [
        this.student.email,
        Validators.compose([
          Validators.required,
          Validators.pattern(
            '^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()[]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$'
          ),
        ]),
      ],
      career: [this.student.career, Validators.compose([Validators.required])],
      photo: [
        this.student.photo,
        Validators.compose([
          Validators.required,
          Validators.pattern(
            '^((http(s?)?)://)?([wW]{3}.)?[a-zA-Z0-9-.]+.[a-zA-Z]{2,}(.[a-zA-Z]{2,})?(/[0-9]{3,})*$'
          ),
        ]),
      ],
    });

    this.validationMessages = {
      controlNumber: [
        {
          type: 'required',
          message: 'Número de control obligatorio',
        },
        {
          type: 'minlength',
          message: 'Número de control debe ser de 8 dígitos',
        },
        {
          type: 'maxlength',
          message: 'Número de control debe ser de 8 dígitos',
        },
        {
          type: 'pattern',
          message: 'Número de control solo son dígitos',
        },
      ],
      name: [
        {
          type: 'required',
          message: 'El nombre es requerido',
        },
      ],
      curp: [
        {
          type: 'required',
          message: 'CURP requerido',
        },
        {
          type: 'pattern',
          message: 'El CURP ingresado no es válido',
        },
      ],
      age: [
        {
          type: 'required',
          message: 'La edad es requerida',
        },
        {
          type: 'pattern',
          message: 'Edad debe ser mayor a 17',
        },
      ],
      nip: [
        {
          type: 'required',
          message: 'El nip es requerido',
        },
        {
          type: 'pattern',
          message: 'El nip deberá ser mayor a 9 y menor a 10,000',
        },
      ],
      email: [
        {
          type: 'required',
          message: 'El correo electrónico es requerido',
        },
        {
          type: 'pattern',
          message: 'El correo electrónico no es válido',
        },
      ],
      career: [
        {
          type: 'required',
          message: 'Selecciona una carrera',
        },
      ],
      photo: [
        {
          type: 'required',
          message: 'La URL de la foto es requerida',
        },
        {
          type: 'pattern',
          message: 'La URL ingresada no es válida',
        },
      ],
    };

    this.myForm.get('name').markAsDirty();
    this.myForm.get('curp').markAsDirty();
    this.myForm.get('age').markAsDirty();
    this.myForm.get('email').markAsDirty();
    this.myForm.get('career').markAsDirty();
    this.myForm.get('photo').markAsDirty();
  }

  public guardarEstudiante(): void {
    console.log(this.myForm.valid);

    if (this.myForm.valid) {
      this.updatedStudent = {
        controlNumber: this.myForm.get('controlNumber').value,
        name: this.myForm.get('name').value,
        curp: this.myForm.get('curp').value,
        age: this.myForm.get('age').value,
        nip: this.myForm.get('nip').value,
        email: this.myForm.get('email').value,
        career: this.myForm.get('career').value,
        photo: this.myForm.get('photo').value,
      };
      this.studentService.updateStudent(this.updatedStudent);
      this.presentAlert();
    } else {
      this.presentAlert2();
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Se actualizaron los datos del estudiante',
      buttons: ['OK'],
    });

    await alert.present();
  }
  async presentAlert2() {
    const alert = await this.alertController.create({
      header: 'Verifica que los campos estén correctos',
      buttons: ['OK'],
    });

    await alert.present();
  }
}
