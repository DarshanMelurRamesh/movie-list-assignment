import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { AppRoutingModule } from './app-routing.module';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { MovielistComponent } from './movielist/movielist.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { ArrayToString } from '../pipes/arrayToString.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    SearchbarComponent,
    MovielistComponent,
    MovieDetailsComponent,
    ArrayToString
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
