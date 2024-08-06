import { Component, input } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'IronMan';
  public age: number = 45;

  get capitalizedName(): string{
    return 'Hola Mundo'
  }

  getHeroDescription(): string{
    return `${this.name} - ${this.age}`
  }
  changeHero(): void{
    this.name = "Spiderman";
  };
  // changeHero2(): void{
  //   this.name = prompt('Please enter a new name: ');
  // };

  changeAge() {
    this.age = 30;
  };
  resetForm(){
  this.name = "IronMan";
  this.age = 45;

  document.querySelectorAll('h1').forEach(element => {
    element.innerHTML = 'Desde Angular';
  });
  }
}



