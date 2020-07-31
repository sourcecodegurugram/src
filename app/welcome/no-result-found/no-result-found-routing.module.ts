import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoResultFoundPage } from './no-result-found.page';

const routes: Routes = [
  {
    path: '',
    component: NoResultFoundPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoResultFoundPageRoutingModule {}
