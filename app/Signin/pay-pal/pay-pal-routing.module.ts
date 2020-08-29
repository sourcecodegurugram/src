import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PayPalPage } from './pay-pal.page';

const routes: Routes = [
  {
    path: '',
    component: PayPalPage
  },
  {
    path: 'success-page',
    loadChildren: () => import('../../Signin/pay-pal/success-page/success-page.module').then( m => m.SuccessPagePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PayPalPageRoutingModule {}
