import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home/home-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { CardsListComponent } from './components/card-list/card-list.component';
import { CardComponent } from './components/card/card.component';
import { LazyImageComponent } from '../shared/components/lazyImage/lazyImage.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    CardComponent,
    CardsListComponent,
    HomePageComponent,
    SearchBoxComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    HomePageComponent
  ]
})
export class GifsModule { }
