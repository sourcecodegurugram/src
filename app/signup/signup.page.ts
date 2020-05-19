import { Component, OnInit ,NgZone} from '@angular/core';
import { MatTabChangeEvent } from "@angular/material/tabs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  maxNumberOfTabs = 5;
  selectedIndex = 0;
  post: any;
  constructor(private http: HttpClient, private zone: NgZone) { }

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

  LoginForm(name, email, confirmemail, firstname, lastname, postalcode, DOB, gender, activity, meet, contracted, long, status, Education, smoke, alcohol, Languages, pets, mostfriend, cancel) {
    console.log("status" + " " + status)

    console.log("Education" + " " + Education)

    console.log("smoke" + "" + smoke)

    console.log("alcohol" + " " + alcohol)

    console.log("Languages " + " " + Languages)

    console.log("pets" + "" + pets)

    console.log("mostfriend " + " " + mostfriend)

    console.log("cancel" + " " + cancel)

    this.http.post<any>('http://gowebtutorial.com/api/json/user/register', {
      name: name,
      mail: email,
      conf_mail: confirmemail,
      field_first_name:
      {
        "und":
          [{
            "value": firstname
          }]
      },
      field_last_name:
      {
        "und":
          [{
            "value": lastname
          }]
      },
      field_zip_code:
      {
        "und":
          [{
            "postal_code": postalcode
          }]
      },
      
      field_birth_date:
      {
        "und":
          [{
            "value": DOB
          }]
      },
      field_gender:
      {
        "und":
          [{
            "value": gender
          }]
      },
      field_activities_interests:
      {
        "und":
          [{
            activity
          }]
      },
      field_look_meet:
      {
        "und":
          [{
            "value": meet
          }]

      },
      field_want_contarct:
      {
        "und":
          [{
            "value": contracted
          }]

      },
      field_long_in_city:
      {
        "und":
          [{
            "value": long
          }]

      },
      field_relationship_status:
      {
        "und":
          [{
            "value": status
          }]

      },
      field_education_level:
      {
        "und":
          [{
            Education
          }]

      },
      field_smoke:
      {
        "und":
          [{
            smoke
          }]

      },
      field_alcohol:
      {
        "und":
          [{
            alcohol
          }]

      },
      field_languages:
      {
        "und":
          [{
            Languages
          }]

      },
      field_any_pets:
      {
        "und":
          [{
            pets
          }]

      },
      field_good_friend:
      {
        "und":
          [{
            mostfriend
          }]

      },
      field_plans_get_cancelled:
      {
        "und":
          [{
            cancel
          }]

      },

     
    }).subscribe(data => {
      this.post = data;

    });

  }
}
