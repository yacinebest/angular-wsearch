import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const WIKIPEDIA_API_URL_SEARCH: string = 'https://en.wikipedia.org/w/api.php';

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {



  constructor(private httpClient: HttpClient) { }

  public search(term: string) {
    return this.httpClient.get(WIKIPEDIA_API_URL_SEARCH, {
      params: {
        action: 'query',
        format: 'json',
        list: 'search',
        utf8: '1',
        srsearch: term,
        origin: '*'
      }
    });
  }
}
