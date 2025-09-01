import { Injectable } from '@angular/core';
import { Movie } from '../models/movie.model';
import { MOVIES } from '../constants/movies.constants';

@Injectable({
  providedIn: 'root',
})
export class FilmsService {
  private _movies: Movie[] = MOVIES;
  private _searchResults: string = '';
  constructor() {}
  public get getFullMovies(): Movie[] {
    return this._movies;
  }
  public get filteredMovies(): Movie[] {
    return this._movies.filter(
      (item) =>
        item.title.includes(this._searchResults) ||
        item.original.includes(this._searchResults)
    );
  }
  public get searchResults(): string {
    return this._searchResults;
  }
  public set searchResults(value: string) {
    this._searchResults = value;
  }
}
