import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyMoviesPage } from './my-movies';
//import { MyMoviesPage } from './movie-list';

@NgModule({
  declarations: [
    MyMoviesPage,
  ],
  imports: [
    IonicPageModule.forChild(MyMoviesPage),
  ],
})
export class MyMoviesPageModule {}
