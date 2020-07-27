import { Component, OnInit, NgZone, ChangeDetectorRef } from "@angular/core";
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
import { FilePath } from "@ionic-native/file-path/ngx";

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
  userDetail: any;
  uid: any;
  picturesUrl;
  displayImage;
  isLoading: boolean = false;
  private win: any = window;
  constructor(
    private http: HttpClient,
    private zone: NgZone,
    public alertController: AlertController,
    private sanitizer: DomSanitizer,
    private filed: File,
    public fileChooser: FileChooser,
    public base64: Base64,
    public device: Device,
    public camera: Camera,
    public FilePath: FilePath,
    public changeDetector: ChangeDetectorRef
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
          console.log("next select");
          this.selectedIndex = nextIndex;
          this.changeDetector.detectChanges();
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

    this.http
      .post("https://gowebtutorial.com/api/json/file/", this.uploadData)
      .subscribe((rest) => {
        this.Picurl = rest;
        console.log(this.Picurl);

        // Image URL
        this.displayImage =
          "https://gowebtutorial.com/sites/default/files/" +
          this.uploadData.filename;

        console.log(this.displayImage);

        // Show next button
        this.imageContinue = true;
        this.isLoading = false;
        this.changeDetector.detectChanges();
      });
    console.log(this.uploadData);
  }

  //Form
  submitForm(
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
    this.getImageObject(
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
    );
  }

  getImageObject(
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
        console.log(this.picturesUrl);
        this.submitDetails(
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
        );
      });
  }

  submitDetails(
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
    let ts = Math.round(new Date().getTime() / 1000);
    let submitObject = {
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
      picture_upload: this.picturesUrl,

      picture: this.picturesUrl,

      field_user_avatar: {
        und: [this.picturesUrl],
      },

      field_want_contarct: {
        und: contract,
      },
    };

    console.log(submitObject);

    this.http
      .post<any>(
        "https://gowebtutorial.com/api/json/user/register",
        submitObject
      )
      .subscribe((data) => {
        this.post = data;
        console.log(data);

        if (this.post.uid) {
          this.isLoading = false;
          this.nextStep();

          this.correctAlert();
        } else {
          alert(this.post);
        }
      });
  }

  async correctAlert() {
    const correct = await this.alertController.create({
      message: " Account is created",
      buttons: ["OK"],
    });

    await correct.present();
  }

  onCheckboxChange(e) {
    if (e.target.checked) {
      this.CheckBox = true;
    } else {
      this.CheckBox = false;
    }
  }

  CheckDOB() {
    this.age = Math.floor(
      Math.abs(Date.now() - new Date(this.DOB).getTime()) /
        (1000 * 3600 * 24) /
        365.25
    );
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
        // Start loader
        this.isLoading = true;
        this.base64.encodeFile(imageData).then(
          (base64File: string) => {
            //Filename
            let timestamp = Math.floor(Date.now() / 1000);
            this.fileName = this.name + "_profile_image_" + timestamp + ".jpg";

            //Base 64 String
            let removeString = "data:image/*;charset=utf-8;base64,";
            this.base64textString = base64File.replace(removeString, "");

            this.picture = this.fileName;
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
  }
  filechooser() {
    this.fileChooser.open().then((fileuri) => {
      // Start loader
      this.isLoading = true;

      let imagePath = this.win.Ionic.WebView.convertFileSrc(fileuri);
      this.displayImage = imagePath;

      this.FilePath.resolveNativePath(fileuri).then((filePath) => {
        fetch(imagePath).then((res) => {
          res.blob().then((blob) => {
            function getFileReader(): FileReader {
              const fileReader = new FileReader();
              const zoneOriginalInstance = (fileReader as any)[
                "__zone_symbol__originalInstance"
              ];
              return zoneOriginalInstance || fileReader;
            }

            let newInstance = getFileReader();
            newInstance.onload = function () {
              // Is it JPG or PNG
              let base64data = newInstance.result.toString();
              if (base64data.includes("data:image/jpeg;base64,")) {
                // File Name
                let timestamp = Math.floor(Date.now() / 1000);
                this.fileName =
                  this.name + "_profile_image_" + timestamp + ".jpg";
                //Base 64 string
                let removeString = "data:image/jpeg;base64,";
                this.base64textString = base64data.replace(removeString, "");
                console.log(this.base64textString);
              } else if (base64data.includes("data:image/png;base64,")) {
                let timestamp = Math.floor(Date.now() / 1000);
                this.fileName =
                  this.name + "_profile_image_" + timestamp + ".png";

                //Base 64 string
                let removeString = "data:image/png;base64,";
                this.base64textString = base64data.replace(removeString, "");
                console.log(this.base64textString);
              }

              this.picture = this.fileName;
              this.changeDetector.detectChanges();
              this.onUpload(this.picture);
            }.bind(this);

            newInstance.readAsDataURL(blob);
          });
        });
      });
    });
  }
}
