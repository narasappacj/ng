import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';  
import { AppComponent } from './app.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { NewCmpComponent } from './new-cmp/new-cmp.component';
import { Test } from './test-component/Test';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import {NgxPaginationModule} from 'ngx-pagination'
import { RouterModule, Routes } from '@angular/router';
import { CountryListComponent } from './country-list/country-list.component';
import { CountrList } from './country-list/MyServices';
import { FormsModule, ReactiveFormsModule, NgModel } from '@angular/forms';
import { CascadeDemoComponent } from './cascade-demo/cascade-demo.component';
import { StateDist } from './cascade-demo/State_Dist';
import { MandiPriceComponent } from './mandi-price/mandi-price.component';
import { mandiprice } from './mandi-price/pricelist';
import { UniquePipe } from './mandi-price/uniquepipe';
import { PricebymarketComponent } from './pricebymarket/pricebymarket.component';
import { TwoWayBindingTestComponent } from './two-way-binding-test/two-way-binding-test.component';
import { TimeZoneComponent } from './time-zone/time-zone.component';
import { Timezoneinfo } from './time-zone/TimeZoneClass';
import {DataTableModule} from "angular-6-datatable";
import { FilterPipe } from './pipes/filterpipe';
import { AirPollotionComponent } from './air-pollotion/air-pollotion.component';
import { air_quality_service } from './air-pollotion/AirQuality_services';
import { AirQualityComponent } from './air-quality/air-quality.component';


const appRoutes: Routes = [
  { path: 'first', component:TestComponentComponent },
  { path: 'second',      component: NewCmpComponent },
  { path: 'Country',      component: CountryListComponent },
  { path: 'country',      component: CountryListComponent },
  { path: 'state',      component:CascadeDemoComponent },
  { path: 'mandi',      component:MandiPriceComponent },
  { path: 'price',      component:PricebymarketComponent },
  { path: 'twoway',      component:TwoWayBindingTestComponent },
  { path: 'timezone',      component:TimeZoneComponent },
  { path: 'air',      component:AirPollotionComponent },
  { path: 'AirQuality',      component:AirQualityComponent },
  /* {
    path: 'heroes',
    component: TestComponentComponent,
    data: { title: 'Heroes List' }
  }, */
  { path: '',
    redirectTo: '/first',
    pathMatch: 'full'
  }
];


@NgModule({
  declarations: [
    AppComponent,
    TestComponentComponent,
    NewCmpComponent,
    CountryListComponent,
    CascadeDemoComponent,
    MandiPriceComponent,
    UniquePipe,
    PricebymarketComponent,
    TwoWayBindingTestComponent,
    TimeZoneComponent,
    FilterPipe,
    AirPollotionComponent,
    AirQualityComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,  
    JsonpModule,
    Ng2SearchPipeModule, //including ino imports
    Ng2OrderModule,
    NgxPaginationModule,
    DataTableModule
    

  ],
  exports:[FilterPipe],
  providers: [Test,CountrList,StateDist,mandiprice,Timezoneinfo,air_quality_service],
  bootstrap: [AppComponent]
})
export class AppModule { }
