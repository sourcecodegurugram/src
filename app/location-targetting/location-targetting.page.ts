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
declare var google;
@Component({
  selector: "app-location-targetting",
  templateUrl: "./location-targetting.page.html",
  styleUrls: ["./location-targetting.page.scss"],
})
export class LocationTargettingPage implements OnInit {
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
  addreess: any;
  help: any;
  isLoading: boolean = true;
  addressData;
  postcode;
  constructor(
    private ConfigService: ConfigService,
    public geolocation: Geolocation,
    private platform: Platform,
    private nativeGeocoder: NativeGeocoder,
    public zone: NgZone,
    private _Activatedroute: ActivatedRoute,
    private routes: Router
  ) {}

  ngOnInit() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.lat = resp.coords.latitude;
      this.lng = resp.coords.longitude;

      // If we get lat long then we will pull Address details from reverse geo lookup
      this.reverseGeoLookup();

      // If we do not get lat long, we will present page with form for address and post code
      this.showFormPage();
    });
  }

  reverseGeoLookup() {
    // This is where the code for reverse GEO lookup will come
    this.ConfigService.getLocation(this.lat, this.lng).subscribe((data) => {
      console.log(data);
      this.addressData = data;
      this.postcode = this.addressData.results[0].address_components[7].long_name;
      this.routes.navigate(["search-result/", this.postcode]);
    });
  }

  showFormPage() {
    // We will hide this page at starting. If lat long fails, we will unhide it so that people can fill information
  }

  buttonClick() {
    this.ConfigService.getPostal(this.post).subscribe((elements) => {});
  }
}
