import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import { IonicModule } from '@ionic/angular';
import { MaterialModule } from '../../material.module';


import { OptionalDetailPageRoutingModule } from './optional-detail-routing.module';

import { OptionalDetailPage } from './optional-detail.page';
import { NavigationbarModule } from "../../Navigation/NavigationBar/navigationbar.module";
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OptionalDetailPageRoutingModule,
    MatTableModule,
    MatTabsModule,
    MaterialModule,
    NavigationbarModule


  ],
  declarations: [OptionalDetailPage]
})
export class OptionalDetailPageModule {}
