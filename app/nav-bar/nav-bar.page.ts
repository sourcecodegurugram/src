import { Component, OnInit } from '@angular/core';
import { ConfigService } from "../config.service";
import { Blog } from "../blog";
import { config } from "../config";
import { environment } from "../../environments/environment";
import { ActivatedRoute, Router } from "@angular/router";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AlertController } from "@ionic/angular";
import { Location } from "@angular/common";
import {AuthService} from '../auth.service'
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.page.html',
  styleUrls: ['./nav-bar.page.scss'],
})
export class NavBarPage implements OnInit {

  crossSign: boolean = false;
  humBurger: boolean = true;
  mainMenu: boolean = false;
  mainMenuItem: boolean = true;
  blogs: Blog[];
  config: config;
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
  uid:any;
  activity: any;
  Email: any;
  DOB: any;
  fname: any;
  lname: any;
  isLoogedIn:boolean=false;
  token="https://gowebtutorial.com/api/json/user/token"
  constructor(
    private Configservice: ConfigService,

    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    public _location: Location,
    public alertController: AlertController,
    private AuthService:AuthService
  ) {}

  ngOnInit() {
    this.itrs = JSON.parse(localStorage.getItem("currentUser"));
  if(this.itrs.user != null)
  {
    this.isLoogedIn=true
    this.name = this.itrs.user.name
  this.activity = this.itrs.user.field_activities_interests.und
  this.Email = this.itrs.user.mail
  this.DOB= this.itrs.user.field_birth_date.und[0].value
  this.fname= this.itrs.user.field_first_name.und[0].value
  this.lname =this.itrs.user.field_last_name.und[0].value
   this.userlogged= JSON.parse(localStorage.getItem("Signinuser"));

  }
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  humburgereffect() {
    this.correctAlert();
  }
  humBurgerCross() {
    this.crossSign = false;
    this.humBurger = true;
    this.mainMenu = false;
  }
  itemclick() {
    this.mainMenu = false;
    this.crossSign = false;
    this.humBurger = true;
  }

  LoginOpen() {
    if (this.logggenIn == false) {
      this.logggenIn = true;
    } else if (this.logggenIn == true) {
      this.logggenIn = false;
    }
  }

  LoginForm(user, pass) {
    this.http
      .post<any>("https://gowebtutorial.com/api/json/user/login", {
        username: user,
        password: pass,
      })
      .subscribe((data) => {
        this.post = data.token;
        this.headerDict = { "X-CSRF-Token": data.token };
      });
    return (
      this.http.post(this.url, { headers: new HttpHeaders(this.headerDict) }),
      (this.logggenIn = false)
    );
  }

  close() {
    this.isLoading = false;
  }
  refresh() {
    this.router.navigate(["/"]);
  }
  async correctAlert() {
    const correct = await this.alertController.create({
      message: " chat for help",
      buttons: ["OK"],
    });

    await correct.present();
  }

  logOut() {
    const headers = new HttpHeaders()
    .set("X-CSRF-Token", this.itrs.token)
    .set("Content-Type", "application/json")
          .set("X-Cookie", this.itrs.session_name + "=" + this.itrs.sessid);

  const requestOptions = {
    headers: headers,
    withCredentials: true,
  };

  this.http.post<any>(this.logoutUrl, {}, requestOptions).subscribe((head) => {
    console.log(head);
  localStorage.clear();
  window.location.reload();
  });



    
  }
}