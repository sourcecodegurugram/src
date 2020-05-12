import { Component, OnInit,NgZone } from "@angular/core";
import { ConfigService } from "../config.service";
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Platform } from '@ionic/angular';
import { NativeGeocoder, NativeGeocoderOptions, NativeGeocoderResult } from '@ionic-native/native-geocoder/ngx';
import { ConditionalExpr } from '@angular/compiler';
import { Router, ActivatedRoute } from "@angular/router";
import { element } from 'protractor';
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
  isLoading:boolean=true;
  constructor(private ConfigService: ConfigService,
    public geolocation: Geolocation,
    private platform: Platform,
    private nativeGeocoder: NativeGeocoder,
    public zone: NgZone,
    private _Activatedroute: ActivatedRoute,
    private routes :Router) {
 
      
     }
   
  ngOnInit() {
   
    this.geolocation.getCurrentPosition().then((resp) => {
      this.lat=resp.coords.latitude;
    this.lng=resp.coords.longitude;
     this.ConfigService.getLocation(this.lat,this.lng).subscribe((data)=>
     this.onload(data.results[0].address_components[8].long_name))
     }).catch((error) => {
       this.isLoading=false
       console.log('Error getting location', error);
     });

  }

  buttonClick() {
    this.ConfigService.getPostal(this.post).subscribe((elements) => {
      console.log(elements);
    });
  }
onload(postcode)
{
  this.ConfigService.getPostal(postcode).subscribe((elements) => {
    console.log(postcode); 
    this.routes.navigate(["search-result/",postcode])
  });
 
}
}
