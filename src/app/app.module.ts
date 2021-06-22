import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherAppComponent } from './pages/weather-app/weather-app.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { AppHeaderComponent } from './cmps/app-header/app-header.component';
import { SearchComponent } from './cmps/search/search.component';
import { WeaterListComponent } from './cmps/weater-list/weater-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { WeatherPreviewComponent } from './cmps/weather-preview/weather-preview.component';


@NgModule({
  declarations: [
    AppComponent,
    WeatherAppComponent,
    FavoritesComponent,
    AppHeaderComponent,
    SearchComponent,
    WeaterListComponent,
    WeatherPreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    FormsModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
