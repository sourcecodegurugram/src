import { Component, OnInit } from "@angular/core";
import { MatTabChangeEvent } from "@angular/material/tabs";
import {
  HttpClient,
  HttpHeaders,
  HttpHeaderResponse,
} from "@angular/common/http";
import { Router, ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { ConfigService } from "../../config.service";
import { AlertController } from "@ionic/angular";
import { FormGroup, FormControl, Validators } from "@angular/forms";
@Component({
  selector: "app-optional-detail",
  templateUrl: "./optional-detail.page.html",
  styleUrls: ["./optional-detail.page.scss"],
})
export class OptionalDetailPage implements OnInit {
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
  responseString;
  activitiesDeclared: any;
  donotStatus: boolean = false;
  base64textString: string;
  fileName: any;
  Picurl: any;
  uploadData: { file: string; filename: string; filepath: string };
  pictureDetail;
  pictureUrl;
  scope = [];
  images = [];
  imageName;
  additionalImageObject = {};
  additionalTotalObject = {};
  //   myForm = new FormGroup({
  //    file:,
  //    fileSource: new FormControl('', [Validators.required])
  //  });

  newFiles;
  goodFriend;
  pets;
  spend;
  speak;
  smoke;
  alcohol;
  books;
  movies;
  shows;
  music;
  anything;
  submit;
  fileSource;
  education;
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
    console.log(this.uid);
    this.ConfigService.getUser(this.uid).subscribe((userData) => {
      this.userFullDetails = userData;
      // this.activitiesDeclared = this.userFullDetails.field_already_declared.und[0].value
      console.log(this.userFullDetails.field_already_declared.und);
    });
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

  optionDetail(
    live,
    talkabout,
    goodFriend,
    cancels,
    status,
    pets,
    spend,
    speak,
    smoke,
    alcohol,
    education,
    books,
    movies,
    shows,
    music,
    anything
  ) {
    console.log(goodFriend);
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
    this.additionalTotalObject = {
      field_long_in_city: {
        und: live,
      },

      field_talk_about: {
        und: talkabout,
      },
      //  field_good_friend:
      //  {
      //     und:[{goodFriend}]
      //   },
      field_plans_get_cancelled: {
        und: cancels,
      },
      field_relationship_status: {
        und: status,
      },
      field_any_pets: {
        und: pets,
      },
      field_spend_your_days: {
        und: [
          {
            value: spend,
          },
        ],
      },
      field_languages: {
        und: {
          value: speak,
        },
      },
      field_smoke: { und: smoke },
      field_alcohol: { und: alcohol },
      field_education_level: { und: education },
      field_favorite_books: { und: { value: books } },
      field_favorite_movies: { und: { value: movies } },
      field_favorite_tv_shows: { und: { value: shows } },
      field_favorite_music: { und: { value: music } },
      field_you_say: { und: { value: anything } },
    };

    for (var k in this.additionalImageObject)
      this.additionalTotalObject[k] = this.additionalImageObject[k];

    console.log(this.additionalTotalObject);
    // this.http
    //   .put(
    //     "https://gowebtutorial.com/api/json/user/" + this.uid,
    //     this.additionalImageObject,
    //     requestOptions
    //   )
    //   .subscribe((UserData) => {
    //     this.router.navigate(["/welcome"]);
    //   });
  }

  backClicked() {
    this._location.back();
  }

  pagechange() {
    if (this.userFullDetails.field_already_declared.und != undefined) {
      this.router.navigate(["/chat/searchUser"]);
    }
    if (this.userFullDetails.field_already_declared.und == undefined) {
      this.router.navigate(["/topHobbies"]);
    }
  }
  // handleFileSelect(evt) {
  //   var files = evt.target.files;
  //   var fil = files[0];

  //   if (files && fil) {
  //     var reader = new FileReader();
  //     reader.onload = this._handleReaderLoaded.bind(this);
  //     reader.readAsBinaryString(fil);
  //     this.fileName = files[0].name

  //   }

  // }

  // onUpload(fileSource)
  //  {
  //   console.log(this.myForm.value.fileSource);

  //   const headers = new HttpHeaders().set(
  //     "Content-Type",
  //     "application/x-www-form-urlencoded"
  //   );
  //   this.uploadData = {
  //     file: this.myForm.value.fileSource,
  //     filename: this.newFiles.name,
  //     filepath: "public://" + this.newFiles.name,
  //   };
  //   console.log(this.uploadData)
  //   this.http
  //     .post("https://gowebtutorial.com/api/json/file/", this.uploadData)
  //     .subscribe((rest) => {
  //       (this.Picurl = rest), console.log(this.Picurl.fid);
  //     });

  // }

  newUpload() {
    this.scope = [];
    this.http
      .get("https://gowebtutorial.com/api/json/file/" + this.Picurl.fid)
      .subscribe((res) => {
        this.pictureDetail = res;
        this.pictureUrl = this.pictureDetail.uri_full;
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
        this.responseString = JSON.stringify(this.pictureUrl);
        console.log(this.responseString);
        this.http
          .put(
            "https://gowebtutorial.com/api/json/user/" + this.uid,
            {
              field_multiple: {
                und: [
                  {
                    value: this.responseString,
                  },
                ],
              },
            },
            requestOptions
          )
          .subscribe((restem) => {});
      });
  }
  async Alert() {
    const alert = await this.alertController.create({
      message: "Information to be provided",
      buttons: ["OK"],
    });

    await alert.present();
  }
  // get f(){
  //   return this.myForm.controls;
  // }

  onFileChange(event) {
    if (event.target.files && event.target.files[0]) {
      var filesAmount = event.target.files.length;

      for (let i = 0; i < filesAmount; i++) {
        var filesAmount = event.target.files.length;

        this.imageName = event.target.files[i].name;

        var reader = new FileReader();

        reader.onload = (event: any) => {
          this.images.push({ uri: event.target.result, name: this.imageName });
          this.additionalImageObject["field_additional_image_" + i] = {
            uri: event.target.result,
            name: this.imageName,
          };

          //  this.myForm.patchValue({
          //     fileSource: this.images
          //  });
        };

        reader.readAsDataURL(event.target.files[i]);
        // console.log(event.target.files[i]);
        // this.imageName.push(event.target.files[i].name);
        //   console.log(this.imageName)
        //  console.log(this.imageName)
      }

      console.log(this.additionalImageObject);
    }
  }
  _handleReaderLoaded(readerEvt) {
    var binaryString = readerEvt.target.result;
    this.base64textString = btoa(binaryString);
    // console.log(btoa(binaryString));
  }
  // submit(fileSource){
  //   console.log(this.newFiles);
  //   this.onUpload(fileSource)
  // }
}
