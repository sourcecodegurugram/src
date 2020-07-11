import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../material.module';
import { IonicModule } from '@ionic/angular';

import { ChatsThreadListingPageRoutingModule } from './ChatsThreadListing-routing.module';
import { NavigationbarModule } from "../../Navigati../../Navigation/NavigationBar/navigationbar.module";
import { ChatsThreadListingPage } from './ChatsThreadListing.page';
import {CustomDatePipe} from '../../custom.datepipe';
import {YearDatePipe} from "../../year.datepipe"
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatsThreadListingPageRoutingModule,
    MaterialModule,
    NavigationbarModule
  ],
  declarations: [ChatsThreadListingPage,CustomDatePipe,YearDatePipe]
})
export class ChatsThreadListingPageModule {}
