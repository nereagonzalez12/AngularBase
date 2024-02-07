import { Component } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {
  public heroeNombres: string[] = ["Antonio Recio", "Amador Rivas", "Enrique Pastor", "Maite Figueroa"]
  public heroeBorrado: string | null = null

  borrarUltimoHeroe(): void {
    this.heroeBorrado = String(this.heroeNombres.pop())
  }
}
