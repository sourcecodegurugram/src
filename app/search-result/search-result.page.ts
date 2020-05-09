import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import {ConfigService} from '../config.service'
import { element } from 'protractor';
@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.page.html',
  styleUrls: ['./search-result.page.scss'],
})
export class SearchResultPage implements OnInit {
  sub: any;
  post:any;
  postalcode: Object;
  constructor(private _Activatedroute:ActivatedRoute,
    private ConfigService:ConfigService) { }

  ngOnInit() {
    this.sub = this._Activatedroute.paramMap.subscribe((params) => {
      this.post = params.get("post");
     console.log(this.post)
    });

    

    this.ConfigService.getPostal(this.post)
    .subscribe(elements=> {
      this.postalcode = elements
      console.log(this.postalcode)
    });
   
   }
  

}
