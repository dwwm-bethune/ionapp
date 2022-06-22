import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.page.html',
  styleUrls: ['./meteo.page.scss'],
})
export class MeteoPage {
  city: string = '';
  meteo: any = {};

  constructor(
    private storage: Storage,
    private http: HttpClient
  ) {}

  ionViewWillEnter() {
    this.storage.create();
    this.storage.get('city').then(city => {
      this.city = city;

      this.http.get('https://prevision-meteo.ch/services/json/' + this.city).subscribe(response => {
        this.meteo = response;
        console.log(response);
      });
    });
  }

}
