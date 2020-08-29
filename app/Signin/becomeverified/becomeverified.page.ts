import { Component, OnInit } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpHeaderResponse,
} from "@angular/common/http";
import { ConfigService } from "../../config.service";
import { Router, ActivatedRoute } from "@angular/router";
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-becomeverified',
  templateUrl: './becomeverified.page.html',
  styleUrls: ['./becomeverified.page.scss'],
})
export class BecomeverifiedPage implements OnInit {
  userDetail: any;
  uid: any;
  userFullDetails;
  now: Date = new Date();
  oldDate: any
  newDate: any
  dateone: any;
  datetwo: any;
  verifiedCust: any;
  constructor(private http: HttpClient,
    private ConfigService: ConfigService,
    private router: Router,
    public datepipe: DatePipe) { }

  ngOnInit() {
    this.userDetail = JSON.parse(localStorage.getItem("currentUser"));
    this.uid = this.userDetail.user.uid;
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

  }
  // .getTime()
  optionDetail() {

    console.log("test upload")
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
        field_trial_period_start_date: {
          und: [
            {
              value: this.now
            }
          ]
        }

      }, requestOptions
      ).subscribe((result) => {
        this.router.navigate(["/chat/searchUser"]);
      });

  }
  calculateDiff(data) {
    let date = new Date(data.sent);
    let currentDate = new Date();
    let days = Math.floor((currentDate.getTime() - date.getTime()) / 1000 / 60 / 60 / 24);
    return days;
  }
date() {

    var date1 = new Date(this.oldDate);
    var date2 = new Date(this.newDate);

    var Difference_In_Time = date1.getTime()  - date2.getTime();

    // To calculate the no. of days between two dates 
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
console.log(Difference_In_Days)
    if (Difference_In_Days < 8 || this.verifiedCust  ) {

      this.router.navigate(["/chat/searchUser"]);

    }
    else {
      this.router.navigate(["/trialover"]);
    }
  }

}
