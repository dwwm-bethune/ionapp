import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { Camera } from '@awesome-cordova-plugins/camera/ngx';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers: [Camera]
})
export class HomePage {
  username: string = '';
  photo: string = '';

  constructor(
    private router: Router,
    private storage: Storage,
    private camera: Camera,
    private alert: AlertController
  ) {}

  async ionViewWillEnter() {
    this.storage.create();
    this.storage.get('username').then(username => this.username = username);

    // this.username = await this.storage.get('username');
  }

  navToAbout() {
    // Naviguer avec le routeur...
    this.router.navigate(['/about']);
  }

  openCamera() {
    this.camera.getPicture({
      destinationType: this.camera.DestinationType.DATA_URL
    }).then(async (image) => {
      this.alert.create({
        message: 'Salut ' + image,
      }).then(alert => alert.present());

      this.photo = 'data:image/png;base64,'+image;

      // Alternative au .then
      // let alert = await this.alert.create({
      //   message: 'Salut',
      // });

      // await alert.present();
    })
  }
}
