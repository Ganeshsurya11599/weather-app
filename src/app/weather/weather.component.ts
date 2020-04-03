import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApixuService } from '../apixu.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  public weatherSearchForm: FormGroup;
  public weatherData: any;
  date=new Date();
  constructor( private formbuilder : FormBuilder,
                private apixuservice:ApixuService,
  ) { }

  ngOnInit() {
    this.weatherSearchForm = this.formbuilder.group({
      location:['']
    });
  }

  

  sendToAPIXU(formValues) {
    this.apixuservice.getWeather(formValues.location).subscribe(data => {
      this.weatherData = data;
      console.log(this.weatherData); 
    });    
    
}

}
