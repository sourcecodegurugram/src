import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterPageRoutingModule } from './register-routing.module';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import { RegisterPage } from './register.page';
import { MaterialModule } from '../material.module';
import { RecaptchaModule } from 'ng-recaptcha';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterPageRoutingModule,
    MaterialModule,
    MatTableModule,
    MatTabsModule,
    RecaptchaModule.forRoot(),
  ],
  declarations: [RegisterPage]
})
export class RegisterPageModule {}
