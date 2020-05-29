import { Component, OnInit } from "@angular/core";
import { MatTabChangeEvent } from "@angular/material/tabs";
import { ActivatedRoute, Router } from "@angular/router";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AlertController } from "@ionic/angular";

@Component({
  selector: "app-signin",
  templateUrl: "./signin.page.html",
  styleUrls: ["./signin.page.scss"],
})
export class SigninPage implements OnInit {
  maxNumberOfTabs = 5;
  selectedIndex = 0;
  headerDict: any;
  url = "https://gowebtutorial.com/api/json/system/connect";
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
  LoggedIn:boolean=true
  constructor(
    private router: Router,
    private http: HttpClient,
    public alertController: AlertController
  ) {}

  ngOnInit() {
    this.itrs = JSON.parse(localStorage.getItem("currentUser"));
   if(this.itrs == null)
   {
     this.LoggedIn=false
   }
   else
   {
     this.LoggedIn=true
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
    this.selectedIndex += 1;
  }

  LoginForm(user, pass) {
    this.http
      .post<any>("https://gowebtutorial.com/api/json/user/login", {
        username: user,
        password: pass,
      })
      .subscribe((data) => {
        this.post = data;
        localStorage.setItem("currentUser", JSON.stringify(data));
        this.itr = JSON.parse(localStorage.getItem("currentUser"));
        console.log(this.itr);

        const headers = new HttpHeaders()
          .set("X-CSRF-Token", this.itr.token)
          .set("Content-Type", "application/json")
          .set("X-Cookie", this.itr.session_name + "=" + this.itr.sessid);

        const requestOptions = {
          headers: headers,
          withCredentials: true,
        };

        this.http.post<any>(this.url, {}, requestOptions).subscribe((head) => {
          console.log(
            "This is the response after sending token to connect " +
              JSON.stringify(head)
          );

          localStorage.setItem("Signinuser", JSON.stringify(head));
          console.log(head)
          this.LoggedIn=false
          window.location.reload();
        
        });
      
      });
  }

  async correctAlert() {
    const correct = await this.alertController.create({
      message: "Logged In",
      buttons: ["OK"],
    });

    await correct.present();
  }
}
