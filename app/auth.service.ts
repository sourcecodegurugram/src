import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpResponse,
  HttpErrorResponse,
} from "@angular/common/http";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";
@Injectable({
  providedIn: "root",
})
export class AuthService {
  post: any;
  itr: any;
  url = "https://gowebtutorial.com/api/json/system/connect";
  loggedInItem: any;
  constructor(private http: HttpClient, private router: Router) {}

  loginUser(user, pass): Observable<any> {
    return this.http.post<any>(
      "https://gowebtutorial.com/api/json/user/login",
      { username: user, password: pass }
    );
  }

  systemConnect() {
    this.itr = JSON.parse(localStorage.getItem("currentUser"));
    const headers = new HttpHeaders()
      .set("X-CSRF-Token", this.itr.token)
      .set("Content-Type", "application/json")
      .set("X-Cookie", this.itr.session_name + "=" + this.itr.sessid);
    const requestOptions = {
      headers: headers,
      withCredentials: true,
    };
    return this.http.post<any>(this.url, {}, requestOptions);
  }

  header()
  {
    this.itr = JSON.parse(localStorage.getItem("currentUser"));
    const headers = new HttpHeaders()
      .set("X-CSRF-Token", this.itr.token)
      .set("Content-Type", "application/json")
      .set("X-Cookie", this.itr.session_name + "=" + this.itr.sessid);
    const requestOptions = {
      headers: headers,
      withCredentials: true,
    };
  }
}
