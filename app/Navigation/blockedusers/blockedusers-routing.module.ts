import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlockedusersPage } from './blockedusers.page';

const routes: Routes = [
  {
    path: '',
    component: BlockedusersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlockedusersPageRoutingModule {}
