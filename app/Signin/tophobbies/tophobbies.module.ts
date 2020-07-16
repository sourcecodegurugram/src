import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TophobbiesPageRoutingModule } from './tophobbies-routing.module';

import { TophobbiesPage } from './tophobbies.page';
import { NavigationbarModule } from "../../Navigation/NavigationBar/navigationbar.module";
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TophobbiesPageRoutingModule,
    NavigationbarModule ,
  ],
  declarations: [TophobbiesPage]
})
export class TophobbiesPageModule {}
