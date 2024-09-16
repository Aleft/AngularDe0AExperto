import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazyImage',
  templateUrl: './lazyImage.component.html',
})
export class LazyImageComponent implements OnInit {

  constructor() { }

  @Input()
  public url!: string;

  @Input()
  public alt: string = '';

  public hasLoaded: boolean = false;


  ngOnInit() {
    if (!this.url) throw new Error('Url property is required');
  }

  onLoad(){
    setTimeout(() => {
      console.log('Image loaded)')
      this.hasLoaded = true;
    }, 1000);
  }

}
