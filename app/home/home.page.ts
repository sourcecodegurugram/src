import { Component } from '@angular/core';
import {ConfigService} from '../config.service'
import { config } from '../config';
import { environment } from '../../environments/environment';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
data:any;
post:any;
  title: any;
  postcodeCoordinates: any;
  longitude: any;
  return: any;
  constructor(    private Configservice: ConfigService) {

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
