import { Component } from "@angular/core"

@Component({
  selector: 'app-counter',
  template: `
    <p> Counter: {{counter}}</p>
    <br>
    <button (click)="increaseBy(+1)">+1</button>
    <button (click)="reset()">reset</button>
    <button (click)="increaseBy(-1)">-1</button>
  `,
})
export class CounterComponent {

  constructor() {}

  public counter: number = 10;

  increaseBy( value: number ):void {
    this.counter += value;
  }

  reset():void {
    this.counter = 10;
  }
}
