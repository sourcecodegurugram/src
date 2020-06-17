import { Component, OnInit, NgZone } from "@angular/core";
import { MatTabChangeEvent } from "@angular/material/tabs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AlertController } from "@ionic/angular";
import {
  FileTransfer,
  FileUploadOptions,
  FileTransferObject,
} from "@ionic-native/file-transfer";
import { File } from "@ionic-native/file";
import { Camera } from "@ionic-native/camera";
@Component({
  selector: "app-signup",
  templateUrl: "./signup.page.html",
  styleUrls: ["./signup.page.scss"],
})
export class SignupPage implements OnInit {
  maxNumberOfTabs = 5;
  selectedIndex = 0;
  post: any;
  name: string;
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
  signup: any;
  selectedFile: File = null;
  url: any;
  Picurl: any;
  pictureUrl: Array<any>;
  filename: any;
  file: any;
  filepath: object = {};
  fid: object = {};
  uploadData: { file: string; filename: string; filepath: string };
  base64textString: String = "";
  uploadPicture: any;
  firstfid: any;
  firstfile: any;
  constructor(
    private http: HttpClient,
    private zone: NgZone,
    public alertController: AlertController
  ) {}

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
      } else if (this.fname == null) {
        this.presentAlert();
      } else if (this.lname == null) {
        this.presentAlert();
      }  else {
        this.selectedIndex = nextIndex;
      }
    } else if (presentIndex == 1) {
      if (nextIndex > presentIndex) {
        if (this.Gender == null) {
          this.presentAlert();
        } else if (this.contract == null) {
          this.presentAlert();
        } else if (this.myself == null) {
          this.presentAlert();
        } else if (this.meet == null) {
          this.presentAlert();
        } else {
          this.selectedIndex = nextIndex;
        }
      } else {
        this.selectedIndex = nextIndex;
      }
    } else if (presentIndex == 2) {
      if (nextIndex > presentIndex) {
        this.selectedIndex = nextIndex;
      }
    } else if (presentIndex == 3) {
      if (nextIndex > presentIndex) {
        if (this.live == null) {
          this.presentAlert();
        } else if (this.zip == null) {
          this.presentAlert();
        } else {
          this.selectedIndex = nextIndex;
        }
      }
    } else if (presentIndex == 4) {
      if (nextIndex > presentIndex) {
        if (this.email == null) {
          this.presentAlert();
        }
        if (this.confirmemail == null) {
          this.presentAlert();
        } else if (this.password == null) {
          this.presentAlert();
        } else if (this.confirmpassword == null) {
          this.presentAlert();
        }
      }
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      message: " All Fields are required",
      buttons: ["OK"],
    });

    await alert.present();
  }

  handleFileSelect(evt) {
    var files = evt.target.files;
    var fil = files[0];

    if (files && fil) {
      var reader = new FileReader();
      reader.onload = this._handleReaderLoaded.bind(this);
      reader.readAsBinaryString(fil);
    }
  }
  _handleReaderLoaded(readerEvt) {
    var binaryString = readerEvt.target.result;
    this.base64textString = btoa(binaryString);
    // console.log(btoa(binaryString));
  }
  onUpload(picture) {
    console.log(this.base64textString);
    console.log(picture);
    const headers = new HttpHeaders().set(
      "Content-Type",
      "application/x-www-form-urlencoded"
    );
    this.uploadData = {
      file: "data:image/png;base64," + this.base64textString,
      filename: picture,
      filepath: "public://" + picture,
    };
    this.http
      .post("https://gowebtutorial.com/api/json/file/", this.uploadData)
      .subscribe((res) => {
        (this.Picurl = res), console.log(this.Picurl);
      });
  }

  //Form
  LoginForm(
    name,
    fname,
    lname,
    DOB,
    Gender,
    contract,
    meet,
    live,
    zip,
    activity,
    email,
    confirmemail,
    password,
    confirmpassword
  ) {
    var ts = Math.round((new Date()).getTime() / 1000);
    console.log(ts)
    // this.http
    // .post("https://gowebtutorial.com/api/json/file/", this.uploadData)
    // .subscribe((res) => {
    //   (this.Picurl = res), console.log(this.Picurl);
    // });
    this.http
      .post<any>("https://gowebtutorial.com/api/json/user/register", {
        name: name,
        mail: email,
        conf_mail: confirmemail,
        timezone:ts,
        login:ts,
        access:ts,
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
              value: lname,
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
      //   field_birth_date:
      //   {und:[
      //     {
      //     value:DOB,
      //   }
      // ]
      // },
        field_birth_date: {
          und:DOB 
        },

        field_gender: {
          und: Gender,
        },

        field_activities_interests: {
          und:activity 
        },
        field_look_meet: {
          und: meet,
        },

        field_want_contarct: {
          und: contract,
        },
        // pass: {
        //   pass1: password,
        //   pass2: confirmpassword,
        // },
        // field_user_avatar: {
        //   und: [
        //     {
        //       fid: this.Picurl.fid,
        //     },
        //   ],
        // },

        // picture:  {
        //   fid:"262761",
        //   uid:"0",
        //   filename: "CfakepathScreenshot 2020-06-08 at 4.13.59 PM.png",
        //   uri:"public://CfakepathScreenshot 2020-06-08 at 4.13.59 PM_4.png",
        //   filemime: "image/png",
        //   filesize: "160407",
        //   status: "1",
        //   timestamp: "1591629823",
        //   uri_full: "https://gowebtutorial.com/sites/default/files/CfakepathScreenshot%202020-06-08%20at%204.13.59%20PM_4.png",
        //   target_uri: "CfakepathScreenshot 2020-06-08 at 4.13.59 PM_4.png",
          
        // }
      })
      .subscribe((data) => {
        this.post = data;
        console.log(this.post);
        if (this.post.uid) {
          this.nextStep();
          console.log(this.uploadPicture);
          this.correctAlert();
        } else {
          alert(this.post);
        }
      });
    //    (error: HttpErrorResponse) => {
    //   console.log(error.error.message);
    // })
  }

  async correctAlert() {
    const correct = await this.alertController.create({
      message: " Account is created",
      buttons: ["OK"],
    });

    await correct.present();
  }
  onSelectedFile(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.signup.get("image").setValue(file);
      console.log("test");
    }
  }
  onFileChanged(event) {
    this.selectedFile = <File>event.target.files[0];
    console.log(event);
  }
}
