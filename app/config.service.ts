import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: "root"
})
export class ConfigService {
  articleUrl="https://gowebtutorial.com/api/json/user.json";
  userUrl="https://gowebtutorial.com/api/json/user/"; 
  hobbieUrl="https://gowebtutorial.com/api/json/hobbies-json";
  postalUrl="https://gowebtutorial.com/api/json/post-json?postal_code=";


  constructor(private http: HttpClient) { }

  getArticle() {
    return this.http.get(this.articleUrl);
    }

    getUser(uid)
    {
      return this.http.get(this.userUrl + uid)
    }

    getHobbies()
    {
      return this.http.get(this.hobbieUrl)
    }
    getPostal(post)
    {
      return this.http.get(this.postalUrl + post)
    }
    
}
