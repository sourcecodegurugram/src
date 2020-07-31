import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewchatsupportPage } from './newchatsupport.page';

const routes: Routes = [
  {
    path: '',
    component: NewchatsupportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewchatsupportPageRoutingModule {}
