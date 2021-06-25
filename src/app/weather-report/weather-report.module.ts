import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherReportComponent } from './weather-report/weather-report.component';
import { CityReportComponent } from './components/city-report/city-report.component';
import {RouterModule, Routes} from "@angular/router";
import { WeatherByCityComponent } from './components/weather-by-city/weather-by-city.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {ReportService} from "./services/report.service";
import {TemperatureConverterPipe} from "./util/temperature-converter.pipe";

const routes: Routes = [
  {
    path: '',
    component: WeatherReportComponent,
    children: [
      { path: '', redirectTo: 'weather', pathMatch: 'full' },
      { path: 'weather', component: CityReportComponent },
      { path: 'weatherByCity/:city', component: WeatherByCityComponent },
      { path: '**', redirectTo: 'weather' }
    ]
  }
];

@NgModule({
  declarations: [
    WeatherReportComponent,
    CityReportComponent,
    TemperatureConverterPipe,
    WeatherByCityComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
  providers: [ReportService]
})
export class WeatherReportModule { }
