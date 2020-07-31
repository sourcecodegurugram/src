import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotLoggedPopupPage } from './not-logged-popup.page';

const routes: Routes = [
  {
    path: '',
    component: NotLoggedPopupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotLoggedPopupPageRoutingModule {}
