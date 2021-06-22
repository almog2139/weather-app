import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { City } from 'src/app/model/city.model';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'weather-app',
  templateUrl: './weather-app.component.html',
  styleUrls: ['./weather-app.component.scss']
})
export class WeatherAppComponent implements OnInit {

  constructor(public WeatherService:WeatherService) { }
  cities:any=[]
  weathers:any=null
  subscription: Subscription
  weaterSubscription: Subscription
  city:string
  ngOnInit(): void {
  }
  async onGetCities(cityName):Promise<void>{
   this.subscription=(await this.WeatherService.getCities(cityName)).subscribe(data=>this.cities=data);  
  }
  
   async onGetWeather(city):Promise<void>{
     this.city=city.LocalizedName
    this.weaterSubscription=(await this.WeatherService.getWeather(city.Key)).subscribe(data=>this.weathers=data);
    this.cities=[]

  }
  ngOnDestroy() {
      this.subscription.unsubscribe()
      this.weaterSubscription.unsubscribe()
    }
    
  

}
