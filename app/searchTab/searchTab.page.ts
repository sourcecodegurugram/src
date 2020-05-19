import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
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
  constructor() { }

  ngOnInit() {
  }
searchResult()
{
  this.search = false
  this.searchitem=true
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
}
