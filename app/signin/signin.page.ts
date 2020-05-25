import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from "@angular/material/tabs";
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
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
  newdata:any;
  datas: any;
  itr:any;
  data: any;
  itrs: any;
  token:any;
  constructor( private router: Router,
    private http: HttpClient,public alertController: AlertController) { }

  ngOnInit() {
    this.itrs=JSON.parse(localStorage.getItem("currentUser"));
      
    console.log(this.itrs.token)
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
    this.LoginForm(this.user,this.password)
    this.selectedIndex += 1;
  }
  

  LoginForm(user,pass)
  {






    console.log(user,pass)
    this.http.post<any>('https://gowebtutorial.com/api/json/user/login',{username:user,password:pass}).subscribe(data => {
            this.post = data;
            console.log(data)
            localStorage.setItem('currentUser', JSON.stringify(data));

            this.itr=JSON.parse(localStorage.getItem("currentUser"));
            console.log(this.itr.token)

         
            let headers = new HttpHeaders();
            
            headers = headers.set('X-CSRF-Token',  this.itr.token);
           console.log({headers: headers})
            this.http.post(this.url,  {headers: headers}).subscribe((head)=>{
              console.log(head)
            });
       

           });
           
          }   
          async correctAlert() {
            const correct = await this.alertController.create({
              message: 'Logged In',
              buttons: ['OK']
            });
        
            await correct.present();
          }
}
