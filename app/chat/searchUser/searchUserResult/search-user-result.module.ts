import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { MaterialModule } from '../../../material.module';
import { SearchUserResultPageRoutingModule } from './search-user-result-routing.module';
import { NavigationbarModule } from "../../../Navigation/NavigationBar/navigationbar.module";
import { SearchUserResultPage } from './search-user-result.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NavigationbarModule,
    MaterialModule ,
    SearchUserResultPageRoutingModule
  ],
  exports:[SearchUserResultPage],
  declarations: [SearchUserResultPage]
})
export class SearchUserResultPageModule {}
