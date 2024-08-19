import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddNewCharacterComponent } from './components//addNewCharacter/addNewCharacter.component';



@NgModule({
  declarations: [
    MainPageComponent,
    ListComponent,
    AddNewCharacterComponent
  ],
  exports: [
    MainPageComponent,
    // ListComponent // Lo unico que nebcesita exportar es el mainpageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DbzModule { }
