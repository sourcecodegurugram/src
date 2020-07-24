import { Component, OnInit, NgZone } from "@angular/core";
import { MatTabChangeEvent } from "@angular/material/tabs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AlertController } from "@ionic/angular";
import { DomSanitizer } from "@angular/platform-browser";
import {
  FileTransfer,
  FileUploadOptions,
  FileTransferObject,
} from "@ionic-native/file-transfer";
import { File } from "@ionic-native/file/ngx";
import { computeStackId } from "@ionic/angular/directives/navigation/stack-utils";
import { FileChooser } from "@ionic-native/file-chooser/ngx";
import { Capacitor } from "@capacitor/core";
import { Base64 } from "@ionic-native/base64/ngx";
 import { Device } from "@ionic-native/device/ngx";
import { Camera, CameraOptions } from "@ionic-native/camera/ngx";
import { FilePath } from '@ionic-native/file-path/ngx';


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
  //file:any
  filepath: object = {};
  imageContinue: boolean = false;
  uploadData: { file: string; filename: string; filepath: string };
  base64textString: any;
  uploadPicture: any;
  firstfid: any;
  firstfile: any;
  CheckBox: boolean = false;
  filter: any;
  FieldMessage: string;
  now: Date = new Date();
  age: any;
  picture: any;
  fileName: any;
  pictureDetail: any;
  userDetail: any;
  uid: any;
  picturesUrl;
  displayImage;
  isLoading: boolean = false;
  constructor(
    private http: HttpClient,
    private zone: NgZone,
    public alertController: AlertController,
    private sanitizer: DomSanitizer,
    private filed: File,
    public fileChooser: FileChooser,
    public Base64: Base64,
    public  device: Device,
    public camera: Camera,
    public FilePath: FilePath
  ) {}

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

  selectTab(nextIndex: number, presentIndex: number): void {
    //Screen 1
    if (presentIndex == 0) {
      if (this.name == null) {
        this.presentAlert();
      } else if (this.fname == null) {
        this.presentAlert();
      } else if (this.lname == null) {
        this.presentAlert();
      } else if (this.DOB == null) {
        this.presentAlert();
      } else if (
        Math.floor(
          Math.abs(Date.now() - new Date(this.DOB).getTime()) /
            (1000 * 3600 * 24) /
            365.25
        ) < 18
      ) {
        this.ageAlert();
      } else if (this.CheckBox == false) {
        this.checkBoxAlert();
      } else {
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
        if (this.picture == null) {
          this.presentAlert();
        } else {
          this.selectedIndex = nextIndex;
        }
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
      message: "All Fields are required",
      buttons: ["OK"],
    });

    await alert.present();
  }
  async ageAlert() {
    const alert = await this.alertController.create({
      message: "Age Must be 18+",
      buttons: ["OK"],
    });

    await alert.present();
  }
  async checkBoxAlert() {
    const alert = await this.alertController.create({
      message: "Confirm your age",
      buttons: ["OK"],
    });

    await alert.present();
  }

  // handleFileSelect(evt) {
  // this.filed.checkDir(this.filed, 'mydir').then(_ => console.log('Directory exists')).catch(err =>
  //   console.log('Directory doesnt exist'));
  // var files = evt.target.files;
  // var fil = files[0];
  // console.log(files + " " + fil);
  // if (files && fil) {
  //   this.fileName = files[0].name;
  //   var reader = new FileReader();
  //   reader.onload = this._handleReaderLoaded.bind(this);
  //   reader.readAsBinaryString(fil);
  //   console.log(files)
  // }
  // }

  // _handleReaderLoaded(readerEvt) {
  //   var binaryString = readerEvt.target.result;
  //   this.base64textString = btoa(binaryString);
  //   console.log(this.base64textString);
  //Automatically upload files
  // this.onUpload(this.picture);
  // this.displayImage = this.sanitizer.bypassSecurityTrustUrl(
  //   "data:Image/*;base64," + this.base64textString
  // );
  // }

  onUpload(picture) {
    this.isLoading = true;
    const headers = new HttpHeaders().set(
      "Content-Type",
      "application/x-www-form-urlencoded"
    );
    this.uploadData = {
      file: this.base64textString,
      filename: picture,
      filepath: "public://" + picture,
    };
    console.log(this.uploadData);
    this.http
      .post("https://gowebtutorial.com/api/json/file/", this.uploadData)
      .subscribe((rest) => {
        this.Picurl = rest;
        console.log(this.Picurl.fid);

        // Show next button
        this.imageContinue = true;
        this.isLoading = false;
      });
    console.log(this.uploadData);
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
    this.isLoading = true;
    this.http
      .get("https://gowebtutorial.com/api/json/file/" + this.Picurl.fid)
      .subscribe((res) => {
        this.picturesUrl = res;
        this.pictureDetail = this.picturesUrl.uri_full;

        var ts = Math.round(new Date().getTime() / 1000);
        this.http
          .post<any>("https://gowebtutorial.com/api/json/user/register", {
            name: name,
            mail: email,
            conf_mail: confirmemail,
            timezone: ts,
            login: ts,
            access: ts,
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
              und: DOB,
            },

            field_gender: {
              und: Gender,
            },

            field_activities_interests: {
              und: activity,
            },
            field_look_meet: {
              und: meet,
            },
            field_temp_pic_field: {
              und: [
                {
                  value: this.pictureDetail,
                },
              ],
            },

            field_want_contarct: {
              und: contract,
            },
          })
          .subscribe((data) => {
            this.post = data;

            if (this.post.uid) {
              this.isLoading = false;
              this.nextStep();

              this.correctAlert();
            } else {
              alert(this.post);
            }
          });
      });
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

  onCheckboxChange(e) {
    if (e.target.checked) {
      this.CheckBox = true;
      console.log(this.CheckBox);
    } else {
      this.CheckBox = false;
      console.log(this.CheckBox);
    }
  }

  Check() {
    this.age = Math.floor(
      Math.abs(Date.now() - new Date(this.DOB).getTime()) /
        (1000 * 3600 * 24) /
        365.25
    );
    console.log(this.DOB);
  }

  openCamera() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
    };

    this.camera.getPicture(options).then(
      (imageData) => {
        alert(imageData)
        this.Base64.encodeFile(imageData).then(
          (base64File: string) => {
            this.fileName = "test101.jpg";
            this.base64textString = base64File;
            this.imageContinue = true;
            this.picture = this.fileName;
            alert(this.base64textString)
         alert(this.picture)
            this.onUpload(this.picture);
          },
          (err) => {
            console.log(err);
          }
        );
      },
      (err) => {
        // Handle error
      }
    );

    // this.fileChooser
    //   .open()
    //   .then((uri) => {
    //     console.log(Capacitor.convertFileSrc(uri));
    //     this.imageContinue = true;
    //     this.displayImage = this.sanitizer.bypassSecurityTrustUrl(
    //       Capacitor.convertFileSrc(uri)
    //     );

    //     let filePath: string = this.displayImage;
    //     this.base64.encodeFile(filePath).then(
    //       (base64File: string) => {
    //         console.log(base64File);
    //         console.log(this.displayImage);
    //       },
    //       (err) => {
    //         console.log(err);
    //       }
    //     );
    //   })
    //   .catch((e) => console.log(e));
  }
  filechooser()
  {
    this.fileChooser.open().then((fileuri)=>{
      alert(fileuri)
     this.FilePath.resolveNativePath(fileuri).then((nativepath)=>{
       alert(nativepath)
      this.Base64.encodeFile(nativepath).then((base64string)=>{
        alert(base64string)
      })

     })

    })
  }
}

//androidx.core.content.FileProvider
