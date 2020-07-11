import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Blog } from './blog';
import { environment } from '../environments/environment';
const httpOptions = {
  headers: new HttpHeaders({ 
    'Content-Type': 'application/json',
  })
};

// @Injectable({
//   providedIn: 'root'
// })
// export class BlogService {

//   private API_URL = environment.apiUrl;
//   constructor(private http: HttpClient) { }
//   getBlogs(id: string): Observable<Blog[]> {
//     console.log(id);
//     if (id) {
//       return this.http.get<Blog[]>(this.API_URL + '/api/json/node/article/' + id);
//     }
//     else {
//       return this.http.get<Blog[]>(this.API_URL + '/api/json/node/article?sort=-created');
//     }
//   }
// }
