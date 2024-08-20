import { Component, OnInit } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-add-character',
  templateUrl: './addNewCharacter.component.html',
  styleUrls: ['./addNewCharacter.component.css']
})
export class AddNewCharacterComponent {
  public character: Character = {
    name: '',
    power: 0
  }
}
