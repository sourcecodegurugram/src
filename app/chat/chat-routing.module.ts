import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { ChatPage } from './chat.page';

const routes: Routes = [
  {
    path: '',
    component: ChatPage,
    children:[
      {path: 'searchUser',
      loadChildren: () => import('./searchUser/searchUser.module').then( m => m.searchUserPageModule)},
      {
        path: 'ChatsThreadListing',
        loadChildren: () => import('./ChatsThreadListing/ChatsThreadListing.module').then( m => m.ChatsThreadListingPageModule)
      },
        { path: 'FavoriteUsers',
        loadChildren: () => import('./FavoriteUsers/FavoriteUsers.module').then( m => m.FavoriteUsersPageModule)}
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
