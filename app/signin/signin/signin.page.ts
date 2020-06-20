import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTabChangeEvent } from "@angular/material/tabs";
import { ActivatedRoute, Router } from "@angular/router";
import { AlertController } from "@ionic/angular";
import { AuthService } from "../../auth.service";
import { RouterOutlet, ActivationStart } from "@angular/router";
import { catchError, retry } from "rxjs/operators";
import { Observable, throwError } from "rxjs";
import {
  HttpClient,
  HttpHeaders,
  HttpResponse,
  HttpErrorResponse,
} from "@angular/common/http";

@Component({
  selector: "app-signin",
  templateUrl: "./signin.page.html",
  styleUrls: ["./signin.page.scss"],
})
export class SigninPage implements OnInit {
  maxNumberOfTabs = 5;
  selectedIndex = 0;
  headerDict: any;
  url = "http://gowebtutorial.com/api/json/system/connect";
  post: any;
  user: any;
  pass: any;
  password: any;
  currentUserSubject: any;
  newdata: any;
  datas: any;
  itr: any;
  data: any;
  itrs: any;
  token: any;
  LoggedIn: boolean = true;
  isLoading: boolean = false;
  signIn: any;
  siginUser: any;
  UserDetails: any;

  constructor(
    private router: Router,
    private http: HttpClient,
    public alertController: AlertController,
    public AuthService: AuthService
  ) {}

  ngOnInit() {
    this.siginUser = JSON.parse(localStorage.getItem("currentUser"));
    if (this.siginUser == null) {
      this.isLoading = false;
    } else if (this.siginUser != null) {
      this.isLoading = true;
      this.AuthService.systemConnect().subscribe((UserLoggedIn) => {
        localStorage.setItem("Signinuser", JSON.stringify(UserLoggedIn));
        this.UserDetails = UserLoggedIn;
        if (this.UserDetails != null) {
          this.isLoading = false;
          this.router.navigate(["/find-friends"]);
        }
      });
    }
  }

  public tabChanged(tabChangeEvent: MatTabChangeEvent): void {
    this.selectedIndex = tabChangeEvent.index;
  }
  public nextStep() {
    this.selectedIndex += 1;
  }

  public previousStep() {
    this.selectedIndex -= 1;
  }
  public nextSteps() {
    this.LoginForm(this.user, this.password);
  }

  LoginForm(user, pass) {
    this.isLoading = true;
    this.AuthService.loginUser(user, pass)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status == 401) {
            this.username();
          } else if (error.status == 403) {
            this.notActivated();
          }
          this.isLoading = false;
          return throwError(this.something());
        })
      )
      .subscribe((userDetail) => {
        localStorage.setItem("currentUser", JSON.stringify(userDetail));
        this.AuthService.systemConnect().subscribe((UserLoggedIn) => {
          localStorage.setItem("Signinuser", JSON.stringify(UserLoggedIn));
          this.UserDetails = UserLoggedIn;
          if (this.UserDetails != null) {
            this.router.navigate(["/find-friends"]);
          }
          console.log(UserLoggedIn);
        });
      });
  }

  async correctAlert() {
    const correct = await this.alertController.create({
      message: "Please Provide Valid Details",
      buttons: ["OK"],
    });
    await correct.present();
  }
  async username() {
    const correct = await this.alertController.create({
      message: "Your username or password is incorrect",
      buttons: ["OK"],
    });
    await correct.present();
  }
  async notActivated() {
    const correct = await this.alertController.create({
      message: "The username  has not been activated or is blocked",
      buttons: ["OK"],
    });
    await correct.present();
  }
  async something() {
    // const correct = await this.alertController.create({
    //   message: "Something bad happened; please try again later.",
    //   buttons: ["OK"],
    // });
    // await correct.present();
  }
}
