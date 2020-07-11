import { Component, OnInit } from '@angular/core';
import { ConfigService } from "../../../config.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
@Component({
  selector: 'app-search-user-result',
  templateUrl: './search-user-result.page.html',
  styleUrls: ['./search-user-result.page.scss'],
})
export class SearchUserResultPage implements OnInit {
  searchResults: any;
  itrs: any;
  notfound:boolean =false
  sub: any;
  uid: string;
  gender: string;
  meet: string;
  activity: string;
  Postcode: any;
  isLoading:boolean = true
  constructor(private ConfigService: ConfigService,  private _Activatedroute: ActivatedRoute, private _location: Location,) { }

  ngOnInit() {
    this.itrs = JSON.parse(localStorage.getItem("currentUser"));

    this.sub = this._Activatedroute.paramMap.subscribe((params) => {
      this.gender = params.get("gender");
      this.meet = params.get("meet")
      this.activity = params.get("activity")
      this.Postcode = params.get("Postcode")
    });



    this.ConfigService.getSearchUrl(this.Postcode,this.gender, this.meet, this.activity).subscribe((elements) => {
      this.searchResults = elements;
      this.isLoading=false
      if (this.searchResults.length == 0) {
        this.notfound = true;
        console.log("oops no result Found");
      }
      console.log(elements);
    });
  }
  backClicked() {
    this._location.back();
  }
}
