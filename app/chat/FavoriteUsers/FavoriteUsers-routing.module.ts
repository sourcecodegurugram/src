import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FavoriteUsersPage } from './FavoriteUsers.page';

const routes: Routes = [
  {
    path: '',
    component: FavoriteUsersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FavoriteUsersPageRoutingModule {}
