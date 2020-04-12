import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocationTargettingPage } from './location-targetting.page';

const routes: Routes = [
  {
    path: '',
    component: LocationTargettingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocationTargettingPageRoutingModule {}
