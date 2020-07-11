import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatsThreadListingPage } from './ChatsThreadListing.page';

const routes: Routes = [
  {
    path: '',
    component: ChatsThreadListingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatsThreadListingPageRoutingModule {}
