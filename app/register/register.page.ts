
import { Component, OnInit, ViewChild, NgZone } from "@angular/core";
import { FormControl } from "@angular/forms";
import { MatTabChangeEvent } from "@angular/material/tabs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AlertController } from '@ionic/angular';

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
  submit:boolean=false
  public visitor: { name: string; email: string };
  public params: { name: string; value: string }[];
  __lc: any;
  post: any;
  private captchaPassed: boolean = false;
  private captchaResponse: string;
  
  constructor(private http: HttpClient, private zone: NgZone,public alertController: AlertController) {
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
    country,
    yogas,playdatess,sightseeings,
    meet,
    contracted,
    long,
    status,
    Education,
    smoke,
    alcohol,
    Languages,
    cats,dogs,rabbits,
    mostfriend,
    cancel,
    days,
    movies,
    music,
    shows,
    books,
    workss,
    familys,
    relation,
    always,
    sides,
    advice,
    comment
  ) {
    console.log("firstname" + " " + long);
    console.log("lastname" + " " + status);
    console.log("DOB" + " " + Education);
 
    console.log("Activity" + " " + status);

    this.http
      .post<any>("https://gowebtutorial.com/api/json/user/register", {
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
              country: country,
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
            yoga:  yogas,
            playdates:playdatess,
            sightseeing: sightseeings
            
          },
        },
        field_look_meet: {
          und:meet,
        },
        field_want_contarct: {
          und: contracted,
        },
        field_long_in_city: {
          und: 
          {
            value:long,
          },
          
        },
        field_relationship_status: {
          und:status,
        },
        field_education_level: {
          und: Education,
        },
        field_smoke: {
          und: smoke,
        },
        field_alcohol: {
          und:alcohol ,
        },

        field_any_pets: {
          und: 
            {
             Dog:dogs,
             Cat:cats,
             Rabbit:rabbits,
            },
          
        },

        field_friends_tend_to_be:
        { und:mostfriend,
          
          
        },
        field_plans_get_cancelled:
        {und:cancel,
        },
        field_spend_your_days:
        {und:
        {
          value:days,
        },
        
        },
        field_favorite_movies:{
          und:{
value: movies,
          },
        },
        field_favorite_music:
        {und:
        {
          value:music,
        },
        
        },
        field_favorite_tv_shows:
        {und:
        {
          value:shows,
        },
        
        },

        field_favorite_books:
        {und:
        {
          value:books,
        },
        
        },
        field_talk_about:{
          
          und:{
            Work:workss,
            Family:familys,
            Relationships:relation
          },
        },
        field_good_friend:
        {und:
          {
            isalwaysthereforme:always,
            alwayssideswithmenomatterwhat: sides,
            givesadvice:advice
          },
        },
        field_you_say:
        {
          und:{
            value:comment
          }
        }
      })
      .subscribe((data) => {
        this.post = data;
        if(this.post.uid){
         this.presentAlert()
          } else {
          alert(this.post)
          }
    
      });
  }
  onsubmit()
  {
    this.submit=false
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      message: ' Your Have Registered successfully',
      buttons: ['OK']
    });

    await alert.present();
  }
}
