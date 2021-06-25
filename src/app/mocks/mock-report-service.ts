import {Observable, Observer} from "rxjs";
import {WeatherReport, WeatherReportByCity} from "../weather-report/modal/weather.modal";

export class MockReportService {
  public getCitiesList(): Observable<any[]> {
    return new Observable((observer: Observer<any>) => {
      observer.next(TestDataForCities);
    });
  }
  public getCityForecast(city: string): Observable<any[]> {
    return new Observable((observer: Observer<any>) => {
      observer.next(TestDataForForCast);
    });
  }

  getCurrentCityWeather(): WeatherReport {
    return TestDataForCities[0];
  }

}
export const TestDataForCities = [{"coord":{"lon":-0.1257,"lat":51.5085},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"base":"stations","main":{"temp":292.58,"feels_like":292.41,"temp_min":291.01,"temp_max":294.26,"pressure":1021,"humidity":70},"visibility":10000,"wind":{"speed":0.45,"deg":268,"gust":2.68},"clouds":{"all":75},"dt":1624554563,"sys":{"type":2,"id":2019646,"country":"GB","sunrise":1624506237,"sunset":1624566109},"timezone":3600,"id":2643743,"name":"London","cod":200}];

export const TestDataForForCast: WeatherReportByCity = {"cod":"200","message":0,"cnt":40,"list":[{"dt":1624568400,"main":{"temp":287.76,"feels_like":287.08,"temp_min":284.61,"temp_max":287.76,"pressure":1019,"sea_level":1019,"grnd_level":1019,"humidity":69,"temp_kf":3.15},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":3},"wind":{"speed":1.51,"deg":286,"gust":1.72},"visibility":10000,"pop":0,"sys":{"pod":"n"},"rain":{"3h":0.49},"dt_txt":"2021-06-24 21:00:00"}],"city":{"id":2759794,"name":"Amsterdam","coord":{"lat":52.374,"lon":4.8897},"country":"NL","population":2122311,"timezone":7200,"sunrise":1624504734,"sunset":1624565204}};
