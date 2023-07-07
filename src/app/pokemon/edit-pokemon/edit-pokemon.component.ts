import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';
import { PokemonFormComponent } from '../pokemon-form/pokemon-form.component';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-edit-pokemon',
    template: `<h2>Editer {{ pokemon?.name }}</h2>
    <p *ngIf="pokemon"><img [src]="pokemon.picture" /></p>
    <app-pokemon-form  *ngIf="pokemon" [pokemon]="pokemon"/> `,
    standalone: true,
    imports: [NgIf, PokemonFormComponent],
})
export class EditPokemonComponent implements OnInit {
  pokemon: Pokemon | undefined;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) {}

  ngOnInit(): void {
    const pokemonId: string | null = this.route.snapshot.paramMap.get('id');
    if (pokemonId) {
      this.pokemonService.getPokemonById(+pokemonId).subscribe(pokemon => this.pokemon = pokemon);
    }
  }
}
