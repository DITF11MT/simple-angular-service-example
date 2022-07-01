import { Component } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cards-and-stuff';
  cityName: any;

  constructor(public weatherService: WeatherService) { }

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.weatherService.getCityData(this.cityName).subscribe(res => {
      this.weatherService.weatherData = res;
    })
  }

}
