import { Component, OnInit, ViewChild } from "@angular/core";
import { FormControl } from "@angular/forms";
import { MatTabChangeEvent } from "@angular/material/tabs";
@Component({
  selector: "app-register",
  templateUrl: "./register.page.html",
  styleUrls: ["./register.page.scss"],
})
export class RegisterPage implements OnInit {
  selectedIndex = 0;
  maxNumberOfTabs = 3;
  toppings = new FormControl();
  talkabout = new FormControl();
  goodfriend = new FormControl();
  Communication = new FormControl();
  toppingList: string[] = ["Dog", "Cat", "Rabbit"];
  talkaboutList: string[] = ["work", "Relationship", "Gossip"];
  goodfriendList: string[] = [
    "is always there for me",
    "gives advice",
    "take my advice",
  ];
  CommunicationList: string[] = [
    "Instant private message notification",
    "Weekly private message reminder",
    "Inactivity reminder email",
  ];
  public visitor: { name: string; email: string };
  public params: { name: string; value: string }[];
  __lc: any;
  constructor() {
    this.visitor = {
      name: "John Doe",
      email: "john@doe.com",
    };

    this.params = [
      { name: "Login", value: "joe_public" },
      { name: "Account ID", value: "ABCD1234" },
      { name: "Total order value", value: "$123" },
    ];
  }
  ngOnInit() {}
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
