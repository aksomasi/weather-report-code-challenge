import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
/*

{
  path: '',
    children: [
  {
    path: '',
    loadChildren: () => import('./weather-report/weather-report.module').then(m => m.WeatherReportModule)
  },
]
}*/
const routes: Routes = [
    {
      path: '',
      loadChildren: () => import('./weather-report/weather-report.module').then(m => m.WeatherReportModule)
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
