import { Component, OnInit, NgZone } from '@angular/core';
import { MatTabChangeEvent } from "@angular/material/tabs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  maxNumberOfTabs = 5;
  selectedIndex = 0;
  post: any;
  name: any;
  real: any;
  DOB: any;
  Gender: any;
  contract: any;
  myself: any;
  meet: any;
  live: any;
  zip: any;
  email: any;
  password: any;
  confirmpassword: any;
  fname: any;
  lname: any;
  confirmemail: any;
  constructor(private http: HttpClient, private zone: NgZone, public alertController: AlertController) { }

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


  selectTab(nextIndex: number, presentIndex: number): void {
    //Screen 1  
    if (presentIndex == 0) {
      if (this.name == null) {
        this.presentAlert();
      }

      else if (this.fname == null) {
        this.presentAlert();
      }
      else if (this.lname == null) {
        this.presentAlert();
      }
      else if (this.DOB == null) {
        this.presentAlert();
      }

      else {

        this.selectedIndex = nextIndex;
      }

    }
    else if (presentIndex == 1) {
      if (nextIndex > presentIndex) {
        if (this.Gender == null) {
          this.presentAlert();
        }
        else if (this.contract == null) {
          this.presentAlert();
        }

        else if (this.myself == null) {
          this.presentAlert();
        }
        else if (this.meet == null) {
          this.presentAlert();
        }

        else {
          this.selectedIndex = nextIndex;
        }
      }
      else {
        this.selectedIndex = nextIndex;
      }
    }

    else if (presentIndex == 2) {
      if (nextIndex > presentIndex) {


        this.selectedIndex = nextIndex;


      }
    }
    else if (presentIndex == 3) {
      if (nextIndex > presentIndex) {

        if (this.live == null) {
          this.presentAlert();
        }

        else if (this.zip == null) {
          this.presentAlert();
        }

        else {
          this.selectedIndex = nextIndex;
        }
      }
      
    }
    else if (presentIndex == 4) {
      if (nextIndex > presentIndex) {

        if (this.email == null) {
          this.presentAlert();
        }
        if (this.confirmemail == null) {
          this.presentAlert();
        }
     
        else if (this.password == null) {
          this.presentAlert();
        }

        else if (this.confirmpassword == null) {
          this.presentAlert();
        }


        
        
      }
      
    }
    
  }



  async presentAlert() {
    const alert = await this.alertController.create({
      message: ' All Fields are required',
      buttons: ['OK']
    });

    await alert.present();
  }













 



  //Form
  LoginForm(name,fname,lname,DOB,Gender,contract,meet,live,zip,yogas,playdatess,sightseeings,email,confirmemail) {

 
    console.log(name,fname,lname,DOB,Gender,contract,meet,live,zip,yogas,playdatess,sightseeings,email,confirmemail);

    this.http
      .post<any>("https://gowebtutorial.com/api/json/user/register", {
        name: name,
        mail: email,
        conf_mail: confirmemail,
        field_first_name: {
          und: [
            {
              value: fname,
            },
          ],
        },
        field_last_name: {
          und: [
            {
              value:lname,
            },
          ],
        },
        field_zip_code: {
          und: [
            {
              postal_code: zip,
              country: live,
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
          und: Gender,
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
          und: contract,
        },
        
      })
      .subscribe((data) => {
        this.post = data;
        if(this.post.uid){
          this.nextStep()
          this.correctAlert()
          } else {
           
          alert(this.post)
    
          }
         
      });
  }

  async correctAlert() {
    const correct = await this.alertController.create({
      message: ' Account is created',
      buttons: ['OK']
    });

    await correct.present();
  }
 
}
