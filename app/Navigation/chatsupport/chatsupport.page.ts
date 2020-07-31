import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router, ActivatedRoute } from "@angular/router";
import { FormControl, FormGroup, Validators } from "@angular/forms";
@Component({
  selector: 'app-chatsupport',
  templateUrl: './chatsupport.page.html',
  styleUrls: ['./chatsupport.page.scss'],
})
export class ChatsupportPage implements OnInit {
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
  chatSupports:any;
  participants;
  counterpartParticipants = [];
  constructor(private http: HttpClient,
    private _Activatedroute: ActivatedRoute) { }

  ngOnInit() {
    this.itr = JSON.parse(localStorage.getItem("currentUser"));
    this.sub = this._Activatedroute.paramMap.subscribe((params) => {
      this.thread = params.get("pmtId");
    });
    this.getAllChat()
    this.getChat()
    
    
    

    
   
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
    getAllChat()
    {
      return this.http
      .get("https://gowebtutorial.com/api/json/user/204451").subscribe(chatSupport=>{
        this.chatSupports = chatSupport
        this.image = this.chatSupports.picture.filename
        this.name  = this.chatSupports.name
      });
    }
 
}
