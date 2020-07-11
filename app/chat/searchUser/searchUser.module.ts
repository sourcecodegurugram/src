import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchUserPageRoutingModule } from './searchUser-routing.module';
import { MaterialModule } from '../../material.module';
import { SearchUserPage } from './SearchUser.page';
import { NavigationbarModule } from "../../Navigati../../Navigation/NavigationBar/navigationbar.module";
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaterialModule,
    SearchUserPageRoutingModule,
    NavigationbarModule
  ],
  declarations: [SearchUserPage]
})
export class searchUserPageModule {}
