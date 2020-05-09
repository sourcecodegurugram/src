import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {NavigationbarComponent} from '../navigationbar/navigationbar.component'
import { HomePage } from './home.page';
import { Geolocation } from '@ionic-native/geolocation/ngx';

import { ReplacePipe } from '../replace.pipe';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
  
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage,ReplacePipe]
})
export class HomePageModule {}
