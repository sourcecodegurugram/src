import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PayPalPageRoutingModule } from './pay-pal-routing.module';

import { PayPalPage } from './pay-pal.page';
import { NavigationbarModule } from "../../Navigation/NavigationBar/navigationbar.module";
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NavigationbarModule,
    PayPalPageRoutingModule
  ],
  declarations: [PayPalPage]
})
export class PayPalPageModule {}
