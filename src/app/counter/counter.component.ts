import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <p>{{ counter }}</p>
    <input type="button" (click)="incrementar()" value="+1"/>
    <input type="button" (click)="reset()" value="Reset"/>
    <input type="button" (click)="decrementar()" value="-1"/>
  `,
  styles: ``
})
export class CounterComponent {
  counter: number = 10

  incrementar(): void {
    this.counter++
  }

  
  decrementar(): void {
    this.counter--
  }

  
  reset(): void {
    this.counter = 10
  }
}
