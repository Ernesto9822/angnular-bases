import { Component } from "@angular/core";


@Component({
  selector: 'app-counter',

  template: `
    <h3>{{ counter }}</h3>

    <button (click)="increaseBy(+1)" >+1</button>
    <button (click)="resetCounter()" >Reset</button>
    <button (click)="increaseBy(-1)" >-1</button>
  `
})
export class CounterComponent {

  public counter: number = 10;

  increaseBy(value: number): void {
   this.counter = this.counter + value;
  }

  decreaseBy():void {
   this.counter = this.counter - 1;
  }

  resetCounter()
 {
   this.counter = 10;
 }

}


