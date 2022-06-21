import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage {
  items: Object[] = [];

  constructor(private http: HttpClient) {}

  ionViewWillEnter() {
    this.http.get('https://randomuser.me/api/?results=100').subscribe(response => {
      console.log(response);
      this.items = response['results'];
    });
  }

}
