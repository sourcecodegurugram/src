import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { userDetailPage } from './userDetail.page';
const routes: Routes = [
  {
    path: '',
    component: userDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class userDetailPageRoutingModule {}
