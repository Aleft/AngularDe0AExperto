import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

// const GYPHY_API_KEY = 'Ti2c96NZLeM0RyNywwTq4YLOO6fAsolA';
@Injectable({
  providedIn: 'root',
})
export class GifsService {

  public gifList: Gif[] = [];
  private _tagsHistory: string[] = [];
  private apyKey: string = 'Ti2c96NZLeM0RyNywwTq4YLOO6fAsolA';
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs';


  constructor(private http: HttpClient) {
    this.loadLocalStorage();
  }

  get tagsHistory() {
    return [...this._tagsHistory];
  }

  private saveLocalStorage():void{
    localStorage.setItem('history', JSON.stringify(this._tagsHistory));
  }
  private loadLocalStorage():void{
    if (!localStorage.getItem('history')) return;

    this._tagsHistory= JSON.parse(localStorage.getItem('history')!);

    if(this._tagsHistory.length === 0) return;
    this.searchTag(this._tagsHistory[0]);
    // const temporal = localStorage.getItem('histo');
  }

  private organizeHistory(tag: string) {
    tag = tag.toLowerCase();
    
    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((t) => t !== tag);
    }

    this._tagsHistory.unshift(tag);
    this._tagsHistory = this._tagsHistory.splice(0,10);
    this.saveLocalStorage();
  }

  async searchTag(tag: string):Promise<void> {
    if (tag.length === 0) return;
    this.organizeHistory(tag);

    const params = new HttpParams()
      .set('api_key', this.apyKey)  
      .set('limit', '10')
      .set('q', tag)

    this.http.get<SearchResponse>(`${this.serviceUrl}/search`, { params })
      .subscribe( resp => {
        
        this.gifList = resp.data;
        console.log({gifs: this.gifList})
      });
  }
}
