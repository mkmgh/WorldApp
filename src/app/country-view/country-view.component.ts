import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpWorldService } from '../http-world.service';
import { ActivatedRoute } from '@angular/router';

import {Location} from '@angular/common';


@Component({
  selector: 'app-country-view',
  templateUrl: './country-view.component.html',
  styleUrls: ['./country-view.component.css'],
  providers: [Location]
})
export class CountryViewComponent implements OnInit {

  public currentCountry:any[]=[];

  public defaultValue: string = "None";
  
  constructor(public httpWorldService: HttpWorldService, public _route: ActivatedRoute, public _router: Router, public location:Location) { }

  ngOnInit() {

    console.log("Country-view ngOnInit called");
    let countryName = this._route.snapshot.paramMap.get('countryName');
    console.log(countryName);

    this.httpWorldService.getCountry(countryName).subscribe(

      data=>{
        this.currentCountry=data;
        console.log(this.currentCountry);
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
