import { Component } from '@angular/core';
import { PokedexComponent } from '../pokedex/pokedex.component';
import { GraficoComponent } from '../grafico/grafico.component';
import { PokemonModel } from '../../../Models/IPokemons';

@Component({
  selector: 'app-pokedex-view',
  standalone: true,
  imports: [PokedexComponent, GraficoComponent],
  templateUrl: './pokedex-view.component.html',
  styleUrl: './pokedex-view.component.css'
})

export class PokedexViewComponent {
  
  pokemonId: number = 0;
  pokemonImagen: string = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.pokemonId}.png`; 

  changePokemon (event: number): void {
  this.pokemonId += event // Actualiza el pokemonId

  // Asegúrate de que pokemonId no sea menor que 0
  if (this.pokemonId < 0) {
    this.pokemonId = 0; // Ajusta a la lógica que prefieras
  }
  // Actualiza la URL de la imagen
  this.pokemonImagen = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.pokemonId}.png`
  }
}
