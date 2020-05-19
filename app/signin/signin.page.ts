import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from "@angular/material/tabs";
@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {
  maxNumberOfTabs = 5;
  selectedIndex = 0;
  constructor() { }

  ngOnInit() {
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
}
