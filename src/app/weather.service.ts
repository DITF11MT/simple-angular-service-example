import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  apiUrl: string = '';
  private _weatherData: any;

  constructor(
    private http: HttpClient
  ) { }

  getCityData(cityName = 'Amman') {
    return this.http.get(`${environment.openWeatherAPI}${cityName}&appid=${environment.apiKey}`);
  }

  get weatherData() {
    return this._weatherData;
  }

  set weatherData(data) {
    this._weatherData = data;
  }
}
