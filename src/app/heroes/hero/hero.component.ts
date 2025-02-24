import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 26;

  get capitalizedName(): string {

    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`
  }

  changeHero(): void{

  this.name = 'spiderman';

  }

  changeAge(): void{

    this.age = 27;
  }

reset(): void{
  this.name = 'ironman';
  this.age = 26;

  //document.querySelectorAll('h1')!.forEach(element => {
    //element.innerHTML = '<h1>Desde Angular</h1>';
 // })
}

}
