import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {RouterModule, Routes} from '@angular/router'; 

//To use ngModel importing the required files.
import { FormsModule } from '@angular/forms';

//to get tabs for country-view
import { TabsModule } from 'ngx-bootstrap';

import {GoTopButtonModule} from 'ng2-go-top-button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AngularFontAwesomeModule } from 'angular-font-awesome';


import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpWorldService } from './http-world.service';
import { RegionViewComponent } from './region-view/region-view.component';
import { CountryViewComponent } from './country-view/country-view.component';
import { CountriesComponent } from './countries/countries.component';
import { LanguageFilterComponent } from './language-filter/language-filter.component';
import { CurrencyFilterComponent } from './currency-filter/currency-filter.component';

//import files for filter pipe
import { FilterPipeModule } from 'ngx-filter-pipe';

//importing ngx-pagination to paginate API response
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegionViewComponent,
    CountryViewComponent,
    CountriesComponent,
    LanguageFilterComponent,
    CurrencyFilterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FilterPipeModule,
    FormsModule,
    NgxPaginationModule,
    GoTopButtonModule, 
    BrowserAnimationsModule,
    AngularFontAwesomeModule,
    TabsModule.forRoot(),
    RouterModule.forRoot([
      {path:'', redirectTo:'home', pathMatch:'full'},
      {path:'home',component:HomeComponent},
      {path:'region/:regionName', component:RegionViewComponent},
      {path:'countries', component: CountriesComponent},
      {path:'country/:countryName', component:CountryViewComponent},
      {path:'lang/:langCode', component:LanguageFilterComponent},
      {path:'currency/:currCode', component:CurrencyFilterComponent}

      /*
      {path:'books', component:BooksComponent},
      {path:'books/:bookNumber', component:BookViewComponent},
      {path:'houses', component:HousesComponent},
      {path:'houses/:houseNumber', component:HouseViewComponent},
      {path:'characters', component:CharactersComponent},
      {path:'characters/:characterNumber' , component:CharacterViewComponent},
    */
    ])
    
  ],
  providers: [HttpWorldService],
  bootstrap: [AppComponent]
})
export class AppModule { }
