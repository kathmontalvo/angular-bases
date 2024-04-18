import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    id: '',
    name: 'trunk',
    power: 10
  }]

  @Output()
  public onDeleteEmit: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id: string): void {
    console.log(id);

    if(!id) return;

    this.onDeleteEmit.emit(id);
  }

 }
