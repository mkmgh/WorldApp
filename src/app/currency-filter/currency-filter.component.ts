import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpWorldService } from '../http-world.service';
import { Router } from '@angular/router';

import {Location} from '@angular/common';


@Component({
  selector: 'app-currency-filter',
  templateUrl: './currency-filter.component.html',
  styleUrls: ['./currency-filter.component.css'],
  providers:[Location]
})
export class CurrencyFilterComponent implements OnInit {

  p: number = 1;
  public filterCountryName:any ={ name: ''};
  public filterCapitalName:any ={ capital: ''};

  public countrysDataByCurr:any[]=[];

  constructor(public httpWorldService: HttpWorldService, public _route: ActivatedRoute, public _router: Router, public location:Location) { }

  ngOnInit() {


    this._route.params
    .forEach(params => {
      console.log("Currency-filter ngOnInit called");
      let currCode = this._route.snapshot.paramMap.get('currCode');
      console.log(currCode);
  
      this.httpWorldService.getCountryByCurr(currCode).subscribe(
  
        data=>{
          this.countrysDataByCurr=data;
          console.log(this.countrysDataByCurr);
        },
        error=>{
          console.log("some error occured");
          console.log(error.errorMessage);
        }
  
      )
      });
  }

  public goBackToPreviousPage():any{
    this.location.back();
  }

}
