import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-add-character',
  templateUrl: './addNewCharacter.component.html',
  styleUrls: ['./addNewCharacter.component.css']
})
export class AddNewCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter(); //Esto para que podamos recibir el evento con los datos desde el front

  public character: Character = {
    name: '',
    power: 0
  }

  emitCharacter():void{
    // debugger;

    console.log(this.character);
    if (this.character.name.length === 0) return; //Solo es una validacion

    this.onNewCharacter.emit(this.character); //Aqui hacemos uso del evento

    // this.character.name = '';
    // this.character.power = 0;
    
  }
}
