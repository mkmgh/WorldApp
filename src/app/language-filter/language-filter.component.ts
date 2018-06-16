import { Component, OnInit } from '@angular/core';
import { HttpWorldService } from '../http-world.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


import {Location} from '@angular/common';


@Component({
  selector: 'app-language-filter',
  templateUrl: './language-filter.component.html',
  styleUrls: ['./language-filter.component.css'],
  providers:[Location]
})
export class LanguageFilterComponent implements OnInit {

  p: number = 1;
  public filterCountryName:any ={ name: ''};
  public filterCapitalName:any ={ capital: ''};
  public countrysDataByLang:any[]=[];

  constructor(public httpWorldService: HttpWorldService, public _route: ActivatedRoute, public _router: Router, public location:Location) {
   }

  ngOnInit() {


    this._route.params
    .forEach(params => {
      console.log("Language-filter ngOnInit called");
      let langCode = this._route.snapshot.paramMap.get('langCode');
      console.log(langCode);
  
      this.httpWorldService.getCountryByLang(langCode).subscribe(
  
        data=>{
          this.countrysDataByLang=data;
          console.log(this.countrysDataByLang);
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