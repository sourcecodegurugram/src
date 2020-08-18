import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrialOverPageRoutingModule } from './trial-over-routing.module';

import { TrialOverPage } from './trial-over.page';
import { NavigationbarModule } from "../../Navigation/NavigationBar/navigationbar.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NavigationbarModule,
    TrialOverPageRoutingModule
  ],
  declarations: [TrialOverPage]
})
export class TrialOverPageModule {}
