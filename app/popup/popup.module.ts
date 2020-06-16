import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { IonicModule } from '@ionic/angular';

import { PopupPageRoutingModule } from './popup-routing.module';

import { PopupPage } from './popup.page';
import { NavigationbarModule } from "../navigationbar/navigationbar.module";
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PopupPageRoutingModule,
    MaterialModule,
    NavigationbarModule
  ],
  declarations: [PopupPage]
})
export class PopupPageModule {}
