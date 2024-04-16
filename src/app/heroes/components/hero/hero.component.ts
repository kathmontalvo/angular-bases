import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'spiderman';
  public age: number = 36;


  get capitalizedName(): string {
    return this.name.toUpperCase();
  }


  getHeroDescription():string {
    return `${this.name} - ${this.age}`
  }

  changeHero():void {
    this.name = 'super woman';
  }

  changeAge():void {
    this.age = 32;
  }

  resetForm(): void {
    this.name = 'spiderman';
    this.age = 36;
  }
}
