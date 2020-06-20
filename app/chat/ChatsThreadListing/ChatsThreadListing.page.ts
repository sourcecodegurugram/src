import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: "app-ChatsThreadListing",
  templateUrl: "./ChatsThreadListing.page.html",
  styleUrls: ["./ChatsThreadListing.page.scss"],
})
export class ChatsThreadListingPage implements OnInit {
  logged: any;
  userlogged: any;
  itr: any;
  url = "https://gowebtutorial.com/api/json/system/connect";
  headerDict: any;
  messages: any;
  user: any;
  uses: any;
  messag: Object;
  obj: any;
  formattedMessages = [];
  height;
  width;
  isLoading: boolean = true;
  participants;
  counterpartParticipants = [];
  time: any;
now = new Date();
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.itr = JSON.parse(localStorage.getItem("currentUser"));
    this.userlogged = JSON.parse(localStorage.getItem("Signinuser"));
    if (this.itr != null) {
      console.log(this.itr.token);
      const headers = new HttpHeaders()
        .set("X-CSRF-Token", this.itr.token)
        .set("Content-Type", "application/json")
        .set("X-Cookie", this.itr.session_name + "=" + this.itr.sessid);
      const requestOptions = {
        headers: headers,
        withCredentials: true,
      };
      return this.http
        .get("https://gowebtutorial.com/api/json/privatemsg/", requestOptions)
        .subscribe((getMessages) => {
          this.messages = getMessages;
          for (var i = 0; i < this.messages.length; i++) {
            for (this.participants in this.messages[i].participants) {
              // Get counterparty
              if (
                this.messages[i].participants[this.participants].uid != "203820"
              ) {
                // Add subject and time in participant object
                this.messages[i].participants[
                  this.participants
                ].subject = this.messages[i].subject;

                this.messages[i].participants[
                  this.participants
                ].
                  time=this.messages[i].last_updated;
              

                this.messages[i].participants[
                  this.participants
                ].thread_id = this.messages[i].thread_id;

                // populate rest of fields
                this.counterpartParticipants.push(
                  this.messages[i].participants[this.participants]
                );
              }
            }
          }
          this.isLoading=false
        });
    }
  }

  click() {
    const headers = new HttpHeaders()
      .set("X-CSRF-Token", this.itr.token)
      .set("Content-Type", "application/json")
      .set("X-Cookie", this.itr.session_name + "=" + this.itr.sessid);

    const requestOptions = {
      headers: headers,
      withCredentials: true,
    };
    return this.http
      .get("https://gowebtutorial.com/api/json/privatemsg/", requestOptions)
      .subscribe((getMessages) => {});
  }

  convertTimestamp(timestamp) {
    let unix_timestamp = timestamp;
    // Create a new JavaScript Date object based on the timestamp
    // multiplied by 1000 so that the argument is in milliseconds, not seconds.
    var date = new Date(unix_timestamp * 1000);
    // Hours part from the timestamp
    var hours = date.getHours();
    // Minutes part from the timestamp
    var minutes = "0" + date.getMinutes();
    // Seconds part from the timestamp
    var seconds = "0" + date.getSeconds();

    // Will display time in 10:30:23 format
    var formattedTime =
      hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);
    return formattedTime;
  }

  function(scope)
{
    scope.date = new Date();
}
}
