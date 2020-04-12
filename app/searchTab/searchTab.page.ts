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
  constructor() { }

  ngOnInit() {
  }

}
