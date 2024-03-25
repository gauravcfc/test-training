import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ItunesSearchResponse } from '../models/itunes-search-response.model';

@Injectable({
  providedIn: 'root',
})
export class ItunesService {
  var1: string = 'Service class';

  BASE_URL: string = 'https://itunes.apple.com/search';

  cal: BehaviorSubject<number> = new BehaviorSubject(0);

  httpClient: HttpClient = inject(HttpClient);

  calNum: number = 0;

  setCalNum(val: number): void {
    this.cal.next(val);
    this.calNum = val;
  }

  getCalNum(): Observable<number> {
    return this.cal.asObservable();
  }

  getSongsBySearchString(searchTerm: string): Observable<ItunesSearchResponse> {
    return this.httpClient.get<ItunesSearchResponse>(
      `${this.BASE_URL}?term=${searchTerm}&entity=song`,
    );
  }

  getSongsByArtist(artistName: string): Observable<ItunesSearchResponse> {
    return this.httpClient.get<ItunesSearchResponse>(
      `${this.BASE_URL}?term=${artistName}&entity=musicArtist`,
    );
  }
}
