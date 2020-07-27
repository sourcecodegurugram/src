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
  searchUrl = this.serverUrl + "search-view?gender=";
  gender;
  meet;
  activity;
  Postalcode;

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

  getSearchUrl(Postalcode, gender, meet, activity) {
    // Only use fields that are specified
    if (Postalcode) {
      this.Postalcode = "&postal=" + Postalcode;
    } else {
      this.Postalcode = "";
    }
    if (gender != 0) {
      this.gender = "&gender=" + gender;
    } else if (gender == 0) {
      this.gender = "";
    }
    if (meet != 0) {
      this.meet = "&meet=" + meet;
    } else if (meet == 0) {
      this.meet = "";
    }
    if (activity != 0) {
      this.activity = "&activity=" + activity;
    } else if (activity == 0) {
      this.activity = "";
    }

    return this.http.get(
      this.serverUrl +
        "search-view?" +
        this.Postalcode +
        this.gender +
        this.meet +
        this.activity
    );
  }
}
