import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { WelcomePageRoutingModule } from './welcome-routing.module';
import { MaterialModule } from '../material.module';
import { WelcomePage } from './welcome.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WelcomePageRoutingModule,
    MaterialModule,
   
  ],
  declarations: [WelcomePage]
})
export class WelcomePageModule {}
