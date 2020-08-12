import { Component, OnInit ,ChangeDetectorRef} from '@angular/core';
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
import { FileChooser } from "@ionic-native/file-chooser/ngx";
import { FilePath } from "@ionic-native/file-path/ngx";

@Component({
  selector: 'app-moreinfo',
  templateUrl: './moreinfo.page.html',
  styleUrls: ['./moreinfo.page.scss'],
})
export class MoreinfoPage implements OnInit {
  imageContinue: boolean = false;
  displayImage;
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
  isLoading = false;
  userData;
  userImages;
  private win: any = window;
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
  responseString: Object;
  sub: any;
  userDetails;
  fun;
  constructor( 
    private http: HttpClient,
    private _location: Location,
    private _Activatedroute: ActivatedRoute,
    private ConfigService: ConfigService,
    private router: Router,
    public alertController: AlertController,
    private fileChooser: FileChooser,
    private filePath: FilePath,
    private changeDetector: ChangeDetectorRef) { }

    ngOnInit() {


      this.sub = this._Activatedroute.paramMap.subscribe((params) => {
        this.uid = params.get("uid");
        console.log(this.uid)
      });

this.ConfigService.getUser(this.uid).subscribe((data)=>{
  this.userDetails = data
console.log(this.userDetails)

if(this.userDetails.field_do_for_fun.length == undefined)
{
  this.fun = this.userDetails.field_do_for_fun.und[0].value
}
if(this.userDetails.field_long_in_city.length == undefined)
{

  this.live = this.userDetails.field_long_in_city.und[0].value
}
if(this.userDetails.field_talk_about.length == undefined)
{

  this.talkabout = this.userDetails.field_talk_about.und[0].value
}

if(this.userDetails.field_good_friend.length == undefined)
{
 this.goodFriend =  this.userDetails.field_good_friend.und[0].value
}
if(this.userDetails.field_plans_get_cancelled.length == undefined)
{
 this.cancels =  this.userDetails.field_plans_get_cancelled.und[0].value
}
if(this.userDetails.field_relationship_status.length == undefined)
{

 this.status =  this.userDetails.field_relationship_status.und[0].value
}
if(this.userDetails.field_any_pets.length == undefined)
{

 this.pets =  this.userDetails.field_any_pets.und[0].value
}
if(this.userDetails.field_spend_your_days.length == undefined)
{
 this.spend =  this.userDetails.field_spend_your_days.und[0].value
}
if(this.userDetails.field_languages.length == undefined)
{
 this.speak =  this.userDetails.field_languages.und[0].value
}
if(this.userDetails.field_smoke.length == undefined)
{
 
 this.smoke =  this.userDetails.field_smoke.und[0].value
}

if(this.userDetails.field_alcohol.length == undefined)
{
 this.alcohol =  this.userDetails.field_alcohol.und[0].value
}
if(this.userDetails.field_favorite_books.length == undefined)
{
  this.books =  this.userDetails.field_favorite_books.und[0].value
}
if(this.userDetails.field_favorite_movies.length == undefined)
{
  this.movies =  this.userDetails.field_favorite_movies.und[0].value
}
if(this.userDetails.field_favorite_tv_shows.length == undefined)
{
  this.shows =  this.userDetails.field_favorite_tv_shows.und[0].value
}
if(this.userDetails.field_favorite_music.length == undefined)
{
  this.music =  this.userDetails.field_favorite_music.und[0].value
}
if(this.userDetails.field_you_say.length == undefined)
{
  this.anything =  this.userDetails.field_you_say.und[0].value
}


});

      this.userDetail = JSON.parse(localStorage.getItem("currentUser"));
      this.uid = this.userDetail.user.uid;
      this.ConfigService.getUser(this.uid).subscribe((userData) => {
        this.userFullDetails = userData;
      });
    }
    public tabChanged(tabChangeEvent: MatTabChangeEvent): void {
      this.selectedIndex = tabChangeEvent.index;
    }
    public nextStep() {
      this.selectedIndex += 1;
  
      // Loader at beginning of additonal image tab so that images and object are loaded
      if (this.selectedIndex == 3) {
        // Start image page routine
        this.initImagePage();
      }
    }
  
    public previousStep() {
      this.selectedIndex -= 1;
    }
  
    optionDetail(
      fun,
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
  
      console.log(talkabout)
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
      this.http
      .put(
        "https://gowebtutorial.com/api/json/user/" + this.uid,{
   
            field_long_in_city: {
              und: live,
            },
      
            field_talk_about: {
              und: talkabout,
            },
            field_do_for_fun:{
              und: fun
            },
  
          
            //  field_good_friend:
            //  {
            //     und:goodFriend
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
            field_favorite_books: { und: [ { value: books } ]},
            field_favorite_movies: { und: [ { value: movies } ]},
            field_favorite_tv_shows: { und: [ { value: shows }] },
            field_favorite_music: { und:  [ { value: music } ]},
            field_you_say: { und: [ { value: anything }] },
        },requestOptions
      ).subscribe((result) => {
        this.router.navigate(["/"])
      });
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
  
    newUpload() {
      this.scope = [];
      this.http
        .get("https://gowebtutorial.com/api/json/file/" + this.Picurl.fid)
        .subscribe((res) => {
          this.pictureDetail = res;
          this.pictureUrl = this.pictureDetail.uri_full;
        });
    }
  
    async Alert() {
      const alert = await this.alertController.create({
        message: "Information to be provided",
        buttons: ["OK"],
      });
  
      await alert.present();
    }
  
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
          };
  
          reader.readAsDataURL(event.target.files[i]);
        }
      }
    }
    _handleReaderLoaded(readerEvt) {
      var binaryString = readerEvt.target.result;
      this.base64textString = btoa(binaryString);
    }
  
    initImagePage() {
      this.isLoading = true;
  
      this.ConfigService.getUser(this.uid).subscribe((data) => {
        this.userData = data;
        this.userImages = this.userData.field_user_avatar["und"];
        console.log(this.userImages);
        this.isLoading = false;
        this.changeDetector.detectChanges();
      });
    }
  
    filechooser() {
      this.fileChooser.open().then((fileuri) => {
        this.isLoading = true;
  
        let imagePath = this.win.Ionic.WebView.convertFileSrc(fileuri);
        this.displayImage = imagePath;
  
        this.filePath.resolveNativePath(fileuri).then((filePath) => {
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
                } else if (base64data.includes("data:image/png;base64,")) {
                  let timestamp = Math.floor(Date.now() / 1000);
                  this.fileName =
                    this.name + "_profile_image_" + timestamp + ".png";
  
                  //Base 64 string
                  let removeString = "data:image/png;base64,";
                  this.base64textString = base64data.replace(removeString, "");
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
          this.postNewImage(this.Picurl);
        });
    }
  
    postNewImage(pictureObject) {
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
  
      let index;
      if (this.userImages) {
        index = this.userImages.length;
      } else {
        this.userImages = [];
        index = 0;
      }
  
      this.responseString = {
        field_user_avatar: {
          und: [],
        },
      };
  
      this.responseString["field_user_avatar"]["und"] = this.userImages;
      this.responseString["field_user_avatar"]["und"][index] = pictureObject;
  
      console.log(this.responseString);
      this.http
        .put(
          "https://gowebtutorial.com/api/json/user/" + this.uid,
          this.responseString,
          requestOptions
        )
        .subscribe((result) => {
          console.log("posted image " + result);
  
          this.initImagePage();
        });
    }
  }
  