import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuccessPagePageRoutingModule } from './success-page-routing.module';
import { NavigationbarModule } from "../../../Navigation/NavigationBar/navigationbar.module";
import { SuccessPagePage } from './success-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuccessPagePageRoutingModule,
    NavigationbarModule
  ],
  declarations: [SuccessPagePage]
})
export class SuccessPagePageModule {}
