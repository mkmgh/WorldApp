import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpWorldService } from '../http-world.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  public allRegions;

  constructor(public httpWorldService: HttpWorldService) { }

  ngOnInit() {

    console.log("home component OnInit called");
    this.allRegions= this.httpWorldService.getRegions('europe').subscribe(
      data=>{
        this.allRegions=data;
        console.log(this.allRegions);
      },
      error =>{
        console.log("some error occured");
        console.log(error.errorMessage);
      }
    );


  }

  ngOnDestroy(){

  }

}


