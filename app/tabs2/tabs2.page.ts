import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
@Component({
  selector: 'app-tabs2',
  templateUrl: './tabs2.page.html',
  styleUrls: ['./tabs2.page.scss'],
})
export class Tabs2Page implements OnInit {
  logged: any;
  userlogged: any;
  itr: any;
  url = "https://gowebtutorial.com/api/json/system/connect";
  headerDict: any;
  messages: any;
  user:any
  uses: any;
  messag: Object;
  obj:any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.itr = JSON.parse(localStorage.getItem("currentUser"));
    this.userlogged= JSON.parse(localStorage.getItem("Signinuser"));
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
   return this.http.get('http://gowebtutorial.com/api/json/chat-user/',requestOptions).subscribe(getMessages =>{

   this.messages = Object.keys(getMessages).map(function(key) {
   return [ getMessages[key]];});
  console.log(this.messages);
    })
  
  }
    


    



 




  }

  click()
  {
    const headers = new HttpHeaders()
    .set("X-CSRF-Token", this.itr.token)
    .set("Content-Type", "application/json")
    .set("X-Cookie", this.itr.session_name + "=" + this.itr.sessid);

  const requestOptions = {
    headers: headers,
    withCredentials: true,
  };
   return this.http.get('http://gowebtutorial.com/api/json/privatemsg/',requestOptions).subscribe(getMessages => {});    
  }
}
