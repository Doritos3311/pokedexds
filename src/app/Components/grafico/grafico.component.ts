import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-grafico',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})
export class GraficoComponent {
  @Input() vidaPokemon: number = 100; // Vida del Pokémon (0-100)
  @Input() ataquePokemon: number = 5;  // Defensa del Pokémon (1-5)

  // Método para obtener los íconos de vida
  getLifeIcons(): string[] {
    return Array(Math.floor(this.vidaPokemon / 20)).fill('💙'); // Cada 20% de vida
  }

  // Método para obtener los íconos de defensa
  getDefenseIcons(): string[] {
    return Array(this.ataquePokemon).fill('🛡️'); // Cada nivel de defensa
  }

  // Método para obtener los íconos de ataque
  getAttackIcons(): string[] {
    return Array(this.ataquePokemon).fill('⚔️'); // Cada nivel de ataque
  }
}
