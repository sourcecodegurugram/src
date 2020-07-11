import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BlockedusersPageRoutingModule } from './blockedusers-routing.module';
import {NavigationbarModule} from '../NavigationBar/navigationbar.module';
import { BlockedusersPage } from './blockedusers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NavigationbarModule,
    BlockedusersPageRoutingModule
  ],
  declarations: [BlockedusersPage]
})
export class BlockedusersPageModule {}
