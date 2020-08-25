import { Component, OnInit } from '@angular/core';
import { ConfigService } from "../../config.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-find-friends',
  templateUrl: './find-friends.page.html',
  styleUrls: ['./find-friends.page.scss'],
})
export class FindFriendsPage implements OnInit {
  userDetail: any;
  uid: any;
  userFullDetails: any;
  alcohol: any;
  doforfun: any;
  books: any;
  movies: any;
  musics: any;
  tvshows: any;
  tends: any;
  goodFriend: any;
  languages: any;
  cancelled: any;
  spenddays: any;
  talkAbout: any;
  yousay: any;
  picture: any;
  name: any;
  gender: any;
  percentage: any;

  constructor(
    public ConfigService: ConfigService,    private router: Router
  ) { }

  ngOnInit() {
    this.userDetail = JSON.parse(localStorage.getItem("currentUser"));
    this.uid = this.userDetail.user.uid;
    
    this.ConfigService.getUser(this.uid).subscribe((userData) => {
      this.userFullDetails = userData;
      
      this.name = 12
      if (this.userFullDetails.field_alcohol.length != undefined) {
        if (this.userFullDetails.field_alcohol.length == 0) {
          var alcohol = 0
        }
      }
      if (this.userFullDetails.field_alcohol.length == undefined) {

        var alcohol = 1
      }
      if (this.userFullDetails.field_do_for_fun.length != undefined) {
        if (this.userFullDetails.field_do_for_fun.length == 0) {

          var doforfun = 0
        }
      }
      if (this.userFullDetails.field_do_for_fun.length == undefined) {

        var doforfun = 1

      }

      if (this.userFullDetails.field_favorite_books.length != undefined) {
        if (this.userFullDetails.field_favorite_books.length == 0) {

          var books = 0

        }
      }
      if (this.userFullDetails.field_favorite_books.length == undefined) {

        var books = 1

      }

      if (this.userFullDetails.field_favorite_movies.length != undefined) {
        if (this.userFullDetails.field_favorite_movies.length == 0) {

          var movies = 0
        }
      }
      if (this.userFullDetails.field_favorite_movies.length == undefined) {

        var movies = 1
      }

      if (this.userFullDetails.field_favorite_music.length != undefined) {
        if (this.userFullDetails.field_favorite_music.length == 0) {
          1
          var musics = 0
        }
      }
      if (this.userFullDetails.field_favorite_music.length == undefined) {

        var musics = 1
      }
      if (this.userFullDetails.field_favorite_tv_shows.length != undefined) {
        if (this.userFullDetails.field_favorite_tv_shows.length == 0) {

          var tvshows = 0
        }
      }
      if (this.userFullDetails.field_favorite_tv_shows.length == undefined) {

        var tvshows = 1
      }
      if (this.userFullDetails.field_friends_tend_to_be.length != undefined) {
        if (this.userFullDetails.field_friends_tend_to_be.length == 0) {

          var tends = 0
        }
      }
      if (this.userFullDetails.field_friends_tend_to_be.length == undefined) {

        var tends = 1
      }
      if (this.userFullDetails.field_good_friend.length != undefined) {
        if (this.userFullDetails.field_good_friend.length == 0) {

          var goodFriend = 0
        }
      }
      if (this.userFullDetails.field_good_friend.length == undefined) {

        var goodFriend = 1
      }

      if (this.userFullDetails.field_languages.length != undefined) {
        if (this.userFullDetails.field_languages.length == 0) {

          var languages = 0
        }
      }
      if (this.userFullDetails.field_languages.length == undefined) {

        var languages = 1
      }
      if (this.userFullDetails.field_plans_get_cancelled.length != undefined) {
        if (this.userFullDetails.field_plans_get_cancelled.length == 0) {

          var cancelled = 0
        }
      }
      if (this.userFullDetails.field_plans_get_cancelled.length == undefined) {

        var cancelled = 1
      }

      if (this.userFullDetails.field_spend_your_days.length != undefined) {
        if (this.userFullDetails.field_spend_your_days.length == 0) {

          var spenddays = 0
        }
      }
      if (this.userFullDetails.field_spend_your_days.length == undefined) {

        var spenddays = 1
      }
      if (this.userFullDetails.field_talk_about.length != undefined) {
        if (this.userFullDetails.field_talk_about.length == 0) {

          var talkAbout = 0
        }
      }
      if (this.userFullDetails.field_talk_about.length == undefined) {

        var talkAbout = 1
      }
      if (this.userFullDetails.field_you_say.length != undefined) {
        if (this.userFullDetails.field_you_say.length == 0) {

          var yousay = 0
        }
      }

      if (this.userFullDetails.field_you_say.length == undefined) {

        var yousay = 1
      }




      var total = 12 + alcohol + doforfun + books + movies + musics + tvshows + tends + goodFriend + languages + cancelled + spenddays + talkAbout + yousay
      

      var percentage = total / 25 * 100
      this.percentage = percentage

      if(this.percentage == 100)
      {
        this.router.navigate(["/chat/searchUser"]);

      }
    });




  }






}


