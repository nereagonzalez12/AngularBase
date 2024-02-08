import { Component } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {
  public heroeNombres: string[] = ["Antonio Recio", "Amador Rivas", "Enrique Pastor", "Maite Figueroa"];
  public heroeBorrado: string = '';

  borrarUltimoHeroe(): void {
    if (this.heroeNombres.length > 0) {
      this.heroeBorrado = String(this.heroeNombres.pop());
    } else {
      this.heroeBorrado = '';
    }
  }
}
