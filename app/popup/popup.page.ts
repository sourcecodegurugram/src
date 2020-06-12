import { Component, OnInit } from "@angular/core";
import { ConfigService } from "../config.service";
import { Router, ActivatedRoute } from "@angular/router";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Location } from "@angular/common";
@Component({
  selector: "app-popup",
  templateUrl: "./popup.page.html",
  styleUrls: ["./popup.page.scss"],
})
export class PopupPage implements OnInit {
  sub: any;
  name: string;
  mail: string;
  uid: string;
  post: any;
  gender: any;
  books: any;
  actvities: any;
  meet: any;
  status: any;
  long: any;
  edu: Object;
  smoke: any;

  field_gender: Array<any>;
  field_favorite_books: Array<any>;
  field_activities_interests: Array<any>;
  field_look_meet: Array<any>;
  field_relationship_status: Array<any>;
  field_long_in_city: Array<any>;
  field_education_level: Array<any>;
  field_smoke: Array<any>;
  picture: Array<any>;
  postman: any = {};
  Books: any;
  activity: any;
  meets: any;
  statu: any;
  edue: any;
  smokes: any;
  tends: any;
  tend: any;
  cancels: any;
  cancel: any;
  day: any;
  days: any;
  movie: any;
  movies: any;
  musics: any;
  music: any;
  show: any;
  shows: any;
  book: any;
  friend: any;
  friends: any;
  genders: any;
  contact: any;
  scope = [];
  itrs: any;
  obj: any;
  respnoseJSON;
  responseString;
  favInfo;
  constructor(
    private ConfigService: ConfigService,
    private _Activatedroute: ActivatedRoute,
    private _location: Location,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.itrs = JSON.parse(localStorage.getItem("currentUser"));
    this.sub = this._Activatedroute.paramMap.subscribe((params) => {
      this.uid = params.get("uid");
    });

    this.ConfigService.getUser(this.uid).subscribe((data) => {
      this.post = data;
      this.favInfo = [
        {
          name: this.post.name,
          picture: this.post.picture.url,
          activities: this.post.field_activities_interests.und,
        },
      ];
    });
  }
  backClicked() {
    this._location.back();
  }

  getFavorite() {
    this.scope = [];
    this.http
      .get("http://gowebtutorial.com/api/json/user/" + this.itrs.user.uid)
      .subscribe((users) => {
        this.respnoseJSON = users;

        if (this.respnoseJSON.field_favorite_users.und) {
          console.log("value exists");
          this.scope = JSON.parse(
            this.respnoseJSON.field_favorite_users["und"][0]["value"]
          );

          this.scope.push(this.favInfo);
        } else {
          console.log("value doesnt exist");
          this.scope.push(this.favInfo);
        }

        this.addFavorite();
      });
  }

  addFavorite() {
    // Add
    const headers = new HttpHeaders()
      .set("X-CSRF-Token", this.itrs.token)
      .set("Content-Type", "application/json")
      .set("X-Cookie", this.itrs.session_name + "=" + this.itrs.sessid);
    const requestOptions = {
      headers: headers,
      withCredentials: true,
    };

    // Add entry into favorites

    this.responseString = JSON.stringify(this.scope);
    console.log(this.scope);

    this.http
      .put(
        "http://gowebtutorial.com/api/json/user/" + this.itrs.user.uid,
        {
          field_favorite_users: {
            und: [
              {
                value: this.responseString,
              },
            ],
          },
        },
        requestOptions
      )
      .subscribe((favorate) => {});
  }
}
