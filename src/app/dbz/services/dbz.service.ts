import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid'

@Injectable({providedIn: 'root'})
export class DbzService {
  constructor() { }

  public characters: Character[] = [
    {
      id: uuid(),
      name: 'krillin',
      power: 1000
    },
    {
      id: uuid(),
      name: 'goku',
      power: 9500
    },
    {
      id: uuid(),
      name: 'vegeta',
      power: 7500
    }
  ]

  addCharacter(character: Character):void {

    const newCharacter: Character = {
      ...character,
      id: uuid()
    };
    this.characters.push(newCharacter);
  }

  // onDeleteCharacterByIndex(index: number):void {
  //   this.characters.splice(index, 1)
  // }

  deleteCharacterById (id: string) {
    this.characters = this.characters.filter(character => character.id !== id)
  }

}
