import {fakeAsync, TestBed, tick} from '@angular/core/testing';

import {ReportService} from './report.service';
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientModule} from "@angular/common/http";
import {HttpClientTestingModule, HttpTestingController, TestRequest} from "@angular/common/http/testing";
import {TestDataForCities, TestDataForForCast} from "../../mocks/mock-report-service";
import {Cities, Weather} from "../constants/weather.constant";
import {Observable} from "rxjs";
import {WeatherReport} from "../modal/weather.modal";

describe('ReportService', () => {
  let service: ReportService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ReportService]

    });
    // Returns a service with the MockBackend so we can test with dummy responses
    service = TestBed.inject(ReportService);
    // Inject the http service and test controller for each test
    httpTestingController = TestBed.inject(HttpTestingController);

  });
  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  })
  it('should return currentWeatherReport', () => {
    spyOn(service, 'getCurrentCityWeather').and.returnValue(TestDataForCities[0])
    expect(service.getCurrentCityWeather()).toEqual(TestDataForCities[0]);
  })
  it(
    "should return getCityForecast",
    fakeAsync(() => {
      let response = TestDataForForCast;
      service.getCityForecast('Amsterdam');
      const city = 'Amsterdam';
      service.getCityForecast('Amsterdam').subscribe(data => {
        expect(data).toBe(TestDataForForCast);
      })
      const req = httpTestingController
        .expectOne(req => req.method === 'GET' && req.url === 'https://api.openweathermap.org/data/2.5/forecast?q=Amsterdam&appid=3d8b309701a13f65b660fa2c64cdc517');
      req.flush(response);
    })
  );
  it(
    "should return getCitiesList",
    fakeAsync(() => {
      let response = TestDataForCities;
      service.getCitiesList();
      const city = 'Amsterdam';
      service.getCitiesList().subscribe(data => {
        expect(data.length).toEqual(5);
      })
      let citiesApiReq: TestRequest[] = [];
      Cities.forEach(city => {
        const req = httpTestingController
          .expectOne(req => req.method === 'GET' && req.url === `${Weather.hostUrl}weather?q=${city}&appid=${Weather.apiKey}`);
        citiesApiReq.push(req)
      })
      citiesApiReq.forEach(val => {
        val.flush(response);
      })
    })
  );
});
