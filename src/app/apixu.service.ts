import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor( private http:HttpClient) { }

  getWeather(location){
    return this.http.get(
        'http://api.weatherstack.com/current?access_key=0e49183536e23b4b2b2e287ef3112440&query=' + location
    );
}
}
