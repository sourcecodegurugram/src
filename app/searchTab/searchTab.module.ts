import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchTabPageRoutingModule } from './searchTab-routing.module';
import { MaterialModule } from '../material.module';
import { SearchTabPage } from './searchTab.page';
import { NavigationbarModule } from "../navigationbar/navigationbar.module";
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaterialModule,
    SearchTabPageRoutingModule,
    NavigationbarModule
  ],
  declarations: [SearchTabPage]
})
export class SearchTabPageModule {}
