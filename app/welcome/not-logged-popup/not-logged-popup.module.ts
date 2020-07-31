import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotLoggedPopupPageRoutingModule } from './not-logged-popup-routing.module';

import { NotLoggedPopupPage } from './not-logged-popup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotLoggedPopupPageRoutingModule
  ],
  declarations: [NotLoggedPopupPage]
})
export class NotLoggedPopupPageModule {}
