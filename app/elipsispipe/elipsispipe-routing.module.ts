import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ElipsispipePage } from './elipsispipe.page';

const routes: Routes = [
  {
    path: '',
    component: ElipsispipePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElipsispipePageRoutingModule {}
