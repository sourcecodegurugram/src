import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Location } from "@angular/common";
import { AlertController } from "@ionic/angular";

@Component({
  selector: 'app-newchatsupport',
  templateUrl: './newchatsupport.page.html',
  styleUrls: ['./newchatsupport.page.scss'],
})
export class NewchatsupportPage implements OnInit {
  sub: any;
  uid: string;
  itr: any;
  Subject: any;
  Message: any;
  name: string;
  isLoading:boolean=false
  image: any;
  chatSupports:any
  messages;
  participatnts: any;
  pmtId: any;
  isLoggedIn:boolean = false
  constructor(private _Activatedroute: ActivatedRoute,private http: HttpClient,private router: Router,private _location:Location,  public alertController: AlertController,) { }

  ngOnInit() {
    this.itr = JSON.parse(localStorage.getItem("currentUser"));
    if(this.itr == null)
    {
      this.router.navigate(["/notLoggedIn"]);
    }
    else
    {
      this.isLoggedIn = true
      this.getAllChat()
    }
   
  }
  sendMessage()
  {
   this.isLoading = true;
    const headers = new HttpHeaders()
    .set("X-CSRF-Token", this.itr.token)
    .set("Content-Type", "application/json")
    .set("X-Cookie", this.itr.session_name + "=" + this.itr.sessid);
  const requestOptions = {
    headers: headers,
    withCredentials: true,
  };
  return this.http
    .post("https://gowebtutorial.com/api/json/privatemsg",
    {
      recipients: this.name,
      subject:this.Subject,
      body:this.Message
    },requestOptions)
    .subscribe((getMessagesSend) => {
      console.log(getMessagesSend)
      this.participatnts = getMessagesSend
       this.pmtId =  this.participatnts.pmtid
       console.log(this.pmtId)
      this.isLoading =false
     this.router.navigate(["/chatsupport/" + this.pmtId]);
    });
  }
  backClicked() {
    this._location.back();
  }
  getAllChat()
  {
    return this.http
    .get("https://gowebtutorial.com/api/json/user/204451").subscribe(chatSupport=>{
      this.chatSupports = chatSupport
      this.image = this.chatSupports.picture.filename
      this.name  = this.chatSupports.name
      this.uid = this.chatSupports.uid
      console.log(this.chatSupports)
    });
  }
  async correctAlert() {
    const correct = await this.alertController.create({
      message: " chat for help",
      buttons: ["OK"],
    });

    await correct.present();
  }
}
