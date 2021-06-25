import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ReportService} from "../../services/report.service";
import {List, WeatherReport, WeatherReportByCity} from "../../modal/weather.modal";
import {Weather} from "../../constants/weather.constant";

@Component({
  selector: 'app-weather-by-city',
  templateUrl: './weather-by-city.component.html',
  styleUrls: ['./weather-by-city.component.scss']
})
export class WeatherByCityComponent implements OnInit {
  city = '';
  weatherReport: WeatherReportByCity = {} as WeatherReportByCity;
  currentCityWeather: WeatherReport  = {} as WeatherReport;
  forecastList: List[] = [];
  constructor(private route: ActivatedRoute,
              private reportService: ReportService) {
    this.currentCityWeather = this.reportService.getCurrentCityWeather();
    console.log(this.currentCityWeather)
    this.route
      .paramMap
      .subscribe((params: any) => {
        this.city = params.params.city
        this.reportService.getCityForecast(this.city).subscribe(report=>{
          this.weatherReport = report;
         this.forecastList = this.weatherReport.list.filter(report=> (report.dt_txt).includes('09:00:00'));
          console.log(this.forecastList);
        })
      });
  }

  ngOnInit(): void {
  }
  buildIconUrl(icon: string){
    return `${Weather.iconUrl}${icon}.png`
  }
}
