import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SigninPage } from './signin.page';

const routes: Routes = [

  {
    path: '',
    component: SigninPage
  },
  {
    path: 'nav-bar',
    loadChildren: () => import('../nav-bar/nav-bar.module').then( m => m.NavBarPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SigninPageRoutingModule {}
