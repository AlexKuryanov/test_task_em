import { Component } from '@angular/core';
import { Movie } from '../../models/movie.model';
import { MOVIES } from '../../constants/movies.constants';
import { FilmsService } from '../../services/films.service';

@Component({
  selector: 'app-catalog-page',
  templateUrl: './catalog-page.component.html',
  styleUrl: './catalog-page.component.css',
})
export class CatalogPageComponent {
  // public movies: Movie[] = MOVIES;
  constructor(private _filmsService: FilmsService) {}
  public get movies(): Movie[] {
    return this._filmsService.filteredMovies;
  }
}
