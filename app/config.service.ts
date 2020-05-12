import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { retry, catchError } from "rxjs/operators";
@Injectable({
  providedIn: "root",
})
export class ConfigService {
  serverUrl = "https://gowebtutorial.com/api/json/";
  articleUrl = this.serverUrl + "user.json";
  userUrl = this.serverUrl + "user/";
  hobbieUrl = this.serverUrl + "hobbies-json";
  postalUrl = this.serverUrl + "post-json?Page=2&postal_code=";
  locationUrl= "https://maps.googleapis.com/maps/api/geocode/json?latlng="
 
  constructor(private http: HttpClient) {}

  getArticle() {
    return this.http.get(this.articleUrl);
  }

  getUser(uid) {
    return this.http.get(this.userUrl + uid );
  }

  getHobbies() {
    return this.http.get(this.hobbieUrl);
  }
  getPostal(post) {
    return this.http.get(this.postalUrl + post );
  }
  getLocation(lat,lng)
  {
    return this.http.get(this.locationUrl + lat + ","+ lng +"&types;=postal_code" +"&key=AIzaSyDDR5cIbr6IoMR59m7iwj34HcGO6aEP15k");
  }
  Login()
  {
   

    
  }
}
