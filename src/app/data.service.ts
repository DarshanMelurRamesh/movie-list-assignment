import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //Movie list data and Movie complete details data
  private apiResponseMovieList = new BehaviorSubject<any>({results:[]});
  private apiResponseMovieDetails = new BehaviorSubject<any>({});
  movieListData = this.apiResponseMovieList.asObservable();
  movieDetailsData = this.apiResponseMovieDetails.asObservable();

  //Loader flags
  movieListFlag : Boolean = false;
  movieDetailsFlag : Boolean = false;

  //Error message
  errorMesage : String = "";

  //Api key to access data from moviesdb api
  apiKey : String = 'ebd2c4ea6dcc70cc814e205f39f0a171';

  constructor(private http: HttpClient) { }
  
  //Set movies list data
  setMovieListData(movieListData) { 
    this.apiResponseMovieList.next(movieListData);
  }

  //Set movie complete data
  setMovieDetailsData(movieDetailsData){
    this.apiResponseMovieDetails.next(movieDetailsData);
  }

  //Prompt error message
  displayErrorMessage(errorMsg){
    this.errorMesage = errorMsg;
  }

}
