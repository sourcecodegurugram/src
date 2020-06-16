import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchResultPageRoutingModule } from './search-result-routing.module';
import { EllipsisPipe } from '../../ellipsis.pipe';
import { SearchResultPage } from './search-result.page';
import { NavigationbarModule } from "../navigationbar/navigationbar.module";
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchResultPageRoutingModule,
    NavigationbarModule
  ],
  declarations: [SearchResultPage,  ]
})
export class SearchResultPageModule {}
