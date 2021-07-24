import { Component, OnInit } from '@angular/core';
import { SearchResponse, WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  pages: SearchResponse[] = [];

  constructor(private wikipediaService: WikipediaService) { }

  ngOnInit(): void {
  }

  onTerm(term: string) {
    this.wikipediaService.search(term).subscribe((response) => {
      this.pages = response;
    });
  }
}
