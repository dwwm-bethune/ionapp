import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  username: string = '';

  constructor(
    private router: Router,
    private storage: Storage
  ) {}

  ionViewWillEnter() {
    this.storage.create();
    this.storage.get('username').then(username => this.username = username);
  }

  navToAbout() {
    // Naviguer avec le routeur...
    this.router.navigate(['/about']);
  }
}
