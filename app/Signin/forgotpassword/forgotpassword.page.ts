import { Component, OnInit } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpResponse,
  HttpErrorResponse,
} from "@angular/common/http";
import { Location } from "@angular/common";
import { AlertController } from "@ionic/angular";
import {AuthService} from "../../auth.service";
import { catchError, retry } from "rxjs/operators";
import { Observable, throwError } from "rxjs";
@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.page.html',
  styleUrls: ['./forgotpassword.page.scss'],
})
export class ForgotpasswordPage implements OnInit {
  isLoading:boolean = false
  constructor(private http: HttpClient,
    public _location: Location,
    public alertController: AlertController,
    public AuthService:AuthService) { }

  ngOnInit() {
  }


  resetPassword(user)
  {
    this.isLoading = true
    this.AuthService.forgotUser(user)
    .pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status == 406) {
          this.wrongUser();
        } 
        this.isLoading = false;
        return throwError(this.something());
      })
    )
    .subscribe((userDetail) => {
      this.isLoading = false;
    this.Alert()
    });
  }
  locationBack() {
    this._location.back() 
  }

  async Alert() {
    const alert = await this.alertController.create({
      message: "We have sent a password reset request to your registered email",
      buttons: ["OK"],
    });
    this.locationBack() 
    await alert.present();
  }

  async wrongUser() {
    const alert = await this.alertController.create({
      message: "Wrong username or email id",
      buttons: ["OK"],
    });

    await alert.present();
  }
  async something() {
    // const correct = await this.alertController.create({
    //   message: "Something bad happened; please try again later.",
    //   buttons: ["OK"],
    // });
    // await correct.present();
  }

}
