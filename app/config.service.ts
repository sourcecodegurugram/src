import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpHeaderResponse,
} from "@angular/common/http";
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
  postalUrl = this.serverUrl + "post-json?postal_code=";
  locationUrl = "https://maps.googleapis.com/maps/api/geocode/json?latlng=";
  createUrl = "https://gowebtutorial.com/api/json/user/register";
  constructor(private http: HttpClient) {}

  getArticle() {
    return this.http.get(this.articleUrl);
  }

  getUser(uid) {
    return this.http.get(this.userUrl + uid);
  }

  getHobbies() {
    return this.http.get(this.hobbieUrl);
  }
  getPostal(post, pageIndex) {
    return this.http.get(this.postalUrl + post + "&page=" + pageIndex);
  }
  getLocation(lat, lng) {
    return this.http.get(
      this.locationUrl +
        lat +
        "," +
        lng +
        "&types;=postal_code" +
        "&key=AIzaSyBru6wNx3CwcvRbACg2G4-Cq7o6Lt4wOvI"
    );
  }
  getMsg()
  {
    return this.http.get("http://latdating.dd:8083/api/json/messages/list");
  }
}
