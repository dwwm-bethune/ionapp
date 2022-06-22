import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creator',
  templateUrl: './creator.page.html',
  styleUrls: ['./creator.page.scss'],
})
export class CreatorPage implements OnInit {
  // creators: Array<Object>
  creators: any[] = [
    { name: 'Fiorella', image: 'fiorella.jpeg', job: 'CEO' },
    { name: 'Matthieu', image: 'matthieu.jpeg', job: 'CTO' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
