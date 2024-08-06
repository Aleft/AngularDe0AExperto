import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
    selector: 'app-counters',        
    template: `
    <h3>Contador: {{ counter }} </h3>
    
    <button (click)="increaseBy()">+1</button>
    <button (click)="reset()">Reset</button>
    <button (click)="decreaseBy()">-1</button>
    `
})

export class CounterComponent {
    public title: string = 'My first app';
    public counter: number = 10;

  increaseBy() :void{
    this.counter += 1;
  }
  decreaseBy() :void{
    this.counter -= 1;
  }
  //otra forma de hacerlo:
  //en el html deberia pasar click="increaseBy2(5)"
  increaseBy2(value : number) :void{
    this.counter += value;
  }

  reset() :void{
    this.counter = 10;
  }
}