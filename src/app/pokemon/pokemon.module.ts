import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from '../auth.guard';
import { AddPokemonComponent } from './add-pokemon/add-pokemon.component';
import { BorderCardDirective } from './border-card.directive';
import { DetailsPokemonComponent } from './details-pokemon/details-pokemon.component';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { LoaderComponent } from './loader/loader.component';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { PokemonService } from './pokemon.service';
import { SearchPokemonComponent } from './search-pokemon/search-pokemon.component';

const pokemonRoutes: Routes = [
  { path: 'edit/pokemon/:id', component: EditPokemonComponent, canActivate: [authGuard] },
  { path: 'pokemons', component: ListPokemonComponent, canActivate: [authGuard] },
  { path: 'pokemons/:id', component: DetailsPokemonComponent, canActivate: [authGuard] },
  { path: 'pokemons/add', component: AddPokemonComponent, canActivate: [authGuard] },
];

@NgModule({
  declarations: [
    BorderCardDirective,
    PokemonTypeColorPipe,
    DetailsPokemonComponent,
    ListPokemonComponent,
    PokemonFormComponent,
    EditPokemonComponent,
    AddPokemonComponent,
    SearchPokemonComponent,
    LoaderComponent,
  ],
  imports: [CommonModule, FormsModule, RouterModule.forChild(pokemonRoutes)],
  providers: [PokemonService],
})
export class PokemonModule {}
