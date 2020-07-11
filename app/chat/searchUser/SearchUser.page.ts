import { Component, OnInit , NgZone} from '@angular/core';
import { FormControl } from '@angular/forms';
import { ConfigService } from "../../config.service";
import { Geolocation } from "@ionic-native/geolocation/ngx";
import { Platform } from "@ionic/angular";
import {
  NativeGeocoder,
  NativeGeocoderOptions,
  NativeGeocoderResult,
} from "@ionic-native/native-geocoder/ngx";
@Component({
  selector: 'app-searchUser',
  templateUrl: './searchUser.page.html',
  styleUrls: ['./searchUser.page.scss'],
})
export class SearchUserPage implements OnInit {
  activity :any ="0";
  activityList: string[] = ['Yoga', 'Cooking', 'Watching Movies'];
  search: boolean = true;
  searchitem: boolean = false;
  chatpage: boolean = false;
  searchResults: any;
  gender: any ="0";
  meet: any ="0";
  cancel: any;
  address: any;
  userDetailss: any;
  uid: any;
  user: Object;
  Postcode: any;
  notfound: boolean = false;
  itrs: any;
  live: any;
  searchuser: any;
  Localgender: any;
  Localmeet: any;
  Localactivity: any;
  Localpostcode: any;
  Locallive: any;
  isLoading:boolean = false
  postcode: any;
  lat: any;
  lng: any;

  addressData;
  country: any;
  getpostcode: any;
  getcountry: any;
  constructor(private ConfigService: ConfigService, public geolocation: Geolocation,
    private platform: Platform,
    private nativeGeocoder: NativeGeocoder,  public zone: NgZone,) { }
  ngOnInit() {
    this.itrs = JSON.parse(localStorage.getItem("currentUser"));
    this.Localgender = JSON.parse(localStorage.getItem("gender"));
    if (this.Localgender != null) {
      this.gender = this.Localgender;
    }
    this.Localmeet = JSON.parse(localStorage.getItem("meet"));
    if (this.Localmeet != null) {
      this.meet = this.Localmeet;
    }
    this.Localactivity = JSON.parse(localStorage.getItem("activity"));
    if (this.Localactivity != null) {
      this.activity = this.Localactivity;
    }
    this.Localpostcode = JSON.parse(localStorage.getItem("Postcode"));
    if (this.Localpostcode != null) {
      this.Postcode = this.Localpostcode;
    }
    this.Locallive = JSON.parse(localStorage.getItem("Live"));
    if (this.Localpostcode != null) {
      this.live = this.Locallive;
    }
  }
  searchResult() {
    this.search = false;
    this.searchitem = true;
    this.getResult(this.gender, this.meet, this.activity, this.Postcode);
  }
  chatOpenPage() {
    this.search = false;
    this.searchitem = false;
    this.chatpage = true;
  }
  notFoundResult() {
    this.search = true;
    this.searchitem = false;
    this.notfound = false;
  }
  sendMsg() {
    this.searchitem = true;
    this.chatpage = false;
  }
  getResult(Postcode,gender, meet, activity) {
    this.isLoading= true
    this.ConfigService.getSearchUrl( Postcode,gender, meet, activity).subscribe((elements) => {
      this.searchResults = elements;
      console.log(this.searchResults.length);
      localStorage.setItem("gender", JSON.stringify(gender));
      localStorage.setItem("meet", JSON.stringify(meet));
      localStorage.setItem("activity", JSON.stringify(activity));
      localStorage.setItem("Postcode", JSON.stringify(Postcode));
      localStorage.setItem("Live", JSON.stringify(this.live));
      this.isLoading= false
      if (this.searchResults.length == 0) {
        this.notfound = true;
        console.log("oops no result Found");
      }
      console.log(elements);
    });
  }
  userDetails() {
    this.uid = this.searchResults[0].Uid;
    this.ConfigService.getUser(this.uid).subscribe((data) => {
      this.user = data;
    });
  }
  searchBack() {
    this.search = true;
    this.searchitem = false;
  }



  determineCurrent() {
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
        } 
      }) // If we do not get lat long, we will present page with form for address and post code
      .catch((error) => {
        this.isLoading = false;
      });
  }
  reverseGeoLookup() {
    // This is where the code for reverse GEO lookup will come
    this.ConfigService.getLocation(this.lat, this.lng).subscribe((data) => {
      this.addressData = data;
      this.address = this.addressData.results[0].address_components;
      for (var i = 0; i < this.address.length; i++) {
        if (this.address[i].types.includes("postal_code")) {
          this.getpostcode = this.address[i].long_name;
          this.postcode=this.getpostcode;
          this.isLoading = false;
        }
        if(this.address[i].types.includes("country", "political"))
        {
          this.getcountry = this.address[i].short_name;
          
        }

      }
    this.getItems(this.Postcode,this.live)
    });
  }
 getItems(Postcode,live)
 {
   this.Postcode = this.getpostcode
   this.live= this.getcountry
 console.log(this.live)
 }
reset()
{
  this.Postcode=""
  this.live=""
  this.gender=""
  this.meet="0"
  this.activity="0"
}
}
