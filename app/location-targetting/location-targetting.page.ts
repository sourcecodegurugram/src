import { Component, OnInit } from "@angular/core";
import { ConfigService } from "../config.service";
@Component({
  selector: "app-location-targetting",
  templateUrl: "./location-targetting.page.html",
  styleUrls: ["./location-targetting.page.scss"],
})
export class LocationTargettingPage implements OnInit {
  post: any;

  constructor(private ConfigService: ConfigService) {}

  ngOnInit() {
    this.ConfigService.getPostal(this.post).subscribe((elements) => {
      console.log(elements);
    });
  }

  buttonClick() {
    this.ConfigService.getPostal(this.post).subscribe((elements) => {
      console.log(elements);
    });
    console.log(this.post);
  }
}
