import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage {
  user: any = {};

  constructor(private router: Router) { }

  ngOnInit() { // ionViewWillEnter est pour Ionic
    this.user = this.router.getCurrentNavigation().extras.state;
  }
}
