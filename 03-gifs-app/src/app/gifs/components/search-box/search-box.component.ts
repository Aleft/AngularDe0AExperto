import { Component, ElementRef, ViewChild, viewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
    selector: 'gifs-search-box',
    template: `
    <h5>Buscar:</h5>
    <input type= "text"
        class="form-control"
        placeholder= "buscar Gifs..."
        (keyup.enter)="searchTag()"
        #txtTagInput
    >
    `
})

export class SearchBoxComponent {

    @ViewChild('txtTagInput')
    public tagInput!: ElementRef <HTMLInputElement>;
    
    constructor(private gifsService: GifsService) { }

    searchTag( ) {
        const newTag = this.tagInput.nativeElement.value

        this.gifsService.searchTag(newTag);
        this.tagInput.nativeElement.value = ''; //resetea el valor del cuadro de busqueda
    }
}