import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotificationchatPageRoutingModule } from './notificationchat-routing.module';

import { NotificationchatPage } from './notificationchat.page';
import { NavigationbarModule } from "../../../Navigation/NavigationBar/navigationbar.module";
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotificationchatPageRoutingModule,
    NavigationbarModule
  ],
  declarations: [NotificationchatPage]
})
export class NotificationchatPageModule {}
