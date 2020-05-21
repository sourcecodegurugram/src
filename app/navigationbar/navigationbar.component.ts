import { Component, OnInit } from '@angular/core';
import {ConfigService} from '../config.service'
import { Blog } from '../blog';
import { BlogService } from '../blog.service';
import { config } from '../config';
import { environment } from '../../environments/environment';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Location } from '@angular/common';
@Component({
  selector: 'app-navigationbar',
  templateUrl: './navigationbar.component.html',
  styleUrls: ['./navigationbar.component.scss'],
})
export class NavigationbarComponent implements OnInit {
  crossSign:boolean = false;
  humBurger:boolean = true;
  mainMenu:boolean =false;
  mainMenuItem :boolean = true;
  blogs: Blog[];
  config: config;
  public id: string = null;
  private sub: any;
  post: Object;
  logggenIn:boolean =false
  username: any;
  password: any;
  user: string;
  pass: string;
  isLoading:boolean=false
  url = "http://latdating.dd:8083/api/json/system/connect";
  headerDict:any;
  constructor(private Configservice: ConfigService,
    private blogService: BlogService,
              private route: ActivatedRoute,
              private router: Router,
              private http: HttpClient,
              public _location: Location) { }
 
  ngOnInit() {
    // this.Configservice.getArticle()
    //   .subscribe(data => {
    //     this.post = data;
    //    console.log(data)
    //   });

  }




  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  humburgereffect()
  {
    this.crossSign = true;
    this.humBurger = false;
    this.mainMenu = true;
  }
  humBurgerCross()
  {
    this.crossSign = false;
    this.humBurger = true;
    this.mainMenu =false;
  }
  itemclick()
  {
    this.mainMenu = false; 
    this.crossSign = false;
    this.humBurger = true;
  }

  LoginOpen()
  {

    if(this.logggenIn==false)
    {
  this.logggenIn=true
    }
    else if( this.logggenIn==true)
    {
      this.logggenIn=false
    }
  }


  LoginForm(user,pass)
  {
    console.log(user,pass)
    this.http.post<any>('http://gowebtutorial.com/api/json/user/login',{username: user,password:pass}).subscribe(data => {
            this.post = data.token;
            this.headerDict ={"X-CSRF-Token":data.token};
           });
           return this.http.post(this.url,{headers: new HttpHeaders(this.headerDict)}),
           this.logggenIn=false
}

close()
{
  this.isLoading=false
}
refresh() {
  
 
    this.router.navigate(['/']);

  
  
}
}
