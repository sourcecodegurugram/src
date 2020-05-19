import { Component, OnInit, ViewChild, NgZone } from "@angular/core";
import { FormControl } from "@angular/forms";
import { MatTabChangeEvent } from "@angular/material/tabs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
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
  activit = new FormControl();
  Communication = new FormControl();
  toppingList: string[] = ["Dog", "Cat", "Rabbit"];
  activities: string[] = [
    "yoga",
    "playdates (parents and children)",
    "happy hour/cocktails/beers",
    "sightseeing",
  ];
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
  post: any;
  private captchaPassed: boolean = false;
  private captchaResponse: string;
  constructor(private http: HttpClient, private zone: NgZone) {
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
  captchaResolved(response: string): void {
    this.zone.run(() => {
      this.captchaPassed = true;
      this.captchaResponse = response;
    });
  }
  LoginForm(
    name,
    email,
    confirmemail,
    firstname,
    lastname,
    postalcode,
    gender,
    DOB,
    activity,
    meet,
    contracted,
    long,
    status,
    Education,
    smoke,
    alcohol,
    Languages,
    pets,
    mostfriend,
    cancel
  ) {
    console.log("firstname" + " " + firstname);
    console.log("lastname" + " " + lastname);
    console.log("DOB" + " " + DOB);
    console.log("gender" + " " + gender);
    console.log("Postal Code" + " " + postalcode);
    console.log("Activity" + " " + JSON.stringify(activity));

    this.http
      .post<any>("http://gowebtutorial.com/api/json/user/register", {
        name: name,
        mail: email,
        conf_mail: confirmemail,
        field_first_name: {
          und: [
            {
              value: firstname,
            },
          ],
        },
        field_last_name: {
          und: [
            {
              value: lastname,
            },
          ],
        },
        field_zip_code: {
          und: [
            {
              postal_code: postalcode,
              country: "in",
            },
          ],
        },

        field_birth_date: {
          und: [
            {
              value: DOB,
            },
          ],
        },

        field_gender: {
          und: gender,
        },

        field_activities_interests: {
          und: {
            yoga: "yoga",
            sightseeing: "sightseeing",
          },
        },
        // field_look_meet: {
        //   und: [
        //     {
        //       value: meet,
        //     },
        //   ],
        // },
        // field_want_contarct: {
        //   und: [
        //     {
        //       value: contracted,
        //     },
        //   ],
        // },
        // field_long_in_city: {
        //   und: [
        //     {
        //       value: long,
        //     },
        //   ],
        // },
        // field_relationship_status: {
        //   und: [
        //     {
        //       value: status,
        //     },
        //   ],
        // },
        // field_education_level: {
        //   und: [
        //     {
        //       Education,
        //     },
        //   ],
        // },
        // field_smoke: {
        //   und: [
        //     {
        //       smoke,
        //     },
        //   ],
        // },
        // field_alcohol: {
        //   und: [
        //     {
        //       alcohol,
        //     },
        //   ],
        // },
        // field_languages: {
        //   und: [
        //     {
        //       Languages,
        //     },
        //   ],
        // },
        // field_any_pets: {
        //   und: [
        //     {
        //       pets,
        //     },
        //   ],
        // },
        // field_good_friend: {
        //   und: [
        //     {
        //       mostfriend,
        //     },
        //   ],
        // },
        // field_plans_get_cancelled: {
        //   und: [
        //     {
        //       cancel,
        //     },
        //   ],
        // },

        // captcha_response: this.captchaResponse,
      })
      .subscribe((data) => {
        this.post = data;
      });
  }
}
