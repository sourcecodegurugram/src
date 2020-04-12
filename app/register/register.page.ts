import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  selectedIndex = 0;
  maxNumberOfTabs = 3;
  toppings = new FormControl();
  talkabout = new FormControl();
  goodfriend = new FormControl();
  Communication = new FormControl();
  toppingList: string[] = ['Dog', 'Cat', 'Rabbit'];
  talkaboutList: string[] =['work','Relationship','Gossip'];
  goodfriendList: string[] =['is always there for me','gives advice','take my advice'];
  CommunicationList: string[] =['Instant private message notification','Weekly private message reminder','Inactivity reminder email'];
  ngOnInit() {
  }

}
