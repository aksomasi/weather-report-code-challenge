import { Injectable } from '@angular/core';
import {HttpClient, HttpRequest} from "@angular/common/http";
import {Cities, Weather} from "../constants/weather.constant";
import {forkJoin, Observable} from "rxjs";
import {WeatherReport, WeatherReportByCity} from "../modal/weather.modal";

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  private _currentCityWeather: WeatherReport | undefined;

  constructor(private http: HttpClient) { }


  getCitiesList():Observable<WeatherReport[]>{
    let citiesApiList: Observable<WeatherReport>[] = [];
    Cities.forEach(city=>{
      citiesApiList.push(this.http.get<WeatherReport>(`${Weather.hostUrl}weather?q=${city}&appid=${Weather.apiKey}`))
    })
    return forkJoin(citiesApiList);
  }

  getCityForecast(city:string):Observable<WeatherReportByCity>{
    return this.http.get<WeatherReportByCity>(`${Weather.hostUrl}forecast?q=${city}&appid=${Weather.apiKey}`)
  }

  getCurrentCityWeather(): WeatherReport {
    return <WeatherReport>this._currentCityWeather;
  }

  setCurrentCityWeather(value: WeatherReport) {
    this._currentCityWeather = value;
  }
}
