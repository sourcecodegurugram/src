import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LocationTargettingPageRoutingModule } from './location-targetting-routing.module';
import { LocationTargettingPage } from './location-targetting.page';
import { MaterialModule } from '../material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LocationTargettingPageRoutingModule,
    MaterialModule,
    
  ],
  declarations: [LocationTargettingPage]
})
export class LocationTargettingPageModule {}
