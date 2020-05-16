import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import { IonicModule } from '@ionic/angular';
import { MaterialModule } from '../material.module';
import { SignupPageRoutingModule } from './signup-routing.module';

import { SignupPage } from './signup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignupPageRoutingModule,
    MaterialModule,
    MatTableModule,
    MatTabsModule
  ],
  declarations: [SignupPage]
})
export class SignupPageModule {}
