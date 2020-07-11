import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavoriteUsersPageRoutingModule } from './FavoriteUsers-routing.module';
import { NavigationbarModule } from "../../Navigati../../Navigation/NavigationBar/navigationbar.module";
import { FavoriteUsersPage } from './FavoriteUsers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavoriteUsersPageRoutingModule,
    NavigationbarModule 
  ],
  declarations: [FavoriteUsersPage]
})
export class FavoriteUsersPageModule {}
