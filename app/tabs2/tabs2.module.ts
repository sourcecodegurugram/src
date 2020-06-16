import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { IonicModule } from '@ionic/angular';

import { Tabs2PageRoutingModule } from './tabs2-routing.module';
import { NavigationbarModule } from "../navigationbar/navigationbar.module";
import { Tabs2Page } from './tabs2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tabs2PageRoutingModule,
    MaterialModule,
    NavigationbarModule
  ],
  declarations: [Tabs2Page]
})
export class Tabs2PageModule {}
