import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrialOverPage } from './trial-over.page';

const routes: Routes = [
  {
    path: '',
    component: TrialOverPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrialOverPageRoutingModule {}
