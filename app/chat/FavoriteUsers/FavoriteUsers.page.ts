import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
@Component({
  selector: "app-FavoriteUsers",
  templateUrl: "./FavoriteUsers.page.html",
  styleUrls: ["./FavoriteUsers.page.scss"],
})
export class FavoriteUsersPage implements OnInit {
  scope: any;
  itrs: any;
  allfavorate: any;
  listFavorate: any;
  ParseFavorate: any;
  field_favorite_users: Array<any>;
  uniqueFavorite;
  constructor(private http: HttpClient) {}
​
  ngOnInit() {
    this.itrs = JSON.parse(localStorage.getItem("currentUser"));
    this.http
      .get("https://gowebtutorial.com/api/json/user/" + this.itrs.user.uid)
      .subscribe((users) => {
        this.allfavorate = users;
        if(this.allfavorate.field_favorite_users.length == undefined){
        this.listFavorate = this.allfavorate.field_favorite_users.und[0].value;
        this.ParseFavorate = JSON.parse(this.listFavorate);
        this.uniqueFavorite = this.removeDuplicatesBy(
          (x) => x[0].name,
          this.ParseFavorate
        );
      }
      });
      

​
       
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