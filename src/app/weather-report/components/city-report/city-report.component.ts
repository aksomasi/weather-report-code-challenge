import { Component, OnInit } from '@angular/core';
import {ReportService} from "../../services/report.service";
import {WeatherReport} from "../../modal/weather.modal";
import {Weather} from "../../constants/weather.constant";
import {Router} from "@angular/router";

@Component({
  selector: 'app-city-report',
  templateUrl: './city-report.component.html',
  styleUrls: ['./city-report.component.scss']
})
export class CityReportComponent implements OnInit {

  cities : WeatherReport[] = [];

  constructor(private reportService: ReportService, private router: Router) {

  }

  buildIconUrl(icon: string){
    return `${Weather.iconUrl}${icon}.png`
  }

  navigateToCityReport(city: WeatherReport){
    this.reportService.setCurrentCityWeather(city);
    this.router.navigateByUrl('weatherByCity/'+city.name);
  }
  ngOnInit(): void {
    this.reportService.getCitiesList().subscribe(cities=>{
      this.cities = cities;
    })
  }

}
