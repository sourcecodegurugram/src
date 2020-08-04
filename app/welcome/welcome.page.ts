import { Component, OnInit, NgZone, HostListener } from "@angular/core";
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
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { Diagnostic } from '@ionic-native/diagnostic/ngx';
import { EmailComposer } from '@ionic-native/email-composer/ngx';

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
  mySubscription: any;
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
  currPage ;
  searchresult: boolean = false;
  userLogged: any;
  scope: any;
  siginUser: any;
  isLoggedIn: boolean = false;
  notEntered : boolean = false
  callFalse: any;
  noResult: boolean = false

  
  constructor(
    private ConfigService: ConfigService,
    public geolocation: Geolocation,
    private platform: Platform,
    private nativeGeocoder: NativeGeocoder,
    public zone: NgZone,
    private _Activatedroute: ActivatedRoute,
    private routes: Router,
    private locate: Location,
    private http: HttpClient,
    private splashScreen: SplashScreen ,
    public Diagnostic:Diagnostic,
    private emailComposer:EmailComposer,
  ) { }

  ngOnInit() {
    this.siginUser = JSON.parse(localStorage.getItem("currentUser"));
    this.splashScreen.show();
    this.isLoading = true
    if (this.siginUser != null) {
      console.log(this.siginUser.user.field_already_declared.und)  
      if(this.siginUser.user.field_already_declared.length == 0)
      {
        this.notEntered = true
        this.isLoggedIn = true
        this.isLoading = false
        this.routes.navigate(["/topHobbies"]);
      }
      if(this.siginUser.user.field_already_declared.und.length == 1)
      {
        this.notEntered = false
        this.isLoggedIn = false
        this.isLoading = false 
      }
     
    }
    else {
      this.isLoggedIn = false
      this.isLoading = false
    }

   
    this.routes.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
  
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
        this.isLoading = false;
      }
      
      this.getSearchData();
      
    });
  }

  postcodeManuallyEnter(post) {
    this.postcode = post;
    console.log(this.postcode)
    this.getSearchData();
  }

  showFormPage() {

    // We will hide this page at starting. If lat long fails, we will unhide it so that people can fill information
    let successCallback = (isAvailable) => { 
      console.log(isAvailable)
      if(isAvailable == 'false')
      {
        this.hide = true;
      }
       }
    let errorCallback = (e) => console.error(e);
    this.Diagnostic.isGpsLocationEnabled().then(successCallback).catch(errorCallback);

      

    
    this.hide = true;



  }

  popOpen() {
    let successCallback = (isAvailable) => { 
      console.log(isAvailable)
      if(isAvailable == false)
      {
        this.hide = true;
        this.isLoading = false
      }
       }
    let errorCallback = (e) => console.error(e);
    this.Diagnostic.isGpsLocationEnabled().then(successCallback).catch(errorCallback);
    this.isLoading = true;
    this.geolocation
      .getCurrentPosition()
      .then((resp) => {
        this.lat = resp.coords.latitude;
        this.lng = resp.coords.longitude;
        // If we get lat long then we will pull Address details from reverse geo lookup
        if (this.lat && this.lng) {
          this.reverseGeoLookup()
        }
        else {
          this.showFormPage();
        }
      }) // If we do not get lat long, we will present page with form for address and post code
      .catch((error) => {
        this.isLoading = false;

        this.showFormPage();
      });
  }
  closepop() {
    this.hide = false;
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
    this.currPage = []
   
   
    this.ConfigService.getPostal(this.postcode, this.pageIndex).subscribe(
      (elements) => {
        this.currPage = Object.keys(elements).map((i) => elements[i]);
        if(this.currPage.length > 0)
        {      
          this.searchresult = true;
          this.searchResponse = this.searchResponse.concat(this.currPage);
      if (this.currPage.length < 10)
          {
            this.ConfigService.getPostal(this.postcode.substring(0, 4), this.pageIndex).subscribe(
              (elements) => {
                this.currPage = Object.keys(elements).map((i) => elements[i]);
                this.searchResponse = this.searchResponse.concat(this.currPage);
              });
          }
        }
        else{
          this.searchresult = false;
          this.hide = false
          this.noResult = true
        }
      });
      
      this.pageIndex++;
  }
  closesearchpop() {
    this.pageIndex = 0
    this.currPage = null
this.searchResponse = []
    this.searchresult = false;
    this.hide = false
    this.noResult = false
    this.routes.navigate(["/"]);
  }

  loggedIncheck()
  {
    this.siginUser = JSON.parse(localStorage.getItem("currentUser"));
    this.isLoading = true
    if (this.siginUser != null) {
      this.isLoggedIn = true
      this.isLoading = false
    }
    else {
      this.isLoggedIn = false
      this.isLoading = false
    }
  }
 
chcekLoggedIn()
{
  this.siginUser = JSON.parse(localStorage.getItem("currentUser"));
   
  if(this.siginUser == null)
  {
     this.routes.navigate(["/notLoggedIn"]);
  }
 else
 {
  this.routes.navigate(["/"]);
 }
}
openEmailcomposer()
{
   this.emailComposer.open({
     to:'ritin.nijhawan@gmail.com'
   })
}


}

