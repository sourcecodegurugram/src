import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewchatsupportPageRoutingModule } from './newchatsupport-routing.module';
import { MaterialModule } from '../../material.module';

import { NewchatsupportPage } from './newchatsupport.page';
import { NavigationbarModule } from "../../Navigation/NavigationBar/navigationbar.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,NavigationbarModule,MaterialModule,
    NewchatsupportPageRoutingModule
  ],
  declarations: [NewchatsupportPage]
})
export class NewchatsupportPageModule {}
