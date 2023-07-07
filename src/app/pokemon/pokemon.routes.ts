import { Routes } from '@angular/router';
import { PokemonService } from './pokemon.service';

export default [
  {
    path: '',
    providers: [PokemonService],
    children: [
      {
        path: 'edit/pokemon/:id',
        loadComponent: () =>
          import('./edit-pokemon/edit-pokemon.component').then(
            (m) => m.EditPokemonComponent
          ),
      },
      {
        path: 'pokemons',
        loadComponent: () =>
          import('./list-pokemon/list-pokemon.component').then(
            (m) => m.ListPokemonComponent
          ),
      },
      {
        path: 'pokemons/:id',
        loadComponent: () =>
          import('./details-pokemon/details-pokemon.component').then(
            (m) => m.DetailsPokemonComponent
          ),
      },
      {
        path: 'pokemons/add',
        loadComponent: () =>
          import('./add-pokemon/add-pokemon.component').then(
            (m) => m.AddPokemonComponent
          ),
      },
    ],
  },
] as Routes;
