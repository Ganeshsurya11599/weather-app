import { Injectable, ErrorHandler } from '@angular/core';
import { HttpClient } from '@angular/common/http' 
import { map } from 'rxjs/operators';
import axios, { AxiosInstance } from 'axios';

@Injectable({
  providedIn: 'root'
})

export class ApixuService {
baseURl="http://api.weatherstack.com/";  
data:any;
 axiosClient:AxiosInstance;

  constructor( private http:HttpClient) { }

  getWeather(location){
    var key = "0e49183536e23b4b2b2e287ef3112440&query="; 
    var url = "current?access_key=";
    return this.http.get(this.baseURl + url + key + location).pipe(map(res=>this.data=res));

} 

}
