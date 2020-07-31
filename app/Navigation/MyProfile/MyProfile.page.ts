import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";
@Component({
  selector: "app-MyProfile",
  templateUrl: "./MyProfile.page.html",
  styleUrls: ["./MyProfile.page.scss"],
})
export class MyProfilePage implements OnInit {
  crossSign: boolean = false;
  humBurger: boolean = true;
  mainMenu: boolean = false;
  mainMenuItem: boolean = true;
  public id: string = null;
  private sub: any;
  post: Object;
  logggenIn: boolean = false;
  username: any;
  password: any;
  user: string;
  pass: string;
  isLoading: boolean = false;
  logoutUrl = "https://gowebtutorial.com/api/json/user/logout";
  url = "https://latdating.dd:8083/api/json/system/connect";
  headerDict: any;
  itrs: any;
  userlogged: void;
  name: any;
  uid: any;
  activity: any;
  Email: any;
  DOB: any;
  fname: any;
  lname: any;
  isLoogedIn: boolean = false;
  picture;
  token = "https://gowebtutorial.com/api/json/user/token";
  newPicture: any;
  constructor(private _location: Location) { }

  ngOnInit() {
    this.itrs = JSON.parse(localStorage.getItem("currentUser"));
    if (this.itrs == null) {
      this.isLoogedIn = false;
    } else if (this.itrs.user != null) {
      this.isLoogedIn = true;
      this.name = this.itrs.user.name;
      this.activity = this.itrs.user.field_activities_interests.und;
      this.Email = this.itrs.user.mail;
      //this.DOB = this.itrs.user.field_birth_date.und[0].value;
      this.fname = this.itrs.user.field_first_name.und[0].value;
      this.lname = this.itrs.user.field_last_name.und[0].value;
      this.picture = this.itrs.user.picture.url;
      this.newPicture = this.itrs.user.field_temp_pic_field
      this.userlogged = JSON.parse(localStorage.getItem("Signinuser"));
  
    }
  }
  backClicked() {
    this._location.back();
  }
}
