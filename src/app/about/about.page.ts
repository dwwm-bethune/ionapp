import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage {
  name: string = 'Ionapp'; // name est une propriété

  changeName() {
    this.name = 'Fiorella';
  }
}
