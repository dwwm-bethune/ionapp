import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  username: string = '';
  busy: boolean = false;

  constructor(private storage: Storage) { }

  ngOnInit() {
    this.storage.create();
    // En arrivant sur le formulaire, on pré remplit le formulaire
    this.storage.get('username').then(username => this.username = username);
  }

  save() {
    console.log(this.username);
    this.busy = true;
    this.storage.set('username', this.username).then(() => {
      this.busy = false;
      
    });
  }

}
