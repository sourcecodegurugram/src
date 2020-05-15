import { Component, OnInit, NgZone } from '@angular/core';
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
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {
  hide: boolean = false;
  popup:boolean =false;
  post: any;
  userLocation;
  userCity;
  lat;
  lng;
  location;
  latLngResult;
  userLocationFromLatLng;
  address: any;
  sub: any;
  lngs: string;
  lats: string;
  postal: (error: any) => void;
  help: any;
  isLoading:boolean=false;
  addressData;
  postcode;
  constructor(  private ConfigService: ConfigService,
    public geolocation: Geolocation,
    private platform: Platform,
    private nativeGeocoder: NativeGeocoder,
    public zone: NgZone,
    private _Activatedroute: ActivatedRoute,
    private routes: Router) { }

  ngOnInit() {
    
  }


reverseGeoLookup() {
  // This is where the code for reverse GEO lookup will come
  this.ConfigService.getLocation(this.lat, this.lng).subscribe((data) => {
    this.addressData = data;
    this.address = this.addressData.results[0].address_components;
    for (var i = 0; i < this.address.length; i++) {
      if (this.address[i].types.includes("postal_code")) {
        this.postcode = this.address[i].long_name;
      }
    }

    this.routes.navigate(["search-result/", this.postcode]);
  });
}

showFormPage() {
  // We will hide this page at starting. If lat long fails, we will unhide it so that people can fill information
  this.hide = true;
}


popOpen()
{
 this.isLoading =true
  this.geolocation
    .getCurrentPosition()
    .then((resp) => {
      this.lat = resp.coords.latitude;
      this.lng = resp.coords.longitude;
console.log(this.lat)
console.log(this.lng)
      // If we get lat long then we will pull Address details from reverse geo lookup
      if (this.lat && this.lng) {
       
        this.reverseGeoLookup();
      } else {
        this.showFormPage();
      }
    }) // If we do not get lat long, we will present page with form for address and post code
    .catch((error) => {
      this.isLoading =false
      this.popup=true;
      this.showFormPage();
    });
}
closepop()
{
  this.popup=false;
}
}
