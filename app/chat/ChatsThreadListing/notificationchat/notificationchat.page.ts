import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router, ActivatedRoute } from "@angular/router";
import { FormControl, FormGroup, Validators } from "@angular/forms";
@Component({
  selector: "app-notificationchat",
  templateUrl: "./notificationchat.page.html",
  styleUrls: ["./notificationchat.page.scss"],
})
export class NotificationchatPage implements OnInit {
  itr: any;
  userlogged: any;
  chat;
  sub: any;
  thread: string;
  message: any;
  adminMessage: any;
  userMessage: any;
  keyboard;
  first: any;
  messages: any;
  image;
  name;
  Send:boolean=true;
  Sending:boolean=false;
  updating:boolean=false;
  constructor(
    private http: HttpClient,
    private _Activatedroute: ActivatedRoute
  ) {}

  ngOnInit() {
    //Thread
    this.sub = this._Activatedroute.paramMap.subscribe((params) => {
      this.thread = params.get("thread_id");
    });
    // Image
    this.sub = this._Activatedroute.paramMap.subscribe((params) => {
      this.image = params.get("image_path");
    });

    //Name
    this.sub = this._Activatedroute.paramMap.subscribe((params) => {
      this.name = params.get("name");
    });

    this.itr = JSON.parse(localStorage.getItem("currentUser"));
    console.log(this.itr.user.uid);
    this.getChat();
  }

  sendMsg(chat) {

    this.chat = "";
    this.Send=false
    this.Sending =true
    const headers = new HttpHeaders()
      .set("X-CSRF-Token", this.itr.token)
      .set("Content-Type", "application/json")
      .set("X-Cookie", this.itr.session_name + "=" + this.itr.sessid);

    const requestOptions = {
      headers: headers,
      withCredentials: true,
    };
    this.http
      .post<any>(
        "https://gowebtutorial.com/api/json/privatemsg/",
        {
          thread_id: this.thread,
          recipients: "44135",
          subject: "hello",
          body: chat,
        },
        requestOptions
      )
      .subscribe((data) => {
        this.getChat();
        this.Sending = false
        this.Send=true
        console.log(data);
     
      });
  }

  getChat() {
    if (this.itr != null) {
      this.updating=true;
      const headers = new HttpHeaders()
        .set("X-CSRF-Token", this.itr.token)
        .set("Content-Type", "application/json")
        .set("X-Cookie", this.itr.session_name + "=" + this.itr.sessid);
      const requestOptions = {
        headers: headers,
        withCredentials: true,
      };
      return this.http
        .get(
          "https://gowebtutorial.com/api/json/privatemsg/" + this.thread,
          requestOptions
        )
        .subscribe((getMessages) => {
          this.messages = getMessages;
          this.message = this.messages.messages;
          this.thread = this.messages.pmtid;
          console.log(getMessages);
          this.updating=false
        });
    }
  }

  refreshChat()
  {
    this.getChat()
  }
}
