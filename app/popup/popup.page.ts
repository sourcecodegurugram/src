import { Component, OnInit } from "@angular/core";
import { ConfigService } from "../config.service";
import { Router, ActivatedRoute } from "@angular/router";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AlertController } from "@ionic/angular";
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
  alcohol: any;
  language: any;
  talk: any;
  tv: any;
  good: any;
  pets: any;
  isLoading: boolean = false;
  uniqueScope;
  favorites_status = 1;
  loggedInUser;
  parsedFavorites;
  loggedUser;
  loggedUserUid;

  constructor(
    private ConfigService: ConfigService,
    private _Activatedroute: ActivatedRoute,
    private _location: Location,
    private http: HttpClient,
    public alertController: AlertController
  ) {}

  ngOnInit() {
    // Get uid for logged in user
    this.itrs = JSON.parse(localStorage.getItem("currentUser"));

    // Get uid of user
    this.sub = this._Activatedroute.paramMap.subscribe((params) => {
      this.uid = params.get("uid");
    });
    this.getUser();
  }

  getUser() {
    // Get fields for user
    this.http
      .get("https://gowebtutorial.com/api/json/user/" + this.uid)
      .subscribe((data) => {
        this.post = data;
        this.name = this.post.name; //
        this.picture = this.post.picture.url; //
        this.long = this.post.field_long_in_city.length;
        this.genders = this.post.field_gender.und; //
        this.statu = this.post.field_relationship_status.und; //
        this.smokes = this.post.field_smoke.und; //
        this.activity = this.post.field_activities_interests.und; //
        this.edue = this.post.field_education_level.und; //
        this.tends = this.post.field_friends_tend_to_be.und; //
        this.cancels = this.post.field_plans_get_cancelled.und; //
        this.day = this.post.field_spend_your_days.und; //
        this.movie = this.post.field_favorite_movies.und; //
        this.musics = this.post.field_favorite_music.und; //
        this.book = this.post.field_favorite_books.und; //
        this.friend = this.post.field_talk_about.und;
        this.contact = this.post.field_gender.und; //
        this.alcohol = this.post.field_alcohol.und;
        this.language = this.post.field_languages.und;
        this.talk = this.post.field_talk_about.und;
        this.tv = this.post.field_favorite_tv_shows.und;
        this.good = this.post.field_good_friend.und;
        this.pets = this.post.field_any_pets.und;
        this.favInfo = [
          {
            name: this.post.name,
            picture: this.post.picture.url,
            activities: this.post.field_activities_interests.und,
            uid: this.uid,
          },
        ];
        this.getLoggedInUser();
      });
  }

  getLoggedInUser() {
    // Get favorite fields for logged in user
    this.ConfigService.getUser(this.itrs.user.uid).subscribe((data) => {
      this.loggedUser = data;
      this.favorites_status = this.checUserFavorites();
    });
  }

  checUserFavorites() {
    if (this.loggedUser.field_favorite_users.und) {
      this.parsedFavorites = JSON.parse(
        this.loggedUser.field_favorite_users.und[0].value
      );

      // Check if user is already a favorite
      if (this.parsedFavorites.some((person) => person[0].uid === this.uid)) {
        console.log("This person is already a favorite");
        return 3;
      } else {
        console.log("This person is not yet a favorite");
        return 2;
      }
    }
  }

  backClicked() {
    this._location.back();
  }

  getFavorite() {
    this.isLoading = true;
    this.scope = [];
    this.http
      .get("https://gowebtutorial.com/api/json/user/" + this.itrs.user.uid)
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

        //Make scope unique
        this.uniqueScope = this.removeDuplicatesBy(
          (x) => x[0].name,
          this.scope
        );

        this.addFavorite();
      });
  }

  addFavorite() {
    const headers = new HttpHeaders()
      .set("X-CSRF-Token", this.itrs.token)
      .set("Content-Type", "application/json")
      .set("X-Cookie", this.itrs.session_name + "=" + this.itrs.sessid);
    const requestOptions = {
      headers: headers,
      withCredentials: true,
    };

    // Add entry into favorites
    this.responseString = JSON.stringify(this.uniqueScope);
    console.log(this.uniqueScope);

    this.http
      .put(
        "https://gowebtutorial.com/api/json/user/" + this.itrs.user.uid,
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
      .subscribe((favorate) => {
        this.isLoading = false;
        this.addedFavorate();
        this.getLoggedInUser();
      });
  }

  async addedFavorate() {
    const correct = await this.alertController.create({
      message: "Added to favorites",
      buttons: ["OK"],
    });

    await correct.present();
  }

  async removedFavorate() {
    const correct = await this.alertController.create({
      message: "Removed from favorites",
      buttons: ["OK"],
    });

    await correct.present();
  }

  removeDuplicatesBy(keyFn, array) {
    var mySet = new Set();
    return array.filter(function (x) {
      var key = keyFn(x),
        isNew = !mySet.has(key);
      if (isNew) mySet.add(key);
      return isNew;
    });
  }

  removeFavorite() {
    this.parsedFavorites = this.parsedFavorites.filter((obj) => {
      return obj[0].uid !== this.uid;
    });

    const headers = new HttpHeaders()
      .set("X-CSRF-Token", this.itrs.token)
      .set("Content-Type", "application/json")
      .set("X-Cookie", this.itrs.session_name + "=" + this.itrs.sessid);
    const requestOptions = {
      headers: headers,
      withCredentials: true,
    };

    // Add entry into favorites
    this.responseString = JSON.stringify(this.parsedFavorites);

    this.http
      .put(
        "https://gowebtutorial.com/api/json/user/" + this.itrs.user.uid,
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
      .subscribe((favorate) => {
        this.isLoading = false;
        this.removedFavorate();
        this.getLoggedInUser();
      });
  }
}
