import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';  // MovieService is a class blueprint

// export interface MoviesService;
//  interface MoviesService {}; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
  
  // constructor(public _movieService: MoviesService) { 
  // }

  _moviesService: MoviesService;
  constructor() { 
    this._moviesService = new MoviesService();
  }

  ngOnInit() {
  }

}
