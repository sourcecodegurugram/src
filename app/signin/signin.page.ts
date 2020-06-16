import { Component, OnInit } from "@angular/core";
import { MatTabChangeEvent } from "@angular/material/tabs";
import { ActivatedRoute, Router } from "@angular/router";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AlertController } from "@ionic/angular";
import {AuthService} from "../auth.service";

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
  isLoading:boolean =false;
  signIn: any;
  siginUser: any;
  UserDetails: any;
  constructor(
    private router: Router,
    private http: HttpClient,
    public alertController: AlertController,
    public AuthService:AuthService
  ) {}

  ngOnInit() {
   
    this.siginUser = JSON.parse(localStorage.getItem("currentUser"));
    this.isLoading =true
     if (this.siginUser!=null) {
      this.AuthService.systemConnect().subscribe(UserLoggedIn=>
      {
        localStorage.setItem("Signinuser", JSON.stringify(UserLoggedIn))
        this.UserDetails = UserLoggedIn
        if(this.UserDetails != null)
        {
          this.router.navigate(['/find-friends'])
        }
      })
    } 
    else
    {
      this.isLoading =false
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
    this.isLoading =true
   this.AuthService.loginUser(user, pass).subscribe(userDetail=>{
    localStorage.setItem("currentUser", JSON.stringify(userDetail));
    this.AuthService.systemConnect().subscribe(UserLoggedIn=>
      {
        localStorage.setItem("Signinuser", JSON.stringify(UserLoggedIn))
        this.UserDetails = UserLoggedIn
     
        if(this.UserDetails != null)
        {
          this.router.navigate(['/find-friends'])
        }
      })

   })
  
 
  }

  async correctAlert() {
    const correct = await this.alertController.create({
      message: "Please Provide Valid Details",
      buttons: ["OK"],
    });

    await correct.present();
  }
}
