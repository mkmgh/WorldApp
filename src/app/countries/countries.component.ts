import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpWorldService } from '../http-world.service';
import { ActivatedRoute } from '@angular/router';

import {Location} from '@angular/common';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css'],
  providers: [Location]
})
export class CountriesComponent implements OnInit {

  p: number = 1;
  public filterCountryName:any ={ name: ''};
  public filterCapitalName:any ={ capital: ''};

  public countriesData:any[]=[];
  
  constructor(public httpWorldService: HttpWorldService, public _route: ActivatedRoute, public _router: Router, public location:Location) { }

  ngOnInit() {


    console.log("Countries ngOnInit called");

    this.httpWorldService.getCountries().subscribe(

      data=>{
        this.countriesData=data;
        console.log(this.countriesData);
      },
      error=>{
        console.log("some error occured");
        console.log(error.errorMessage);
      }

    )
  }

  public goBackToPreviousPage():any{
    this.location.back();
  }
  


}
