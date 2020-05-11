import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { ConfigService } from "../config.service";
import { post } from "../detail";
@Component({
  selector: "app-detail",
  templateUrl: "./detail.page.html",
  styleUrls: ["./detail.page.scss"],
})
export class DetailPage implements OnInit {
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
  constructor(
    private _Activatedroute: ActivatedRoute,
    private ConfigService: ConfigService
  ) {}

  ngOnInit() {
    this.sub = this._Activatedroute.paramMap.subscribe((params) => {
      this.name = params.get("name");
      this.mail = params.get("mail");
      this.uid = params.get("uid");
    });

    this.ConfigService.getUser(this.uid).subscribe((data) => {
      this.post = data;
      this.picture = this.post.picture.url;
      this.long = this.post.field_long_in_city.length;
      this.gender = this.post.field_gender.und[0].value;
      this.smokes = this.post.field_smoke.und;

      this.activity = this.post.field_activities_interests.und;
      for (let i = 0; i < this.activity.length; i++) {
        this.actvities = this.activity[i].value;
      }

      this.statu = this.post.field_relationship_status.und;

      for (let u = 0; u < this.statu.length; u++) {
        this.status = this.statu[u].value;
        console.log(this.statu[u].value);
      }
      this.edue = this.post.field_education_level.und;
      for (let e = 0; e < this.edue.length; e++) {
        this.edu = this.edue[e].value;
        console.log(this.edue[e].value);
      }

      this.tends = this.post.field_friends_tend_to_be.und;
      for (let e = 0; e < this.tends.length; e++) {
        this.tend = this.tends[e].value;
        console.log(this.tends[e].value);
      }

      this.cancels = this.post.field_plans_get_cancelled.und;
      for (let e = 0; e < this.cancels.length; e++) {
        this.cancel = this.cancels[e].value;
        console.log(this.cancels[e].value);
      }
      this.day = this.post.field_spend_your_days.und;
      for (let e = 0; e < this.day.length; e++) {
        this.days = this.day[e].value;
        console.log(this.day[e].value);
      }

      this.movie = this.post.field_favorite_movies.und;
      for (let d = 0; d < this.movie.length; d++) {
        this.movies = this.movie[d].value;
        console.log(this.movie[d].value);
      }
      this.musics = this.post.field_favorite_music.und;
      for (let d = 0; d < this.musics.length; d++) {
        this.music = this.musics[d].value;
        console.log(this.musics[d].value);
      }
      //  this.show = this.post.field_favorite_tv_show.und;
      //  for(let d=0;d< this.show.length;d++)
      //  {

      //     this.shows=this.show[d].value
      //     console.log(this.show[d].value)

      //  }
      this.book = this.post.field_favorite_books.und;
      for (let b = 0; b < this.book.length; b++) {
        this.books = this.book[b].value;
        console.log(this.book[b].value);
      }
      this.friend = this.post.field_talk_about.und;
      for (let d = 0; d < this.friend.length; d++) {
        this.friends = this.friend[d].value;
        console.log(this.friend[d].value);
      }
    });
  }
}
