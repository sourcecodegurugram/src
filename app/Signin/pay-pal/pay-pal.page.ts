import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpHeaderResponse,
} from "@angular/common/http";
import { ConfigService } from "../../config.service"
import { Router, ActivatedRoute } from "@angular/router";

declare let paypal: any
@Component({
  selector: 'app-pay-pal',
  templateUrl: './pay-pal.page.html',
  styleUrls: ['./pay-pal.page.scss'],
})

export class PayPalPage implements  AfterViewChecked {
  userFullDetails: any;
  percentage: number;
  new: any;
  
constructor(public http: HttpClient,public router:Router,public ConfigService:ConfigService){}
  // @ViewChild('myFormPost') myFormPost: ElementRef;
  addScript: boolean = false
  finalAmount: number = 1
  paypalLoad: boolean = false


  paypalConfig = {
    env: 'sandbox',
    client: {
      sandbox: 'ARdZ3e5wAjiAibsWrlLUXxzip4dYAdsjH-gKJrvRhvhqW8qbVG5aPzB-1OrBDNC3KgghxLIYxpTA-t3t',
      production: '<insert production client id>'
    },
    commit: true,
    payment: (data, actions) => {

      return actions.payment.create({
        payment: {
          transactions: [
            { amount: { total: this.finalAmount, currency: 'USD' } }
          ]
        }
      });
    },

    onAuthorize: (data, actions) => {
      return actions.payment.execute().then((payment) => {
        console.log(payment)
        localStorage.setItem("payment", JSON.stringify(payment));
       
//this.test()
        //do something when payment is successfull
        
          this.router.navigate(["/success"]);

      })
    
    }
  };
  userDetail: any;
  uid: any;

  ngAfterViewChecked(): void {
    if (!this.addScript) {
      this.addPaypalScript().then(() => {
        paypal.Button.render(this.paypalConfig, '#paypal-checkout-btn');
      })
    }
  }
  addPaypalScript() {
    this.addScript = true;
    return new Promise((resolve, reject) => {
      let scripttagElement = document.createElement('script');
      scripttagElement.src = 'https://www.paypalobjects.com/api/checkout.js',
        scripttagElement.onload = resolve;
      document.body.appendChild(scripttagElement)

    })

  }
  test() {

    this.userDetail = JSON.parse(localStorage.getItem("currentUser"));
    this.uid = this.userDetail.user.uid;
    const headers = new HttpHeaders()
      .set("X-CSRF-Token", this.userDetail.token)
      .set("Content-Type", "application/json")
      .set(
        "X-Cookie",
        this.userDetail.session_name + "=" + this.userDetail.sessid
      );

    const requestOptions = {
      headers: headers,
      withCredentials: true,
    };
    this.http
      .put(
        "https://gowebtutorial.com/api/json/user/" + this.uid, {
        field_verfied:   { und: [
          {
            value: "true"
          }
        ]
      }
      }, requestOptions).subscribe((data) => {
   
    
      });
  }

  checkPercentage()
  {
    this.userDetail = JSON.parse(localStorage.getItem("currentUser"));
    this.uid = this.userDetail.user.uid;
    
    this.ConfigService.getUser(this.uid).subscribe((userData) => {
      this.userFullDetails = userData;
      
  
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
      else
      {
        this.router.navigate(["/find-friends"]);

      }
    });
  }

}
