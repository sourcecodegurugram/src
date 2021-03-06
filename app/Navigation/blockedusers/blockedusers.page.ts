import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
@Component({
  selector: 'app-blockedusers',
  templateUrl: './blockedusers.page.html',
  styleUrls: ['./blockedusers.page.scss'],
})
export class BlockedusersPage implements OnInit {
  scope: any;
  itrs: any;
  allfavorate: any;
  listFavorate: any;
  ParseFavorate: any;
  field_favorite_users: Array<any>;
  uniqueFavorite;
  constructor(private http: HttpClient) { }

 
  ngOnInit() {
    this.itrs = JSON.parse(localStorage.getItem("currentUser"));
    this.http
      .get("https://gowebtutorial.com/api/json/user/" + this.itrs.user.uid)
      .subscribe((users) => {
        this.allfavorate = users;
        this.listFavorate = this.allfavorate.field_block_users.und[0].value;
        this.ParseFavorate = JSON.parse(this.listFavorate);
​
        this.uniqueFavorite = this.removeDuplicatesBy(
          (x) => x[0].name,
          this.ParseFavorate
        );
​
        console.log(this.uniqueFavorite);
        console.log(this.ParseFavorate);
      });
  }
​
  removeDuplicatesBy(keyFn, array) {
    var mySet = new Set();
    return array.filter(function (x) {
      var key = keyFn(x),
        isNew = !mySet.has(key);
      if (isNew) mySet.add(key);
      return isNew;
    });
  }
}