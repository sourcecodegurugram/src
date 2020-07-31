import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BecomeverifiedPage } from './becomeverified.page';

const routes: Routes = [
  {
    path: '',
    component: BecomeverifiedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BecomeverifiedPageRoutingModule {}
