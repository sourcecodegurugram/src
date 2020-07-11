import { Component, OnInit, Inject } from '@angular/core';
import { VERSION, MatDialogRef, MatDialog, MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ActivatedRoute, Router } from "@angular/router";
import {AuthService} from "../../../auth.service"
@Component({
  selector: 'app-alert-profile-dialog',
  templateUrl: './alert-profile-dialog.component.html',
  styleUrls: ["./alert-profile-dialog.component.scss"],
})
export class AlertProfileDialogComponent {
  message: string = ""
  cancelButtonText = "Cancel"
    itrs: any;
    logoutUrl = "https://gowebtutorial.com/api/json/user/logout";
    isLoading:boolean=false;
  head: void;
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<AlertProfileDialogComponent>,private http:HttpClient, private router: Router,private AuthService:AuthService) {
    if (data) {
      this.message = data.message || this.message;
      if (data.buttonText) {
        this.cancelButtonText = data.buttonText.cancel || this.cancelButtonText;
      }
    }
    this.dialogRef.updateSize('300vw','300vw')
  }
  ngOnInit() {
    this.itrs = JSON.parse(localStorage.getItem("currentUser"));
  }
  logOut() {
    
    this.isLoading=true
    this.itrs = JSON.parse(localStorage.getItem("currentUser"));
    const headers = new HttpHeaders()
      .set("X-CSRF-Token", this.itrs.token)
      .set("Content-Type", "application/json")
      .set("X-Cookie", this.itrs.session_name + "=" + this.itrs.sessid);
    const requestOptions = {
      headers: headers,
      withCredentials: true,
    };
    this.http.post<any>(this.logoutUrl, {},requestOptions).subscribe((head) => {
   
      this.isLoading=false
      this.onConfirmClick()
        localStorage.clear();
        this.router.navigate(["/"]);
      });
  }
  onConfirmClick(): void {
   
    this.dialogRef.close(true);
  }

}