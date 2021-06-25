import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherByCityComponent } from './weather-by-city.component';
import {Observable, Observer} from "rxjs";
import { of } from 'rxjs';
import {ReportService} from "../../services/report.service";
import {MockReportService, TestDataForCities, TestDataForForCast} from "../../../mocks/mock-report-service";
import {RouterTestingModule} from "@angular/router/testing";
describe('WeatherByCityComponent', () => {
  let component: WeatherByCityComponent;
  let fixture: ComponentFixture<WeatherByCityComponent>;
  let mockReportService: ReportService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ WeatherByCityComponent ],
      providers: [
        { provide: ReportService, useClass: MockReportService },
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherByCityComponent);
    component = fixture.componentInstance;
    mockReportService = fixture.debugElement.injector.get(ReportService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should getCityForecastReport', () => {
    const spy = spyOn(mockReportService, 'getCityForecast');
    expect(component.weatherReport).toBe(TestDataForForCast);
  });
  it('should getCityForecastList', () => {
    const spy = spyOn(mockReportService, 'getCityForecast');
    const  forecastList = TestDataForForCast.list.filter(report=> (report.dt_txt).includes('09:00:00'));
    expect(component.forecastList).toEqual(forecastList);
  });
});
