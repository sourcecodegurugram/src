import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'location-targetting',
    loadChildren: () => import('./location-targetting/location-targetting.module').then( m => m.LocationTargettingPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'searchTab',
    loadChildren: () => import('./searchTab/searchTab.module').then( m => m.SearchTabPageModule)
  },
  {
    path: 'tabs2',
    loadChildren: () => import('./tabs2/tabs2.module').then( m => m.Tabs2PageModule)
  },
  {
    path: 'tabs3',
    loadChildren: () => import('./tabs3/tabs3.module').then( m => m.Tabs3PageModule)
  },
  {
    path: 'personal-chat',
    loadChildren: () => import('./personal-chat/personal-chat.module').then( m => m.PersonalChatPageModule)
  },
  {
    path: 'notificationchat',
    loadChildren: () => import('./notificationchat/notificationchat.module').then( m => m.NotificationchatPageModule)
  },
  {
    path: 'search-result',
    loadChildren: () => import('./search-result/search-result.module').then( m => m.SearchResultPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
