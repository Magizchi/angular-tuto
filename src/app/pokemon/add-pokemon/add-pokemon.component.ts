import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-add-pokemon',
  template: `
    <h2>Ajouter un pokemon</h2>
    <app-pokemon-form *ngIf="pokemon" [pokemon]="pokemon" />
  `,
})
export class AddPokemonComponent implements OnInit {
  pokemon: Pokemon = {} as Pokemon;

  ngOnInit(): void {
    this.pokemon = new Pokemon();
  }
}
