import { Component, Input, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'weater-list',
  templateUrl: './weater-list.component.html',
  styleUrls: ['./weater-list.component.scss']
})
export class WeaterListComponent implements OnInit {
  @Input () cityName:string 
  @Input () weathers:Array<object>
  cities=null;
  loctions

  constructor(public storageService:StorageService,public weatherService:WeatherService) { }

  ngOnInit(): void {
    this.cities = this.storageService.load('citiesDB')
    console.log('cities',this.cities);
   
  }
   onToggleIcon=async(cityName,city,sign)=>{
     console.log(cityName,city,sign);
     
    await this.weatherService.ToggleLocToFavorits(cityName,city,sign)
    this.cities = this.storageService.load('citiesDB')
  
}

}
