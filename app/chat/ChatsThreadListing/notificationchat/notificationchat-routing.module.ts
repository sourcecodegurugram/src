import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotificationchatPage } from './notificationchat.page';

const routes: Routes = [
  {
    path: '',
    component: NotificationchatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotificationchatPageRoutingModule {}
