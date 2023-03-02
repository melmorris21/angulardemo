import { Component} from '@angular/core';
import {POKEMON } from '../mock-pokemon';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
})

export class PokemonComponent {
  pokemon = POKEMON;
}

