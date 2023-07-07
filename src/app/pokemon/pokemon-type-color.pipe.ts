import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'pokemonTypeColor',
    standalone: true
})
export class PokemonTypeColorPipe implements PipeTransform {
  transform(type: string): string {
    let color: string;
    switch (type) {
      case 'Feu':
        color = 'bg-red-500 rounded-full';
        break;
      case 'Eau':
        color = 'bg-blue-500 rounded-full';
        break;
      case 'Plante':
        color = 'bg-green-500 rounded-full';
        break;
      case 'Insecte':
        color = 'bg-brown-500 rounded-full';
        break;
      case 'Normal':
        color = 'bg-gray-400 rounded-full';
        break;
      case 'Vol':
        color = 'bg-blue-500 rounded-full';
        break;
      case 'Poison':
        color = 'bg-purple-500 accent-1';
        break;
      case 'Fée':
        color = 'bg-pink-500 rounded-full';
        break;
      case 'Psy':
        color = 'bg-purple-500 darken-2';
        break;
      case 'Electrik':
        color = 'bg-yellow-400 rounded-full';
        break;
      case 'Combat':
        color = 'bg-orange-600';
        break;
      default:
        color = 'bg-gray-400';
        break;
    }
    return 'p-1 ' + color;
  }
}