import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { IonicModule } from '@ionic/angular';

import { FavoratePopupPageRoutingModule } from './favorate-popup-routing.module';

import { FavoratePopupPage } from './favorate-popup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavoratePopupPageRoutingModule,
    MaterialModule
  ],
  declarations: [FavoratePopupPage]
})
export class FavoratePopupPageModule {}
