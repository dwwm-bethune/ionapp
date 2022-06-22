import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.page.html',
  styleUrls: ['./pokemons.page.scss'],
})
export class PokemonsPage {
  pokemons: any[] = [];

  constructor(private http: HttpClient) {}

  ionViewWillEnter() {
    this.http.get('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
      .subscribe(response => {
        console.log(response['results']);
        this.pokemons = response['results'];
      });
  }
}
