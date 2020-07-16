import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FindFriendsPageRoutingModule } from './find-friends-routing.module';

import { FindFriendsPage } from './find-friends.page';
import { NavigationbarModule } from "../../Navigation/NavigationBar/navigationbar.module";
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FindFriendsPageRoutingModule,NavigationbarModule
  ],
  exports: [FindFriendsPage],
  declarations: [FindFriendsPage] 

})
export class FindFriendsPageModule {}
