import { Component, OnInit } from "@angular/core";
import { ConfigService } from "../../config.service";
import { config } from "../../config";
import { environment } from "../../../environments/environment";
import { ActivatedRoute, Router, RouterLink } from "@angular/router";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AlertController } from "@ionic/angular";
import { Location } from "@angular/common";
import { AuthService } from "../../auth.service";
import {
  VERSION,
  MatDialogRef,
  MatDialog,
  MatSnackBar,
  MAT_DIALOG_DATA,
} from "@angular/material";
import { AlertProfileDialogComponent } from "./alert-profile/alert-profile-dialog.component";

@Component({
  selector: "app-navigationbar",
  templateUrl: "./navigationbar.component.html",
  styleUrls: ["./navigationbar.component.scss"],
})
export class NavigationbarComponent implements OnInit {
  version = VERSION;
  crossSign: boolean = false;
  humBurger: boolean = true;
  mainMenu: boolean = false;
  mainMenuItem: boolean = true;
  config: config;
  public id: string = null;
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
  back: boolean = true;
  backLogged:boolean = false
  token = "https://gowebtutorial.com/api/json/user/token";
  userCheck: any;
  constructor(
    private Configservice: ConfigService,
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    public _location: Location,
    public alertController: AlertController,
    private AuthService: AuthService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.loginCheck();
    
  }

  humburgereffect() {
    this.router.navigate(["/newchatsupport"])
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
    this.loginCheck();
    this.itrs = JSON.parse(localStorage.getItem("currentUser"));
    this.userCheck = JSON.parse(localStorage.getItem("UpdateData"));



    if (
      this.userCheck != null) {
      if (this.userCheck.field_already_declared.und == undefined) {

        this.router.navigate(["/topHobbies"]);
      }
      if (this.userCheck.field_already_declared.und.length == 1) {
        this.router.navigateByUrl('/find-friends', { skipLocationChange: false }).then(() => {
          location.reload()
          this.router.navigate(["/find-friends"])
        });
        
   
 
      }
    }
    else {
      this.router.navigateByUrl('/welcome', { skipLocationChange: false }).then(() => {
        this.router.navigate(["/welcome"]);
      });
    }

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

    this.http
      .post<any>(this.logoutUrl, {}, requestOptions)
      .subscribe((head) => {
        console.log(head);
        localStorage.clear();
        this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {

        });
        // this.router.navigate(["/welcome"]);
      });
  }
  openAlertDialog() {
    const dialogRef = this.dialog.open(AlertProfileDialogComponent, {
      data: {
        message: "HelloWorld",
        buttonText: {
          cancel: "Done",
        },
      },
    });
  }

  loginCheck() {
    this.itrs = JSON.parse(localStorage.getItem("currentUser"));

    if (this.itrs == null) {
      this.isLoogedIn = false;
      this.backLogged = false
    if (this.route.routeConfig.component.name == 'WelcomePage') {
      this.back = false
      this.backLogged = false
    }
    } else if (this.itrs.user != null) {
      this.isLoogedIn = true;
      this.name = this.itrs.user.name;
      this.activity = this.itrs.user.field_activities_interests.und;
      this.Email = this.itrs.user.mail;
       this.backLogged = true   
       this.back = false
    if (this.route.routeConfig.component.name == 'WelcomePage') {
      this.back = false
      this.backLogged = false
    
    }
      //this.DOB = this.itrs.user.field_birth_date.und[0].value;
      this.fname = this.itrs.user.field_first_name.und[0].value;
      this.lname = this.itrs.user.field_last_name.und[0].value;
      this.userlogged = JSON.parse(localStorage.getItem("Signinuser"));
    }

  }
}
