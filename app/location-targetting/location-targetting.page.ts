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
  constructor(private ConfigService: ConfigService,
    public geolocation: Geolocation,
    private platform: Platform,
    private nativeGeocoder: NativeGeocoder,
    public zone: NgZone,
    private _Activatedroute: ActivatedRoute,) {
 
      
     }
   
  ngOnInit() {
   
    this.geolocation.getCurrentPosition().then((resp) => {
      this.lat=resp.coords.latitude
      console.log(this.lat)
    this.lng=resp.coords.longitude;
    this.ConfigService.getLocation(this.lat,this.lng).subscribe((elements)=>
    console.log(elements)
  
  )
     console.log(this.lng)
     }).catch((error) => {
       console.log('Error getting location', error);
     });
    //  this.sub = this._Activatedroute.paramMap.subscribe((params) => {
    //   this.lats = params.get("lat");
    //   this.lngs = params.get("lng");
    //   console.log(this.lats)
    //   console.log(this.lngs)
    // });

  
  }

  buttonClick() {
    this.ConfigService.getPostal(this.post).subscribe((elements) => {
      console.log(elements);
    });
    console.log(this.post);
  }

}
