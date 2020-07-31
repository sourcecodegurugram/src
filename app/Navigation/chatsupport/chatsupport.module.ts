import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatsupportPageRoutingModule } from './chatsupport-routing.module';

import { ChatsupportPage } from './chatsupport.page';
import { NavigationbarModule } from "../../Navigation/NavigationBar/navigationbar.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NavigationbarModule,
    ChatsupportPageRoutingModule
  ],
  declarations: [ChatsupportPage]
})
export class ChatsupportPageModule {}
