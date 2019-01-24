import { Component, OnInit } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { DataService } from "../data.service";
import { movieListModel } from '../movieModel' 


@Component({
  selector: 'movie-list',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css']
})
export class MovielistComponent implements OnInit {

  movieList : movieListModel;

  constructor(private http: HttpClient,public dataService: DataService) {
    //Getting the data from searchbar component
    dataService.movieListData.subscribe(movieListResponse =>  this.movieList = movieListResponse.results);
   }

  ngOnInit() {
   
  }

  //Fetch complete movie details from api based on selected movie 
  completeMovieDetails(movieId){
    //Show loading gif
    this.dataService.movieDetailsFlag = true;
    //Complete Movie details api
    const moviesApi = this.http.get("https://api.themoviedb.org/3/movie/"+movieId+"?api_key="+this.dataService.apiKey)
                      .subscribe(
                        completeMovieResponse =>{
                          
                          //Set response data into dataservice variable
                          if(completeMovieResponse !== "" && completeMovieResponse !== null && Object.keys(completeMovieResponse).length !== 0){
                            this.dataService.setMovieDetailsData(completeMovieResponse);
                            this.dataService.displayErrorMessage("");
                          }else{
                            this.dataService.setMovieDetailsData({});
                            this.dataService.displayErrorMessage("Movie Details not found");
                          }
                          
                           //Hide loading gif
                          this.dataService.movieDetailsFlag = false;
                        },
                        error =>{
                          console.log(error);
                           //Hide loading gif
                          this.dataService.movieDetailsFlag = false;
                          this.dataService.displayErrorMessage("Error occured while fetching data from api");
                          this.dataService.setMovieDetailsData({});
                        })
  }

}
