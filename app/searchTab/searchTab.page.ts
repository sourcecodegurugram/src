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
  constructor(    private ConfigService: ConfigService) { }

  ngOnInit() {
  }
searchResult()
{
  this.search = false
  this.searchitem=true
  this.getResult(this.gender,this.meet,this.activity)
}
chatOpenPage()
{
  this.search = false
  this.searchitem=false
  this.chatpage=true
}

sendMsg()
{
  this.searchitem=true;
  this.chatpage = false;
}

getResult(gender,meet,activity){
this.ConfigService.getSearchUrl(gender,meet,activity).subscribe(
  (elements) => {

    this.searchResults=elements
    console.log(elements)


  });
}

userDetails()
{

this.uid=this.searchResults[0].Uid
this.ConfigService.getUser(this.uid).subscribe((data)=>{
  this.user=data
 
})
}
}
