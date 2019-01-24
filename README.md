# Assignment

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.4.

# Documentation
Application displays the movie list and its details based on searched parameter.

Data for the application is fetched from 'https://themoviedb.org/'.

Application consists of 4 components apart from app-component
1. landing component - Consists of remaining 3 components.
2. searchbar component - Consists of search bar and search button
3. movielist component - Displays list of movies with certain informations based on searched parameter.
4. movie-details component - Displays complete details of particular movie selected from the movielist component.

Movie list API : 

API-URL : https://api.themoviedb.org/3/search/movie?api_key={yourapikey}&query={searchedmoviename}"

Method : GET

Movie details API :

API-URL : "https://api.themoviedb.org/3/movie/{movieid}?api_key={yourapikey}"

Method : GET

Hosted URL using Firebase : https://assignment-dea20.firebaseapp.com

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
