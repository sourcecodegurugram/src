import { Component } from '@angular/core';
import {ConfigService} from '../config.service'
import { config } from '../config';
import { environment } from '../../environments/environment';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { element } from 'protractor';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import {Platform} from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
data:any;
post:any;
  title: any;
  postcode: any;
  longitude: any;
  return: any;
  uid: any;
  postse: Object;
  postman: Object;
  picture: any;
  Pet: any;
  showmore:boolean= true;
  constructor(    private Configservice: ConfigService,
    private geolocation: Geolocation,
    private Platform : Platform) {

    }
    ngOnInit() {

     
      this.geolocation.getCurrentPosition().then((resp) => {
        console.log("latitude" + resp.coords.latitude);
        console.log("longitude" +resp.coords.longitude);
       }).catch((error) => {
         console.log('Error getting location', error);
       });
       
       let watch = this.geolocation.watchPosition();
       watch.subscribe((data) => {
        // data can be a set of coordinates, or an error (if an error occurred).
        console.log("conlatitude" + data.coords.latitude);
        console.log("conlongitude" + data.coords.longitude);
        console.log(data.coords);
       });

    

      this.Configservice.getArticle()
      .subscribe(data => {
        console.log(this.uid)
      });

      this.Configservice.getHobbies()
      .subscribe(element=> {
        this.postse = element;
       console.log(element)

   
      });
     
      
    }
    
test()
{
  this.Configservice.getArticle()
        .subscribe(data => {
          this.post = data;
         console.log(this.post)
        });
}
}
