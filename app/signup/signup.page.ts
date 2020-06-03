import { Component, OnInit, NgZone } from '@angular/core';
import { MatTabChangeEvent } from "@angular/material/tabs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AlertController } from '@ionic/angular';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { Camera } from '@ionic-native/camera';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  maxNumberOfTabs = 5;
  selectedIndex = 0;
  post: any;
  name:string;
  real: any;
  DOB: any;
  Gender: any="Gender Diverse";
  contract: any="2";
  myself: any="Extrovert";
  meet: any="1";
  live: any="au";
  zip: any;
  email: any;
  password: any;
  confirmpassword: any;
  fname: any;
  lname: any;
  confirmemail: any; 
  signup: any;
  selectedFile: File = null ;
  url:any;
  Picurl: Object;
  pictureUrl: any;
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



  onUpload() {
    // this.http is the injected HttpClient
    const uploadData = new FormData();
    uploadData.append('avatar', this.selectedFile, this.selectedFile.name);
    this.http.post('https://gowebtutorial.com/sites/default/upload.php', uploadData)
      .subscribe(res=>{
        this.Picurl =res
        console.log(res)
      })
  }


  //Form
  LoginForm(name,fname,lname,DOB,Gender,contract,meet,live,zip,yogas,playdatess,beers,sightseeings,artsy,cook,dancing,watching,games,travelling,history,
    board ,sports ,mom ,outdoor ,dining ,concerts ,sportwatching ,shoppings ,crafty,photographs ,animal ,crime ,chess ,
    movies,dog,fitness,music,trekking,cars,antiques,horses,anime,scifi,scuba,gardening,rock,cycling,
    email,confirmemail) {
      this.pictureUrl=this.Picurl.url
      this.Picurl.filename
       console.log(this.Picurl.filename)
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
        picture:
        {
          filename: this.Picurl.filename,
        },
        field_activities_interests: {
          und: {
            yoga:yogas,
            playdates:playdatess,
            happyhourcocktailsbeers:beers,
            sightseeing: sightseeings,
            artsyie:artsy,
            cooking:cook,
            dancing:dancing,
            peoplewatching:watching,
            games:games,
            travelling:travelling,
            history:history,
            boardgames:board ,
            sportsplaying:sports ,
            momdadnightoutwokids:mom ,
            outdooractivities:outdoor ,
            diningout:dining ,
            concertsshows:concerts ,
            sportwatching:sportwatching ,
            shopping:shoppings ,
            craftythingsthingsyoumake:crafty,
            photography:photographs ,
            animalloverpetowner:animal ,
            crimemysteryreader:crime ,
            chesss:chess,
            movie:movies ,
             dogs:dog ,
            fitnesss:fitness ,
            musics:music ,
            trek:trekking ,
            car:cars ,
             antique:antiques ,
            horse:horses ,
             animes:anime ,
            scifis:scifi ,
             scubas:scuba ,
            //gardnings:gardening ,
            rocks:rock ,
            cycle:cycling 
            
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
  onSelectedFile(event)
  {
    if(event.target.files.length>0)
    {
      const file = event.target.files[0];
      this.signup.get('image').setValue(file);
      console.log("test")
    }
  }
  onFileChanged(event) {
    this.selectedFile = <File>event.target.files[0]
    console.log(event)
  }



}
