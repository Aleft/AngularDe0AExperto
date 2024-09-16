import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { GifsModule } from './gifs/gifs.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { CardsListComponent } from './gifs/components/card-list/card-list.component';

@NgModule({
  declarations: [	
    AppComponent,
    // CardsListComponent
   ],
  imports: [
    SharedModule,
    HttpClientModule,
    GifsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
