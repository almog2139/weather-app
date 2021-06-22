import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { WeatherAppComponent } from './pages/weather-app/weather-app.component';

const routes: Routes = [
  { path: 'Home', component: WeatherAppComponent },
  { path: 'Favorits', component: FavoritesComponent },
  // { path: '', component: WeatherAppComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
