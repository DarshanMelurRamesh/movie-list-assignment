import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";
import { movieDetailsModel } from '../movieModel' 

@Component({
  selector: 'movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  movieDetails: movieDetailsModel;

  constructor(public dataService : DataService) { 
    //Getting the data from movielist component
    dataService.movieDetailsData.subscribe(movieDetailsResponse =>  this.movieDetails = movieDetailsResponse);
  }

  ngOnInit() {
  }

}
