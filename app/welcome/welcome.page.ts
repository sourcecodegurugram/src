import { Component, OnInit, NgZone } from "@angular/core";
import { ConfigService } from "../config.service";
import { Geolocation } from "@ionic-native/geolocation/ngx";
import { Platform } from "@ionic/angular";
import {
  NativeGeocoder,
  NativeGeocoderOptions,
  NativeGeocoderResult,
} from "@ionic-native/native-geocoder/ngx";
import { ConditionalExpr } from "@angular/compiler";
import { Router, ActivatedRoute } from "@angular/router";
import { element } from "protractor";
import { MatTabChangeEvent } from "@angular/material/tabs";
import { FormControl } from "@angular/forms";
import { Location } from "@angular/common";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.page.html",
  styleUrls: ["./welcome.page.scss"],
})
export class WelcomePage implements OnInit {
  isLoading: boolean = false;
  hide: boolean = false;
  popup: boolean = false;
  post: any;
  userLocation;
  userCity;
  lat;
  lng;

  latLngResult;
  userLocationFromLatLng;
  address: any;
  sub: any;
  lngs: string;
  lats: string;
  postal: (error: any) => void;
  help: any;

  addressData;
  postcode;
  signup: boolean = false;
  maxNumberOfTabs = 2;
  selectedIndex = 0;
  activit = new FormControl();
  activities: string[] = [
    "yoga",
    "playdates (parents and children)",
    "happy hour/cocktails/beers",
    "sightseeing",
  ];
  Result: boolean = false;
  searchResponse = [];
  pageIndex = 0;
  currPage = [];
  searchresult: boolean = false;
  userLogged: any;
  scope: any;

  constructor(
    private ConfigService: ConfigService,
    public geolocation: Geolocation,
    private platform: Platform,
    private nativeGeocoder: NativeGeocoder,
    public zone: NgZone,
    private _Activatedroute: ActivatedRoute,
    private routes: Router,
    private locate: Location,
    private http: HttpClient
  ) {}

  ngOnInit() {}

  reverseGeoLookup() {
    // This is where the code for reverse GEO lookup will come
    this.ConfigService.getLocation(this.lat, this.lng).subscribe((data) => {
      this.addressData = data;
      this.address = this.addressData.results[0].address_components;
      for (var i = 0; i < this.address.length; i++) {
        if (this.address[i].types.includes("postal_code")) {
          this.postcode = this.address[i].long_name;
        }
        this.isLoading = false;
      }
      this.searchresult = true;
      this.getSearchData();
      // this.routes.navigate(["search-result/", this.postcode]);
    });
  }

  postcodeManuallyEnter() {
    this.postcode = this.post;
    this.searchresult = true;
    this.getSearchData();
  }

  showFormPage() {
    // We will hide this page at starting. If lat long fails, we will unhide it so that people can fill information
    this.hide = true;
  }

  popOpen() {
    this.isLoading = true;
    this.geolocation
      .getCurrentPosition()
      .then((resp) => {
        this.lat = resp.coords.latitude;
        this.lng = resp.coords.longitude;
        console.log(this.lat);
        console.log(this.lng);
        // If we get lat long then we will pull Address details from reverse geo lookup
        if (this.lat && this.lng) {
          this.reverseGeoLookup();
        } else {
          this.showFormPage();
        }
      }) // If we do not get lat long, we will present page with form for address and post code
      .catch((error) => {
        this.isLoading = false;
      });
  }
  closepop() {
    this.popup = false;
  }
  signups() {
    this.signup = true;
  }
  public tabChanged(tabChangeEvent: MatTabChangeEvent): void {
    this.selectedIndex = tabChangeEvent.index;
  }
  public nextStep() {
    this.selectedIndex += 1;
  }

  public previousStep() {
    this.selectedIndex -= 1;
  }
  getSearchData() {
    this.ConfigService.getPostal(this.postcode, this.pageIndex).subscribe(
      (elements) => {
        this.currPage = Object.keys(elements).map((i) => elements[i]);
        console.log(this.currPage);
        this.searchResponse = this.searchResponse.concat(this.currPage);
        console.log(this.searchResponse);
      }
    );
    this.pageIndex++;
  }
  closesearchpop() {
    this.searchresult = false;
  }
}
