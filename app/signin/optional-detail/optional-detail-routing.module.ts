import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OptionalDetailPage } from './optional-detail.page';

const routes: Routes = [
  {
    path: '',
    component: OptionalDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OptionalDetailPageRoutingModule {}
