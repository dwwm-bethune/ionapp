import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage {
  items: any[] = [];
  itemAll: any[] = [];
  gender: string = 'all';
  presentingElement;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.presentingElement = document.querySelector('#main-content');
  }

  ionViewWillEnter() {
    this.http.get('https://randomuser.me/api/?results=10').subscribe(response => {
      console.log(response);
      this.items = this.itemAll = response['results'];
    });
  }

  loadData(event) {
    // On fait une requête AJAX et on arrête le loader
    console.log(event);
    // Le code à faire... AJAX + Ajout dans le tableau
    this.http.get('https://randomuser.me/api/?results=10').subscribe(response => {
      this.items = this.items.concat(response['results']);
      this.itemAll = this.itemAll.concat(response['results']);

      if (this.gender != 'all') {
        this.items = this.itemAll.filter(item => item.gender == this.gender);
      }

      event.target.complete();

      if (this.items.length >= 200) {
        event.target.disabled = true; // Je désactive l'infinite scroll
      }
    });

    setTimeout(() => {
      // this.items.push(this.items[0]);
      // var n = [1, 2, 3].concat([4, 5, 6]);
      // event.target.complete();
    }, 500);
  }

  filter(event) {
    this.items = this.itemAll;

    if (event.detail.value != 'all') {
      this.items = this.itemAll.filter(item => item.gender == event.detail.value);
    }
  }
}
