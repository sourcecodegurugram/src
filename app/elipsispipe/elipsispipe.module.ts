import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ElipsispipePageRoutingModule } from './elipsispipe-routing.module';

import { ElipsispipePage } from './elipsispipe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ElipsispipePageRoutingModule
  ],
  declarations: [ElipsispipePage]
})
export class ElipsispipePageModule {}
