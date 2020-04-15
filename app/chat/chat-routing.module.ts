import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { ChatPage } from './chat.page';

const routes: Routes = [
  {
    path: '',
    component: ChatPage,
    children:[
      {path: 'searchTab',
      loadChildren: () => import('../searchTab/searchTab.module').then( m => m.SearchTabPageModule)},
      {
        path: 'tabs2',
        loadChildren: () => import('../tabs2/tabs2.module').then( m => m.Tabs2PageModule)
      },
        { path: 'tabs3', loadChildren: '../app/tabs3/tabs3.module#Tabs3PageModule'}
    ]
  },
  {
    path: '',
    redirectTo: '/searchTab',
    pathMatch: 'full'
  },
  {
    path: 'chat',
    component: ChatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), IonicModule,],
  exports: [RouterModule],
})
export class ChatPageRoutingModule {}
