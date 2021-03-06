import {
  Component,
  OnInit,
  NgZone,
  HostListener,
  ViewChild,
  ElementRef,
} from "@angular/core";
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
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { Diagnostic } from "@ionic-native/diagnostic/ngx";
import { EmailComposer } from "@ionic-native/email-composer/ngx";
import { LoadingController } from '@ionic/angular';

@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.page.html",
  styleUrls: ["./welcome.page.scss"],
})
export class WelcomePage implements OnInit {
  @ViewChild("getMoreUsers") el: ElementRef;

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
  currPage;
  searchresult: boolean = false;
  userLogged: any;
  scope: any;
  siginUser: any;
  isLoggedIn: boolean = false;
  notEntered: boolean = false;
  callFalse: any;
  noResult: boolean = false;
  country;
  matchLevel = 0;
  tempCurrPage;
  item;
  distance;
  distanceInKm: number;
  miles: number;
  userLatitude;
  userLongitude;
  originalUser = true;
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
    private splashScreen: SplashScreen,
    public Diagnostic: Diagnostic,
    private emailComposer: EmailComposer,
    public loadingController: LoadingController
  ) {}

  ngOnInit() {
    this.matchLevel = 0;
    const timeZoneOffset = new Date().getTimezoneOffset()
    console.log(timeZoneOffset)
    this.siginUser = JSON.parse(localStorage.getItem("currentUser"));
    this.splashScreen.show();
    this.isLoading = true;
    if (this.siginUser != null) {
      if (this.siginUser.user.field_already_declared.und == undefined) {
        this.notEntered = true;
        this.isLoggedIn = true;
        this.isLoading = false;
        this.routes.navigate(["/topHobbies"]);
      }
      else {
        this.notEntered = false;
        this.isLoggedIn = false;
        this.isLoading = false;
      this.routes.navigate(["/find-friends"]);
      }
 

    } 
    
    if (this.siginUser == null){
      this.isLoggedIn = false;
      this.isLoading = false;
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
          console.log(this.postcode);
        }

        if (this.address[i].types.includes("country")) {
          this.country = this.address[i].long_name;
          console.log(this.country);
        }

        this.isLoading = false;
      }

      this.getSearchData();
    });
  }

  postcodeManuallyEnter(post, country) {
    this.postcode = post;
    this.country = country;
    this.getSearchData();
  }

  showFormPage() {
    // We will hide this page at starting. If lat long fails, we will unhide it so that people can fill information
    let successCallback = (isAvailable) => {
      console.log(isAvailable);
      if (isAvailable == "false") {
        this.hide = true;
      }
    };
    let errorCallback = (e) => console.error(e);
    this.Diagnostic.isGpsLocationEnabled()
      .then(successCallback)
      .catch(errorCallback);

    this.hide = true;
  }

  popOpen() {
    let successCallback = (isAvailable) => {
      console.log(isAvailable);
      if (isAvailable == false) {
        this.hide = true;
        this.isLoading = false;
      }
    };
    let errorCallback = (e) => console.error(e);
    this.Diagnostic.isGpsLocationEnabled()
      .then(successCallback)
      .catch(errorCallback);
    this.isLoading = true;
    this.geolocation
      .getCurrentPosition()
      .then((resp) => {
        this.lat = resp.coords.latitude;
        this.lng = resp.coords.longitude;
        // If we get lat long then we will pull Address details from reverse geo lookup
        if (this.lat && this.lng) {
          this.reverseGeoLookup();
        } else {
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
    this.isLoading = true;

    // To remove focus from button so it doesnt scroll automatically to end
    if (this.searchresult) {
      this.el.nativeElement.blur();
    }

    this.currPage = [];
    this.ConfigService.getPostal(
      this.postcode.substring(0, this.postcode.length - this.matchLevel),
      this.country,
      this.pageIndex
    ).subscribe((elements) => {
      this.isLoading = false;
      this.tempCurrPage = Object.keys(elements).map((i) => elements[i]);

      if (this.tempCurrPage.length == 0) {
        this.noResult = true;
      } else {
        for (let i = 0; i < this.tempCurrPage.length; i++) {
          if (
            this.tempCurrPage[i].Postal.substring(
              0,
              this.postcode.length - this.matchLevel
            ) ==
            this.postcode.substring(0, this.postcode.length - this.matchLevel)
          )
            if (this.originalUser) {
              this.userLatitude = elements[0].Latitude;
              this.userLongitude = elements[0].Longitude;
              this.originalUser = false;
            }
          this.distanceInKm = this.getDistanceFromLatLonInKm(
            this.userLatitude,
            this.userLongitude,
            elements[i].Latitude,
            elements[i].Longitude
          );
          this.distance = (this.distanceInKm * 1) / 1.609344;
          this.tempCurrPage[i].distance = this.distance;
          this.currPage.push(this.tempCurrPage[i]);
        }
      }

      if(  this.currPage != null){
      if (this.currPage.length > 0) {
        this.searchresult = true;
        this.searchResponse = this.searchResponse.concat(this.currPage);
        this.searchResponse = this.searchResponse.filter(
          (thing, index, self) =>
            index === self.findIndex((t) => t.name === thing.name)
        );
      
    }
  }
if(  this.currPage != null){
      if (this.currPage.length < 10) {
        this.matchLevel++;
        this.pageIndex = -1;
      }
      if (this.searchResponse.length == 0) {
        this.pageIndex++;
        this.getSearchData();
        return;
      }
    }
      this.pageIndex++;
    });

  }

  closesearchpop() {
    this.pageIndex = 0;
    this.currPage = null;
    this.searchResponse = [];
    this.searchresult = false;
    this.hide = false;
    this.noResult = false;
    this.routes.navigate(["/"]);
  }
  
  closenosearchpop() {
    this.pageIndex = 0;

    this.searchresult = false;
    this.hide = false;
    this.noResult = false;
    this.routes.navigate(["/"]);
  }


  loggedIncheck() {
    this.siginUser = JSON.parse(localStorage.getItem("currentUser"));
    this.isLoading = true;
    if (this.siginUser != null) {
      this.isLoggedIn = true;
      this.isLoading = false;
    } else {
      this.isLoggedIn = false;
      this.isLoading = false;
    }
  }

  chcekLoggedIn() {
    this.siginUser = JSON.parse(localStorage.getItem("currentUser"));

    if (this.siginUser == null) {
      this.routes.navigate(["/notLoggedIn"]);
    } else {
      this.routes.navigate(["/chat/searchUser"]);
    }
  }
  openEmailcomposer() {
    this.emailComposer.open({
      to: "ritin.nijhawan@gmail.com",
    });
  }

  getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = this.deg2rad(lat2 - lat1); // deg2rad below
    var dLon = this.deg2rad(lon2 - lon1);
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.deg2rad(lat1)) *
        Math.cos(this.deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in km
    return d;
  }
  deg2rad(deg) {
    return deg * (Math.PI / 180);
  }
  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

}
