import { Injectable } from '@angular/core';

//importing HttpClient to make requests
import {HttpClient, HttpErrorResponse} from '@angular/common/http';


//importing observable



@Injectable({
  providedIn: 'root'
})
export class HttpWorldService {

  public baseUrl='https://restcountries.eu/rest/v2/';
  constructor(public _http: HttpClient) { 
    console.log("Http Service constructor called");
  }

  public getRegions(currentRegion):any{

    let myResponse = this._http.get(this.baseUrl+"region/"+currentRegion); 
  //  console.log(myResponse);
    return myResponse;
  }

  public getCountries(): any{
    let myResponse = this._http.get(this.baseUrl+"all"); 
    //  console.log(myResponse);
      return myResponse;
  }

  public getCountry(countryName):any{
    let myResponse = this._http.get(this.baseUrl+"name/"+countryName);
    return myResponse;
  }

  public getCountryByLang(LangCode):any{
    let myResponse = this._http.get(this.baseUrl+"lang/"+LangCode);
    return myResponse;
  }

  public getCountryByCurr(currCode):any{
    let myResponse = this._http.get(this.baseUrl+"currency/"+currCode);
    return myResponse;
  }
}
