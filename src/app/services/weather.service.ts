import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient,public storageService:StorageService) { }
  CITIES_KEY = 'citiesDB'
  gCities=null;
   
    getWeather(locationKey:string) {
    console.log(locationKey);
    const url=`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=Xt9quC8eFzr0P2mjKBahltGe4xAOsQTw`
    return this.http.get(url).pipe(map(res=>{
      console.log('weathers',res)
      return res
    })
    )
}
 getCities(city:string) {
  
   const url=`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=0sgFtMO8drgDqItTU1KRdfqGV9iaLAsJ&q=${city}`
  //  const url=`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=mU9RQiBEpi3vf0gv6wdDMmzkYwKAqgUo&q=${city}`
  return this.http.get<{cities}>(url)
  .pipe(
    map(res => {
      console.log('res',res);
      return res
    })
  )

}
 ToggleLocToFavorits(key,weathers,sign){
  console.log('sign',sign);

  if(sign==='add'){
      if(this.gCities===null){
        this.gCities={}
      }
      this.gCities[key]=weathers
  }
  else{
      delete this.gCities[key]
      if(typeof this.gCities === 'object'){
        this.gCities=null;
      }
  }

  this._saveTostorage()

}
 _saveTostorage() {
  this.storageService.store(this.CITIES_KEY, this.gCities)

}



}
