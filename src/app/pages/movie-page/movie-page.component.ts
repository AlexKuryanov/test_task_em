import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie.model';
import { MOVIES } from '../../constants/movies.constants';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmsService } from '../../services/films.service';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrl: './movie-page.component.css',
})
export class MoviePageComponent implements OnInit {
  public movies: Movie[] = [];
  public movie!: Movie;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _filmsService: FilmsService
  ) {}
  ngOnInit(): void {
    const id = this._route.snapshot.paramMap.get('id');
    this.movies = this._filmsService.getFullMovies;
    this._initMovie(Number(id));
  }

  private _initMovie(id: number) {
    const findMovie = this.movies.find((movie) => movie.id === id);
    if (findMovie) {
      this.movie = findMovie;
    } else {
      this._router.navigate(['/']);
    }
  }
}
