import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { ConfigService } from "../config.service";
import { element } from 'protractor';
@Component({
  selector: 'app-searchTab',
  templateUrl: './searchTab.page.html',
  styleUrls: ['./searchTab.page.scss'],
})
export class SearchTabPage implements OnInit {
  activity = new FormControl();
  activityList: string[] = ['Yoga', 'Cooking', 'Watching Movies'];
  search:boolean=true
  searchitem:boolean=false
  chatpage:boolean = false
  searchResults:any;
  gender: any;
  meet: any;
  cancel: any;
  address: any;
  userDetailss: any;
  uid: any;
  user: Object;
  Postcode: any ;
  notfound:boolean=false;
  itrs: any;
  live:any;
  searchuser: any;
  Localgender: any;
  Localmeet: any;
  Localactivity: any;
  Localpostcode: any;
  Locallive: any;
  constructor(    private ConfigService: ConfigService) { }

  ngOnInit() {
    this.itrs = JSON.parse(localStorage.getItem("currentUser"));
    this.Localgender = JSON.parse(localStorage.getItem("gender"));
    if(this.Localgender!=null)
    {
      this.gender=this.Localgender
    }
    this.Localmeet = JSON.parse(localStorage.getItem("meet"));
    if(this.Localmeet!=null)
    {
      this.meet = this.Localmeet
    }
    this.Localactivity = JSON.parse(localStorage.getItem("activity"));
    if(this.Localactivity !=null)
    {
      this.activity=this.Localactivity
    }
    this.Localpostcode= JSON.parse(localStorage.getItem("Postcode"));
    if(this.Localpostcode != null)
    {
      this.Postcode =this.Localpostcode
    }
    this.Locallive= JSON.parse(localStorage.getItem("Live"));
    if(this.Localpostcode != null)
    {
      this.live =this.Locallive
    }
  



//  this.Postcode=this.itrs.user.field_zip_code.und[0].postal_code
//  this.live =this.itrs.user.field_zip_code.und[0].country

 

  }




searchResult()
{
  this.search = false
  this.searchitem=true
  this.getResult(this.gender,this.meet,this.activity,this.Postcode)
}
chatOpenPage()
{
  this.search = false
  this.searchitem=false
  this.chatpage=true
}
notFoundResult()
{
  this.search = true
  this.searchitem=false
  this.notfound=false
}
sendMsg()
{
  this.searchitem=true;
  this.chatpage = false;
}

getResult(gender,meet,activity,Postcode){
this.ConfigService.getSearchUrl(gender,meet,activity,Postcode).subscribe(
  (elements) => {
    this.searchResults=elements
    console.log(this.searchResults.length)
    localStorage.setItem("gender", JSON.stringify(gender));
    localStorage.setItem("meet", JSON.stringify(meet));
    localStorage.setItem("activity", JSON.stringify(activity));
    localStorage.setItem("Postcode", JSON.stringify(Postcode));
   localStorage.setItem("Live",JSON.stringify(this.live))
    if(this.searchResults.length==0)
    {
      this.notfound=true
      console.log("oops no result Found")
    }
    console.log(elements)
  });
}

userDetails()
{

this.uid=this.searchResults[0].Uid
this.ConfigService.getUser(this.uid).subscribe((data)=>{
  this.user=data
  

});
}

autofill()
{

}
}
