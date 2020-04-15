import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit() {}
  humburgereffect()
  {
    this.crossSign = true;
    this.humBurger = false;
    this.mainMenu = true;
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
}
