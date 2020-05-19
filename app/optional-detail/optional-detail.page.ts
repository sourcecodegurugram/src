import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from "@angular/material/tabs";
@Component({
  selector: 'app-optional-detail',
  templateUrl: './optional-detail.page.html',
  styleUrls: ['./optional-detail.page.scss'],
})
export class OptionalDetailPage implements OnInit {
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
