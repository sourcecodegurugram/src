import { Component, OnInit } from "@angular/core";
import { ConfigService } from "../../config.service";
import { Router, ActivatedRoute } from "@angular/router";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AlertController } from "@ionic/angular";
import { Location } from "@angular/common";
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { DatePipe } from '@angular/common'

@Component({
  selector: "app-userDetail",
  templateUrl: "./userDetail.page.html",
  styleUrls: ["./userDetail.page.scss"],
})
export class userDetailPage implements OnInit {
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
  favoarte: boolean = false
  removingFav: boolean = false
  uniqueBlockScope: any;
  responseBlockString: string;
  blockInfo: { name: any; picture: any; activities: any; uid: string; }[];
  blockscope: any[];
  Block_status = 1;
  Report_status = 1;
  parsedBlock: any;
  blockusers: boolean = false
  blocked: { name: any; picture: any; activities: any; uid: string; }[];
  unblockusers: boolean = false;
  report;
  now: Date = new Date();
  date: any;
  oldDate: string;
  newDate: string;
  dateone: Date;
  datetwo: Date;
  age: number;
  lastLogin: any;
  consider: any;
  Longcity: any;
  image: any;
  kids: any;
  anyting;
  verifed: any;
  constructor(
    private ConfigService: ConfigService,
    private _Activatedroute: ActivatedRoute,
    private _location: Location,
    private http: HttpClient,
    public alertController: AlertController,
    private emailComposer: EmailComposer,
    public datepipe: DatePipe
  ) { }
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
        console.log(this.post.picture.fid)
        console.log( this.post.field_user_avatar)
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
        this.contact = this.post.field_gender.und;
        this.alcohol = this.post.field_alcohol.und;
        this.language = this.post.field_languages.und;
        this.talk = this.post.field_talk_about.und;
        this.tv = this.post.field_favorite_tv_shows.und;
        this.good = this.post.field_good_friend.und;
        this.pets = this.post.field_any_pets.und;
        this.date = this.post.field_birth_date.und[0].value
        this.oldDate = this.datepipe.transform(this.now, 'MM-dd-yyyy');
        this.newDate = this.datepipe.transform(this.post.field_birth_date.und[0].value, 'MM-dd-yyyy');
        var date1 = new Date(this.oldDate);
        var date2 = new Date(this.newDate);
        var Difference_In_Time = date1.getTime() - date2.getTime();
        var Difference_In_Days = Math.floor((Difference_In_Time / (1000 * 3600 * 24)) / 365.25);
        this.age = Difference_In_Days
        this.gender = this.post.field_gender.und[0].value
        this.lastLogin = this.post.login
       
        if (this.post.field_consider_myself_.length == undefined)
        {this.consider = this.post.field_consider_myself_.und[0].value}
        this.meet = this.post.field_look_meet.und[0].value
       if(this.post.field_long_in_city.length == undefined){
        this.Longcity = this.post.field_long_in_city.und}
        if(this.post.field_user_avatar.und.length > 1){
       this.image  = this.post.field_user_avatar.und
         }

         if(this.post.field_kids.length == undefined)
         {
           this.kids = this.post.field_kids.und
         }

         if(this.post.field_you_say.length == undefined)
         {
           this.anyting = this.post.field_you_say.und
         }
         if(this.post.field_verfied.length == undefined)
         {
           this.verifed = this.post.field_verfied.und
         }
        this.favInfo = [
          {
            name: this.post.name,
            picture: this.post.picture.url,
            activities: this.post.field_activities_interests.und,
            uid: this.uid,
          },
        ],

          this.blocked = [
            {
              name: this.post.name,
              picture: this.post.picture.url,
              activities: this.post.field_activities_interests.und,
              uid: this.uid,
            },
          ],

          this.report = [
            {
              name: this.post.name,
              picture: this.post.picture.url,
              activities: this.post.field_activities_interests.und,
              uid: this.uid,
            },
          ]
        this.getLoggedInUser();
        this.getBlockedLoggedInUser()
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
        this.favoarte = false
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

        this.getLoggedInUser();
      });
  }




  getBlockedLoggedInUser() {
    // Get Block fields for logged in user
    this.ConfigService.getUser(this.itrs.user.uid).subscribe((data) => {
      this.loggedUser = data;
      this.Block_status = this.checBlockUser();
    });
  }

  checBlockUser() {
    if (this.loggedUser.field_block_users.und) {
      this.parsedBlock = JSON.parse(
        this.loggedUser.field_block_users.und[0].value
      );
      // Check if user is already a Block
      if (this.parsedBlock.some((persons) => persons[0].uid === this.uid)) {
        console.log("This person is already Blocked");
        return 3;
      } else {
        console.log("This person is not yet blocked");
        return 2;
      }
     
    }
    else
    {
       return 1
    }
 
  }

  //Block User
  Blockuser() {
    this.scope = [];
    this.http
      .get("https://gowebtutorial.com/api/json/user/" + this.itrs.user.uid)
      .subscribe((Blockusers) => {
        this.respnoseJSON = Blockusers;
        if (this.respnoseJSON.field_block_users) {
          console.log("value exists");
          this.scope = JSON.parse(
            this.respnoseJSON.field_block_users["und"][0]["value"]
          );
          this.scope.push(this.blocked);
        } else {
          console.log("value doesnt exist");
          this.scope.push(this.blocked);
        }
        //Make scope unique
        this.uniqueScope = this.removeDuplicatesBy(
          (x) => x[0].name,
          this.scope
        );
        this.block();
      });
  }



  block() {
    const headers = new HttpHeaders()
      .set("X-CSRF-Token", this.itrs.token)
      .set("Content-Type", "application/json")
      .set("X-Cookie", this.itrs.session_name + "=" + this.itrs.sessid);
    const requestOptions = {
      headers: headers,
      withCredentials: true,
    };
    // Add entry into favorites
    this.responseBlockString = JSON.stringify(this.uniqueScope);
    this.http
      .put(
        "https://gowebtutorial.com/api/json/user/" + this.itrs.user.uid,
        {
          field_block_users: {
            und: [
              {
                value: this.responseBlockString,
              },
            ],
          },
        },
        requestOptions
      )
      .subscribe((Block) => {
        this.isLoading = false;
        this.blockusers = false
        this.getBlockedLoggedInUser();
      });
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
    this.parsedFavorites = this.parsedFavorites.filter((obj) => {return obj[0].uid !== this.uid;});
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
    this.isLoading = true;
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
        this.removingFav = false
        this.getLoggedInUser();
      });
  }


  removeBlock() {
    this.parsedBlock = this.parsedBlock.filter((obj) => {
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
    this.responseString = JSON.stringify(this.parsedBlock);
    this.isLoading = true;
    this.http
      .put(
        "https://gowebtutorial.com/api/json/user/" + this.itrs.user.uid,
        {
          field_block_users: {
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
        this.unblockusers = false
        this.getBlockedLoggedInUser();
      });
  }






















  addFavorate() {
    this.favoarte = true
  }
  closePopup() {
    this.favoarte = false
    this.removingFav = false
    this.blockusers = false
    this.unblockusers = false
  }
  removingFavorate() {
    this.removingFav = true
  }
  blockuserpop() {
    this.blockusers = true
  }
  unblock() {
    this.unblockusers = true
  }

  openEmailcomposer() {
    this.emailComposer.open({
      to: 'max@mustermann.de',
      subject: 'Report Admin',
      body: "Name" + " " + ":" + this.post.name + " " + "uid" + " " + ":" + this.uid,
      isHtml: true

    });
  }
}