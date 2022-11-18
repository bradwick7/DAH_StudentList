import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public myForm: FormGroup;
  public validationMessages: Object;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthenticationService
  ) {}

  async ngOnInit() {
    this.myForm = this.formBuilder.group({
      user: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])],
    });

    this.validationMessages = {
      user: [
        {
          type: 'required',
          message: 'Usuario requerido',
        },
      ],
      password: [
        {
          type: 'required',
          message: 'Password requerido',
        },
      ],
    };
  }

  async login() {
    this.authService.onLoginSuccess(
      this.myForm.get('user').value,
      this.myForm.get('password').value
    );
  }
}
