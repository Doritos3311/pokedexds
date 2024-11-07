import { Component, EventEmitter, Input, Output, } from '@angular/core';

@Component({
  selector: 'app-pokedex',
  standalone: true,
  imports: [],
  templateUrl: './pokedex.component.html',
  styleUrl: './pokedex.component.css'
})
export class PokedexComponent {
  @Input({ required: true }) imagenUrl: string = "";
  @Output() pokemonId: EventEmitter<number> = new EventEmitter();

  anteriorPokemon() {
    this.pokemonId.emit(-1);
  }

  siguientePokemon() {
    this.pokemonId.emit(1);
  }
}
