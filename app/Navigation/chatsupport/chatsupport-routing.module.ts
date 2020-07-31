import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatsupportPage } from './chatsupport.page';

const routes: Routes = [
  {
    path: '',
    component: ChatsupportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatsupportPageRoutingModule {}
