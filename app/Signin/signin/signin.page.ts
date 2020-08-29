import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTabChangeEvent } from "@angular/material/tabs";
import { ActivatedRoute, Router } from "@angular/router";
import { AlertController } from "@ionic/angular";
import { AuthService } from "../../auth.service";
import { RouterOutlet, ActivationStart } from "@angular/router";
import { catchError, retry } from "rxjs/operators";
import { Observable, throwError } from "rxjs";
import {
  HttpClient,
  HttpHeaders,
  HttpResponse,
  HttpErrorResponse,
} from "@angular/common/http";
import { ConfigService } from "../../config.service";
import { DatePipe } from '@angular/common'
@Component({
  selector: "app-signin",
  templateUrl: "./signin.page.html",
  styleUrls: ["./signin.page.scss"],
})
export class SigninPage implements OnInit {
  maxNumberOfTabs = 5;
  selectedIndex = 0;
  headerDict: any;
  url = "http://gowebtutorial.com/api/json/system/connect";
  post: any;
  user: any;
  pass: any;
  password: any;
  currentUserSubject: any;
  newdata: any;
  datas: any;
  itr: any;
  data: any;
  itrs: any;
  token: any;
  LoggedIn: boolean = true;
  isLoading: boolean = false;
  signIn: any;
  siginUser: any;
  UserDetails: any;
  percentage: number;
  userDetail: any;
  uid: any;
  userFullDetails: any;
  verifiedCust: any;
  oldDate: any;
  newDate: any;
  dateone:any;
  datetwo: any;
  now: Date = new Date();
  constructor(
    private router: Router,
    private http: HttpClient,
    public alertController: AlertController,
    public AuthService: AuthService,
    public ConfigService :ConfigService ,
    public datepipe: DatePipe
  ) {}

  ngOnInit() {
    this.siginUser = JSON.parse(localStorage.getItem("currentUser"));
    if (this.siginUser == null) {
      this.isLoading = false;
    } else if (this.siginUser != null) {
      this.isLoading = true;
      this.AuthService.systemConnect().subscribe((UserLoggedIn) => {
        localStorage.setItem("Signinuser", JSON.stringify(UserLoggedIn));
        this.UserDetails = UserLoggedIn;
        if (this.UserDetails != null) {
          this.isLoading = false;
          this.ConfigService.getUser(this.uid).subscribe((userData) => {
            this.userFullDetails = userData;
            this.verifiedCust = this.userFullDetails.field_verfied.length
            if (this.userFullDetails.field_trial_period_start_date.length == undefined) {
              this.oldDate = this.datepipe.transform(this.now, 'MM-dd-yyyy');
              this.newDate = this.datepipe.transform(this.userFullDetails.field_trial_period_start_date.und[0].value, 'MM-dd-yyyy');
              this.dateone = new Date(this.userFullDetails.field_trial_period_start_date.und[0].value);
              this.datetwo = new Date(this.now);
              this.date()
            }
          });



          //this.checkPercentage()
        }
      });
    }
  }

  public tabChanged(tabChangeEvent: MatTabChangeEvent): void {
    this.selectedIndex = tabChangeEvent.index;
  }
  public nextStep() {
    this.selectedIndex += 1;
  }

  public previousStep() {
    this.selectedIndex -= 1;
  }
  public nextSteps() {
    this.LoginForm(this.user, this.password);
  }

  LoginForm(user, pass) {
    this.isLoading = true;
    this.AuthService.loginUser(user, pass)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status == 401) {
            this.username();
          } else if (error.status == 403) {
            this.notActivated();
          }
          this.isLoading = false;
          return throwError(this.something());
        })
      )
      .subscribe((userDetail) => {
        console.log(userDetail)
        localStorage.setItem("currentUser", JSON.stringify(userDetail));
        this.AuthService.systemConnect().subscribe((UserLoggedIn) => {
          localStorage.setItem("Signinuser", JSON.stringify(UserLoggedIn));
          localStorage.setItem("UpdateData", JSON.stringify(userDetail.user));
          this.UserDetails = UserLoggedIn;
          if (this.UserDetails != null) {
            this.router.navigate(["/becomevrified"]);
          }
        });
      });
  }

  async correctAlert() {
    const correct = await this.alertController.create({
      message: "Please Provide Valid Details",
      buttons: ["OK"],
    });
    await correct.present();
  }
  async username() {
    const correct = await this.alertController.create({
      message: "Your username or password is incorrect",
      buttons: ["OK"],
    });
    await correct.present();
  }
  async notActivated() {
    const correct = await this.alertController.create({
      message: "The username  has not been activated or is blocked",
      buttons: ["OK"],
    });
    await correct.present();
  }
  async something() {
    // const correct = await this.alertController.create({
    //   message: "Something bad happened; please try again later.",
    //   buttons: ["OK"],
    // });
    // await correct.present();
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
  date() {

    var date1 = new Date(this.oldDate);
    var date2 = new Date(this.newDate);

    var Difference_In_Time = date1.getTime()  - date2.getTime();


    // To calculate the no. of days between two dates 
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

    if (Difference_In_Days < 8 || this.verifiedCust) {

      //this.router.navigate(["/chat/searchUser"]);
      this.checkPercentage()

    }
    else {
      this.router.navigate(["/trialover"]);
    }
  }
}
