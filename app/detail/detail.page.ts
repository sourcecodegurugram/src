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
  genders: any;
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
      console.log(this.post)
      this.picture = this.post.picture.url;
      this.long = this.post.field_long_in_city.length;
      this.genders = this.post.field_gender.und;
      this.statu = this.post.field_relationship_status.und;
      this.smokes = this.post.field_smoke.und;
      this.activity = this.post.field_activities_interests.und;
      this.edue = this.post.field_education_level.und;
      this.tends = this.post.field_friends_tend_to_be.und;
      this.cancels = this.post.field_plans_get_cancelled.und;
      this.day = this.post.field_spend_your_days.und;
      this.movie = this.post.field_favorite_movies.und;
      this.musics = this.post.field_favorite_music.und;
      //this.show = this.post.field_favorite_tv_show.und;
      this.book = this.post.field_favorite_books.und;
      this.friend = this.post.field_talk_about.und;
    
    

    
      
     
     
    });
  }
}
