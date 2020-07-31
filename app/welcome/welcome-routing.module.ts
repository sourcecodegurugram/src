import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomePage } from './welcome.page';
import {SignupPageModule} from '../signup/signup.module';

const routes: Routes = [
  {
    path: '',
    component: WelcomePage
  },
  {
    path: 'signin',
    redirectTo: '/signin',
    pathMatch: 'full'
  },
  {
    path: 'no-result-found',
    loadChildren: () => import('./no-result-found/no-result-found.module').then( m => m.NoResultFoundPageModule)
  },
  {
    path: 'not-logged-popup',
    loadChildren: () => import('./not-logged-popup/not-logged-popup.module').then( m => m.NotLoggedPopupPageModule)
  },
 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WelcomePageRoutingModule {}
