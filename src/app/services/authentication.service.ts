import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  public users = [{ user: 'god', password: 'god' }];

  constructor(
    private router: Router,
    private alertController: AlertController
  ) {}

  async onLoginSuccess(user: String, password: String) {
    if (user === this.users[0].user && password === this.users[0].password) {
      await this.router.navigate(['/home']);
    } else {
      this.presentAlert();
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Credenciales no válidas',
      message: 'Pulsa F12 y verifica el mensaje en consola',
      buttons: ['OK'],
    });

    console.log('user: god\npassword: god');

    await alert.present();
  }
}
