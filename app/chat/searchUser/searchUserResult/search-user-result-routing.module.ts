import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchUserResultPage } from './search-user-result.page';

const routes: Routes = [
  {
    path: '',
    component: SearchUserResultPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchUserResultPageRoutingModule {}
