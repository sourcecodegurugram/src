import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../../material.module';
import { IonicModule } from '@ionic/angular';

import { NewMessagePageRoutingModule } from './new-message-routing.module';
import { NavigationbarModule } from "../../../Navigation/NavigationBar/navigationbar.module";
import { NewMessagePage } from './new-message.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewMessagePageRoutingModule,
    MaterialModule,
    NavigationbarModule
  ],
  declarations: [NewMessagePage]
})
export class NewMessagePageModule {}
