import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrl: './heroe.component.css'
})
export class HeroeComponent {
  private _nombre: string = "ironman";
  
  public get nombre(): string {
    return this._nombre;
  }
  
  public get nombreEnMayuscula(): string {
    return this._nombre.toUpperCase()
  }
  
  public set nombre(value: string) {
    this._nombre = value;
  }
  
  private _edad: number = 45;
  
  public get edad(): number {
    return this._edad;
  }
  
  public set edad(value: number) {
    this._edad = value;
  }
  
  public metodo: string = "ironman"

  dimeDescripcion(): string {
    return `${this._nombre} - ${this._edad}`
  }
}
