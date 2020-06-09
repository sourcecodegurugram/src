import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router, ActivatedRoute } from "@angular/router";
import { Keyboard } from '@ionic-native/keyboard/ngx';
import {FormControl, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-notificationchat',
  templateUrl: './notificationchat.page.html',
  styleUrls: ['./notificationchat.page.scss'],
})
export class NotificationchatPage implements OnInit {
  itr: any;
  userlogged: any;
 chat;
  sub: any;
  thread: string;
  message:any;
  adminMessage: any;
  userMessage: any;
  keyboard
  first: any;
  constructor(private http: HttpClient,    private _Activatedroute: ActivatedRoute,private Keyboard:Keyboard) { }

  ngOnInit() {
   

    this.sub = this._Activatedroute.paramMap.subscribe((params) => {
      this.thread= params.get("thread_id");
    });
    this.itr = JSON.parse(localStorage.getItem("currentUser"));
    console.log(this.itr.user.uid)
  this.getChat()
  }

  sendMsg(chat)
  {
    this.chat ="";
    const headers = new HttpHeaders()
    .set("X-CSRF-Token", this.itr.token)
    .set("Content-Type", "application/json")
    .set("X-Cookie", this.itr.session_name + "=" + this.itr.sessid);

  const requestOptions = {
    headers: headers,
    withCredentials: true,
  }
    this.http.post<any>("http://gowebtutorial.com/api/json/privatemsg/",{
  
      
        thread_id: "698723",
        recipients: "44135",
        subject: "hello",
        body: chat


  },requestOptions).subscribe((data) => {
  
    this.getChat()
    console.log(data)
    chat='Type message here'
  });
  }


getChat()
{
  if(this.itr!=null)
  {
  
  const headers = new HttpHeaders()
  .set("X-CSRF-Token", this.itr.token)
  .set("Content-Type", "application/json")
  .set("X-Cookie", this.itr.session_name + "=" + this.itr.sessid);

const requestOptions = {
  headers: headers,
  withCredentials: true,
};
 return this.http.get('http://gowebtutorial.com/api/json/privatemsg/' + this.thread ,requestOptions).subscribe(getMessages => {
   this.message = getMessages.messages 
   console.log(getMessages);});    
  }
}
  
}
