import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { ChatPage } from './chat.page';

const routes: Routes = [
  {
    path: '',
    component: ChatPage,
    children:[
        { path: 'searchTab', loadChildren: '../searchTab/searchTab.module#SearchTabPageModule'},
        { path: 'tabs2', loadChildren: '../tabs2/tabs2.module#Tabs2PageModule' },
        { path: 'tabs3', loadChildren: '../app/tabs3/tabs3.module#Tabs3PageModule'}
    ]
  },
  {
    path: '',
    redirectTo: '/searchTab',
    pathMatch: 'full'
  },
  {
    path: '',
   
    component: ChatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), IonicModule,],
  exports: [RouterModule],
})
export class ChatPageRoutingModule {}
