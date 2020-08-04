import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForgotpasswordPageRoutingModule } from './forgotpassword-routing.module';
import { MaterialModule } from "../../material.module";

import { ForgotpasswordPage } from './forgotpassword.page';
import { NavigationbarModule } from "../../Navigation/NavigationBar/navigationbar.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NavigationbarModule,
    MaterialModule,
    ForgotpasswordPageRoutingModule
  ],
  declarations: [ForgotpasswordPage]
})
export class ForgotpasswordPageModule {}
