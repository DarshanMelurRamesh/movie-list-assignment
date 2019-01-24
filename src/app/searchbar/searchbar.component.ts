import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from "../data.service";

@Component({
  selector: 'search-bar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  movieName : String = "";

  constructor(private http: HttpClient,private dataService: DataService) { }

  ngOnInit() {
  }

  //Fetch list of movies based on searched input from api 
  searchMovie(movieName){
    //Show loading gif
    this.dataService.movieListFlag = true;
    const moviesApi = this.http.get("https://api.themoviedb.org/3/search/movie?api_key="+this.dataService.apiKey+"&query="+movieName+"")
                      .subscribe(
                        movieListResponse =>{
        
                          //Set response data into dataservice variable
                          if(movieListResponse !== "" && movieListResponse !== null && movieListResponse['results'].length !== 0){
                            this.dataService.setMovieListData(movieListResponse);
                            this.dataService.displayErrorMessage("");
                          }else{
                            this.dataService.setMovieListData({results:[]});
                            this.dataService.setMovieDetailsData({});
                            this.dataService.displayErrorMessage("Movie not found");
                          }
                          
                          //Hide loading gif
                          this.dataService.movieListFlag = false;
                        },
                        error =>{
                          console.log(error);
                          //Hide loading gif
                          this.dataService.movieListFlag = false;
                          this.dataService.displayErrorMessage("Error occured while fetching data from api");
                          this.dataService.setMovieListData({results:[]});
                          this.dataService.setMovieDetailsData({});
                        })
  }
}
