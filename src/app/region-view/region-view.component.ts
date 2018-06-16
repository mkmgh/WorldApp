import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpWorldService } from '../http-world.service';
import { ActivatedRoute, Router } from '@angular/router';

import {Location} from '@angular/common';

@Component({
  selector: 'app-region-view',
  templateUrl: './region-view.component.html',
  styleUrls: ['./region-view.component.css'],
  providers:[Location]
})
export class RegionViewComponent implements OnInit, OnDestroy {


  p: number = 1;
  public filterCountryName:any ={ name: ''};
  public filterCapitalName:any ={ capital: ''};


  public currentRegion:any[]=[];

  constructor(public httpWorldService: HttpWorldService, public _route: ActivatedRoute, public _router: Router, public location:Location) { }

  ngOnInit() {

    console.log("Resion-view ngOnInit called");
    let regionName = this._route.snapshot.paramMap.get('regionName');
    console.log(regionName);

    this.httpWorldService.getRegions(regionName).subscribe(

      data=>{
        this.currentRegion=data;
        console.log(this.currentRegion);
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
  

  ngOnDestroy(){

  }

}
