import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FavoratePopupPage } from './favorate-popup.page';

const routes: Routes = [
  {
    path: '',
    component: FavoratePopupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FavoratePopupPageRoutingModule {}
