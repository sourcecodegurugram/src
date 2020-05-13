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
  activit= new FormControl();
  Communication = new FormControl();
  toppingList: string[] = ["Dog", "Cat", "Rabbit"];
  activities:string[]=["yoga","playdates (parents and children)","happy hour/cocktails/beers","sightseeing"];
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
  LoginForm(name,email,confirmemail,firstname,lastname,postalcode,DOB,gender,activity)
  {
    console.log(name,email,confirmemail,firstname,lastname,postalcode,DOB,gender,activity)
    let recatcha = {
      captchaResponse: this.captchaResponse
  };   
    this.http.post<any>('http://gowebtutorial.com/api/json/user/register',{
      name: name,
      mail:email,
      conf_mail:confirmemail,
      field_first_name:
      { "und": 
        [{ 
          "value": firstname 
        }] 
      },
      field_last_name:
      { "und": 
      [{ 
        "value": lastname
      }] 
    },
      field_zip_code:
      { "und": 
      [{ 
        "value": postalcode
      }] 
    },
       field_birth_date:
      { "und": 
      [{ 
        "value": DOB
      }] 
    },
       field_gender:
      { "und": 
      [{ 
        "value": gender
      }] 
    },
    field_activities_interests:
    { "und": 
    [{ 
       activity
    }] 
  },
 


  captcha_response:recatcha
      
    }).subscribe(data => {
            this.post = data;
            
           });
         
}

}
