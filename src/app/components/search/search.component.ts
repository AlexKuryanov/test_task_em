import { Component } from '@angular/core';
import { FilmsService } from '../../services/films.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  public searchResults: string = '';

  constructor(private _filmsService: FilmsService) {}

  public updateValue(event: Event) {
    const target = event.target as HTMLInputElement;
    this.searchResults = target.value;
  }

  public updateSearch(event: Event) {
    this._filmsService.searchResults = this.searchResults;
  }
}
