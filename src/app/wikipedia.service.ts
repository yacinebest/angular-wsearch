import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pluck } from 'rxjs/operators';


const WIKIPEDIA_API_URL_SEARCH: string = 'https://en.wikipedia.org/w/api.php';

export interface SearchResponse {
  title: string;
  snippet: string;
  pageid: number;
}

interface WikipediaResponse {
  query: {
    search: SearchResponse[]
    /*search: {
      title: string;
      snippet: string;
      pageid: number;
    }[]*/
  }
}

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {



  constructor(private httpClient: HttpClient) { }

  public search(term: string) {
    return this.httpClient.get<WikipediaResponse>(WIKIPEDIA_API_URL_SEARCH, {
      params: {
        action: 'query',
        format: 'json',
        list: 'search',
        utf8: '1',
        srsearch: term,
        origin: '*'
      }
    })
      .pipe(
        pluck('query', 'search')
      );
  }
}
