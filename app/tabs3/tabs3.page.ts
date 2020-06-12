import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
@Component({
  selector: 'app-tabs3',
  templateUrl: './tabs3.page.html',
  styleUrls: ['./tabs3.page.scss'],
})
export class Tabs3Page implements OnInit {
  scope: any;
  itrs: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.itrs = JSON.parse(localStorage.getItem("currentUser"));
    // this.http.get('http://gowebtutorial.com/api/json/user/'+ this.itrs.user.uid).subscribe(users=>{
    //   console.log(users.field_favorite_users.und[0].value)
    //   this.scope = users.field_favorite_users.und[0].value.split(" ");
    //   console.log(this.scope)
    // })
  }

}
