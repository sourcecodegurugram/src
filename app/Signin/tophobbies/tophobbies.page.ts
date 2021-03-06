import { Component, OnInit } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpHeaderResponse,
} from "@angular/common/http";
import { Router, ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { ConfigService } from "../../config.service";
import { FormControl } from "@angular/forms";
import { AlertController } from "@ionic/angular";

@Component({
  selector: "app-tophobbies",
  templateUrl: "./tophobbies.page.html",
  styleUrls: ["./tophobbies.page.scss"],
})
export class TophobbiesPage implements OnInit {
  maxNumberOfTabs = 5;
  selectedIndex = 0;
  userDetail: any;
  uid: any;
  live: any;
  userFullDetails: any;
  talkabout: any;
  field_long_in_city: Array<any>;
  field_talk_about: Array<any>;
  cancels: any;
  field_plans_get_cancelled: Array<any>;
  field_relationship_status: Array<any>;
  status: any;
  responseString: string;
  activitiesDeclared: any;
  donotStatus: boolean = false;
  topactivity: any;
  isLoading: boolean = false;
  toppings = new FormControl();
  toppingList: string[] = [
    "Extra cheese",
    "Mushroom",
    "Onion",
    "Pepperoni",
    "Sausage",
    "Tomato",
  ];
  otheractivity;
  FavorateUpdate;

  constructor(
    private http: HttpClient,
    private _location: Location,
    private _Activatedroute: ActivatedRoute,
    private ConfigService: ConfigService,
    private router: Router,
    public alertController: AlertController
  ) {}

  ngOnInit() {
    this.userDetail = JSON.parse(localStorage.getItem("currentUser"));
    this.uid = this.userDetail.user.uid;
  }

  notshowagain(topactivity, otheractivity) {
    this.isLoading = true;
    const headers = new HttpHeaders()
      .set("X-CSRF-Token", this.userDetail.token)
      .set("Content-Type", "application/json")
      .set(
        "X-Cookie",
        this.userDetail.session_name + "=" + this.userDetail.sessid
      );
    const requestOptions = {
      headers: headers,
      withCredentials: true,
    };
    // Add entry into favorites
if(topactivity.length > 3)
{
this.wrongUser()
this.isLoading = false;
}

else
{
    this.http
      .put(
        "https://gowebtutorial.com/api/json/user/" + this.userDetail.user.uid,
        {
          field_already_declared: {
            und: [
              {
                value: "true",
              },
            ],
          },
          field_top3_activities: {
            und: topactivity,
          },
          field_activities_interests: {
            und: otheractivity,
          },
        },

        requestOptions
      )
      .subscribe((favorate) => {
        this.FavorateUpdate = favorate
        this.http.get("https://gowebtutorial.com/api/json/user/" + this.FavorateUpdate.uid).subscribe((UpdateData)=>{
          localStorage.setItem("UpdateData", JSON.stringify(UpdateData));
        })
        this.isLoading = false;
        this.router.navigate(["/chat/searchUser"]);
      });

    }
  }


  async wrongUser() {
    const alert = await this.alertController.create({
      message: "Top activities must be equal to 3",
      buttons: ["OK"],
    });

    await alert.present();
  }
  donotask()
  {
    const headers = new HttpHeaders()
    .set("X-CSRF-Token", this.userDetail.token)
    .set("Content-Type", "application/json")
    .set(
      "X-Cookie",
      this.userDetail.session_name + "=" + this.userDetail.sessid
    );
  const requestOptions = {
    headers: headers,
    withCredentials: true,
  };
    this.http
    .put(
      "https://gowebtutorial.com/api/json/user/" + this.userDetail.user.uid,
      {
        field_already_declared: {
          und: [
            {
              value: "true",
            },
          ],
        },
     
      },

      requestOptions
    )
    .subscribe((favorate) => {

      this.FavorateUpdate = favorate
      this.http.get("https://gowebtutorial.com/api/json/user/" + this.FavorateUpdate.uid).subscribe((UpdateData)=>{
        localStorage.setItem("UpdateData", JSON.stringify(UpdateData));
      })

      this.isLoading = false;
      // this.router.navigate(["/chat/searchUser"]);
    });
  }
}
