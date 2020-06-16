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
  allfavorate:any;
  listFavorate: any;
  ParseFavorate: any;
  field_favorite_users: Array<any>
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.itrs = JSON.parse(localStorage.getItem("currentUser"));
    this.http.get('https://gowebtutorial.com/api/json/user/' + this.itrs.user.uid).subscribe(users => {
      this.allfavorate = users
      this.listFavorate = this.allfavorate.field_favorite_users.und[0].value
      this.ParseFavorate = JSON.parse(this.listFavorate) 
      console.log(this.ParseFavorate)

    })


  }

}
