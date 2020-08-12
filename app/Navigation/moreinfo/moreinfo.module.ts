import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { NavigationbarModule } from "../../Navigation/NavigationBar/navigationbar.module";

import { MoreinfoPageRoutingModule } from './moreinfo-routing.module';
import { MaterialModule } from "../../material.module";
import { MoreinfoPage } from './moreinfo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoreinfoPageRoutingModule,
    MaterialModule,
    NavigationbarModule 
  ],
  declarations: [MoreinfoPage]
})
export class MoreinfoPageModule {}
