import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { HttpClient, HttpHeaders } from "@angular/common/http";
@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.page.html',
  styleUrls: ['./new-message.page.scss'],
})
export class NewMessagePage implements OnInit {
  sub: any;
  uid: string;
  itr: any;
  Subject: any;
  Message: any;
  name: string;

  constructor( private _Activatedroute: ActivatedRoute,private http: HttpClient,private router: Router) { }

  ngOnInit() {
    this.itr = JSON.parse(localStorage.getItem("currentUser"));
    this.sub = this._Activatedroute.paramMap.subscribe((params) => {
      this.uid = params.get("uid");
      this.name= params.get("name");
    })
  }




  sendMessage()
  {
    console.log(this.uid)
    const headers = new HttpHeaders()
    .set("X-CSRF-Token", this.itr.token)
    .set("Content-Type", "application/json")
    .set("X-Cookie", this.itr.session_name + "=" + this.itr.sessid);

  const requestOptions = {
    headers: headers,
    withCredentials: true,
  };
  return this.http
    .post("http://gowebtutorial.com/api/json/privatemsg",
    {
      recipients: this.name,
      subject:this.Subject,
      body:this.Message
    }
    , requestOptions)
    .subscribe((getMessagesSend) => {
      console.log(getMessagesSend)
      this.router.navigate(["/chat/tabs2"]);
    });
  }
}
