import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityReportComponent } from './city-report.component';
import {Observable, Observer} from "rxjs";
import {ReportService} from "../../services/report.service";
import {RouterTestingModule} from "@angular/router/testing";
import {WeatherReport} from "../../modal/weather.modal";
import {MockReportService, TestDataForCities, TestDataForForCast} from "../../../mocks/mock-report-service";

describe('CityReportComponent', () => {
  let component: CityReportComponent;
  let fixture: ComponentFixture<CityReportComponent>;
  let mockReportService: ReportService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ CityReportComponent ],
      providers: [
        { provide: ReportService, useClass: MockReportService },
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CityReportComponent);
    component = fixture.componentInstance;
    mockReportService = fixture.debugElement.injector.get(ReportService);
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should getCitiesList', () => {
    const spy = spyOn(mockReportService, 'getCitiesList');
    expect(component.cities).toBe(TestDataForCities);
  });

});
