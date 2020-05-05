import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: "root"
})
export class ConfigService {
  articleUrl="http://latdating.dd:8083/api/json/user.json";
  constructor(private http: HttpClient) { }

  getArticle() {
    return this.http.get(this.articleUrl);
    }
}
