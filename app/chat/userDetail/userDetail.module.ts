import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../material.module';
import { IonicModule } from '@ionic/angular';

import { userDetailPageRoutingModule } from './userDetail-routing.module';

import { userDetailPage } from './userDetail.page';
import { NavigationbarModule } from "../../Navigation/NavigationBar/navigationbar.module";
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    userDetailPageRoutingModule,
    MaterialModule,
    NavigationbarModule
  ],
  declarations: [userDetailPage]
})
export class userDetailPageModule {}
