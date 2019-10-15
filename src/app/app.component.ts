import { Component } from '@angular/core';
import { MoviesService } from './movies.service';

export interface MoviesService {

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  input : string;
  title : string = 'final-project-front';

  constructor() { 
    //this.input = this.input.toUpperCase();
  }
  

}
