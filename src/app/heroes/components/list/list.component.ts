import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroNames:string[] = [ 'spiderman', 'hulk', 'super woman', 'ant man' ]
  public deletedHero?: string;

  removeLastHero():void {
    this.deletedHero = this.heroNames.pop();

  }

}
