import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
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
  constructor(private http: HttpClient,) { }

  ngOnInit() {
    this.itr = JSON.parse(localStorage.getItem("currentUser"));
    console.log(this.itr)
   
    this.userlogged= JSON.parse(localStorage.getItem("Signinuser"));
    if(this.itr!=null)
    {
    console.log(this.itr.token+ " " + this.itr.session_name  + " " + this.itr.sessid)
    const headers = new HttpHeaders()
    .set("X-CSRF-Token", this.itr.token)
    .set("Content-Type", "application/json")
    .set("X-Cookie", this.itr.session_name + "=" + this.itr.sessid);

  const requestOptions = {
    headers: headers,
    withCredentials: true,
  };
   return this.http.get('http://gowebtutorial.com/api/json/privatemsg/',requestOptions).subscribe(getMessages => {
     this.messages = getMessages 
  console.log(this.messages)
    for(let i=0;i>this.messages.length;i++)
     {
         console.log(this.messages[i])
     }
  
  ;});    
   
    }




 




  }

  click()
  {
   
    console.log(this.itr.token+ " " + this.itr.session_name  + " " + this.itr.sessid)
    const headers = new HttpHeaders()
    .set("X-CSRF-Token", this.itr.token)
    .set("Content-Type", "application/json")
    .set("X-Cookie", this.itr.session_name + "=" + this.itr.sessid);

  const requestOptions = {
    headers: headers,
    withCredentials: true,
  };
   return this.http.get('http://gowebtutorial.com/api/json/privatemsg/',requestOptions).subscribe(getMessages => {
     console.log(getMessages);});    
  }
}
