import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoResultFoundPageRoutingModule } from './no-result-found-routing.module';

import { NoResultFoundPage } from './no-result-found.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoResultFoundPageRoutingModule
  ],
  exports:[NoResultFoundPage],
  declarations: [NoResultFoundPage]
})
export class NoResultFoundPageModule {}
