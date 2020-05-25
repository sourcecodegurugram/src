import { Component, OnInit } from '@angular/core';
import {ConfigService} from '../config.service'
import { Blog } from '../blog';
import { BlogService } from '../blog.service';
import { config } from '../config';
import { environment } from '../../environments/environment';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AlertController } from '@ionic/angular';
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
  isLoading:boolean=false;
  logoutUrl="http://gowebtutorial.com/api/json/user/logout"
  url = "http://latdating.dd:8083/api/json/system/connect";
  headerDict:any;
  itrs: any;
  constructor(private Configservice: ConfigService,
    private blogService: BlogService,
              private route: ActivatedRoute,
              private router: Router,
              private http: HttpClient,
              public _location: Location,
              public alertController: AlertController) { }
 
  ngOnInit() {

    this.itrs=JSON.parse(localStorage.getItem("currentUser"));
      
    console.log("Nav" + " "+ this.itrs.token)

  }




  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  humburgereffect()
  {
    this.correctAlert();
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
async correctAlert() {
  const correct = await this.alertController.create({
    message: 'Logged In',
    buttons: ['OK']
  });

  await correct.present();
}


logOut()
{
  let headers = new HttpHeaders();
 console.log(this.itrs.token)

 headers = headers.set('X-CSRF-Token',  this.itrs.token);
console.log({headers: headers})
 this.http.post(this.logoutUrl,  {headers: headers}).subscribe((head)=>{
   console.log(head)
 });



}
}
