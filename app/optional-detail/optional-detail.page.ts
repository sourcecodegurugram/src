import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from "@angular/material/tabs";
import {
  HttpClient,
  HttpHeaders,
  HttpHeaderResponse,
} from "@angular/common/http";
import { Router, ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import {ConfigService} from "../config.service"
@Component({
  selector: 'app-optional-detail',
  templateUrl: './optional-detail.page.html',
  styleUrls: ['./optional-detail.page.scss'],
})
export class OptionalDetailPage implements OnInit {
  maxNumberOfTabs = 5;
  selectedIndex = 0;
  userDetail: any;
  uid: any;
  live:any;
  userFullDetails: any;
  talkabout: any;
  field_long_in_city: Array<any>;
  field_talk_about:Array<any>;
  cancels: any;
  field_plans_get_cancelled:Array<any>
  field_relationship_status:Array<any>
  status: any;
  constructor(private http:HttpClient, private _location: Location, private _Activatedroute: ActivatedRoute,private ConfigService:ConfigService) { }

  ngOnInit() {
    this.userDetail= JSON.parse(localStorage.getItem("currentUser"));
   this.uid=this.userDetail.user.uid
   
    this.ConfigService.getUser(this.uid).subscribe(userData=>{
      this.userFullDetails=userData
    console.log(this.userFullDetails)
    //   if(this.userFullDetails.field_long_in_city != null)
    //   {
    //     this.live =this.userFullDetails.field_long_in_city.und[0].value
    //   }
    //  if(this.userFullDetails.field_talk_about !=null)
    //  {
    //    for(let i=0;i>this.userFullDetails.field_talk_about.und;i++)
       
    //     this.talkabout=this.userFullDetails.field_talk_about.und[i]
    //     console.log(this.talkabout)
    //  }
    //  if(this.userFullDetails.field_plans_get_cancelled != null)
    //  {
    //    this.cancels = this.userFullDetails.field_plans_get_cancelled.und[0].value
    //  }
    //  if(this.userFullDetails.field_relationship_status != null)
    //  {
    //    this.status = this.userFullDetails.field_relationship_status.und[0].value
    //  }
    })

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

  optionDetail(live,talkabout,goodFriend,cancels,status,pets,spend,speak,smoke,alcohol,education,books,movies,shows,music,anything)
  {
    console.log(goodFriend)
    const headers = new HttpHeaders()
    .set("X-CSRF-Token", this.userDetail.token)
    .set("Content-Type", "application/json")
    .set("X-Cookie", this.userDetail.session_name + "=" + this.userDetail.sessid);

  const requestOptions = {
    headers: headers,
    withCredentials: true,
  };
   this.http.put("https://gowebtutorial.com/api/json/user/" + this.uid ,{
    
   field_long_in_city:{
     und:live
   },
   
   field_talk_about:{
    und:talkabout
   },
  //  field_good_friend:
  //  {
  //     und:[{goodFriend}]
  //   },
   field_plans_get_cancelled:
   {
     und:cancels
   },
   field_relationship_status:
   {
     und:status
   },
   field_any_pets:
   {
     und:pets
   },
   field_spend_your_days:
   {
     und:
     [
      {
        value:spend
      }
      
      ]
   },
   field_languages:{
     und:
     {
       value:speak
     }
   },
   field_smoke:{und:smoke},
   field_alcohol:{und:alcohol},
   field_education_level:{und:education},
   field_favorite_books:{und:{value:books}},
   field_favorite_movies:{und:{value:movies}},
   field_favorite_tv_shows:{und:{value:shows}},
   field_favorite_music:{und:{value:music}},
   field_you_say:{und:{value:anything}}
   },requestOptions).subscribe(UserData=>{
     this.nextStep()
     console.log(UserData)
   })

  }

  backClicked() {
    this._location.back();
  }
}
