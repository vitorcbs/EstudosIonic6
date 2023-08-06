import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {
  constructor(public alertController: AlertController) {}

  ngOnInit() {}

  async alertComum() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Titulo do alert',
      subHeader: 'Subtitulo',
      message: 'Isso é um alert',
      buttons: ['OK'],
    });

    await alert.present();
  }

  async alertMultipleButtons() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Titulo do alert(Multiplos botoes)',
      subHeader: 'Subtitulo',
      message: 'Isso é um alert',
      buttons: ['Save', 'Edit', 'Cancel'],
    });

    await alert.present();
  }

  async alertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm?',
      subHeader: 'Subtitulo',
      message: 'Isso é um alert de confirmacao',
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            console.log('Confirmado');
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (x) => {
            console.log('Cancelado');
          },
        },
      ],
    });

    await alert.present();
  }

  async alertInput() {
    const alert = await this.alertController.create({
      header: 'ACESSO RESTRITO!',
      inputs: [
        { name: 'email', type: 'text', placeholder: 'Insira seu email' },
        { name: 'senha', type: 'password', placeholder: 'Informe sua senha' },
      ],
      buttons: [
        {
          text: 'Ok',
          handler: (form) => {
            console.log(form);
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Cancelado');
          },
        },
      ],
    });

    await alert.present();
  }
}
