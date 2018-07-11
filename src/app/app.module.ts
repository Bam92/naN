import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MovieDetailPageModule } from "../pages/movie-detail/movie-detail.module";
import { MyMoviesPageModule } from "../pages/my-movies/my-movies.module";
import { MovieListPageModule } from "../pages/movie-list/movie-list.module";
import { HttpClientModule } from '@angular/common/http'; 


import { MyApp } from './app.component';
import { MyMoviesPage } from '../pages/my-movies/my-movies'; 
import { MovieListPage } from '../pages/movie-list/movie-list'; 
//import { IMovie } from '../interface/IMovie/IMovie';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MovieApiProvider } from '../providers/movie-api/movie-api';

@NgModule({
  declarations: [MyApp],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    MyMoviesPageModule,
    MovieListPageModule,
    MovieDetailPageModule,
    HttpClientModule
    //IMovie
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MovieApiProvider
  ]
})
export class AppModule {}
