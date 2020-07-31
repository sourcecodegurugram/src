import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BecomeverifiedPageRoutingModule } from './becomeverified-routing.module';

import { BecomeverifiedPage } from './becomeverified.page';
import { NavigationbarModule } from "../../Navigation/NavigationBar/navigationbar.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NavigationbarModule,
    BecomeverifiedPageRoutingModule
  ],
  declarations: [BecomeverifiedPage]
})
export class BecomeverifiedPageModule {}
